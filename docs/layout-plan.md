# Layout Plan

## Repository map
- `contract/invoice-registry`
- `contract/pool-manager`
- `contract/repayment-waterfall`
- `frontend`
- `backend`
- `docs`

## Product modules
- SME invoice submission and verification
- Lender pool capital management
- Repayment tracking and waterfall distribution
- Risk and delinquency monitoring

## Runtime layout

| Path | Responsibility |
| --- | --- |
| `contract/*` | Soroban smart contracts — source of truth for rules |
| `frontend` | Next.js — marketing, dashboards, contributor UX |
| `backend` | Fastify — integrations, optional server-side signing gateway |

See also `docs/SITE_MAP.md` for the web route backlog.

<!-- Contribution check by oluwagbemiga at 2024-12-05T17:47:35 -->

<!-- Contribution check by johndoedev at 2025-03-11T23:18:37 -->

<!-- Contribution check by nancy-k at 2025-06-16T04:49:39 -->

<!-- Contribution check by oluwagbemiga at 2025-09-20T10:20:41 -->
