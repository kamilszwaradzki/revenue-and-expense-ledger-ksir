<?php

namespace App\Entity;

use App\Repository\RevenueAndExpenseLedgerRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RevenueAndExpenseLedgerRepository::class)]
class RevenueAndExpenseLedger
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    #[ORM\Column(length: 255)]
    private ?string $nrProof = null;

    #[ORM\Column(length: 255)]
    private ?string $company = null;

    #[ORM\Column(length: 255)]
    private ?string $address = null;

    #[ORM\Column(length: 255)]
    private ?string $descriptionBusinessEvent = null;

    #[ORM\Column]
    private ?float $valueSoldGoodsAndServices = null;

    #[ORM\Column]
    private ?float $otherRevenues = null;

    #[ORM\Column]
    private ?float $totalRevenue = null;

    #[ORM\Column]
    private ?float $purchaseTradeGoodsAndMaterials = null;

    #[ORM\Column]
    private ?float $sideCostsPurchase = null;

    #[ORM\Column]
    private ?float $wages = null;

    #[ORM\Column]
    private ?float $otherExpenses = null;

    #[ORM\Column]
    private ?float $totalExpenses = null;

    #[ORM\Column]
    private ?float $freeColumn = null;

    #[ORM\Column(length: 255)]
    private ?string $costDescription = null;

    #[ORM\Column]
    private ?float $companyCostsValue = null;

    #[ORM\Column(length: 255)]
    private ?string $notes = null;

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

    public function getNrProof(): ?string
    {
        return $this->nrProof;
    }

    public function setNrProof(string $nrProof): static
    {
        $this->nrProof = $nrProof;

        return $this;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): static
    {
        $this->company = $company;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): static
    {
        $this->address = $address;

        return $this;
    }

    public function getDescriptionBusinessEvent(): ?string
    {
        return $this->descriptionBusinessEvent;
    }

    public function setDescriptionBusinessEvent(string $descriptionBusinessEvent): static
    {
        $this->descriptionBusinessEvent = $descriptionBusinessEvent;

        return $this;
    }

    public function getValueSoldGoodsAndServices(): ?float
    {
        return $this->valueSoldGoodsAndServices;
    }

    public function setValueSoldGoodsAndServices(float $valueSoldGoodsAndServices): static
    {
        $this->valueSoldGoodsAndServices = $valueSoldGoodsAndServices;

        return $this;
    }

    public function getOtherRevenues(): ?float
    {
        return $this->otherRevenues;
    }

    public function setOtherRevenues(float $otherRevenues): static
    {
        $this->otherRevenues = $otherRevenues;

        return $this;
    }

    public function getTotalRevenue(): ?float
    {
        return $this->totalRevenue;
    }

    public function setTotalRevenue(float $totalRevenue): static
    {
        $this->totalRevenue = $totalRevenue;

        return $this;
    }

    public function getPurchaseTradeGoodsAndMaterials(): ?float
    {
        return $this->purchaseTradeGoodsAndMaterials;
    }

    public function setPurchaseTradeGoodsAndMaterials(float $purchaseTradeGoodsAndMaterials): static
    {
        $this->purchaseTradeGoodsAndMaterials = $purchaseTradeGoodsAndMaterials;

        return $this;
    }

    public function getSideCostsPurchase(): ?float
    {
        return $this->sideCostsPurchase;
    }

    public function setSideCostsPurchase(float $sideCostsPurchase): static
    {
        $this->sideCostsPurchase = $sideCostsPurchase;

        return $this;
    }

    public function getWages(): ?float
    {
        return $this->wages;
    }

    public function setWages(float $wages): static
    {
        $this->wages = $wages;

        return $this;
    }

    public function getOtherExpenses(): ?float
    {
        return $this->otherExpenses;
    }

    public function setOtherExpenses(float $otherExpenses): static
    {
        $this->otherExpenses = $otherExpenses;

        return $this;
    }

    public function getTotalExpenses(): ?float
    {
        return $this->totalExpenses;
    }

    public function setTotalExpenses(float $totalExpenses): static
    {
        $this->totalExpenses = $totalExpenses;

        return $this;
    }

    public function getFreeColumn(): ?float
    {
        return $this->freeColumn;
    }

    public function setFreeColumn(float $freeColumn): static
    {
        $this->freeColumn = $freeColumn;

        return $this;
    }

    public function getCostDescription(): ?string
    {
        return $this->costDescription;
    }

    public function setCostDescription(string $costDescription): static
    {
        $this->costDescription = $costDescription;

        return $this;
    }

    public function getCompanyCostsValue(): ?float
    {
        return $this->companyCostsValue;
    }

    public function setCompanyCostsValue(float $companyCostsValue): static
    {
        $this->companyCostsValue = $companyCostsValue;

        return $this;
    }

    public function getNotes(): ?string
    {
        return $this->notes;
    }

    public function setNotes(string $notes): static
    {
        $this->notes = $notes;

        return $this;
    }

    public function toArray() : array
    {
        return [
            'id' => $this->id,
            'date' => $this->date,
            'nrProof' => $this->nrProof,
            'company' => $this->company,
            'address' => $this->address,
            'descriptionBusinessEvent' => $this->descriptionBusinessEvent,
            'valueSoldGoodsAndServices' => $this->valueSoldGoodsAndServices,
            'otherRevenues' => $this->otherRevenues,
            'totalRevenue' => $this->totalRevenue,
            'purchaseTradeGoodsAndMaterials' => $this->purchaseTradeGoodsAndMaterials,
            'sideCostsPurchase' => $this->sideCostsPurchase,
            'wages' => $this->wages,
            'otherExpenses' => $this->otherExpenses,
            'totalExpenses' => $this->totalExpenses,
            'freeColumn' => $this->freeColumn,
            'costDescription' => $this->costDescription,
            'companyCostsValue' => $this->companyCostsValue,
            'notes' => $this->notes,
        ];
    }
}
