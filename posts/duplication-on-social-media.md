---
title: Let's talk about duplication on social media
date: 2023-07-22
category: Ideas
excerpt: The same image posted by hundreds of different accounts — not reposts, actual duplicates. This wastes enormous storage and infrastructure. Here's a simple fix that benefits creators, platforms, and the planet.
---

# Let's talk about duplication on social media

## Motivation

I've been thinking about this for a while. I've been seeing a lot of duplicate images on social media. I'm not talking about reposts — I'm talking about the same image being posted by different people. I'm not sure if this is a problem or not, but I think it's worth talking about.

And given my middle-class Indian roots, any time I see any kind of redundancy it bugs me. So I thought I'd write about it.

## The problem

There are a lot of duplicate images, videos, etc. on social media like Instagram, Facebook, Twitter. It's very easy to download images from these platforms and post them on your own profile. Go to Instagram, search any celebrity, go to the tagged section of their profile — the same image posted by hundreds of different accounts.

- **The amount of storage being spent on storing the same image again and again on media servers is enormous.** In technicality, content gets replicated in the backend for fail-safe storage too. Imagine a creator posting a media, 100+ accounts duplicating it, and then the tech infrastructure re-duplicating each copy for redundancy. Happening for millions of accounts all across the world.
- If a huge number of users are using the platform in a certain hacky way, **the platform should update itself to provide that functionality inherently.** If people are going to copy and post the same media (and the whole of social media influencing depends on this) — why not provide a feature to do that properly?

## My approach to solve this

The following solution is meant only for users with open public profiles (by keeping it public, they are implicitly allowing others to use their content).

1. **For public profiles, the platform should provide a button that allows reposting content as a post from your own profile.** This way the platform only maintains a single copy of the resource, and the rest of the posts are just pointers to that resource. Saves enormous space!

2. **Who is the original author?** Consider a celebrity posting their own pictures, but the photo studio that took those pictures also posting them in parallel — who's the original?
   - With Blue Ticks for verified users: **any verified user's content is considered original.**
   - In case of disputes or parallel posting, the entities involved can dispute among themselves and go through legal channels per their contracts.

3. **What if an unverified profile posts a verified entity's content?**
   - Platforms can tweak their recommendation algorithms to less-promote content from unverified users copying verified users' content. Platforms already promote based on follower count — this is a good addition.
   - The verified user can report these accounts under a special "pirated content" category. The platform can take action accordingly.

## Benefits

1. **Creator credit and citation** — The biggest benefit. Content is always reposted from the original, so creators always get attribution.
2. **Storage savings** — With platforms increasing reel sizes and media upload quality, a good amount of duplication can be reduced.

## Implementation details

1. The platform already stores original media uniquely on their servers. When users click a repost button, the UX shows a post editing window with the media already present and an editable caption. The backend creates a new post linked to the original media — no new copy stored.

2. The platforms can add duplication detection (reverse image/video search) to detect if the media already exists. If it does, prompt the user to repost the original post instead of uploading a duplicate.

*I will try to update the exact implementation details over time. I could be wrong about the technical effort required, but I still think this is very doable.*

If you can think of any scenarios I might have missed, I'd love to find solutions or workarounds!
