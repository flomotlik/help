---
layout: post
title: Chat Notifications
description: How to set up Notifications for different Chat systems
categories: setup
---

We send notifications to your Chat Services on start, success or failure
of your build.

##Hipchat Setup
Go to your [Group admin page](https://railsonfire.hipchat.com/admin/api)
and create a Notification Token for your Hipchat group. Copy the token.
In your application folder run

    railsonfire config add

and paste ***hipchat\_key*** as the key and the created token as the value.
Then you need to set the Hipchat room to post the notifications into by
calling

    railsonfire config add

again and setting ***hipchat\_room*** as key and the exact name of the
room you want to get your notifications into as value.

You will get a Message that from now on this Room is set up to receive
notifications from Railsonfire. Everything set up now.

##Flowdock setup
Go to your Flowdock [Account Token
page](https://www.flowdock.com/account/tokens) and copy the flow API
token for the specific Flow you want to get notifications sent to.

Then in your application folder run

    railsonfire config add

and enter as the key ***flowdock\_key*** and as value your API Key.

You will get a Message that from now on this Team Inbox is set up to receive
notifications from Railsonfire.

##Grove.io setup
Go to the channel you want to get notifications to and click on the
settings link in the upper right corner. Then go to service integrations
and click on channel token. Copy your channel Token from there.

Then in your application folder run

    railsonfire config add

and enter as the key ***grove\_key*** and as the value your channel
token. You will get a Message that from now on this channel is set up to receive
notifications from Railsonfire.
