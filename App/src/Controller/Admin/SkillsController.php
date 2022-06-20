<?php

namespace App\Controller\Admin;

use App\Entity\Skills;
use App\Form\SkillFormType;
use App\Repository\SkillsRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SkillsController extends AbstractController
{
    public function __construct(SkillsRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * @Route ("/Admin/Skills", name="gestion_skills")
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    public function ShowSkill(PaginatorInterface $paginator, Request $request): Response
    {

        $skills = $paginator->paginate(
            $this->repository->findBy(array(), array('created_at' => 'DESC')),
            $request->query->getInt('page', 1),
            12
        );

        return $this->render('admin/skills/ShowSkills.html.twig', [
            'skills' => $skills,
            'loggedUser' => $this->getUser(),
        ]);
    }

    /**
     * @Route ("/Admin/NouveauSkill", name="create_skill")
     * @return Response
     */
    public function createSkill(Request $request, ManagerRegistry $entityManager){

        $skill = new Skills;
        $form = $this->createForm(SkillFormType::class, $skill);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $entityManager->getManager()->persist($skill);
            $entityManager->getManager()->flush();
            return $this->redirectToRoute('gestion_skills');
        }
        return $this->render('admin/skills/CreateSkill.html.twig', [
            'skill' => $skill,
            'loggedUser' => $this->getUser(),
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route ("/Admin/Skills/{id}", name="edit_skill")
     * @return Response
     */
    public function editSkill(Skills $skill, Request $request, ManagerRegistry $entityManager){
        $form = $this->createForm(SkillFormType::class, $skill);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $entityManager->getManager()->flush();
            return $this->redirectToRoute('gestion_skills');
        }
        return $this->render('admin/skills/EditSkill.html.twig', [
            'skill' => $skill,
            'loggedUser' => $this->getUser(),
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route ("/Admin/Skill/{id}", name="delete_skill", methods="DELETE")
     * @return Response
     */
    public function deleteSkill(Skills $skill, Request $request, ManagerRegistry $entityManager){

        if ($this->isCsrfTokenValid("delete", $request->get('_token'))){
            $entityManager->getManager()->remove($skill);
            $entityManager->getManager()->flush();
        }

        return $this->redirectToRoute('gestion_skills');
    }

}