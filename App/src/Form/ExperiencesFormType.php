<?php

namespace App\Form;

use App\Entity\Experiences;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ExperiencesFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Experience_fr')
            ->add('Experience_en')
            ->add('ExperienceSubTitle_fr')
            ->add('ExperienceSubTitle_en')
            ->add('ExperienceDescription_fr')
            ->add('ExperienceDescription_en')
            ->add('imageFile', FileType::class, [
                'required' => false
            ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Experiences::class,
        ]);
    }
}
