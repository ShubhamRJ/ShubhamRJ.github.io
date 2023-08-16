---
title: The Art of Frontend Engineering
date: 2023-07-28 21:12:00 -0400
categories: [Frontend, Engineering]
tags: [Frontend, Engineering]
---

Summary: With my 3 years of experience in the world of frontend with ReactJS, these is an exhuastive list of practices that I have found to be useful in my day to day work. This is a living document and will be updated as I learn more.

## Motivation
Personally, as a college undergrad I knew more about the high-level backend systems (because of its need in system design interviews) and ML/AI (cause its general fame) but all I knew about frontend was HTML, CSS, JS, jQuery etc. As I joined my first full-time job as a frontend software engineer at [Lowe's](https://www.lowes.com/) I realized how naive I was. Thus, writing this article to share my experience.
<br/>
<hr>

## Learnings
1. ### Frontend engineering is lot more than just ReactJS / HTML / CSS / JS. It's also about:
   1. #### Design systems
   Every major tech company has its own UI design system and there are dedicated framework teams to develop these. This helps in keeping the design across the website(s) consistent. Some of the popular design systems are: [Material UI](https://material-ui.com/), [Ant Design](https://ant.design/), [Bootstrap](https://getbootstrap.com/) etc.   
   <i><u>Relevance:</u></i> As a frontend engineer, you should be able to understand the <strong><i>component APIs, style-guides</i></strong> (avoid use 'px' when your design system takes care of sizing as that keeps your UI responsive) of these design systems.
   2. #### Backend
   An interesting thing to know is the <strong><i>Backend-for-frontend (BFF) design pattern</i></strong> - which basically allows for a common main backend system and multiple sub-backend systems for each individual frontend-specific needs. An e-commerce website is a good example of this - where you have a common backend for all the products and a separate backend for each of the pages (to structure/combine/cache as per the need of the page).
   3. #### SEO
  So when I say SEO, its not just about ensuring you have the correct <og> tags, <meta> tags etc. Your <strong><i>decision of (SSR) server-side rendered pages vs (CSR) client-side rendered pages</i></strong> depends on whether you want to be SEO friendly or not.     
      - If you building web pages that lie behind a login system (such as cloud consoles, dashboards, profile pages etc.) these are not gonna be crawled by a web crawler. So you can go with CSR and focus on UI with a philosophy of "load as needed".   
      - If you building for e-commerce websites, blogs, news, documentations etc. you want your pages to be crawled and ranked high up in the search results as this primarily drives your revenue. So you need SSR pages and focus on UI with a philosophy of "load only what's important and fast".    
    The choice between CSR vs SSR drives further decisions such as:
      1. Choice of framework (like NextJS supports SSR out-of-the-box).
      2. Choices of lazy-loading vs pre-loading of assets (images, JS files etc.)
      3. Order of your API calls (call APIs based on current visibility vs call APIs based on relevances of data for SEO)
   4. #### Core Web Vitals
   Expanding on the point of SEO - Google has now incorporated the Core Web Vitals as a ranking factor for SEO. So you need to ensure that your website is fast, responsive and interactive. This is a very good [article](https://web.dev/vitals/#core-web-vitals) to understand the Core Web Vitals. Test your pages using 
      1. [WebPageTest](https://www.webpagetest.org/)
      2. Lighthouse (Chrome DevTools)
   5. #### Tooling & Frameworks
   Knowing the WHY of each of these generally helps you in guessing their WHAT and HOW.
      - One needs to know tools like:
        1. [❗️Must] Package managers - npm, yarn etc.
        2. [❗️Must] NodeJS, async-await, axios etc.
        3. [❗️Must] TypeScript (and no do not use `any` type)
        4. [❗️Must] [Webpack](https://webpack.js.org/concepts/) (and related plugins)
        5. [❗️Must] Linters ([Eslint](https://eslint.org/docs/latest/), [Prettier](https://prettier.io/docs/en/))
        6. [Babel](https://babeljs.io/docs/)
      - And frameworks like (any one of each of these is fine):
        1. [❗️Must] Web frameworks - React, Angular, Vue, NextJS etc.
        2. State management frameworks - Redux, redux-saga, MobX, Apollo etc.
        3. [❗️Must] Testing frameworks - Jest, Enzyme, React Testing Library etc.
        4. CSS frameworks - styled-components, css-in-js, css-modules etc.
   6. #### CI/CD
   [❗️Must] Git and Docker are the must-know and ubiquitous to software engineering in general. Apart from these, <strong>following are good-to-know only</strong> for frontend engineering <i>(I say good-to-know as the CI/CD varies a lot from org to orgs and each one will have its own learning curve)</i>:
      1. Cloud - AWS (preferably and most-used), GCP, Azure etc. Personally, I have never had to know the whole cloud - most of it is taken care of by infrastructure teams. But, being frontend-focused in this article, the following are good-to-know:
         1. Cloud buckets and versioning.
         2. Content Delivery Network (CDN) - CloudFront, Akamai etc.
         3. Kubernetes basics (especially for large scale companies)
         4. Cloud registry - ECR, GCR, DockerHub, JFrog Artifactory etc.
      2. Integration tools - Jenkins is the one I worked with the most. But more importantly, you need to understand the concept of configuration-driven development.
      3. Deployment tools - I don't think you need to know any. You'll probably learn a new one when you join a new company. Spinnaker is the one I worked with.
      4. Monitoring tools - Grafana dashboards etc.
      5. Logging tools - ELK stack, Cloud logging, etc. 
   7. #### Accessibility and Internationalization, 
    Read about aria-tags, semantic HTML, WCAG guidelines, i18n etc.
   8. #### Analytics tagging
   Understand the basics of how analytics tagging and testing works.


2. ### Development practices
   While we mostly talk about design patterns in the context of API design, some of the following practices and principles are the ones I have found super-useful to know. <i>(P.S. I am still learning design patterns myself. The best resource for learning this is [patterns.dev](https://www.patterns.dev/).)</i>
   1. #### Single source of truth
   With the ever-increasing size of components trees, this is more important than ever. <strong>Your data should always come from a single source.</strong> A common anti-patterns is to call an API in a higher level component, editing that data and than instead of passing the edited data down the component tree - recalling the API in some child component. This leads to a lot of confusion and bugs. Use <strong>React's Context API, state-management libraries.</strong>. 
   2. #### DRY (Don't Repeat Yourself)
   But not just data, I have seen more often than I would like - components, utility functions, styles etc. getting copy-pasted within a repository. This could be easily avoided by a precise directory structure in your repository. Define each of these seperately:
    - [❗️Must] Components based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) and [BEM](http://getbem.com/introduction/)
    - Constants
    - Utility functions
    - Custom Hooks
    - Global Type Definitions, etc.
   3. #### Seperation of concerns
   Again more-often-than-not I have seen single components going to the size of 1000+ LOC. This maybe required for top-level components which generally hold more business logic than their children. But, a good rule of thumb is, <strong>a component should only do 1 thing</strong>. Think of it this way - describe the component in 1 sentence and if you are using 'and' in that sentence, you need to break it down into multiple components. This helps in reusability, maintainability and testability of your code.
   4. #### Don't invent the wheel
   A lot of general-purpose methods like isObject, array iteration methods, string methods etc. are available in open-source libraries such as lodash, etc. Know the capabilities of these libraries in depth to avoid reinventing the wheel. These are highly tested and used across the world so the chances of buggy code is less.
   5. #### Expect the unexpected
   A lot of users (including myself), love to play around with your UI - eg. click here and then there and then there and OH this page broke OR eg. let's try an injection attack or hit a mini-DOS attack etc. Understand techniques around:
   - Form validation
   - Debouncing and throttling
   6. #### Avoid prop-drilling
    This is a very common anti-pattern. You should avoid passing props down the component tree. Use React's Context API or state-management libraries for this.
   7. #### Others
      1. Write precise and concise documentations wherever required. Aim should be on writing the smallest line that just gets the job done.
      2. Variable naming though difficult should be precise and should get the usecase of it to a new developer immediately.
      3. Write precise type definitions while developing.
      4. Understand your CSS! flex vs grid, em vs rem, etc.

3. ### Testing
   Remember the following while writing tests:
   1. #### Understanding the focus of your test
    You are building a frontend system for user's to interact. So you should be testing exactly that. Now you make think, isn't that obvious? But again, more often than not, I have observed people focusing on testing their code and internal functions to get 100% code coverage. Coverage report should act as a feedback for you to understand what cases you might have missed in your tests but more importantly in your UI. You've build an UI based on an API's success response but what if the API fails?
    - Test events and user interactions
    - You are doing frontend testing and not API testing. MOCK your APIs. Use mock servers for this.
    - Do not just trigger an event and do nothing cause you got the coverage by just the trigger. Assert the UI changes.
    - Unit tests should be component level - do not make it an integration test where you test what's happening in 10th child component.   
    This is why, understanding your testing frameworks A-Z is very important.
    1. #### Integration tests
    This is something that not all developers do. Many times, this work is offloaded to QA teams. But, knowing tools like selenium and webdriver-io could be very useful for writing integration tests.
    The focus of integration tests should be on:
    - On user experiences and not component functionality
    - Features - Adding a new feature? Write an integration test for expected user behaviour. 


4. ### Debugging
   Learn to use:
   1. [❗️Must] Chrome Dev Tools and debugger - Can't stress this enough. This is the most powerful tool in your arsenal. Learn to use it to its full potential.
   2. React Dev Tools
   3. Redux Dev Tools


5. ### Advance Concepts
   1. Keep an eye on your bundle sizes. Use tools like [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to understand what's going into your bundle. This is especially important for large scale applications.
   2. Understand and implement lazy-loading and code-splitting. A general rule of thumb is lazy load what's not visible. Read about
      - Intersection Observer API - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
      - React Lazy, Suspense, and the new server components.
   3. Understand different levels of caching.
      1. Browser caching - How to set cache-control headers in your API response?
      2. CDN caching - How to set cache-control headers in your CDN?
      3. Server level caching
   4. Understand the concepts and implementation strategies around
      - A/B Testing and multi-variate testing
      - Feature Flags and environment variables
      - Dev, Stage, Dark, Production environments
   5. Branching strategies, PR reviews and code reviews - This depends a lot on the business criticality of your project but read about it. Integrate tools like SonarQube, etc. to your CI/CD pipeline.
      1. Integrate tools like SonarQube and add merge check based on sonarqube report. This will automatically block merges for untested code, code smells. etc.
      2. Keep a multi-level review strategy
         1. Junior engineers should focus on ensuring correctness of type definitions, linting, logic correctness, styling, use of design system etc.
         2. Senior engineers should focus on ensuring correctness of business logic, maintaining repository standards, optimizations, performance, etc.
      3. Last but not the least, PR reviews was one place where I learned the most from comments of senior engineers.
   6. Bounce rates, conversion rates, etc. - Understand the basics of how these are calculated and what they mean.


  6. ### Other Cool Stuff
     1. [Storybook.js](https://storybook.js.org/)

<br/>
<hr>

## Personal Note
   Before entering frontend engineering, I used to consider it as a boring type of software engineering. Who would someone sit and write CSS and edit pixels huh? But working through a wide variety of tickets, features, experiments and bugs I understood:
   - It's a very rewarding field. You get direct user feedbacks via analytics and you see people interacting with your work.
   - A simple, blazing fast UI with a good UX can literally make a difference of millions of dollars.
   - A normal average person does not care about your caching techniques etc. They just want to get their work done. So keep it simple. Amazon's UI is not the best out there but it works and earns them billions of dollars.
   - Understanding the life-cycle of frameworks and libraries is very important. Especially when the whole frontend engineering depends a lot on open-source.
   - Learn principles not implementations. The implementation might change every 6 months but the principles remain the same.

<br/>
<hr>

## Best resource

1. CSS - Can't stress enough on the importance of knowing good CSS. No it's not hit & trial. [web.dev](https://web.dev/learn/css/)
2. JS - [javascript.info](https://javascript.info/) - By far the best resource to learn JS.
3. React - [React Docs](https://react.dev/blog/2023/03/16/introducing-react-dev) - The official docs are the best resource to learn React.