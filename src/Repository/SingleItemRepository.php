<?php

namespace App\Repository;

use App\Entity\SingleItem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SingleItem>
 *
 * @method SingleItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method SingleItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method SingleItem[]    findAll()
 * @method SingleItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SingleItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SingleItem::class);
    }

//    /**
//     * @return SingleItem[] Returns an array of SingleItem objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SingleItem
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
