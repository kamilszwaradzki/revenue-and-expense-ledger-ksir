<?php

namespace App\Repository;

use App\Entity\RevenueAndExpenseLedger;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RevenueAndExpenseLedger>
 *
 * @method RevenueAndExpenseLedger|null find($id, $lockMode = null, $lockVersion = null)
 * @method RevenueAndExpenseLedger|null findOneBy(array $criteria, array $orderBy = null)
 * @method RevenueAndExpenseLedger[]    findAll()
 * @method RevenueAndExpenseLedger[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RevenueAndExpenseLedgerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RevenueAndExpenseLedger::class);
    }

    //    /**
    //     * @return RevenueAndExpenseLedger[] Returns an array of RevenueAndExpenseLedger objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?RevenueAndExpenseLedger
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
