<?php

namespace App\Entity;

use App\Repository\ExperiencesRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: ExperiencesRepository::class)]
/**
 * @Vich\Uploadable
 */
class Experiences
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    /**
     * @var string|null
     */
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $filename;

    /**
     * @var \Symfony\Component\HttpFoundation\File\File|null
     * @Assert\Image(
     *     mimeTypes="image/jpeg"
     * )
     * @Vich\UploadableField(mapping="experiences", fileNameProperty="filename")
     */
    private $imageFile;

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

    #[ORM\Column(type: 'datetime_immutable')]
    private $updated_at;


    public function __construct()
    {
        $this->created_at = new \DateTimeImmutable();
        $this->updated_at = new \DateTimeImmutable();
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

    /**
     * @return string|null
     */
    public function getFilename(): ?string
    {
        return $this->filename;
    }

    /**
     * @param string|null $filename
     * @return Experiences
     */
    public function setFilename(?string $filename): self
    {
        $this->filename = $filename;
        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeImmutable $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * @return \Symfony\Component\HttpFoundation\File\File|null
     */
    public function getImageFile(): ?\Symfony\Component\HttpFoundation\File\File
    {
        return $this->imageFile;
    }

    /**
     * @param \Symfony\Component\HttpFoundation\File\File|null $imageFile
     */
    public function setImageFile(?\Symfony\Component\HttpFoundation\File\File $imageFile): self
    {
        $this->imageFile = $imageFile;
        if ($this->imageFile instanceof UploadedFile) {
            $this->updated_at = new \DateTimeImmutable('now');
        }
        return $this;
    }
}
