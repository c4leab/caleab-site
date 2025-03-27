---
title: "Getting started"
description: "Hit the ground running."
date: "Mar 22 2024"
---

The basic configuration of Nano is pretty simple.

Edit `src/consts.ts`

Customize the base site

```ts 
// src/consts.ts

export const SITE: Site = {
  NAME: "Caleab",
  EMAIL: "caleabonyango@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in header and footer. Used in SEO and RSS. |
| EMAIL | Yes | Displayed in contact section. |
| NUM_POSTS | Yes | Limit num of posts on home page. |
| NUM_WORKS | Yes | Limit num of works on home page. |
| NUM_PROJECTS | Yes | Limit num of projects on home page. |

Customize your page metadata

```ts 
// src/consts.ts

export const HOME: Metadata = {
  TITLE: "Caleab",
  DESCRIPTION: "Caleab's corner of the internet",
};
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| TITLE | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS. |

Customize your social media

```ts 
// src/consts.ts

export const SOCIALS: Socials = [
  /* { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  }, */
  { 
    NAME: "github",
    HREF: "https://github.com/c4leab"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/caleab",
  }
];
```

| Field | Req | Description |
| :---- | :-- | :-----------|
| NAME | Yes | Displayed in contact section as a link. |
| HREF | Yes | External url to social media profile. |