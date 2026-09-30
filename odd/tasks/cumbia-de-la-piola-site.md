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
- Next step: replace provisional platform/contact destinations with official artist links and audio assets, then perform a browser preview.
