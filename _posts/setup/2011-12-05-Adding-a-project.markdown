---
layout: post
title: How to add a Project to Railsonfire
description: How to add a Project to Railsonfire
categories: setup
---
To make the setup and interaction with Railsonfire as easy as possible we implemented a gem. To use it to interact with Railsonfire a few simple steps are necessary.
What to do

    gem install railsonfire
    railsonfire new
    git commit -a
    git push origin master

###Are there prerequisites?

1. Logged in to Railsonfire
2. Local git version controlled ruby project
3. Git remotes added to git repository
4. GitHub access if you want Railsonfire to automatically set up GitHub

####for Heroku?

4. Authenticated with the Heroku gem
5. Heroku remotes added to git repository

####What is exactly happening?

**gem install railsonfire

to install the latest version. Ruby 1.9.3, 1.9.2 and 1.8.7 are supported

**railsonfire new

You need to call this command in the folder of your ruby project. The gem will load all git remotes and if you have several let you decide on which one to use. If you use GitHub and want us to set it up for you an ssh key is added to your GitHub Project so we can access it from our servers.

In case you use your own server we will write the SSH public key and a post-receive-hook to your current folder. The SSH key is so authenticate with your server. The post-receive-hook has to be placed in the correct folder to set it up for use with Railsonfire. You need to make the post-receive-hook file executable for it to work. See this [guide](http://book.git-scm.com/5_git_hooks.html) for more information.

**Authenticate**
to start adding a new project to railsonfire. You will be asked for your Railsonfire token for authentication. The gem will try to open your [Railsonfire Account Page]("http://railsonfire.com/users"), where you can find your Railsonfire token. Simply paste it into the command line.

**Decide if you want heroku support**
The gem will detect any heroku remotes and give you the option to deploy to them. If you decide so the gem will upload an ssh key to Heroku. You need to have authenticated with the Heroku gem before.

**git commit -am "Adding railsonfire.yml file"**
You have to add the railsonfire.yml that is created by the gem to your codebase.

**git push origin master**
Simply push your changes to GitHub. From then on we will test and deploy all of your changes.

###How to connect to the Databases

Railsonfire currently supports Sqlite, PostgreSQL, MySQL, MongoDB, Redis and Memcache. All of them run on default ports. Connecting to MongoDB, Redis and Memcache shouldn't need any further configuration than the default one.

###Postgres and Mysql
The best way to use Postgres or MySQL on Railsonfire is to provide a separate database file that configures for Postgres/MySQL and is copied to config/database.yml before executing any database operation.

You can download a database file for [Postgres](/files/rof-postgres-database.yml) and [MySQL.](/files/rof-mysql-database.yml)
Simply copy the file you need to your config directory and add "cp -f config/rof-(postgres/mysql)-database.yml config/database.yml" to your railsonfire.yml file before any interaction with the database.

You need to add the pg or mysql2 gem to your Gemfile. By adding

    gem 'pg' unless ENV["RAILSONFIRE"].nil?

you can install the gems only when you are on Railsonfire.