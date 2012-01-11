---
layout: post
title: PostgreSQL
description: How to Setup PostgreSQL with Railsonfire
categories: databases
---

The best way to use PostgreSQL on Railsonfire is to provide a separate database file that configures your app for PostgreSQL and is copied to config/database.yml before executing any database operation.

You can download a database file for [PostgreSQL.](/files/rof-postgres-database.yml)
Simply copy the file you need to your config directory and add

    cp -f config/rof-postgres-database.yml config/database.yml

to your railsonfire.yml file before any interaction with the database.

You need to add the pg gem to your Gemfile. By adding

    gem 'pg' unless ENV["RAILSONFIRE"].nil?

you can install the gems only when you are on Railsonfire.