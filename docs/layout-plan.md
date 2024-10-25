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
