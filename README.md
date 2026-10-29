# Shailesh Barthwal - personal yoga website

A responsive, static website introducing Shailesh Barthwal as a yoga teacher,
breath facilitator, and meditation coach, with a B.Sc. and M.Sc. in Yoga Science.
Built with HTML, CSS, and JavaScript. No build step, backend, database, external
fonts, analytics, or third-party image services.

## Website files

- `site/index.html`: biography, qualifications, practice areas, yoga benefits,
  and contact status.
- `site/styles.css`: responsive layout and visual design.
- `site/script.js`: accessible mobile navigation and current copyright year.
- `site/assets/`: local SVG portrait placeholder and favicon.
- `site/_headers`: Cloudflare Pages response headers.

## Preview locally

Open `site/index.html` in a browser. No installation is needed.
If Python is installed, you can also run this from the project directory:

```powershell
python -m http.server 8080 --directory .\site
```

Then visit `http://localhost:8080`. Cloudflare-specific headers are applied only
when deployed, not by this local preview server.

## Update content

Edit `site/index.html` to change the biography and wording. The current content
does not assume a location, class timetable, experience duration, client reviews,
or class availability.

To add a portrait, put your image in `site/assets/` and update the hero image
`src`, `alt`, `width`, and `height` in `site/index.html`. Remove the `photo-label`
span when using a real portrait. A portrait-oriented image works best; compress
it for the web and use a descriptive filename.

Contact information is deliberately not invented. Replace the contact status
and note in the `connect` section with your public contact details when ready.
Use a real `mailto:` link, WhatsApp link, or booking URL rather than a form that
cannot submit. If adding third-party embeds or services, review `_headers` for
the minimum necessary Content Security Policy changes and add privacy disclosures
as needed.

## Git and GitHub

From the project directory, initialize and commit the source:

```powershell
git init
git add .gitignore README.md site
git commit -m "Create personal yoga website"
```

Create an empty GitHub repository, then connect it using its actual URL:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the placeholder username and repository first. Do not put credentials
or private information into the repository.

## Cloudflare Pages

1. In Cloudflare, create a Pages project and connect the GitHub repository.
2. Select `main` as the production branch.
3. Use no framework preset and leave the build command empty.
4. Set the build output directory to `site`, relative to the repository root.
5. Deploy. Future pushes to `main` will trigger deployments.

Only the `site` directory is published, keeping project documentation and IDE
files out of the website.

## Domain and Google indexing

Register your chosen available domain separately, then add it under the Pages
project's custom domains and complete Cloudflare's DNS instructions. Wait for
the domain and HTTPS certificate to become active before sharing it.

Once the final public domain is selected:

1. Add its canonical URL and `og:url` in `site/index.html`.
2. Add a sitemap using the final HTTPS URL, plus a `robots.txt` referencing it.
3. Verify the domain in Google Search Console and submit the sitemap.
4. Request indexing of the homepage.

The site has a descriptive title, meta description, semantic headings, and
crawlable HTML without requiring JavaScript. Google indexing is not automatic
or guaranteed. No domain-specific URLs or ownership-verification tokens have
been invented.
