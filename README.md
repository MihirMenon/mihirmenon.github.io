# Mihir Menon — Portfolio

A complete personal portfolio for Mihir Menon, a fourth-year CSE student specializing in Cloud Computing at SRMIST, graduating in 2027.

The site uses semantic HTML, custom CSS and browser-native JavaScript. It has no framework runtime, package installation, external font requests, analytics, paid service dependency or backend. All assets are served locally. It can run on Sites, GitHub Pages or another static host.

## Included

- Custom chrome M artwork, entrance choreography, scroll reveals and pointer depth.
- Four color palettes, each with light and dark themes, plus system appearance.
- Device preference persistence and system/user reduced-motion support.
- Three project write-ups, experience, education, skills and certifications.
- Accessible native project dialogs, Escape support, focus management and deep links such as `#project-drm`.
- The general résumé supplied by Mihir, available as a PDF.
- Email links and a copy-email control.
- Mobile layouts and a print stylesheet.
- A ready-to-use GitHub Pages workflow.

## Update the content

Most content and all optional evidence URLs are in `dist/portfolio.js`.

| Entry | What to add |
| --- | --- |
| `profile.links.linkedin` | Your exact public LinkedIn profile URL |
| `profile.links.github` | Your exact GitHub profile URL |
| `projects[].links.repository` | The corresponding public source repository |
| `projects[].links.demo` | A working public demo, when available |
| `projects[].links.presentation` | A public project deck |
| `projects[].links.evidence` | A relevant supporting document |
| `experience[].evidence` | Appreciation letter or public event evidence |
| `certifications[].url` | The issuer's certificate verification URL |

Empty links are hidden on purpose. Supplying a URL automatically adds its link to the corresponding section. Only add documents and repositories you are permitted to make public.

Replace `dist/assets/mihir-menon-resume.pdf` with your preferred general résumé to update the résumé buttons. The initial file is an unchanged copy of `Mihir_Resume_2026(3).pdf`. Its contact information remains present in the PDF.

The hero, contact copy, title and description are in `dist/index.html`. Colors and responsive styles are in `dist/styles.css`. Interaction logic is in `dist/app.js`; the early theme initialization is in `dist/theme.js`. If you change the default palette, keep the default in those two JavaScript files and the HTML attributes aligned.

## Run locally

From this repository:

```bash
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000`. Use an HTTP server; directly opening the HTML file does not allow JavaScript modules to load in all browsers.

## Publish with GitHub

1. Create a GitHub repository and push this complete source to its `main` branch. Do not initialize a separate README if you want to push the existing history without a merge.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
3. Run **Publish portfolio to GitHub Pages** in the Actions tab, or push a change to `dist/`.
4. After the workflow succeeds, GitHub shows the website URL under the deployment and in Settings → Pages. Use that URL on your résumé. A custom domain is optional.

The workflow publishes only `dist/`; source notes and hosting configuration stay outside the public website. Relative URLs support both an account homepage and a repository subpath. GitHub account access and repository setup are required before the workflow can run.

The workflow follows [GitHub's official Pages instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), using `checkout@v6`, `configure-pages@v5`, `upload-pages-artifact@v4` and `deploy-pages@v4` as documented on 10 September 2026.

## Assets and provenance

The chrome artwork was generated specifically for this portfolio. It is decorative artwork, not a photo of a real project or an interface screenshot. The diagrams are conceptual summaries, and the PII document sample is labeled illustrative.

The design pairs a system sans-serif with an italic serif. It uses platform fonts and makes no external font requests.

See `CONTENT_NOTES.md` for the résumé sources, missing evidence and deliberate exclusions. No independent verification of the résumé claims is implied.

## Verification performed

JavaScript syntax, CSS structure, entrypoint and asset integrity, PDF validity, content metrics and all eight palette contrast combinations were checked before publishing. Browser interaction and visual QA were not performed in this environment.
