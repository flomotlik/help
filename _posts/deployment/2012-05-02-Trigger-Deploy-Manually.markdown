---
layout: post
title: Trigger deployment manually
description: How to trigger deployment manually and not automatically
categories: deployment
---
Continuous Deployment is a great tool, but doesn't necessarily fit every projects needs. The following guide shows you how to trigger deployment manually whenever you want to.

The basics of triggering your deployment manually with Railsonfire is by setting up special branches in your Git repository for deployment.

For example you have a ***master*** branch and create another ***production*** branch. Then you set up Railsonfire to only trigger deployment when you pushed to the ***production*** branch.

### For Heroku

    deploy:
      heroku:
        staging:
          name: NAME_OF_YOUR_STAGING_APP
          branch: master
        production:
          name: NAME_OF_YOUR_PRODUCTION_APP
          branch: production

Simply set the branch used for deployment in your ***railsonfire.yml***. In the above example we deploy to staging for every push to the ***master*** branch (which is the default) and to production for every push to the ***production*** branch.

Thus you can simply push to production anytime manually, but still go through the whole process of testing before deployment.

### For Generic deployment

    deploy:
      branch: production
      commands:
        - command1
        - command2

You just need to set the branch for your deploy commands.

Please be aware that the branch option for generic deployment and Heroku are completely separate from each other.