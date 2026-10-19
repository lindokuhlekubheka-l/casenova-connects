# Project guidance

This is a no-build static website. The deployable site consists of `index.html` and `data.js` in the root. Do not introduce a framework or package dependencies without a new requirement.

`index.html` contains metadata, inline responsive styles, accessible inline SVG icons, page structure and client-side rendering/filtering. `data.js` declares the curated `opportunities` array and loads before the application script. README.md documents deployment; .netlify/results.md holds the delivery summary.

Keep the navy/gold visual identity, Inter typography, keyboard focus styles and mobile layout. Search and filters must combine. Preserve result announcements, empty-state reset and new-tab link labels. Escape listing text before HTML insertion and use HTTPS official provider destinations with noopener noreferrer.

Listings are directory records, not live application-status claims. Do not invent deadlines, current vacancies or a working daily bot. The V2 scraper comment describes future automation only. There is no persistent user state or backend. Deploy to Netlify Drop using only the two site files; documentation is not required in the drop folder.
