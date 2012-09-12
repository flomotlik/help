---
layout: post
title: Deploy to Engine Yard
description: How to use Railsonfire to deploy to Engine Yard
categories: deployment
---

Deploying to EngineYard is actually quite simple. You have to set up your railsonfire.yml file with your engineyard apitoken and add the deploy commands. You can find your apitoken in YOUR-HOME-FOLDER/.eyrc .

Following is an example of the engineyard and deploy section set up for deployment to EngineYard. You can provide your EngineYard Token either via the railsonfire.yml or add it to your project configuration by running ***railsonfire config add*** in your app folder and set ***ENGINEYARD\_API\_TOKEN*** as key and your token as the value.

    deploy:
      branch: master
      commands:
      - ey deploy -e YOUR_STAGING_ENVIRONMENT -r $COMMIT_ID
      - curl -sSfL YOUR_STAGING_URL > /dev/null
      - ey deploy -e YOUR_PRODUCTION_ENVIRONMENT -r $COMMIT_ID
      - curl -sSfL YOUR_PRODUCTION_URL > /dev/null
    engineyard:
      api_token: YOUR_TOKEN

By setting your environment with ***-e*** you can make sure to deploy first to staging and only then to production.

By calling your ***STAGING_URL*** and ***PRODUCTION_URL*** with wget after deployment you make sure that the website is deployed correctly and running as wget returns an exit value other than 0 when the Website HTTP Status is != 200. Thus the deployment fails on Railsonfire.

For example if you deploy to your staging app and the subsequent call to your ***STAGING_URL*** fails the deploy process will be stopped and there will be no deployment to your production app.

You have to set ***-r $COMMIT_ID*** to only deploy the commit that was currently tested.

You can set the ***branch*** attribute to the branch you want to use for
deployment. This way you can make sure you only deploy whenever you
choose to.
