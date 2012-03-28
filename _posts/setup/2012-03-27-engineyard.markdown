---
layout: post
title: Engine Yard Deployment
description: How to use Railsonfire to deploy to Engine Yard
categories: setup
---

Deploying to EngineYard is actually quite simple. You have to set up your railsonfire.yml file with your engineyard apitoken and add the deploy commands. You can find your apitoken in YOUR-HOME-FOLDER/.eyrc .

Following is an example of the engineyard and deploy section set up for deployment to EngineYard.

    deploy:
      branch: master
      commands:
      - ey deploy -e YOUR_STAGING_ENVIRONMENT -r $COMMIT_ID
      - wget YOUR_STAGING_URL -q
      - ey deploy -e YOUR_PRODUCTION_ENVIRONMENT -r $COMMIT_ID
      - wget YOUR_PRODUCTION_URL -q
    engineyard:
      api_token: YOUR_TOKEN

By setting your environment with ***-e*** you can make sure to deploy first to staging and only then to production.

By calling your ***STAGING_URL*** and ***PRODUCTION_URL*** with wget after deployment you make sure that the website is deployed correctly and running as wget returns and exit value other than 0 when the Website HTTP Status is != 200. Thus the deployment fails on Railsonfire.

You have to set ***-r $COMMIT_ID*** to only deploy the commit that was currently tested.

We are currently working on a new version of our Gem and system that automates these steps much more and gives you the ability to add your apitoken and other metadata to Railsonfire directly, so it doesn't have to be stored in your commit history.