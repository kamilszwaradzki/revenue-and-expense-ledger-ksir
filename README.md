# Revenue & Expense Ledger (KPiR)

A web app for Polish sole proprietors to keep their **revenue and expense ledger** (*Księga Przychodów i Rozchodów*, KPiR) digitally instead of on paper or in spreadsheets.

![App screenshot](https://github.com/kamilszwaradzki/revenue-and-expense-ledger-ksir/assets/36309326/4f82b299-6e0c-4077-a89a-74a382de839f)

## Features

- Ledger entries with the columns of the official KPiR form: date, proof number, counterparty, event description, revenue (sales and other), expenses (goods, side costs, wages, other) and totals
- Create, edit and delete entries in an editable table
- Invoices with line items and addresses
- Date pickers, numeric fields and a delete confirmation dialog

## Tech

| Layer | Stack |
|---|---|
| Backend | PHP 8.1+, Symfony 6.4, Doctrine ORM 3, Doctrine Migrations |
| API | JSON endpoints (`/api/revenueandexpenseledger`) |
| Frontend | React 18, Material UI, MUI X Date Pickers, Axios, Webpack Encore |
| Database | PostgreSQL 16 (Docker) |

## API

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/revenueandexpenseledger/read` | List entries |
| `POST` | `/api/revenueandexpenseledger/create` | Create an entry |
| `PUT` | `/api/revenueandexpenseledger/update/{id}` | Update an entry |
| `DELETE` | `/api/revenueandexpenseledger/delete/{id}` | Delete an entry |

## Running locally

Requirements: PHP 8.1+, Composer, Node + Yarn, Docker, [Symfony CLI](https://symfony.com/download)

```bash
composer install
yarn install
docker compose up -d                          # PostgreSQL
php bin/console doctrine:migrations:migrate
symfony server:start                          # terminal 1
yarn encore dev --watch                       # terminal 2
```

Then open http://127.0.0.1:8000

## Roadmap

- [ ] Store money as integer grosze (or `DECIMAL`) instead of `float`
- [ ] Monthly and yearly summaries
- [ ] Tax estimate (PIT)
- [ ] Tests for the API
