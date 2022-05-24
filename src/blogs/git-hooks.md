---
path: '/blog/git-post-commit-hooks'
date: 2020-05-12T17:12:33.962Z
title: 'Git Post Commit Hooks'
---

Have you ever found it difficult to remember what features or bugs you've spent the last week on? How about the
past month, or even year?

I find it hard. Sometimes It can even be hard to remember what I did by the end of a day. Luckily computers can remember for us.

Using git is a great way to track what you've done. If your commits are meaningful and frequent enough, fantastic - you can look back at these and see a timeline of what you've worked on.
But it's not always easy to keep track of your commits. For example:

-   What if you're using more than one git repo?
-   What if these repos are under different Source Code Management System e.g. some are on GitHub and others Bitbucket?
-   How about if you squash your commits after merging?

There are a range of issues that increase difficultly in tracking commits.

## So, how can we track all our commits?

If all of these changes are being made under git, you can use [git-hooks](https://git-scm.com/docs/githooks)!

These are small executable scripts that trigger when you perform actions with git. They can even be written
globally to trigger consistently for each git repo on your machine.

Here is how to set up global post-commit hooks to write to record all commits in a centralised document.

## Global Post Commit Hooks

### 1. Initialize Global Template

Firstly, globally set up git to use templates from the directory `.git-templates`:

```shell script
git config --global init.templatedir '~/.git-templates'
```

### 2. Add Hooks Directory

Add a `hooks` directory. This is where all the global hooks can be stored:

```shell script
mkdir .git-templates
cd .git-templates/
mkdir hooks
```

### 3. Write Your Hooks 😎

cd into the hooks directory, and create your hooks. For logging all my commits I use `git log` and write it to file:

```shell script
#!/bin/sh
# Replace the output path to your target destination
git log -1 > $HOME/commit-logs/all-commits.txt

```

Feel free to adapt the log to whatever meta-data you would like to document (I'd recommend keeping the commit times).

### 4. Make Hooks Executable

Don't forget to make your hooks executable, otherwise, they won't work!

```shell script
chmod +x ~/.git-templates/hooks/post-commit
```

### 5. Reinitialize Your Git Repos

You'll need to rerun `git init` in any existing git repos to get these new global updates. (This won't get remove of any
of your local git hooks!)

## Conclusion

Keeping a centralised document of all your commits can be a powerful asset to have.
This self-documenting method provides the opportunity to track your hours of customer work, see what features you
work on, and see a timeline of your work across any number of git repos.
