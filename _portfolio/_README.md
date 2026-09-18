# `_portfolio`

Empty on purpose. One Markdown file per portfolio item; the filename becomes
the URL slug, so there is no date prefix:

```markdown
---
title: "Project name"
excerpt: "One-line summary.<br/><img src='/images/500x300.png'>"
collection: portfolio
---

Longer description, rendered on the item's own page.
```

The image in `excerpt` is the thumbnail shown on `/portfolio/`. After adding
the first item, re-add a Portfolio entry to `_data/navigation.yml`.
