<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class mainController extends AbstractController {


    public function index() : Response{

        return $this->render('pages/main.html.twig', [

        ]);
    }


}
?>