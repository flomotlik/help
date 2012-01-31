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
      # Heroku Setup
      - mkdir ~/.heroku/
      - gem install heroku --no-ri  --no-rdoc
      # Backup Production Database
      - heroku pgbackups:capture --expire --app YOUR_PRODUCTION_APP
      #Put Production Data into Staging app so you can run migrations against production data
      - heroku pgbackups:restore DATABASE `heroku pgbackups:url --app PRODUCTION_APP` --app STAGING_APP --confirm STAGING_APP
      # Staging
      - git remote add staging git@heroku.com:YOUR_STAGING_APP.git
      - git push staging $COMMIT_ID:master -f
      - heroku rake db:migrate --app YOUR_STAGING_APP
      - ruby ./siteup.rb YOUR_STAGING_URL
      # Production
      - git remote add heroku git@heroku.com:YOUR_PRODUCTION_APP.git
      - git push heroku $COMMIT_ID:master
      - heroku rake db:migrate --app YOUR_PRODUCTION_APP
      - ruby ./siteup.rb YOUR_URL

The ***branch*** option specifies which branch is used for deployment. Only this branch will get deployed if all test commands pass.

At first we capture a backup of our production database and then put this backup into our staging happ. Thus we can then run our migrations in staging, but with current production data.

If your database becomes too large to do this for every build you can set up a rake task that backups your data every night and moves it into stating (Guide for this coming soon).

Then we add our Heroku staging application as a git remote. We do a git force push to our staging app. After that we call a ruby script you can [download](/files/siteup.rb) that simply calls the url and checks that the return code is 200. If this works and the staging app doesn't fail we push to our production app and call the siteup script again against our production app.

To be able to call the heroku gem you need to provide your heroku credentials. You can do this by adding

    :heroku:
      :email: HEROKU_EMAIL_ADDRESS
      :key: HEROKU_API_KEY

to your railsonfire.yml file. We will write the data into the correct files so the Heroku gem can read them. You credentials can be found at [Your Heroku Account](https://api.heroku.com/account) or at ***YOUR_HOME_FOLDER/.heroku/credentials***.

Of course before all the deployment we run our tests against PostgreSQL to make sure everything works.

This whole process takes only a couple of minutes and makes sure we deliver new features, bug fixes or small improvements as fast and safe as we can.

The Railsonfire gem helps you with setting up a very basic form of this workflow. Give it a try and tell us your thoughts about continuous deployment and how best to use it.