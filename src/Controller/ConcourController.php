<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConcourController extends AbstractController
{
    /**
     * @Route("/concour", name="app_concours")
     */
    public function index(): Response
    {
        return $this->render('concour/index.html.twig');
    }

    /**
     * @Route("/concourSection1", name="app_concour")
     */
    public function Section1(): Response
    {
        return $this->render('concour/concour.html.twig');
    }
}
