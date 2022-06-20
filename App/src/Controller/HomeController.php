<?php

namespace App\Controller;

use App\Repository\SkillsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController {


    public function __construct(SkillsRepository $skillsRepository)
    {
        $this->skillRepository = $skillsRepository;
    }

    public function index() : Response{

        $skills = $this->skillRepository->findAll();

        return $this->render('pages/home.html.twig', [
            'skills' => $skills,
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