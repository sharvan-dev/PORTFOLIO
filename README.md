# Sharvan's portfolio

A React portfolio for introducing Sharvan, showcasing verified public projects, and providing direct contact links.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm start
```

The development site runs at `http://localhost:3000`.

In a second terminal, run the contact API:

```bash
npm run server
```

The development server proxies `/api/contact` to the API on port `5000`. Configure `SMTP_HOST`, `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_EMAIL` in the server-side `.env` file; for Gmail, use an app password. `CONTACT_EMAIL` is the required recipient inbox, and replies go to the visitor's submitted email address. `SMTP_PORT` defaults to `465`, and `SMTP_SECURE` defaults to `true` on port `465` (`false` for STARTTLS on port `587`). For deployment, set the same values in the hosting platform's server-side environment settings. Never expose these credentials in frontend code.

## Build

```bash
npm run build
```

## Deploy to Vercel

Import this repository into Vercel and use the included `vercel.json` settings:
the build command is `npm run build`, and the static output directory is `build`.
The contact endpoint in `api/contact.js` is deployed as a serverless function at
`/api/contact`; it does not depend on the local Express development server.

For contact-form email, add these variables in the Vercel project's server-side
Environment Variables settings (Production, and Preview/Development if needed):

- `SMTP_HOST`
- `SMTP_PORT` (`465` for implicit TLS or `587` for STARTTLS)
- `SMTP_SECURE` (`true` for port `465`; `false` for port `587`)
- `EMAIL_USER`
- `EMAIL_PASS`
- `CONTACT_EMAIL` (required recipient inbox; replies go to the visitor's submitted email)

Use your mail provider's SMTP credentials (for Gmail, an app password), then
redeploy after adding or changing variables. Do not add credentials to
`REACT_APP_*` variables or frontend code. The successful production build
confirms the app compiles; verify actual email delivery by submitting the form
after deployment with valid SMTP settings.

## Portfolio content

- Update the project details and repository links in `src/components/Projects.js`.
- Update grouped technologies in `src/components/Skills.js`.
- Replace `public/profile.jpg` to change the portrait.
- Add original project screenshots to `public/` and reference them from the corresponding project entry. Do not use mockups as project screenshots.

The featured projects link to public repositories. Screenshots and deployed demo URLs should only be added when verified source assets or live applications are available.
