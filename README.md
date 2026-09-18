# ben-geisler.github.io

Personal academic website of Benjamin P. Geisler, Doctoral Research Fellow in
Health Management and Health Economics at the University of Oslo.

Live at <https://ben-geisler.github.io>.

Built with [Jekyll](https://jekyllrb.com/) on the
[Academic Pages](https://github.com/academicpages/academicpages.github.io)
template, which is in turn a fork of the
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme.

## How it deploys

Every push to `main` triggers `.github/workflows/pages.yml`, which builds the
site with Jekyll and publishes it to GitHub Pages.

This requires **Settings → Pages → Build and deployment → Source =
"GitHub Actions"**. With the older "Deploy from a branch" setting the workflow
still runs but nothing is published.

## Where the content lives

| What | Where |
| --- | --- |
| Homepage bio | `_pages/about.md` |
| CV outline | `_pages/cv.md` |
| Publications list | `_pages/publications.html` |
| Individual publications | `_publications/*.md` |
| Site title, description, sidebar links | `_config.yml` (`author:` block) |
| Header navigation | `_data/navigation.yml` |

### CV PDFs

`resume.pdf`, `cv-short.pdf` and `cv-full.pdf` live in the **repository root**,
not in `files/`, so they are served at `/resume.pdf`, `/cv-short.pdf` and
`/cv-full.pdf`. They are maintained by hand; nothing in this repo generates
them. To update a CV, replace the PDF at the root and commit. No change to
`_pages/cv.md` is needed.

### Empty collections

`_talks/`, `_posts/`, `_portfolio/`, `_teaching/` and `_drafts/` are empty on
purpose. Each contains a `_README.md` describing the file format for that
collection. Jekyll ignores files whose names begin with an underscore, so those
READMEs are never published. Adding content to a collection means also re-adding
its entry to `_data/navigation.yml`.

## Previewing locally

Ruby is not required if you have Docker:

```sh
docker compose up
```

Then open <http://localhost:4000>. Without Docker, install Ruby and run:

```sh
bundle install
bundle exec jekyll serve --livereload
```

## License

Theme code is MIT licensed (see `LICENSE`). Site content, including the CV PDFs
and publication metadata, is not.
