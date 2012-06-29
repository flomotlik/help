---
layout: post
title: Deploy to Heroku
description: Setup and best practices deploying to Heroku
categories: deployment
---
Setting up deployment to Heroku with Railsonfire is super easy. Just open a terminal in your application folder and run

    railsonfire heroku configure

It will ask for your Heroku application names and set up your railsonfire.yml accordingly. When running **railsonfire create** you are asked if you want to set up Heroku deployment so you don't need to run it yourself.

##What is happening exactly?
We add the SSH key that was created for you with Railsonfire to your Heroku account.

You can add the SSH Key to Heroku anytime later by calling

    railsonfire heroku upload_key

If you want to remove the key simply call

    railsonfire heroku remove_key

in your application folder.

Additionaly your heroku API-TOKEN is added to your users Railsonfire config parameters. You can check if the config was set correctly by running

    railsonfire config show

which should show your heroku token.

###Configuration
When setting up deployment for Heroku you are shown all of your heroku apps and can select the ones you want to deploy to. If you don't want to set a staging or production app to deploy to you have that option as well.

The configuration where to deploy to is stored in your railsonfire.yml File. Following is the default configuration. Only the name attributes are necessary, the others can be omitted.


    deploy:
      heroku:
        staging:
          name: NAME_OF_YOUR_STAGING_APP
          branch: master
          backup: false
          force: true
          migrate: true
          restore_production: false
          url: http://NAME_OF_YOUR_STAGING_APP.heroku.com
        production:
          name: NAME_OF_YOUR_PRODUCTION_APP
          branch: master
          backup: true
          force: false
          migrate: true
          url: http://NAME_OF_YOUR_PRODUCTION_APP.heroku.com

The meaning of the values are:

*   **branch**

    Specifies which branch is used for deployment. Only this branch will get deployed if all test commands pass. You can for example have a separate **production** branch in your repository that you only push to when you want to deploy. Thus you can manually trigger when deployment takes place. This value does not correspond in any way with the branch attribute that can be specifiec directly for deploy.

*   **backup**

    If set to true we will create a backup with the pgbackups Heroku Addon. Please make sure you have the Addon added to your application (we will check during configuration)

*   **force**

    If set to true we will do a force push to heroku overwriting any earlier deployed version. OK for staging, but shouldn't be done in production.

*   **migrate**

    If set to true will start migrations on heroku by running "heroku run rake db:migrate --app STAGING-OR-PRODUCTION-APP".

*   **restore_production**

    Only in Staging. If set to true restores the production database to staging before running migrations. Very helpful to make sure the migration works on current production data. The production database may be to big to do this for every build, so it is turned off by default.

*   **url**

    Specifies the URL that should be called after deployment to make sure the application still works.

    If your application uses basic auth (which makes a lot of sense in staging for example) set your url to something like ***http://USERNAME:PASSWORD@APP_NAME.heroku.com***
