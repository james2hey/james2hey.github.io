# Git Hooks

I've been using git for some years now, and have come up with a few methods to speed up my day-to-day workflow using 
[githooks](https://git-scm.com/docs/githooks). These are small executable scripts you can write to trigger when you 
perform actions with git. For example, I like to keep local copies of each commit message I make to easily 
track my tasks done throughout the week. This can be especially helpful when working across multiple git repos.


Here's is an example of how I this up:

### 1. Initialize Global Template
Firstly, I globally setup git to use templates from the directory `.git-templates`:

```shell script
git config --global init.templatedir '~/.git-templates'
```

### 2. Add Hooks Directory
A `hooks` directory needs to be created. This is where all the global hooks can be stored:

```shell script
mkdir ~/.git-templates/hooks
```
### 3. Write Your Hooks 😎
Now you can write scripts inside the hooks directory. For logging all my commits I use gits log command and write it to file:
```shell script
#!/bin/sh
git log -1 > all_commits.txt

```

### 4. Make Them Executable
Don't forget to make your hooks executable, otherwise they won't work!
```shell script
chmod +x ~/.git-templates/hooks/post-commit
```

### 5. Reinitialize Your Git Repos
You also need to rerun `git init` in any existing git repos to get these new global updates. This won't get rid of any 
of local git hooks.
