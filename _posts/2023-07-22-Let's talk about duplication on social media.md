---
title: Let's talk about duplication on social media
date: 2023-07-22 10:16:00 -0400
categories: [Ideas, Random]
tags: [idea, carbon, social media]
---

## Motivation
Ok, so I've been thinking about this for a while now. I've been seeing a lot of duplicate images on social media. I'm not talking about reposts, I'm talking about the same image being posted by different people. I'm not sure if this is a problem or not, but I think it's worth talking about.   
And given my middle-class Indian roots, any time I see any kinda redudancy it bugs me. So I thought I'd write about it.

## The problem
So, the problem is that there are a lot of duplicate images, videos etc. on social media like Instagram, Facebook, Twitter etc. It's very easy to download images from these platforms and post it on your own profile. Especially when I see the number of same picture of a certain celebrity more than 100 times on my feed by different accounts. You can see this too - go to Instagram - search any celebrity - and go the tagged section of their profile and viola! Same image posted by 100s of different accounts (and these are only the ones in which the account actually tagged the celebrity back).   

- So, what bugs me is, <strong>the amount of storage being spent on storing the same image again and again on the media servers of these platforms.</strong> I mean, I'm sure they have a lot of storage, but still, it's a waste of storage. And in technicality, the content gets replicated in backend for fail-safe storage.   
So just imagine a creator posting a media - and 100s of accounts duplicating it - so there are 100+ copies of the same media and now the tech infrastructure re-duplicates it reduce failure issues and other benefit and this happening for millions of accounts all-across the world.     
- And, one thing that I believe is, if a huge number of user are using the platform in a certain hacky way - the platform should update itself to provide that functionality inherently. If people are gonna copy and post the same media again (and the whole of social media influencing depends on this) - why not provide a feature to do that?

## My approach to solve this

So, when I propose the following solution its meant only for users with open public profiles on the platforms. (As by keeping it public, they are implicitly allowing others to use their content though one can argue about copyrights and privacy - but practically that's how it works right now).

The solution:   
1. My solution is simple - for public profiles - <strong>the platform should itself provide a button that allows reposting the content as a post from your own profile</strong>.   
This way the platform has to only maintain a single copy of the resource and the rest of the posts are just pointers to that resource. Saves up so much space!
2. You might argue how do we determine for a media who is the original author if many have posted in parallely. (Like consider a celebrity has posted some of their own pictures but the photo studio that clicked those pictures have also posted it parallely - <strong>who's content is the original one?).</strong>    
For that -
<i>(With Twitter and Instagram's incorportation of Blue ticks for verified users.) </i>
  - <strong>Any verified user's content will be considered original.</strong>
  - In case of disputes, parallel posting of same content by multiple accounts (as stated above) - the entities involved can dispute this among themselves and can even go for legal ways as per their contracts or any other prior discussions.

3. Now what if a profile is not verified and still posts some verified entities content - what do we do in this case as we don't really know the real user behind the pirated content. For this:
  - Firstly, the platforms can tweek their recommendation algorithms to less promote the content of unverified users. Platforms already promote content based on the number of followers. So, this can be a good addition to that. If a user is influential enough to have lot of followers or worry about the piracy of their content - they can get their profile verified.
  - The verified user can also report these accounts under special category of pirated content. And the platform can take action accordingly.

## Benefits of doing this
1. Even before storage savings, I would consider the biggest benefit of this approach is for creators and influences to get credits and citations to their original content as the content is always reposted.
2. Storage savings - with platforms trying to increase the size of reels and quality of media uploads - we are storing more data than ever. This way, a good amount of duplication can be reduced if not all.


## Implementation details
1. The platform already stores the original media on their servers and they are uniquely identifiable. So, I don't see a HUGE backend update required for this. As soon as the users click on repost button (like Twitter's) - the user experience shows a post editing window - with the media already present and an editable caption. The backend can just create a new post with the same media and caption and also link it to the original media.
2. The platforms can add duplication detection (basically a reverse image/video media search functionality) to detect if the media is already present on the platform. If it is, prompt the user to repost the original post. This is not very feasible in current scenario as it is quite difficult to find the original creator of the post and also since there are huge number of copies already present.


<i>P.S. I can go into deep implementation details and maybe I could be wrong about the technical effort required for this. BUT, in my experience, I still think this is very doable</i>

If you can think of any scenarios I might have missed, I'd love to know and find solutions/work-arounds for them. Feel free to reach out to me on my socials.