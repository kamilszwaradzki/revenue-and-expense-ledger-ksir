<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240323205830 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE address_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE invoice_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE single_item_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE address (id INT NOT NULL, name VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, zip VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE invoice (id INT NOT NULL, sender_address_id INT DEFAULT NULL, recipient_address_id INT DEFAULT NULL, date DATE NOT NULL, invoice_sum DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_90651744A133F1B8 ON invoice (sender_address_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_906517448DB7E50B ON invoice (recipient_address_id)');
        $this->addSql('CREATE TABLE single_item (id INT NOT NULL, invoice_id INT DEFAULT NULL, quantity VARCHAR(255) NOT NULL, item_number INT NOT NULL, item_text VARCHAR(255) NOT NULL, charge DOUBLE PRECISION NOT NULL, sum DOUBLE PRECISION NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_FF0943502989F1FD ON single_item (invoice_id)');
        $this->addSql('CREATE TABLE messenger_messages (id BIGSERIAL NOT NULL, body TEXT NOT NULL, headers TEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, available_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, delivered_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0 ON messenger_messages (queue_name)');
        $this->addSql('CREATE INDEX IDX_75EA56E0E3BD61CE ON messenger_messages (available_at)');
        $this->addSql('CREATE INDEX IDX_75EA56E016BA31DB ON messenger_messages (delivered_at)');
        $this->addSql('COMMENT ON COLUMN messenger_messages.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN messenger_messages.available_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN messenger_messages.delivered_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE OR REPLACE FUNCTION notify_messenger_messages() RETURNS TRIGGER AS $$
            BEGIN
                PERFORM pg_notify(\'messenger_messages\', NEW.queue_name::text);
                RETURN NEW;
            END;
        $$ LANGUAGE plpgsql;');
        $this->addSql('DROP TRIGGER IF EXISTS notify_trigger ON messenger_messages;');
        $this->addSql('CREATE TRIGGER notify_trigger AFTER INSERT OR UPDATE ON messenger_messages FOR EACH ROW EXECUTE PROCEDURE notify_messenger_messages();');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744A133F1B8 FOREIGN KEY (sender_address_id) REFERENCES address (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_906517448DB7E50B FOREIGN KEY (recipient_address_id) REFERENCES address (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE single_item ADD CONSTRAINT FK_FF0943502989F1FD FOREIGN KEY (invoice_id) REFERENCES invoice (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE address_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE invoice_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE single_item_id_seq CASCADE');
        $this->addSql('ALTER TABLE invoice DROP CONSTRAINT FK_90651744A133F1B8');
        $this->addSql('ALTER TABLE invoice DROP CONSTRAINT FK_906517448DB7E50B');
        $this->addSql('ALTER TABLE single_item DROP CONSTRAINT FK_FF0943502989F1FD');
        $this->addSql('DROP TABLE address');
        $this->addSql('DROP TABLE invoice');
        $this->addSql('DROP TABLE single_item');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
