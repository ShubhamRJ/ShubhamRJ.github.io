---
title: The Carbon Footprint of Emails
date: 2023-07-05
category: Ideas
excerpt: Thousands of irrelevant CVE emails flooding an inbox sparked this question — how much storage and carbon do spam and forgotten emails actually waste? The numbers are staggering.
---

# The Carbon Footprint of Emails

## Motivation

The motivation for this idea comes from thousands and thousands of CVE (vulnerability report) emails flooding my work inbox almost every day because ACLs (access control lists) were not configured correctly. Most were not relevant to me — being a frontend engineer, I wasn't responsible for managing security issues of deployment clusters.

When I saw my colleague's CVE email count being >100k that just blew my mind. Why can't we just delete it? Because we tend to forget, or these are not important to us. So why not create automated ways to do it?

## Let's talk about numbers

| Metric | Value |
|--------|-------|
| Number of emails sent per day | 332.2 billion ([Refer](https://www.oberlo.com/statistics/how-many-emails-are-sent-per-day)) |
| Average email size | 75 KB ([Refer](https://www.lifewire.com/what-is-the-average-size-of-an-email-message-1171208)) |
| Total size of new emails generated per day | ~23 PB |
| Percentage of useless / spam / suspicious emails | ~48% ([Refer](https://financesonline.com/email-statistics/)) |
| Memory wasted storing spam emails | ~11 PB/day |
| Number of copies of each email stored (e.g. Google clusters) | 3 ([Refer](https://martin.kleppmann.com/2017/01/26/data-loss-in-large-clusters)) |
| Total memory wasted storing spam emails (with replication) | ~33 PB/day |
| Carbon footprint of data storage | 2 metric tonnes / TB ([Refer](https://greenly.earth/en-us/blog/ecology-news/what-is-the-carbon-footprint-of-data-storage)) |
| **Total carbon footprint of spam emails per day** | **~67,000 metric tonnes** |

*(Note: This doesn't include attachments, images and other asset files.)*

- This is close to driving **14,910 gasoline-powered passenger vehicles for one year**.
- To offset one tonne of CO₂, you would need between 31–46 trees.

## My ideas on solving this

1. **Allow users to create deletion schedules (user-defined periods) for their labels.**
   For example, I subscribe to Medium Daily Digest and group all those emails under 1 label. If I could configure a deletion schedule — delete all emails older than 7 days — my inbox stays clean and saves space automatically.

2. **Improve automatic tagging and give 1-click nudges to users to create group emails based on tags.** Currently I don't like the way we create filters and group emails under a label — the UX is difficult and many users don't understand it. This idea coupled with point 1 has huge potential for keeping inboxes clean and removing irrelevant, old data.

## A small disclaimer

I have not personally generated or taken part in generating the statistics above. The actual statistics might differ. The point of this article is to help readers understand that this is a real problem and there are potentially good ideas to solve it.

---

> How about a user-defined time period for auto-deleting mails from your Gmail/Outlook folders (not just trash)? Would be useful for those non-important subscriptions or automated CVE mails.
>
> — Shubham ([@ShubhamRJ28](https://x.com/ShubhamRJ28))
