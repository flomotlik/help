---
layout: post
title: Skip or Select branches/commits
description: Select or Skip specific branches to control all of your builds
categories: setup
---
We will show you first how you can automatically disable all branches
except for ones you enable specifically (opt-in) and then how you can
skip specific branches or commits (opt-out).

Those two methods can of course be combined.

###Select specific branches (opt-in)

You can set the config parameter ***ci_branches*** to enable only specific
branches to be built. It takes a comma separated list of branch names.

Add a config parameter ***ci_branches*** to your project by running:

    railsonfire config add
    KEY:ci_branches
    VALUE: master,production,otherbranch

From now on only ***master,production,otherbranch*** will be built.

If you want to remove the limitation simply run

    railsonfire config remove
    KEY:ci_branches

to remove the configuration. All branches will be tested from then on.

###Skip branches or commits (opt-out)

To exclude specific branches you can set the ***skip_ci_branches***
config parameter on your project.

    railsonfire config add
    KEY:skip_ci_branches
    VALUE: ignoredbranch

From now on the branch ***ignoredbranch*** will be ignored.

You can append ***--skip-ci*** to any branch to exclude it. For example
if you name your branch ***old--skip-ci*** it will be ignored, but all
other branches will still be tested.

If you want to exclude a specific push simply add ***--skip-ci*** into the commit
message of the last commit before you push.
