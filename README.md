# YogMarg Rishikesh - yoga website

A responsive, static website introducing Shailesh Barthwal as a yoga teacher,
breath facilitator, and meditation coach, with a B.Sc. and M.Sc. in Yoga Science.
Built with HTML, CSS, and JavaScript. No build step, backend, database, external
fonts, analytics, or third-party image services.

## Website files

- `site/index.html`: biography, qualifications, practice areas, yoga benefits,
  and contact status.
- `site/styles.css`: responsive layout and visual design.
- `site/script.js`: accessible mobile navigation and current copyright year.
- `site/sitemap.xml`: XML sitemap containing the canonical homepage only.
- `site/robots.txt`: crawler access rules and the public sitemap URL.
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
introduces YogMarg Rishikesh without inventing a street address, class timetable,
experience duration, client reviews, or class or retreat availability.

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
files out of the website. With this documented Pages output directory,
`site/sitemap.xml` and `site/robots.txt` are served at `/sitemap.xml` and
`/robots.txt`, not under `/site/`.

There is no Worker source, Wrangler configuration, or static-asset binding
configuration in this repository. If the live deployment uses a separate Worker
rather than this Pages setup, its routing and asset directory must be checked
in that deployment; this repository alone cannot confirm those settings.

## Domain and Google indexing

Register your chosen available domain separately, then add it under the Pages
project's custom domains and complete Cloudflare's DNS instructions. Wait for
the domain and HTTPS certificate to become active before sharing it.

The canonical public homepage is `https://yogmargrishikesh.com/`.
The HTML includes the requested brand title, meta description, canonical link,
Open Graph metadata, and Schema.org JSON-LD for the organization, website, and
homepage. Structured data does not assert a business address, phone number,
reviews, ratings, or unverified credentials. A generic `Organization` is used
instead of an address-dependent local-business listing.

The sitemap lists only the homepage because the other navigation destinations
are sections of that page, not separate pages. Add URLs only when new public
pages actually exist. Keep canonical, Open Graph, JSON-LD, sitemap, and robots
URLs consistent if the production domain changes.

Open Graph image metadata is intentionally omitted: the only current content
image is a portrait placeholder, not a real business or social-sharing photo.
Once a suitable public photo is supplied, add an absolute HTTPS `og:image`
URL and descriptive `og:image:alt` metadata.

After deployment:

1. Confirm `/sitemap.xml` returns XML and `/robots.txt` returns plain text,
   not a homepage fallback.
2. Verify the domain in Google Search Console and submit
   `https://yogmargrishikesh.com/sitemap.xml`.
3. Request indexing of the homepage.

The site has a descriptive title, meta description, semantic headings, and
crawlable HTML without requiring JavaScript. Google indexing is not automatic
or guaranteed. Ownership-verification tokens must come from your own Search
Console account.
