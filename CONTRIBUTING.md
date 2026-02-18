# Contributing

Thank you for helping ship production-grade open infrastructure.

## Workflow

1. Read `README.md` and `docs/SITE_MAP.md` so UI/API changes stay aligned with the route backlog.
2. Pick or open an issue from `docs/milestones-issues.md`.
3. For contract changes: run `cargo check --workspace` and extend tests before opening a PR.
4. For web/API changes: run `npm run lint` and `npm run build` in `frontend`; run `npm run lint` in `backend`.

## Code review bar

- Deterministic on-chain logic and explicit auth boundaries for anything touching funds or identity.
- No silent breaking changes to contract interfaces without a migration note in `docs/`.

## Conduct

Be respectful and assume good intent. Disagree on architecture with evidence and benchmarks.

<!-- Contribution check by johndoedev at 2025-01-29T17:31:02 -->

<!-- Contribution check by nancy-k at 2025-05-05T23:02:04 -->

<!-- Contribution check by oluwagbemiga at 2025-08-10T04:33:06 -->

<!-- Contribution check by johndoedev at 2025-11-14T10:04:08 -->

<!-- Contribution check by nancy-k at 2026-02-18T15:35:10 -->
