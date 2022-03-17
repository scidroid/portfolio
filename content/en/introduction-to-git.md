---
title: 'An introduction to Git: My first commit'
date: 'June 9, 2021'
description: 'Git allows us to manage, distribute and collaborate on our code so that it is organized and there is an efficient workflow when programming with several people, it will also help us to do things like going back to previous versions of our project.'
tags: ['Git', 'Programming']
banner: 'https://s2.loli.net/2021/12/23/ftEzv1gDspqQmcU.png'
---

<details> 
  <summary>Table of contents</summary>
  
  [[toc]]
</details>

## What is Git?

Git is a version control system initially created by Linus Torvalds, the same creator of the Linux kernel. Git was born when the Linux kernel used a version control system called BitKeeper, but this was proprietary (or closed source) and when the kernel contributors decided to look at other systems they found that none of the alternatives at the time were sufficient.
![Linux Trovalds](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2kulqu1vmzdkaj6h11ua.jpg)
Git allows us to manage, distribute and collaborate on our code so that it is organized and there is an efficient workflow when programming with several people, it will also help us to do things like going back to previous versions of our project, or see what the other people who collaborate on our project have programmed.

## Installing Git

You can install Git on your computer in several ways, the easiest is if you have a package manager, such as aptitude, [brew](https://brew.sh/) or [chocolatey](https://chocolatey.org/).
if you have some of these just run this line in your terminal, if you are on linux or MacOS and it does not work correctly you can run it with the `sudo` instruction at the beginning of the command.

```bash
{apt | brew | choco} install git
```

if you do not have package managers installed you can install it using the official distribution in the [website](https://git-scm.com/):

![Download git](https://s2.loli.net/2021/12/23/mdMEAuhbl2PwWfn.png)

## Let's start with Git

To start let's create a folder, and open that folder in the terminal, then we must initialize our repository, for that we execute the command `git init` and it should say that the repository has been initialized and now we can start managing versions in our code.
To start executing commands we are going to create a code example, in this case an HTML document where we are going to create a Christmas wishlist.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Wishlist</title>
  </head>
  <body>
    <h1>Wish List for christmas</h1>
    <ul>
      <li>Be a superhero</li>
      <li>Buy a Mansion with my junior salary</li>
      <li>visit the <a href="https://scidroid.co">SciDroid's Web</a></li>
    </ul>
  </body>
</html>
```

When we save this file we can make a commit, which will allow us to save the changes in this file. let's see the example.
The first thing we will do is to add the file to git, for this we will do the following command

```bash
git add index.html
```

This command will make git start checking the changes in our file, and the last step before making our first commits is to execute these commands to identify ourselves.

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com`}
```

Just change the name and email to your name and email address.
Now the last part is to make a commit, just run the following command and change the message to the one you like.

```bash
git commit -m "message"
```

and if everything went well, congratulations you have done your first commit, now keep learning because git is an essential tool in development.

Thanks for reading.
