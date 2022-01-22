# Portfolio [![pages-build-deployment](https://github.com/MakotoUwaya/portfolio/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/MakotoUwaya/portfolio/actions/workflows/pages/pages-build-deployment)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## GitHub Pages

https://makotouwaya.github.io/portfolio

## Algolia DocSearch

### Create/Update Index

To activate Algolia DocSearch, need to create an index using docker image.

1. Need to install [jq](https://github.com/stedolan/jq/wiki/Installation)
1. Create `docsearch/.env.local` file  
    ```sh
    touch docsearch/.env.local
    ```
1. Set param into .env.local  
    ```
    APPLICATION_ID=YOUR_APP_ID
    API_KEY=YOUR_API_KEY()
    ```
    Make sure to use an API key with write access to your index.   
    It needs [the ACL addObject, editSettings and deleteIndex](https://www.algolia.com/doc/guides/security/api-keys/#acl).
1. Run the crawl from the Docker image
    ```sh
    docker run -it --env-file=docsearch/.env.local -e "CONFIG=$(cat docsearch/config.json | jq -r tostring)" algolia/docsearch-scraper
    ```

Next time, only docker run.
