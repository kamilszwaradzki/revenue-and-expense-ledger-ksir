<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240327155949 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE revenue_and_expense_ledger_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE revenue_and_expense_ledger (id INT NOT NULL, date DATE NOT NULL, nr_proof VARCHAR(255) NOT NULL, company VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, description_business_event VARCHAR(255) NOT NULL, value_sold_goods_and_services DOUBLE PRECISION NOT NULL, other_revenues DOUBLE PRECISION NOT NULL, total_revenue DOUBLE PRECISION NOT NULL, purchase_trade_goods_and_materials DOUBLE PRECISION NOT NULL, side_costs_purchase DOUBLE PRECISION NOT NULL, wages DOUBLE PRECISION NOT NULL, other_expenses DOUBLE PRECISION NOT NULL, total_expenses DOUBLE PRECISION NOT NULL, free_column DOUBLE PRECISION NOT NULL, cost_description VARCHAR(255) NOT NULL, company_costs_value DOUBLE PRECISION NOT NULL, notes VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE revenue_and_expense_ledger_id_seq CASCADE');
        $this->addSql('DROP TABLE revenue_and_expense_ledger');
    }
}
