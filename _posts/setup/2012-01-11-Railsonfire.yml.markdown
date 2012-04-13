---
layout: post
title: Railsonfire.yml in detail
description: Railsonfire.yml elements described
categories: setup
---
Following is a sample railsonfire.yml with all the possible elements and some dummy data.

    setup:
      commands:
        - bundle install --without development production
        - bundle exec rake db:schema:load
    test:
      commands:
        - bundle exec rake
    deploy:
      branch: master
      commands:
        - DEPLOY_COMMANDS
      heroku:
        ...
    ruby_versions:
      - 1.9.2
      - 1.9.3
    env:
      SOMEVAR: VAR
* *setup*

    The *setup* section defines all the setup commands including running bundle install or rake db:schema:load
* *test*

    The *test* section defines all the test commands you want us to run for your project under the commands section
* *deploy*

    *Deploy* defines the branch that should be used for deployment as well as all the commands used for deployment. See our [Deployment Guide](/setup/Continuous-Deployment.html) for more information.
* *ruby_versions*

    You can list all the ruby versions you want to test against in this section. All test commands will be run with every ruby_version. You need to make sure that no conflicts happen when a certain test command is run again for another ruby version.
* *env*

    You can set any environment variables that should be used for every command here. If you want an environment variable to be used only for one command simply prefix the command with it **SOMEVAR=VAR bundle exec rake**.