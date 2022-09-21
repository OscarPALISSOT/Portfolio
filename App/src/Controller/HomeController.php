<?php

namespace App\Controller;

use App\Entity\Experiences;
use App\Repository\ExperiencesRepository;
use App\Repository\SkillsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController {


    public function __construct(SkillsRepository $skillsRepository, ExperiencesRepository $experiencesRepository)
    {
        $this->skillRepository = $skillsRepository;
        $this->experiencesRepository = $experiencesRepository;
    }

    public function index() : Response{

        $skills = $this->skillRepository->findAll();
        $experiences = $this->experiencesRepository->findAll();

        return $this->render('pages/home.html.twig', [
            'skills' => $skills,
            'experiences' => $experiences,
        ]);
    }


    /**
     * Changement de la langue
     * @Route ("/Experience/{id}", name="experience")
     * @param Experiences $experience
     * @param Request $request
     * @return Response
     */
    public function Experience(Experiences $experience, Request $request) : Response{

        return $this->render('pages/showExperience.html.twig', [
            'experience' => $experience,
        ]);
    }


    /**
     * Changement de la langue
     * @route("/change-locale/{locale}", name="ChangeLocale")
     * @param $locale
     * @param Request $request
     * @return Response
     */
    public function ChangeLocale($locale, Request $request) : Response{

        $request->getSession()->set('_locale', $locale);

        return $this->redirect($request->headers->get('referer'));
    }


}