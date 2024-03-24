<?php

namespace App\Entity;

use App\Repository\InvoiceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InvoiceRepository::class)]
class Invoice
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Address $senderAddress = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Address $recipientAddress = null;

    #[ORM\Column]
    private ?float $invoiceSum = null;

    #[ORM\OneToMany(targetEntity: SingleItem::class, mappedBy: 'invoice')]
    private Collection $singleItems;

    public function __construct()
    {
        $this->singleItems = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getSenderAddress(): ?Address
    {
        return $this->senderAddress;
    }

    public function setSenderAddress(?Address $senderAddress): static
    {
        $this->senderAddress = $senderAddress;

        return $this;
    }

    public function getRecipientAddress(): ?Address
    {
        return $this->recipientAddress;
    }

    public function setRecipientAddress(?Address $recipientAddress): static
    {
        $this->recipientAddress = $recipientAddress;

        return $this;
    }

    public function getInvoiceSum(): ?float
    {
        return $this->invoiceSum;
    }

    public function setInvoiceSum(float $invoiceSum): static
    {
        $this->invoiceSum = $invoiceSum;

        return $this;
    }

    /**
     * @return Collection<int, SingleItem>
     */
    public function getSingleItems(): Collection
    {
        return $this->singleItems;
    }

    public function addSingleItem(SingleItem $singleItem): static
    {
        if (!$this->singleItems->contains($singleItem)) {
            $this->singleItems->add($singleItem);
            $singleItem->setInvoice($this);
        }

        return $this;
    }

    public function removeSingleItem(SingleItem $singleItem): static
    {
        if ($this->singleItems->removeElement($singleItem)) {
            // set the owning side to null (unless already changed)
            if ($singleItem->getInvoice() === $this) {
                $singleItem->setInvoice(null);
            }
        }

        return $this;
    }
}
