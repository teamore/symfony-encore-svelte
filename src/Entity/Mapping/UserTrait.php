<?php


namespace App\Entity\Mapping;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation as Serializer;
use Gedmo\Mapping\Annotation as Gedmo;

use Symfony\Component\Validator\Constraints as Assert;


trait UserTrait
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(name="id", type="integer", options={"unsigned"=true})
     * @Groups ({"admin", "list", "detail"})
     *
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups ({"admin", "list", "detail", "edit"})
     *
     * @Assert\NotBlank(message = "must not be blank")
     * @Assert\Length(min=3, max=180, minMessage = "too short", maxMessage = "too long")
     * @Assert\Email(message = "not a valid email")
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Groups ({"admin"})
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string", length=180)
     * @Groups ({"admin"})
     *
     * @Assert\NotBlank(message = "must not be blank")
     * @Assert\Length(min=6, max=180, minMessage = "too short", maxMessage = "too long")
     */
    private $password;

    /**
     * @var string The display name
     * @ORM\Column(type="string", length=40, unique=false, nullable=true)
     * @Groups ({"admin", "detail", "list", "edit"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=60, nullable=true)
     * @Groups ({"admin", "detail", "list", "edit"})
     */
    private $company;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     * @Groups ({"admin", "detail", "list", "edit"})
     */
    private $position;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups ({"admin", "detail", "list", "edit"})
     */
    private $bio;

    /**
     * @ORM\Column(name="image", type="string", length=250, nullable=true, options={"comment":"uploaded_file"})
     * @Groups ({"admin", "detail", "list", "edit"})
     */
    private $image;

    public function __construct()
    {
    }
}