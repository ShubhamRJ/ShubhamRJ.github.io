---
title: LLMs for hiring (short idea)
date: 2023-10-23
category: Ideas
excerpt: The hiring process is broken — the number of applicants is insane, feedback is absent, and candidates are left in confusion. Here's how LLMs could fix at least the feedback problem.
---

# LLMs for hiring (short idea)

## Motivation

The motivation for this is, unfortunately, rather a frustrating one. I am currently a grad student looking out for full-time opportunities. Having applied to countless applications for my internship search and now full-time search, having given multiple interviews, I have come to realize that the current hiring process is broken. I think we all agree on that.

The number of applicants is just insane, the difficulty level of online assessments is ever increasing, interviewers expect a lot from candidates, and the whole process is very one-sided where the company takes the higher ground.

While I believe the way an interview should be is a 2-way conversation to understand alignment of an individual to a company's work and values, the way it is now is the company trying to evaluate almost secretly whether they can hire a particular person. The biggest thing I don't like is the absence of proper feedback at the end of the process. A feedback, as I believe, makes the whole process a level playing field. Candidates also gain something from the interview.

This is especially true when you've given a great interview with all questions answered and you expect a positive outcome but then face rejection with no feedback whatsoever. This throws you into a state of confusion and self-doubt. This breaks the confidence of a candidate, especially when they are just starting out.

## The problem

While we all acknowledge the problem, I also empathize with the recruiters considering the insane number of applications they receive. It is not humanely possible to go through it all and reply with individual feedback.

## My attempt at solving this

In my solution, I am only tackling the problem of feedback. There are several other problems with different solutions.

#### Background / Assumptions

1. Be it a manager, an HR or a technical recruiter, they all have feedback at the end of the interview that they personally pass on to the hiring manager.
2. Big tech have their own job portals while smaller ones use Greenhouse, Workday etc. Either way there is a platform big enough to incorporate AI solutions.

#### Solution

First, a personal feedback is only required in the case of interviews. Rejection at the online assessment phase can be classified as:

1. The candidate didn't pass the assessment.
2. The job opening is already filled.
3. The candidate does not fit some legal requirements (e.g. work authorization, security clearance).

Each of these can be tackled by a quick general feedback.

For a personal feedback after an interview, I propose:

1. Build the platform to allow sharing of feedback from all hiring personnel involved at the same place.
2. Train an LLM to use all the written feedback to generate a readable summary for the applicant.
3. As the hiring manager sends a rejection, they can read the generated feedback (building trust in the system) and send it directly. This automatically guarantees a fast, personalized feedback loop.

## Final words

I believe this type of feedback mechanism will not only put a candidate's mind at ease, but also help them understand their weak points and work on them. At the same time, this reflects a company's culture of being transparent — putting them in a greener light for candidates. I believe this is a win-win situation for both parties.
