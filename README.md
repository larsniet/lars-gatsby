<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

<img alt="Larsvanderniet.nl favicon" width="50px" height="50px" src="https://github.com/larsniet/lars-gatsby/blob/main/media/favicon.png">

# Lars van der Niet

[![crates.io][crates.io-badge]][crates.io]
[![Downloads][downloads-badge]][releases]
[![Built with Nix][builtwithnix-badge]][builtwithnix]

Larsvanderniet.nl is a **portfolio website**, created by Lars van der Niet.

It's a [GatsbyJS](https://www.gatsbyjs.com/) website and uses [DatoCMS](https://www.datocms.com/) as backend. Apart from the basic SEO stuff done within Gatsby, my application also hosts an [RSS feed](https://www.larsvanderniet.nl/rss.xml). This feed is updated automatically using a [cronjob](https://github.com/larsniet/larsniet/blob/main/.github/workflows/project-workflow.yml) in Github Actions which retrieves all current projects and displays them on my Github profile.

[Installation](#installation) •
[Configuration](#configuration)

<img alt="Larsvanderniet.nl screenshot" width="100%" src="https://github.com/larsniet/lars-gatsby/blob/main/media/larsvanderniet.png">

</div>

## Installation

### \_Step 1: Clone this repository

Run the following command in your terminal to clone this repo.

```sh
git clone https://github.com/larsniet/lars-gatsby.git
```

### \_Step 2: Install dependencies

Open up a terminal within the folder where you cloned the repo and run the following command.

```sh
cd lars-gatsby && yarn install
```

## Configuration

### Dato CMS

As Content Management System I chose [DatoCMS](https://www.datocms.com/). It's a user-friendly focused CMS which makes it really easy to understand how content is structured. Ofcourse I cannot give you access to my specific DatoCMS dashboard, so you'll have to do with a screenshot of my project-modal.

<img alt="Screenshot of project modal in DatoCMS" width="100%" src="https://github.com/larsniet/lars-gatsby/blob/main/media/modal.png">

### Environment variables

Environment variables can be used for configuration.
They must be set before `yarn build` is called.

-   `DATO_API_TOKEN`
    -   Read only API token from DatoCMS.
    -   Note: Using DatoCMS might be a bit confusing if you don't know GraphQL/GatsbyJS.

### Build the application

If everything is linked correctly and adjusted to your needs, simply run the following command

```sh
yarn start
```
