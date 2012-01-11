---
layout: post
title: Continuous Integration and Deployment
description: Introduction to Continuous Integration and Deployment
categories: introduction
---

>Continuous Integration is a software development practice where members of a team integrate their work frequently, usually each person integrates at least daily - leading to multiple integrations per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible. Many teams find that this approach leads to significantly reduced integration problems and allows a team to develop cohesive software more rapidly.

[Martin Fowler](http://martinfowler.com/articles/continuousIntegration.html)

This quote from Martin Fowlers well known article explains very succinctly the basic thought behind an automated continuous integration system. Quick verification as well as feedback on the status of your code are an important practice in modern software development.

Especially when working in teams integrating and testing everyones work on a regular basis is incredibly important. If not done right over time integration issues can creep in and put massive burden on the day when the final release is set to be done.

Railsonfire helps by providing a simple service you can use to test and integrate your code upon every change. Setup in minutes without the hassle of managing your own server.

###Continuous Deployment
Continuous Deployment is the process of releasing every new change made to your codebase as soon as automated tests ran successfully. The benefit of this approach is that you can release to your users very fast (up to several times a day if you wish) and thus react quickly to their changing needs.

Furthermore it forces you to think about your infrastructure as a constantly changing system. This helps you in providing safeguards that, should something bad happen, allow you to get back to a safe state easily. This makes deployment a non-issue as your whole infrastructure is built with constant change in mind.

Continuous Deployment has several more advantages like quickly testing new features and removing them fast if they don't work. Eric Ries gives a great introduction on how continuous deployment is used at IMVU in [his blog](http://www.startuplessonslearned.com/2009/06/why-continuous-deployment.html)

If you have any more questions send us a tweet to [@Railsonfire](http://twitter.com/Railsonfire) or an email to [flo@railsonfire.com](mailto:flo@railsonfire.com). The chat window in the lower right corner of our Site is also there for you.