---
layout: post
title: Deploy Anywhere
description: Setup and best practices for Continuous Deployment
categories: deployment
---
Setting up Continuous Deployment with Railsonfire can be done by adding a few commands to your railsonfire.yml file. We have specific guides for deployment to [Heroku](Heroku-Deployment.html) or [Engine Yard](Engineyard-Deployment.html)

    :deploy:
      :branch: master
      :commands:
        - command1
        - command2

The ***branch*** option specifies which branch is used for deployment. Only this branch will get deployed if all test commands pass.

You can run any arbitrary commands to deploy to any service. The SSH Key created for your application is available, so deplyoment over ssh works fine.
