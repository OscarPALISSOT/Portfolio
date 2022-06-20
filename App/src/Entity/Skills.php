<?php

namespace App\Entity;

use App\Repository\SkillsRepository;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SkillsRepository::class)]
class Skills
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $skill_fr;

    #[ORM\Column(type: 'string', length: 255)]
    private $skill_en;

    #[ORM\Column(type: 'string', length: 255)]
    private $subTitleSkill_fr;

    #[ORM\Column(type: 'string', length: 255)]
    private $subTitleSkill_en;

    #[ORM\Column(type: 'string', length: 255)]
    private $skillIcon;

    #[ORM\Column(type: 'text')]
    private $skillDescription_fr;

    #[ORM\Column(type: 'text')]
    private $skillDescription_en;

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

    public function getSkillFr(): ?string
    {
        return $this->skill_fr;
    }

    public function setSkillFr(string $skill_fr): self
    {
        $this->skill_fr = $skill_fr;

        return $this;
    }

    public function getSkillEn(): ?string
    {
        return $this->skill_en;
    }

    public function setSkillEn(string $skill_en): self
    {
        $this->skill_en = $skill_en;

        return $this;
    }

    public function getSubTitleSkillFr(): ?string
    {
        return $this->subTitleSkill_fr;
    }

    public function setSubTitleSkillFr(string $subTitleSkill_fr): self
    {
        $this->subTitleSkill_fr = $subTitleSkill_fr;

        return $this;
    }

    public function getSubTitleSkillEn(): ?string
    {
        return $this->subTitleSkill_en;
    }

    public function setSubTitleSkillEn(string $subTitleSkill_en): self
    {
        $this->subTitleSkill_en = $subTitleSkill_en;

        return $this;
    }

    public function getSkillIcon(): ?string
    {
        return $this->skillIcon;
    }

    public function setSkillIcon(string $skillIcon): self
    {
        $this->skillIcon = $skillIcon;

        return $this;
    }

    public function getSkillDescriptionFr(): ?string
    {
        return $this->skillDescription_fr;
    }

    public function setSkillDescriptionFr(string $skillDescription_fr): self
    {
        $this->skillDescription_fr = $skillDescription_fr;

        return $this;
    }

    public function getSkillDescriptionEn(): ?string
    {
        return $this->skillDescription_en;
    }

    public function setSkillDescriptionEn(string $skillDescription_en): self
    {
        $this->skillDescription_en = $skillDescription_en;

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
