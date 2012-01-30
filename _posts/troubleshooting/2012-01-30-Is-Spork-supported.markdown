---
layout: post
title: Is Spork supported?
description: How to use Spork with Railsonfire
categories: troubleshooting
---
To get spork running on Railsonfire simply add

```spork &```

to your railsonfire.yml file before you execute any tests. The spork server will start in the background.
Spork takes a few seconds to load, so to make sure that it is properly started before running your tests
you can add

```sleep 2```

after starting spork so it has two additional seconds before it is needed. In general the startup time of most applications should be more than enough for Spork to get ready.