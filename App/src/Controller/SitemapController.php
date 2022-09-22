<?php

namespace App\Controller;

use App\Repository\ExperiencesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class SitemapController extends AbstractController
{

    public function __construct(Environment $twig, ExperiencesRepository $experiencesRepository)
    {
        $this->twig = $twig;
        $this->experiencesRepository = $experiencesRepository;
    }


    /**
     * @Route("/sitemap.xml", name="sitemap", defaults={"_format"="xml"})
     */
    public function index(Request $request): Response
    {

        // Nous récupérons le nom d'hôte depuis l'URL
        $hostname = $request->getSchemeAndHttpHost();

        // On initialise un tableau pour lister les URLs
        $urls = [];

        $urls[] = ['loc' => $this->generateUrl('home')];

        //ajout des urls dynamiques

        $exps = $this->experiencesRepository->findAll();
        foreach ( $exps as $exp) {
            $urls[] = [
                'loc' => $this->generateUrl('experience', [
                    'id' => $exp->getId(),
                ]),
                'lastmod' => $exp->getUpdatedAt()->format('Y-m-d'),
            ];
        }

        $response = new Response(
            $this->renderView('sitemap.html.twig', ['urls' => $urls,
                'hostname' => $hostname]),
            200
        );

        // Ajout des entêtes
        $response->headers->set('Content-Type', 'text/xml');

        // On envoie la réponse
        return $response;
    }
}