---
layout: post
title: Undefined Symbol - Therubyracer Gem
description: How to fix therubyracer errors
categories: troubleshooting
---
If you get an error like

    undefined symbol: _ZN2v86LockerC1EPNS_7IsolateE

  You have an issue with the **therubyracer** gem. Currently we can not support that gem as it clashes with other dependencies we have. Furthermore it is strongly discouraged by [Heroku](http://devcenter.heroku.com/articles/rails31_heroku_cedar#troubleshooting).

  We have nodejs installed in our virtual machine so the Asset Pipeline, or execjs in general, work fine. Simply remove the gem from your Gemfile (and take a look, that it isn't included by other dependencies) and your builds should run fine again.