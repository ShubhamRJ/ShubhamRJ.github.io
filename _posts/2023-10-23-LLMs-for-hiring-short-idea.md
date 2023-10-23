---
title: LLMs for hiring (short idea)
date: 2023-10-23 11:15:00 -0400
categories: [Ideas, LLMs-for-hiring]
tags: [LLMs, NLP, Hiring]
---

## Motivation
The motivation for this is, unfortunately, rather a frustrating one. I am currently a grad student looking out for full-time opportunities. Having applied to countless applications for my internship search and now full-time search, having given multiple interviews, I have come to realize that the current hiring process is broken. I think we all agree on that. The number of applicants is just insane, the difficulty level of online assessments is ever increasing, interviewers expect a lot from candidates, and the whole process is very one-sided where the company takes the higher ground.   
While I believe the way an interview should be is a 2 way conversation to understand alignment of an individual to a company's work, values etc., the way it is now is the company trying to evaluate almost secretly if they can hire a particular person or not. The biggest thing I don't like about this process is the absence of a proper feedback at the end of the process. A feedback, as I believe, makes the whole process a level-playing field. Candidates also gain something from the interview while recruiters do their job.   
And, this is especially true in the case when you've given a great interview with all questions answered and you expect/hope for a positive outcome but then face rejection with no feedback whatsoever. This throws you in a state of confusion and self-doubt to understand what might be that thing that the company didn't like, should I have said this the other way etc. This breaks the confidence of a candidate especially when they are just starting out.

## The problem
While we all acknowledge the problem, I also empathize with the recruiters considering the insance number of applications that they receive (lot of them even being duplicates). It is not just humanely possible to go through it all and reply with individual feedbacks.

## My attempt on solving this
In my solution, I am only tackling the problem of feedback. There are several other problems which have different solutions. So, the way I see the feedback problem is that it is one of the perfect usecases to use LLMs. 
#### Background / Assumptions:
1. Be it a manager, an HR or a technical recruiter, they all have a feedback at the end of the interview that they personally pass on to the hiring manager.
2. Big tech have their own job portals while the smaller ones use Greenhouse, Workday etc. to manage their hiring process. Either way there is a presence of a platform big enough to incorporate AI solutions.   

#### Solution:
First of all, a personal feedback is only required in the case of interviews. Rejection at the online assessment phase can be classified in one of the following categories::
1. The candidate didn't pass the assessment.
2. The job opening is already filled.
3. The candidate does not fit some of the legal requirements (e.g. work authorization, security clearance etc.)
Each of these can be tackled by a quick general feedback which I believe is easy.

For a personal feedback, I propose the following solution:
1. Build the platform in such a way that it allows the sharing of feedback from all the hiring personnels involved at the same place with the application.
2. Train an LLM to use all the written feedback to generate a feedback for the applicant.
3. As the hiring manager sends a rejection, they can read the feedback (so that it's not too harsh and we gain trust in the system with more use) and send it directly.
This automatically guarantees a fast, personalized feedback loop.

## Final words
I believe this type of feedback mechanism will not only put a candidate's mind at ease, but also help them understand their weak points and work on them. At the same time, this also reflects a company's culture of being transparent putting them in a greener light for the candidates. I believe this is a win-win situation for both the parties.