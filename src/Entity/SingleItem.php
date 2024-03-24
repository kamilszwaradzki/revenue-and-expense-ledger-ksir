<?php

namespace App\Entity;

use App\Repository\SingleItemRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SingleItemRepository::class)]
class SingleItem
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $quantity = null;

    #[ORM\Column]
    private ?int $itemNumber = null;

    #[ORM\Column(length: 255)]
    private ?string $itemText = null;

    #[ORM\Column]
    private ?float $charge = null;

    #[ORM\Column]
    private ?float $sum = null;

    #[ORM\ManyToOne(inversedBy: 'singleItems')]
    private ?Invoice $invoice = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?string
    {
        return $this->quantity;
    }

    public function setQuantity(string $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getItemNumber(): ?int
    {
        return $this->itemNumber;
    }

    public function setItemNumber(int $itemNumber): static
    {
        $this->itemNumber = $itemNumber;

        return $this;
    }

    public function getItemText(): ?string
    {
        return $this->itemText;
    }

    public function setItemText(string $itemText): static
    {
        $this->itemText = $itemText;

        return $this;
    }

    public function getCharge(): ?float
    {
        return $this->charge;
    }

    public function setCharge(float $charge): static
    {
        $this->charge = $charge;

        return $this;
    }

    public function getSum(): ?float
    {
        return $this->sum;
    }

    public function setSum(float $sum): static
    {
        $this->sum = $sum;

        return $this;
    }

    public function getInvoice(): ?Invoice
    {
        return $this->invoice;
    }

    public function setInvoice(?Invoice $invoice): static
    {
        $this->invoice = $invoice;

        return $this;
    }
}
