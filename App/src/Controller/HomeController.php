<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController {


    public function index() : Response{

        return $this->render('pages/home.html.twig', [

        ]);
    }


    /**
     * changement de la langue
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