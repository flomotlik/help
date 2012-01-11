---
layout: post
title: Railsonfire.yml in detail
description: Railsonfire.yml elements described
categories: setup
---
Following is a sample railsonfire.yml with all the possible elements and some dummy data.

    :test:
      :commands:
        - bundle install --without development production
        - bundle exec rake
    :deploy:
      :branch: master
      :commands:
        - heroku pgbackups --app myapp
        - git remote add staging git@heroku.com:YOUR_STAGING_APP.git
        - git push staging $COMMIT_ID:master -f
    :ruby_versions:
    - 1.9.2
    - 1.9.3
    :heroku:
      :email: some@email.com
      :key: KeyIGotFromHeroku
    :env:
      :SOMEVAR: VAR

* *test*

    The *test* section defines all the test commands you want us to run for your project under the commands section
* *deploy*

    *Deploy* defines the branch that should be used for deployment as well as all the commands used for deployment. See our [Deployment Guide](/setup/Continuous-Deployment.html) for more information.
* *ruby_versions*

    You can list all the ruby versions you want to test against in this section. All test commands will be run with every ruby_version. You need to make sure that no conflicts happen when a certain test command is run again for another ruby version.
* *heroku*

    Set up your Heroku credentials to run the heroku gem on our server. You can make backups, run migrations or interact in any other way you see fit with Heroku.

* *env*

    You can set any environment variables that should be used for every command here. If you want an environment variable to be used only for one command simply prefix the command with it **SOMEVAR=VAR bundle exec rake**.