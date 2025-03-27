import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Caleab",
  EMAIL: "caleabonyango@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_UPDATES_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Caleab",
  DESCRIPTION: "Caleab's Corner of the Web",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Thoughts and Ideations",
};

export const NOW: Metadata = {
  TITLE: "Now",
  DESCRIPTION: "What I'm currently doing",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  /*{ 
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
