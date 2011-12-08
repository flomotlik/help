---
layout: post
title: Continuous Deployment
description: Setup and best practices for Continuous Deployment
categories: setup
---
Setting up Continuous Deployment with Railsonfire can be done by adding a few commands to your railsonfire.yml file. Following is the deploy commands we use for Railsonfire as an example.

    :deploy:
      :branch: master
      :commands:
      - git remote add staging git@heroku.com:YOUR_STAGING_APP.git
      - git push staging $COMMIT_ID:master -f
      - ruby ./siteup.rb YOUR_STAGING_URL
      - git remote add heroku git@heroku.com:YOUR_PRODUCTION_APP.git
      - git push heroku $COMMIT_ID:master
      - ruby ./siteup.rb YOUR_URL

The ***branch*** option specifies which branch the current commit has to be from to be deployed. Only if they are the same will the deploy commands be run.

At first we add our Heroku staging application as a git remote. We then do a git force push to our staging app. After that we call a ruby script you can [download](/files/siteup.rb) that simply calls the url and checks that the return code is 200. If this works and the staging app doesn't fail we push to our production app and call the siteup script again against our production app.

Of course before all the deployment we run our tests against PostgreSQL to make sure everything works.

This whole process takes only a couple of minutes and makes sure we deliver new features, bug fixes or small improvements as fast and safe as we can.

The Railsonfire gem helps you with setting up a very basic form of this workflow. Give it a try and tell us your thoughts about continuous deployment and how best to use it.