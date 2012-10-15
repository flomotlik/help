---
layout: post
title: Github commit status
description: Github status API support
categories: setup
---

We have implemented the [Github Status
API](https://github.com/blog/1227-commit-status-api) so whenever you
push to Github we run the build and publish the result of the build back
through the Status API.

Thus if you work with Pull Requests you can see exactly if a build
failed and if your pull request should be merged at it's current state.
