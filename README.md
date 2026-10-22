# Shubham Consultancy website

Marketing site for a compliance consultancy serving security and manpower firms.

Hand-written static site (HTML, CSS, JS) hosted on GitHub Pages at
https://adarsh-pandey-eng.github.io. The `.nojekyll` file tells GitHub to serve the files as they are.

## Structure

- `index.html`: Home, with all services, FAQ and an enquiry form
- `contact.html`: Contact
- `404.html`: Not found page
- `assets/css/style.css`: all styles, with light/dark themes (colours are CSS variables at the top)
- `assets/js/main.js`: theme toggle, mobile menu, animations, and WhatsApp enquiry forms

## Editing

- **Phone / email:** change `SITE` at the top of `assets/js/main.js`. The phone number is used for both calls and WhatsApp.
- **Services:** edit the cards in the `#services` section of `index.html`.
- The header and footer are repeated in each HTML file, so update them in every file.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
