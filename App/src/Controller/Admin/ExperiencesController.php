<?php

namespace App\Controller\Admin;

use App\Entity\Experiences;
use App\Form\ExperiencesFormType;
use App\Repository\ExperiencesRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

class ExperiencesController extends AbstractController
{
    public function __construct(ExperiencesRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * @Route ("/Admin/Experiences", name="gestion_experiences")
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    public function ShowExperience(PaginatorInterface $paginator, Request $request): Response
    {

        $experiences = $paginator->paginate(
            $this->repository->findBy(array(), array('created_at' => 'DESC')),
            $request->query->getInt('page', 1),
            12
        );

        return $this->render('admin/Experiences/showExperience.html.twig', [
            'experiences' => $experiences,
            'loggedUser' => $this->getUser(),
        ]);
    }

    /**
     * @Route ("/Admin/NouveauExperience", name="create_experience")
     * @return Response
     */
    public function createExperience(Request $request, ManagerRegistry $entityManager){

        $experience = new Experiences;
        $form = $this->createForm(ExperiencesFormType::class, $experience);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $entityManager->getManager()->persist($experience);
            $entityManager->getManager()->flush();
            return $this->redirectToRoute('gestion_experiences');
        }
        return $this->render('admin/Experiences/CreateExperience.html.twig', [
            'experience' => $experience,
            'loggedUser' => $this->getUser(),
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route ("/Admin/Experiences/{id}", name="edit_experience")
     * @return Response
     */
    public function editExperience(Experiences $experience, Request $request, ManagerRegistry $entityManager){
        $form = $this->createForm(ExperiencesFormType::class, $experience);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $entityManager->getManager()->flush();
            return $this->redirectToRoute('gestion_experiences');
        }
        return $this->render('admin/Experiences/EditExperience.html.twig', [
            'experience' => $experience,
            'loggedUser' => $this->getUser(),
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route ("/Admin/Experience/Delete/{id}", name="delete_experience")
     * @return Response
     */
    public function deleteExperience(Experiences $experience, Request $request, ManagerRegistry $entityManager){

        if ($this->isCsrfTokenValid("delete", $request->get('_token'))){
            $entityManager->getManager()->remove($experience);
            $entityManager->getManager()->flush();
        }

        return $this->redirectToRoute('gestion_experiences');
    }

}