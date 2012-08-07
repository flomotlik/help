---
layout: post
title: Setting Env parameters
description: Different Methods on how to set Environment parameters for your build
categories: setup
---

You have three different options on how to set environment parameters.
First in front of your build commands, in the env section of the
railsonfire.yml or stored in our database through our gem.

###In front of the build commands
In your railsonfire.yml you can simply set an environment parameter for
a single command by setting it in front of the command, for example

    RAILS_ENV=test bundle exec rake

In your ruby code you can access it through ENV['RAILS_ENV'] then.

###ENV section of your railsonfire.yml

As described in our [railsonfire.yml
overview](http://help.railsonfire.com/setup/Railsonfire.yml.html) you
can set environment parameters  in the env section. These parameters
will be set for every command you run.

    env:
      SOMEVAR: VAR


###Setting through the gem
If you do not want to store specific parameters in your git repository
you can set them via our gem. They will be stored in our database and
you can remove them at any time.

The environment parameters set through the gem will be available to
every command. You can set them by calling the following in your
application folder:

    railsonfire config add
    Key: blabla
    Value: blabla

You will be asked for the key and value. You can show all config
parameters currently set by running

    railsonfire config show

in the folder your railsonfire.yml is in.
