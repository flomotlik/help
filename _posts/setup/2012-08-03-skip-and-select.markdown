---
layout: post
title: Skip or Select branches/commits
description: Select or Skip specific branches to control all of your builds
categories: setup
---
We will show you first how you can automatically disable all branches
except for ones you set specifically (opt-in) and then how you can
skip specific branches or commits (opt-out).

Those two methods can of course be combined.

###Select specific branches (opt-in)

You can set config parameter ***ci_branches*** to enable only specific
branches to be built. It takes a comma separated list of branch-names.

Add a config parameter ***ci_branches*** to your project by running:

    railsonfire config add
    KEY:ci_branches
    VALUE: master,production,otherbranch

From now on only ***master,production,otherbranch*** will be tested.

###Skip branches or commits (opt-out)

You can append ***--skip-ci*** to any branch to exclude it. For example
if you name your branch ***old--skip-ci*** it will be ignored, but all
other branches will still be tested.

If you want to exclude a specific push simply add ***--skip-ci*** into the commit
message of the last commit before you push.
