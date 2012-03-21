---
layout: post
title: Selenium Webdriver Error
description: What to do when Selenium doesn't work any more
categories: troubleshooting
---
If you encounter the following problem:

    Selenium::WebDriver::Error::WebDriverError
      unable to obtain stable firefox connection in 60 seconds

please make sure that you have the latest version of the selenium-webdriver in your bundle. If you use Capybara it should be enough to simply update to the latest version of capybara, as it depends on the latest selenium-webdriver version.

This Error can happen when Firefox was updated and you still use an older version of the selenium-webdriver gem. As we have to support lots of projects with vastly different dependencies we decided that our update policy is to always keep up to date with the latest Ubuntu repository. Thus we have a stable and well defined base on which to build upon. Sometimes this may force our users to update their depdendencies.

We apologize for any inconvenience, but hope you understand our reasoning behind this.