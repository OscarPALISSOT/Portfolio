<?php

namespace App\Entity;

use App\Repository\ExperiencesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ExperiencesRepository::class)]
class Experiences
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $Experience_fr;

    #[ORM\Column(type: 'string', length: 255)]
    private $Experience_en;

    #[ORM\Column(type: 'string', length: 255)]
    private $ExperienceSubTitle_fr;

    #[ORM\Column(type: 'string', length: 255)]
    private $ExperienceSubTitle_en;

    #[ORM\Column(type: 'text')]
    private $ExperienceDescription_fr;

    #[ORM\Column(type: 'text')]
    private $ExperienceDescription_en;

    #[ORM\Column(type: 'datetime_immutable')]
    private $created_at;


    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getExperienceFr(): ?string
    {
        return $this->Experience_fr;
    }

    public function setExperienceFr(string $Experience_fr): self
    {
        $this->Experience_fr = $Experience_fr;

        return $this;
    }

    public function getExperienceEn(): ?string
    {
        return $this->Experience_en;
    }

    public function setExperienceEn(string $Experience_en): self
    {
        $this->Experience_en = $Experience_en;

        return $this;
    }

    public function getExperienceSubTitleFr(): ?string
    {
        return $this->ExperienceSubTitle_fr;
    }

    public function setExperienceSubTitleFr(string $ExperienceSubTitle_fr): self
    {
        $this->ExperienceSubTitle_fr = $ExperienceSubTitle_fr;

        return $this;
    }

    public function getExperienceSubTitleEn(): ?string
    {
        return $this->ExperienceSubTitle_en;
    }

    public function setExperienceSubTitleEn(string $ExperienceSubTitle_en): self
    {
        $this->ExperienceSubTitle_en = $ExperienceSubTitle_en;

        return $this;
    }

    public function getExperienceDescriptionFr(): ?string
    {
        return $this->ExperienceDescription_fr;
    }

    public function setExperienceDescriptionFr(string $ExperienceDescription_fr): self
    {
        $this->ExperienceDescription_fr = $ExperienceDescription_fr;

        return $this;
    }

    public function getExperienceDescriptionEn(): ?string
    {
        return $this->ExperienceDescription_en;
    }

    public function setExperienceDescriptionEn(string $ExperienceDescription_en): self
    {
        $this->ExperienceDescription_en = $ExperienceDescription_en;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }
}
