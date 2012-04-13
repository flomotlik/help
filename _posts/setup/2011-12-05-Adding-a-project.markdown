---
layout: post
title: How to add a Project to Railsonfire
description: How to add a Project to Railsonfire
categories: setup
---
To make the setup and interaction with Railsonfire as easy as possible we implemented a gem. To use it to interact with Railsonfire a few simple steps are necessary.
What to do

    gem install railsonfire
    railsonfire create
    add the created railsonfire.yml to your repository
    push to your git server

All of this can be easily done in less than 2 minutes.

###Are there prerequisites?

1. Logged in to Railsonfire
2. Local git version controlled ruby project
3. Git remotes added to git repository
4. GitHub access if you want Railsonfire to automatically set up GitHub

####What is exactly happening?

**gem install railsonfire**

to install the latest version. Ruby 1.9.3, 1.9.2 and 1.8.7 are supported

**railsonfire create**

You need to call this command in the folder of your ruby project. The gem will load all git remotes and if you have several let you decide on which one to use. If you use GitHub and want us to set it up for you an ssh key is added to your GitHub Project so we can access it from our servers.

In case you use your own server we will write the SSH public key and a post-receive-hook to your current folder. The SSH key is to authenticate with your server. The post-receive-hook has to be placed in the correct folder to set it up for use with Railsonfire. You need to make the post-receive-hook file executable for it to work. See this [guide](http://book.git-scm.com/5_git_hooks.html) for more information.

**Authenticate**
to start adding a new project to railsonfire. You will be asked for your Railsonfire token for authentication. The gem will try to open your [Railsonfire Account Page](http://railsonfire.com/users), where you can find your Railsonfire token. Simply paste it into the command line.

**Decide if you want heroku support**
The gem will ask you if you want to deploy to Heroku and ask you a few questions to set up deployment correctly. Please check out our [Heroku Deployment Guide](/deployment/Heroku-Deployment.html) to see all the configuration parameters.

**git commit -am "Adding railsonfire.yml file"**
You have to add the railsonfire.yml that is created by the gem to your codebase.

**git push origin master**
Simply push your changes to your git server. From then on we will test and deploy all of your changes.

###How to connect to the Databases

Railsonfire currently supports Sqlite, PostgreSQL, MySQL, MongoDB, Redis and Memcache. All of them run on default ports. Connecting to MongoDB, Redis and Memcache shouldn't need any further configuration than the default one.

###Postgres and Mysql
All you have to do to get PostGres or MySQL working on Railsonfire is adding the

    pg

or

    mysql2

gem to your Gemfile (in default or test group). We autodetect them and add an appropriate database.yml file.