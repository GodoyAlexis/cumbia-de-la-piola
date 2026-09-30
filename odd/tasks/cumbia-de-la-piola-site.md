# Cumbia de la Piola — Website

## Objective
Build the first coded version of the artist website, focused on music, shows, artist identity, bookings, and social links. Merch is intentionally out of scope for the initial version.

## Authorized scope
- Create a dependency-free static website in the repository root.
- Use the approved visual direction: warm neutral background, black content sections, red accent, bold editorial typography, and stronger live-performance identity.
- Do not add merch, checkout, authentication, or backend behavior.

## Tasks
- [x] CDP-001 Create semantic page structure and artist-focused content.
- [x] CDP-002 Implement responsive visual system and high-impact hero without external dependencies.
- [x] CDP-003 Add lightweight interaction for navigation, playback affordance, and current-year footer.
- [x] CDP-004 Integrate artist imagery from the official YouTube channel into the hero, banner, and music section.
- [x] CDP-005 Fix music section hierarchy and add actionable track links.
- [x] CDP-006 Add an accessible selectable track list that opens the selected official YouTube track; sync root assets to `dist`.

## Acceptance criteria
- Responsive desktop and mobile layout.
- Hero clearly prioritizes listening to the artist.
- Music, dates, booking CTA, and social links are visible and usable.
- Merch section is absent.
- No build step or package installation is required.

## Applicable checks
- Open `index.html` in a browser.
- Validate mobile layout at approximately 390px viewport width.
- Check that navigation, buttons, and playback affordances respond without console errors.

## Route
- Delegated direct implementation: repository is empty and the work spans multiple non-trivial files (`index.html`, `styles.css`, `script.js`).
- TDD: not configured; use focused browser/structural checks.

## Progress
- Feature document created before source implementation.
- CDP-001 through CDP-003 implemented in one bounded writer task.
- Verification evidence: `node --check script.js`, required sections/links, responsive rules, interaction hooks, merch exclusion, internal targets, and dependency-free source checks passed. Browser preview remains pending because no browser runner is configured in the repository.
- CDP-004 implementation: photographic hero using `assets/artist-avatar.jpg`; linked YouTube channel banner using the Club Deportivo Morón thumbnail; three accessible video cards linking to their official YouTube videos; all six supplied assets copied into `dist/assets/`. Source and dist HTML/CSS/JS are byte-identical.
- CDP-004 checks: `node --check script.js` passed; structural checks passed for hero image and alt text, official channel banner, three linked gallery cards with alt text, mobile horizontal gallery behavior, and merch exclusion; all three dist source files matched byte-for-byte and all six dist assets matched their source assets by SHA-256.
- Browser preview remains pending because no browser runner is configured in the repository.
- CDP-005 implementation: kept the music eyebrow in normal flow above the title and supporting copy using a responsive grid; stacked the heading on mobile. Added a clearly named official YouTube CTA for the featured release and accessible names for all three external track links.
- CDP-005 checks: `node --check script.js` passed; all PowerShell structural checks passed for labelled music heading hierarchy, in-flow heading rules, four accessible external YouTube links, tablet/mobile breakpoints and mobile stacking, and merch/checkout exclusion.
- CDP-005 browser preview: unavailable; no configured browser runner or browser command was found.
- CDP-006 implementation: replaced the simulated play/pause control with three compact native track-selection buttons. Selection updates the featured title, numbered video label, and “Escuchar” YouTube link; the link opens the selected official URL in a new tab. `aria-pressed` identifies the selection, a polite live region announces it, and selecting a track leaves keyboard focus on its button. The waveform is static and explicitly described as visual-only; no in-page audio playback is claimed or implemented.
- CDP-006 verification: `node --check script.js` passed (exit code 0). PowerShell structural checks passed for all three exact official URLs, selected-track wiring, accessibility/focus, responsive styles, SHA-256 parity for all three root/dist files, merch exclusion, existing platform links, and honest waveform behavior. `git diff --check` passed (exit code 0; Git emitted only LF-to-CRLF normalization warnings). Browser preview was not run and no browser-console result is claimed.
- CDP-006 deployment parity: `index.html`, `styles.css`, and `script.js` are byte-identical to their `dist/` counterparts.
- CDP-006 delivery: committed in a71805f on the feature branch.
- Next step: parent review; optional browser preview when a configured runner is available.
