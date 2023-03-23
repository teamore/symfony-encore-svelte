<?php

namespace App\Controller;

use App\Security\JwtAuthenticator;
use JMS\Serializer\Serializer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\VarDumper\VarDumper;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{location}", name="fe_routing", requirements={"location"="^(?!/*auth|api|upload).+"}, priority=-1, defaults={"location": ""})
     */
    public function index(Request $request, TokenStorageInterface $tokenStorage, JwtAuthenticator $authenticator, SerializerInterface $serializer, string $location = '')
    {
        $parameterBag = $request->query->all();

        $user = $tokenStorage->getToken();
        if ($user) {
            $parameterBag['user'] = json_decode($serializer->serialize($user->getUser(), 'json', ['groups' => 'edit']));
            $parameterBag['user']->id = $user->getUser()->getId();
            $parameterBag['token'] = $authenticator->getCredentials($request);
        }
        $parameterBag['location'] = $location;
        $encodedParameters = json_encode($parameterBag);
        return $this->render('default/index.html.twig', ["parameters" => $parameterBag, "encodedParameters" => $encodedParameters]);
    }
}