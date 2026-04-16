---
title: The Art of Frontend Engineering
date: 2023-07-28
category: Engineering
excerpt: With 3 years of experience in frontend with ReactJS, this is an exhaustive living document of practices I've found genuinely useful — from design systems and SEO to testing philosophy and advanced optimizations.
---

# The Art of Frontend Engineering

*Summary: With my 3 years of experience in the world of frontend with ReactJS, this is an exhaustive list of practices that I have found to be useful in my day to day work. This is a living document and will be updated as I learn more.*

## Motivation

As a college undergrad I knew more about high-level backend systems (because of system design interviews) and ML/AI (because of its general fame) — but all I knew about frontend was HTML, CSS, JS, jQuery. When I joined my first full-time job as a frontend software engineer at [Lowe's](https://www.lowes.com/), I realized how naive I was. Writing this article to share what I learned.

---

## Learnings

### 1. Frontend engineering is a lot more than just ReactJS / HTML / CSS / JS

#### Design systems

Every major tech company has its own UI design system, with dedicated framework teams to develop them. This keeps design consistent across the website. Popular examples: [Material UI](https://material-ui.com/), [Ant Design](https://ant.design/), [Bootstrap](https://getbootstrap.com/).

*Relevance: As a frontend engineer, you should understand the component APIs and style-guides of these design systems. Avoid using `px` when your design system handles sizing — it keeps your UI responsive.*

#### Backend for Frontend (BFF)

The **Backend-for-Frontend (BFF) design pattern** allows for a common main backend system and multiple sub-backends for each individual frontend's specific needs. An e-commerce website is a good example — a common backend for all products and a separate backend per page (to structure/combine/cache as per page needs).

#### SEO

SEO isn't just about `<og>` tags and `<meta>` tags. Your decision of **SSR (server-side rendered) vs CSR (client-side rendered)** depends on whether you want to be SEO-friendly.

- Pages behind a login system (dashboards, consoles, profile pages) won't be crawled — go with CSR, focus on UI with a "load as needed" philosophy.
- E-commerce, blogs, news, docs — you want pages crawled and ranked. Go SSR, focus on "load only what's important and fast."

This choice drives further decisions:
- Choice of framework (Next.js supports SSR out of the box).
- Lazy-loading vs pre-loading of assets.
- Order of API calls (current visibility vs data relevance for SEO).

#### Core Web Vitals

Google incorporates Core Web Vitals as a ranking factor. Ensure your website is fast, responsive, and interactive. Test with [WebPageTest](https://www.webpagetest.org/) and Lighthouse (Chrome DevTools).

#### Tooling & Frameworks

Knowing the **WHY** of each tool generally helps you guess the WHAT and HOW.

Must-know tools:
- Package managers — npm, yarn
- NodeJS, async-await, axios
- TypeScript *(and no, do not use `any` type)*
- Webpack and related plugins
- Linters — ESLint, Prettier

Must-know frameworks (any one of each):
- Web frameworks — React, Angular, Vue, Next.js
- State management — Redux, MobX, Apollo
- Testing — Jest, Enzyme, React Testing Library
- CSS — styled-components, CSS modules

#### CI/CD

Git and Docker are must-know universals. Good-to-know for frontend:
- Cloud basics (AWS preferred): cloud buckets, CDN (CloudFront, Akamai), Kubernetes basics.
- Integration tools — Jenkins is common, but understand configuration-driven development.
- Monitoring — Grafana; Logging — ELK stack.

#### Accessibility and Internationalization

Read about aria-tags, semantic HTML, WCAG guidelines, i18n.

#### Analytics tagging

Understand the basics of how analytics tagging and A/B testing works.

---

### 2. Development practices

*(The best resource for design patterns is [patterns.dev](https://www.patterns.dev/).)*

#### Single source of truth

With ever-increasing component tree sizes, this matters more than ever. **Your data should always come from a single source.** A common anti-pattern: calling an API in a higher-level component, editing that data, then re-calling the API in a child component instead of passing the edited data down. Use React's Context API or state management libraries.

#### DRY (Don't Repeat Yourself)

I've seen more copy-pasted components, utility functions, and styles than I'd like. Define each separately:
- Components based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) and [BEM](http://getbem.com/introduction/)
- Constants
- Utility functions
- Custom Hooks
- Global type definitions

#### Separation of concerns

A good rule of thumb: **a component should only do 1 thing.** Describe the component in 1 sentence — if you use "and", break it into multiple components. This helps with reusability, maintainability, and testability.

#### Don't reinvent the wheel

General-purpose methods like array iteration, string methods, etc. are available in open-source libraries like lodash. Know these in depth. They're highly tested and widely used.

#### Expect the unexpected

Understand techniques around:
- Form validation
- Debouncing and throttling

#### Avoid prop-drilling

Use React's Context API or state management libraries. Don't pass props down the component tree unnecessarily.

#### Others

- Write precise, concise documentation. Document the *why*, not the *what*.
- Variable naming should be precise and immediately clear to a new developer.
- Write precise type definitions.
- Understand your CSS — flex vs grid, em vs rem, etc.

---

### 3. Testing

#### Understand the focus of your test

You're building a frontend system for users to interact with. Test exactly that.

- Test events and user interactions.
- You're doing **frontend** testing, not API testing. **MOCK your APIs.**
- Don't just trigger an event for coverage. **Assert the UI changes.**
- Unit tests should be component-level — don't make them integration tests.

#### Integration tests

Tools like Selenium and WebdriverIO are very useful. Focus integration tests on:
- User experiences, not component functionality.
- Features — adding a new feature? Write an integration test for expected user behaviour.

---

### 4. Debugging

Learn to use:
- **Chrome Dev Tools and debugger** — Can't stress this enough. The most powerful tool in your arsenal.
- React Dev Tools
- Redux Dev Tools

---

### 5. Advanced concepts

- **Bundle size** — Use [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to understand what's going into your bundle.
- **Lazy-loading and code-splitting** — Lazy load what's not visible. Read about Intersection Observer API, React Lazy, Suspense, and server components.
- **Caching** — Understand browser caching (cache-control headers), CDN caching, and server-level caching.
- **A/B testing, feature flags, and multi-variate testing** — Understand concepts and implementation strategies.
- **Branching strategies and PR reviews** — Integrate SonarQube into CI/CD.
  - Junior engineers: focus on type definitions, linting, logic correctness, styling, design system usage.
  - Senior engineers: focus on business logic, repository standards, optimizations, performance.
  - PR reviews are where I learned the most.
- **Bounce rates and conversion rates** — Understand the basics.

---

## Personal Note

Before entering frontend engineering, I considered it a boring type of software engineering — who would sit and write CSS and edit pixels? But working through a wide variety of tickets, features, experiments, and bugs I understood:

- It's a very rewarding field. You get direct user feedback via analytics and you see people interacting with your work.
- A simple, blazing-fast UI with good UX can literally make a difference of millions of dollars. [Read](https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales).
- A normal person doesn't care about your caching techniques. They just want to get their work done. Keep it simple.
- Learn principles, not implementations. The implementation might change every 6 months — the principles remain.
- Once comfortable, try contributing to open-source. Frontend is one domain where you don't need huge domain knowledge to start.

---

## Best resources

- **CSS** — [web.dev/learn/css](https://web.dev/learn/css/)
- **JS** — [javascript.info](https://javascript.info/) — By far the best resource to learn JS.
- **React** — [React Docs](https://react.dev/) — The official docs are the best resource.
- **Lydia Hallie** — [YouTube](https://www.youtube.com/@theavocoder) — One of the best JS devs I follow.
