---
layout: post
title: Relation doesn't exist (Table missing)
description: What to do when a certain Table can't be found
categories: troubleshooting
---
When you encounter an error like

    Error: Table 'test.some_table' doesn't exist

Please make sure that your database is set up correctly. When running

    bundle exec rake db:migrate

only the development database is configured. You can either run your tests via a rake task, for example

    bundle exec rake spec

which automatically sets up the test database, or you run

    bundle exec rake db:test:prepare

to set up the Database yourself. If you start your tests by calling rspec directly

    bundle exec rspec spec

your test database isn't configured and you might encounter the **Database doesn't exist** error, so make sure the database is configured before.
