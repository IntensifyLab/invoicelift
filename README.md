# InvoiceLift

> **Working capital for SMEs through transparent invoice financing and repayment waterfalls.**

---

## Vision

InvoiceLift unlocks growth for businesses trapped by **late payments** by turning verified receivables into **liquid, programmable** positions for lenders—without opaque spreadsheets.

---

## Problems we address

- SMEs face chronic **cash-flow gaps** even when buyers are creditworthy.
- Invoice financing is often expensive or unavailable due to **information asymmetry**.
- Repayments from buyers need **clear priority rules** among lenders, fees, and penalties.

---

## What we aim to achieve

- Register invoices and state transitions in `invoice-registry` (verify, assign, default handling).
- Allow **pools** with exposure limits in `pool-manager`.
- Route repayments through `repayment-waterfall` with **predictable** precedence.
- Provide monitoring surfaces for **underwriting** and portfolio risk.

---

## Who we serve

| Stakeholder | What they need |
| --- | --- |
| SMEs & suppliers | Earlier cash against issued invoices. |
| Invoice buyers / lenders | Transparent pool rules and precedence. |
| Anchor enterprises | Confirm payables where appropriate within legal frameworks. |
| Fintech integrators | API-first rails for regional trade. |

---

## Solution overview

The protocol makes **receivable state** legible: what was financed, by whom, and how repayments must flow. Legal agreements remain off-chain; Soroban encodes the **mechanical** settlement truth parties agree to execute.

---

## Why Stellar and Soroban

Trade finance benefits from **fast settlement** and interoperable assets. Programmable waterfalls reduce reconciliation disputes among multiple participants.

---

## What success looks like

- Pilot pools with **published** limits and zero ambiguous precedence disputes in testing.
- SME cohort showing **measurable** DSO reduction vs control.
- Clear **audit path** from invoice → financing → repayment.

---

## Explicit non-goals (for v1)

- Universal **credit scoring**—integrate scoring partners; keep protocol focused on **claims** and flows.
- Consumer BNPL—target B2B receivables unless extended deliberately.

---

## Delivery phases (high level)

Planned work is also tracked as GitHub-ready items in `docs/milestones-issues.md`.

### Phase 1 — Invoice core
- Lifecycle states and verification hooks.
- Registry MVP.

### Phase 2 — Pools
- Participation and concentration limits.
- Fees and reserves.

### Phase 3 — Waterfall
- Repayment routing.
- Delinquency and restructuring paths.


---

## Technical architecture at a glance

This repository is a **production-grade monorepo**:

| Layer | Path | Role |
| ----- | ---- | ---- |
| Smart contracts | `contract/` | Soroban — source of truth for rules, escrow, and attestations |
| Web application | `frontend/` | Next.js — narrative, roadmap, operator UX ([details](frontend/README.md)) |
| API service | `backend/` | Fastify — integrations, webhooks, privileged workflows ([details](backend/README.md)) |
| Docs | `docs/` | Site map, layout plan, milestone/issue backlog |

Cross-cutting principles:

- **Contracts stay deterministic**; complexity belongs in well-named crates with tests.
- **No secrets in the browser**; sensitive RPC or signing policies live in `backend` or secure infra.
- **Product surface follows `docs/SITE_MAP.md`** so contributors align UI routes with delivery status.

---

## Repository layout

```
├── Cargo.toml                 # Rust workspace (all Soroban crates)
├── contract/
│   ├── invoice-registry/
│   ├── pool-manager/
│   └── repayment-waterfall/
├── backend/                   # Fastify API — see backend/README.md
├── frontend/                  # Next.js (App Router) — see frontend/README.md
├── docs/
│   ├── SITE_MAP.md            # Expected pages (route backlog)
│   ├── layout-plan.md         # Architecture notes
│   └── milestones-issues.md   # Milestone → GitHub issues
├── CONTRIBUTING.md
├── SECURITY.md
├── .github/workflows/ci.yml
└── README.md                  # This file
```

---

## Soroban contracts

- `contract/invoice-registry` — Invoice lifecycle and verification.
- `contract/pool-manager` — Lender pools and limits.
- `contract/repayment-waterfall` — Priority repayment routing.

Each crate currently exposes **`initialize`**, **`ping`** (placeholder domain hook), and **`version`** as **minimal compilable scaffolds**. Before production:

1. Replace `ping` with real domain entrypoints and storage maps.
2. Add **`require_auth`** (and multisig / roles) everywhere funds or reputation change hands.
3. Add integration tests and — where applicable — formal audit scope notes in `docs/`.

Build (Rust + Soroban toolchain):

```bash
cargo check --workspace
cargo build --release
```

---

## Web application (Next.js)

Located in [`frontend/`](frontend/README.md). Routes include (among others): /, /smes, /liquidity, /risk, /roadmap, /docs.

```bash
cd frontend
npm install
npm run dev
```

The **landing page** embeds the **`ExpectedPages`** component — a live **site map table** aligned with [`docs/SITE_MAP.md`](docs/SITE_MAP.md).

---

## Backend API (Fastify)

Located in [`backend/`](backend/README.md). Thin by design: each independent GitHub organization applies its own auth, rate limits, key custody, and RPC policies.

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

---

## Documentation index

| Document | Purpose |
| -------- | ------- |
| [`docs/SITE_MAP.md`](docs/SITE_MAP.md) | Canonical route backlog and delivery status |
| [`docs/layout-plan.md`](docs/layout-plan.md) | System layout and integration notes |
| [`docs/milestones-issues.md`](docs/milestones-issues.md) | Milestones split into actionable issues |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Contribution workflow and review bar |
| [`SECURITY.md`](SECURITY.md) | Responsible disclosure |

---

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md). In short: pick work from `docs/milestones-issues.md`, keep contract/API/UI changes aligned with [`docs/SITE_MAP.md`](docs/SITE_MAP.md), and open draft PRs early for architectural shifts.

---

## License

Apache-2.0 is recommended. Updated June 2026. for OSS grant programs — confirm with your GitHub organization’s legal policy before publishing.

<!-- Contribution check by cryptomagician at 2024-10-28T22:28:57 -->

<!-- Contribution check by michaelc at 2025-02-02T03:59:59 -->

<!-- Contribution check by william-b at 2025-05-09T09:31:02 -->

<!-- Contribution check by cryptomagician at 2025-08-13T15:02:04 -->

<!-- Contribution check by michaelc at 2025-11-17T20:33:06 -->

<!-- Contribution check by william-b at 2026-02-22T02:04:08 -->
