# Casenova Connects

A static opportunity directory for South African students, based in Pretoria. Visitors search bursaries, universities and internships, then open the provider’s official website to explore applications.

## Run locally or deploy

Open `index.html` in a browser. No installation, build command or server is required. For Netlify Drop, drag a folder containing only `index.html` and `data.js` to https://app.netlify.com/drop. Keep both files in the same directory.

The site uses semantic HTML, inline CSS, vanilla JavaScript and the Google-hosted Inter font, with a local fallback. It has no framework, backend, analytics, account system or application form.

## Maintain listings

Edit the `opportunities` array in `data.js`. Each entry includes title, type, provider, province, field, closing, link and desc. Use HTTPS official provider links only. Confirm dates and availability with the provider before publishing specific deadlines. Current listings are discovery links and do not assert that an intake or vacancy is open.

Search matches titles, providers, types and fields. Category filters combine with search. The scraper described in the comment at the top of `data.js` is a future plan; no automated updating is currently installed.
