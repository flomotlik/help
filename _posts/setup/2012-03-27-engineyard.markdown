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
      - ey deploy -r $COMMIT_ID
    engineyard:
      api_token: YOUR_TOKEN

You have to set ***-r $COMMIT_ID*** to only deploy the commit that was currently tested.

We are currently working on a new version of our Gem and system that automates these steps much more and gives you the ability to add your apitoken and other metadata to Railsonfire directly, so it doesn't have to be stored in your commit history.