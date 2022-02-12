---
title: "Your site is probably illegal."
date: "February 4, 2022"
description: "Many people think of website analytics as just another add-on. But it's much more complex than that. Learn how to make analytics protect the privacy of your users and learn how to do it easily."
tags: ["Analytics", "Splitbee"]
banner: "https://s2.loli.net/2022/02/05/JzlbKSC2ZfEyLYp.jpg"
---

<details> 
  
  <summary>Table of contents</summary>

  [[toc]]

</details>

Privacy on the internet is a serious issue as developers we have the responsibility to respect it, this includes things like using secure communication protocols such as HTTPS as well as how and where you store user information.

But something that many of us don't think about are the analytics, which in some part are sensitive information of our users and around the world there are laws that regulate it, in this article we will talk a little about why analytics can make your site break the law, what alternatives we have, and how we can implement secure analytics on your website.

## Why analytics can make your site break the law?

Analytics are a great way to improve your website, by tracking pageviews, unique visitors, and other statistics you can get a better understanding of how your site is being used and make necessary changes.

But while analytics are a great tool, they can also be used to track and spy on users, which can be a privacy concern. This is why many countries have laws regulating the use of analytics, in the European Union the [General Data Protection Regulation (GDPR)](https://ec.europa.eu/info/law/law-topic/data-protection) is a law that regulates the use of analytics and other forms of data collection.

### What are the requirements of GDPR?

The GDPR requires that websites get user consent before collecting any data, this includes things like cookies, analytics, and social media buttons. User consent must be explicit, meaning that the user has to actively agree to have their data collected, it cannot be implied or assumed.

Widely used services such as Google Analytics do not comply with these laws so in our sites we must add things like cookies banners and in [some countries these services become illegal](https://noyb.eu/en/austrian-dsb-eu-us-data-transfers-google-analytics-illegal).

![Cookie Banner Example](https://s2.loli.net/2022/02/05/MxoVzg4Y1a5ePfj.png)

And user data must be protected, it must be stored in a secure manner and be accessible only by authorized personnel. If a website doesn't comply with the GDPR they can be fined up to 4% of their global annual revenue or €20 million (whichever is greater), so it's important to understand and comply with the requirements of the GDPR.

## What alternatives do we have?

If you want to collect analytics data but don't want to break the law, there are a few alternatives you can use.

One alternative is to use a third-party analytics provider, these providers are GDPR compliant and will ensure that your data is collected and stored in a secure manner.

### Splitbee

![Splitbee](https://s2.loli.net/2022/02/05/Tj32fSqM6dPGunl.png)

Splitbee is my favourite analytics service and the one this site uses, not only is it privacy-friendly and GDPR compliant, it also allows you to create conversion funnels, get real-time analytics, manage events easily, do A/B tests and create automations like sending emails every time an action is executed (which is what I use in my contact form).

Plus it allows you to do all this in it's free layer with 2.500 events which also makes it ideal for blogs and small sites, and if your site moves more traffic you can upgrade to a paid plan that allows you to have much more information about your visitors.

In this blog we will also learn how to integrate it into your Next.js site so you can use it quickly.

You can [visit their site here](https://splitbee.io).

### Fathom

![Fathom screenshot](https://s2.loli.net/2022/02/05/ZsYo5GqUu7NTLnw.png)

Fathom does not have a free version, but it is still a very solid option since paying 14 dollars you can register up to 100.000 views. It has a simple interface, but does not include automations, experiments, user profiles and more that Splitbee does, I recommend this service if you want something as simple as possible.

You can [try it here with 10 dollars free credit](https://usefathom.com/ref/8C8RPY).

### Simple Analytics

![Simple Analytics dashboard](https://s2.loli.net/2022/02/05/WEnyloexdTPNAUc.png)

Simple Analytics is another alternative, this one is a bit more expensive than fathom with a basic plan starting from 19 dollars, but this one allows you to have analytics on as many sites as you want, plus it has some interesting features like knowing from which tweets your visits come from. otherwise it is very similar to Fathom.

You can [try it here](https://simpleanalytics.com/).

---

Another alternative is to use a tool with server-side analytics like [Netlify Analytics](https://www.netlify.com/products/analytics/), this tool allows you to collect analytics data without using cookies or other tracking technologies.

And finally, you can also use a tool like [Matomo](https://matomo.org/), which is an open source analytics tool that you can host on your own server and configurations.

## Implementing Splitbee in a Next.js site

Now let's make a small Splitbee example in Next.js. 

Before we start we just need to create an account, you can go directly by [clicking here](https://app.splitbee.io/).

![Splitbee login](https://s2.loli.net/2022/02/05/Q6mtiKJ81y7Ppf2.png)

When we have registered we must create a new project, just put a name and a url, and we would have everything ready in this part.

![New project page](https://s2.loli.net/2022/02/05/rTSPmA3g81lxKYn.png)

Since we have a project let's start with the code.

---

First we must install the packages we need.

```bash
yarn add @splitbee/web

// or

npm install @splitbee/web
```
Now we will use one of the functions of Next that will allow us to make a kind of proxy by allowing us to make routes in our site that redirect to another part, in this case we will do it to store the script and the endpoint of the API in our own site.
```javascript
// next.config.js

const rewrites = async () => {
  return [
    {
      source: "/sb.js",
      destination: "https://cdn.splitbee.io/sb.js",
    },
    {
      source: "/_hive/:slug",
      destination: "https://hive.splitbee.io/:slug",
    },
  ];
};

modules.exports = {
  rewrites,
};
```
Now we will create a special Next file that will allow us to add the Splitbee script to all the pages of our site. 
```jsx
// pages/_app.js

import { useEffect } from "react";
import splitbee from "@splitbee/web";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/sb.js",
      apiUrl: "/_hive",
    });
  });

  return <Component {...pageProps} />;
};

export default App;
```
And now we have everything ready, and with this we can have statistics of visitors to our site, including the countries from which they visit us, the number of views, even from what website our users came from.

And if we visit our Splitbee panel we will be able to see something like this.

![Splitbee panel](https://s2.loli.net/2022/02/05/cfRAsdvrUZSOHzl.png)

---

### Other features

Splitbee in addition to all the above mentioned allows us to manage events and store user data, now we will learn how to use them.

First we will make a function that will allow us to handle events, which is nothing more than an indicator that an action was performed, which we can give a name and other additional values.

In the second function we will be able to add parameters to the users, for example in the analytics page we can identify the actions of our users by being able to relate them with their names, as in the example below.

![User Example](https://s2.loli.net/2022/02/05/LBCNz47hIRMyind.png)

```javascript
// utils/analytics.js

import splitbee from "@splitbee/web";

// Events
const trackEvent = (event, details) => splitbee.track(event, details);

// Save user data
const setUser = (name, email) =>
  splitbee.user.set({
    name,
    email,
  });
```
And this can be implemented in different ways, here are some examples:

#### Record event at button press

```jsx
import { trackEvent } from "utils/analytics";

const ButtonWithEvent = ({ name, children }) => {
  return (
    <button onClick={(() => trackEvent("Button clicked"), { id: name })}>
      {children}
    </button>
  );
};
```
#### Define user when filling out a form

```jsx
import { setUser } from "utils/analytics";

const SignUpForm = () => {
  return (
    <form onSubmit={() => setUser(name, email)}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="submit" />
    </form>
  );
};
```
In the end, by mixing events and setting user data we can have very complete navigation statistics as seen below.

![Splitbee user dashboard](https://s2.loli.net/2022/02/05/qhogI2cW8i1bYfH.png)

