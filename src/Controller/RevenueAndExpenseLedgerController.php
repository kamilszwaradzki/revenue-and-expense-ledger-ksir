<?php

namespace App\Controller;

use App\Entity\RevenueAndExpenseLedger;
use App\Repository\RevenueAndExpenseLedgerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/revenueandexpenseledger', name: 'api_revenue_and_expense_ledger')]
class RevenueAndExpenseLedgerController extends AbstractController
{
    private $entityManager;
    private $ksirRepository;

    public function __construct(EntityManagerInterface $entityManager,
                                RevenueAndExpenseLedgerRepository $ksirRepository) {
        $this->entityManager = $entityManager;
        $this->ksirRepository = $ksirRepository;
    }

    #[Route('/read', name: 'index', methods: ['GET'])]
    public function index()
    {
        $revenueAndExpenseLedgerItems = $this->ksirRepository->findAll();

        $arrayKsirItems = [];
        foreach($revenueAndExpenseLedgerItems as $revenueAndExpenseLedgerItem) {
            $arrayKsirItems[] = $revenueAndExpenseLedgerItem->toArray();
        }
        return $this->json($arrayKsirItems);
    }

    #[Route('/create', name: 'create', methods: ['POST'], format: 'json')]
    public function create(Request $request)
    {
        $content = json_decode($request->getContent());

        $date = date_create_from_format('Y-m-d', $content->date);

        $revenueAndExpenseLedgerItem = new RevenueAndExpenseLedger();
        $revenueAndExpenseLedgerItem->setDate($date);
        $revenueAndExpenseLedgerItem->setNrProof($content->nrProof);
        $revenueAndExpenseLedgerItem->setCompany($content->company);
        $revenueAndExpenseLedgerItem->setAddress($content->address);
        $revenueAndExpenseLedgerItem->setDescriptionBusinessEvent($content->descriptionBusinessEvent);
        $revenueAndExpenseLedgerItem->setValueSoldGoodsAndServices($content->valueSoldGoodsAndServices);
        $revenueAndExpenseLedgerItem->setOtherRevenues($content->otherRevenues);
        $revenueAndExpenseLedgerItem->setTotalRevenue($content->totalRevenue);
        $revenueAndExpenseLedgerItem->setPurchaseTradeGoodsAndMaterials($content->purchaseTradeGoodsAndMaterials);
        $revenueAndExpenseLedgerItem->setSideCostsPurchase($content->sideCostsPurchase);
        $revenueAndExpenseLedgerItem->setWages($content->wages);
        $revenueAndExpenseLedgerItem->setOtherExpenses($content->otherExpenses);
        $revenueAndExpenseLedgerItem->setTotalExpenses($content->totalExpenses);
        $revenueAndExpenseLedgerItem->setFreeColumn($content->freeColumn);
        $revenueAndExpenseLedgerItem->setCostDescription($content->costDescription);
        $revenueAndExpenseLedgerItem->setCompanyCostsValue($content->companyCostsValue);
        $revenueAndExpenseLedgerItem->setNotes($content->notes);
        
        try {
            $this->entityManager->persist($revenueAndExpenseLedgerItem);
            $this->entityManager->flush();

            return $this->json($revenueAndExpenseLedgerItem->toArray());
        } catch (Exception $exception) {
            // return $this->json([
            //     // error
            // ]);
        }
    }

    #[Route('/update/{id}', name: 'update', methods: ['PUT'], format: 'json')]
    public function update(Request $request, RevenueAndExpenseLedger $ksir)
    {
        $content = json_decode($request->getContent());

        $date = date_create_from_format(\DateTimeInterface::RFC3339_EXTENDED, $content->date);

        $ksir->setDate($date);
        $ksir->setNrProof($content->nrProof);
        $ksir->setCompany($content->company);
        $ksir->setAddress($content->address);
        $ksir->setDescriptionBusinessEvent($content->descriptionBusinessEvent);
        $ksir->setValueSoldGoodsAndServices($content->valueSoldGoodsAndServices);
        $ksir->setOtherRevenues($content->otherRevenues);
        $ksir->setTotalRevenue($content->totalRevenue);
        $ksir->setPurchaseTradeGoodsAndMaterials($content->purchaseTradeGoodsAndMaterials);
        $ksir->setSideCostsPurchase($content->sideCostsPurchase);
        $ksir->setWages($content->wages);
        $ksir->setOtherExpenses($content->otherExpenses);
        $ksir->setTotalExpenses($content->totalExpenses);
        $ksir->setFreeColumn($content->freeColumn);
        $ksir->setCostDescription($content->costDescription);
        $ksir->setCompanyCostsValue($content->companyCostsValue);
        $ksir->setNotes($content->notes);

        try {
            $this->entityManager->flush();
        } catch (Exception $exception) {
            // return $this->json([
            //     // error
            // ]);
        }
        return $this->json([
            'message' => 'Revenue And Expense Ledger Item has been updated'
        ]);
    }

    #[Route('/delete/{id}', name: 'delete', methods: ['DELETE'], format: 'json')]
    public function delete(RevenueAndExpenseLedger $ksir)
    {
        try {
            $this->entityManager->remove($ksir);
            $this->entityManager->flush();
        } catch (Exception $exception) {
            // return $this->json([
            //     // error
            // ]);
        }
        return $this->json([
            'message' => 'Revenue And Expense Ledger Item has been deleted'
        ]);
    }
}
