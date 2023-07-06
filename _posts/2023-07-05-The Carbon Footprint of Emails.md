---
title: The Carbon Footprint of Emails
date: 2023-07-05 22:07:00 -0400
categories: [Ideas, Random]
tags: [idea, carbon] # TAG names should always be lowercase
---

## Motivation

So the motivation of this idea comes from thousands and thousands of CVE (vulnerability report) emails flooding my work mail inbox almost everyday just because the ACLs (access control lists) were not configured correctly. So most of them were pretty much not relevant to me and being a frontend engineer I wasn't even responsible for managing the security issues of the deployment clusters.  
Also, when I saw my colleagues CVE email count being >100k that just blew my mind. Why can't we just delete it? Cause we tend to forget or these are not important to us. So why not create automated ways to do it?   

Let's explore...

## Let's talk about numbers

|---------------------------------------------------|-------------|-------|
|Number of emails sent per day | 332.2 B     | <a href="https://www.oberlo.com/statistics/how-many-emails-are-sent-per-day" target="_blank">Refer</a> |
|1 mail size                   | 75 KB       | <a href="https://www.lifewire.com/what-is-the-average-size-of-an-email-message-1171208" target="_blank">Refer</a> |
|Total size of new emails generated per day | 23 PB       |       |
|Percentage of useless, spam, suspicios emails | ~48%     | <a href="https://financesonline.com/email-statistics/" target="_blank">Refer</a> |
|Memory going waste in storing spam emails  | ~11PB/day   |       |
|Number of copies of each email stored in google clusters  | 3   |  <a href="https://martin.kleppmann.com/2017/01/26/data-loss-in-large-clusters" target="_blank">Refer</a> |
|Total memory going waste in storing spam emails  | ~33PB/day   |       |
|Carbon Footprint of data storage | 2 metric tonne / TB   | <a href="https://greenly.earth/en-us/blog/ecology-news/what-is-the-carbon-footprint-of-data-storage" target="_blank">Refer</a>|
|Total carbon footprint of spam emails per day  | ~67k metric tonne  |       |

(Note: We are not considering attachments, images and other asset files in an email still )

## My ideas on solving this

1. Allow users to create deletion schedules (user-defined periods) for their labels.  
   For eg. I subscribe to Medium Daily Digest and I group all these emails under 1 label. If I have the ability to configure a deletion schedule let's say delete all emails before past 7 days than my inbox stays clean, and saves space automatically.
2. Improve automatic tagging and give 1 click nudges to users to create group emails based on tags. Currently, I don't like the way we create filters and group the emails under a label. The creation of label itself a difficult user experience which a lot of users don't understand. So this idea coupled with point 1 has a huge potential for keeping email boxes clean and removing irrelevant, old data.

## A small disclaimer

I have not personally generated or taken part in generation of the statistics above. So the actual statistics might differ. The point of the article is to help readers understand that this is a problem and there are potentially good ideas to solve it.

## Comments?

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">How about a user defined time period for auto-deleting mails from your gmail/outlook folders (not just trash)? Would be useful for those non-imp subs or automated cve mails. <br>Interesting read: <a href="https://t.co/TOUvHwjU8o">https://t.co/TOUvHwjU8o</a><a href="https://twitter.com/hashtag/carbon?src=hash&amp;ref_src=twsrc%5Etfw">#carbon</a></p>&mdash; Shubham (@ShubhamRJ28) <a href="https://twitter.com/ShubhamRJ28/status/1473645741251829761?ref_src=twsrc%5Etfw">December 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
