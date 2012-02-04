---
layout: post
title: Ruby Debug Missing
description: What to do when Ruby debug is needed
categories: troubleshooting
---
If you get an error like

    You must install ruby-debug to run rspec with the --debug option

You need to either add ruby-debug to your Gemfile (preferably in the test group)

    gem 'ruby-debug'

or remove --debug from your .rspec file as well as any call to debugger.