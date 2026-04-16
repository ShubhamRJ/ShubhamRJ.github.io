---
title: Social Influence Dialogue Systems
date: 2024-05-03
category: Natural Language Processing
excerpt: I presented a survey paper at Stony Brook's NLP Reading Group on social influence dialogue systems — covering persuasion, negotiation, therapy bots, datasets, methodologies, and my own mini experiments with GPT-4, Gemini, and Llama.
---

# Social Influence Dialogue Systems

I had the chance to present a paper in Stony Brook University's CS Department's [NLP Reading Group](https://sites.google.com/site/nlpsbureadinggroup/home). I chose the paper — [Social Influence Dialogue Systems: A Survey of Datasets and Models For Social Influence Tasks](https://aclanthology.org/2023.eacl-main.53.pdf).

I did go a little in-depth trying to understand the topic and thought why not jot it down here.

## What is social influence?

> It is a change in thoughts, feelings, attitudes, or behaviors resulting from interaction with an individual or a group.
>
> *— As defined by Rashotte, 2007 (currently sociology professor at UNC Charlotte)*

## Paper overview & thoughts

This is a survey paper published in 2023. It surveys the state of social influence dialogue systems from 2 angles — the datasets and the methodologies used in prior work to build such dialogue systems. The best thing I like about this paper is the research depth it gives. Reading this is sufficient to understand and find focused references to any prior work.

The one thing they could have done better would have been analysis on the latest ChatGPT and Gemini models. Most of the surveyed work was done in the 2017–2021 period. Nonetheless, the work done in understanding datasets and methodologies and creating taxonomies for easier visualization is commendable. This is what a good survey paper should look like.

## Use cases

The paper states that such systems will be particularly useful for:

1. Games
2. Multi-Issue Bargaining Tasks (MIBT)
3. Social Good
4. E-commerce
5. Therapy & Support

Personally, I am a bit skeptical of using these in high-risk situations like therapy, court debates, and social good — these topics are already not being handled too well even by humans, and all kinds of demographic biases are involved.

As an engineer, I always approach any topic from a utility POV. On that note, I believe these systems have huge potential in:

- **Games** — These systems can help in achieving hyperrealism in games. Imagine each NPC having a storyline. Shoppers with the ability to negotiate prices. Bosses have storylines and there's a conversational aspect attached (remember Naruto's "talk no jutsu"? 😄).
- **E-commerce** — Imagine a virtual seller who's as focused and interested in the product as the original seller. While original sellers are limited by time and place to persuade customers, a virtual seller can scale persuasion to a much bigger audience. *(This could get very annoying, so design matters enormously.)*
- **Personal assistants** — Remember Baymax from Big Hero 6? What if Alexa & Siri could focus on a small level of persuasion for building good routines and habits?

## Why is social influence a difficult task for dialogue systems?

1. It's difficult for humans too. We rely on books like *How to Win Friends and Influence People* to build these skills.
2. It's a complex task — we rely on wit, knowledge, compassion, empathy, gullibility, beliefs in everyday conversations.
3. It's a multi-modal problem. We rely on body posture, energy in voice, facial expressions and a lot of other visual cues while in conversation. Attributes like hesitation are not easily noticed just by the content of speech.

## Dataset Taxonomy

The original paper lays out a taxonomy analyzed across 2 axes — **Structure** and **Context**:

- **Structure** — Symmetric (both participants have their own goals) vs Asymmetric (both have the same goal, as in a therapy session).
- **Context** — Global vs Local (is the context set globally or does each conversation have a local goal).

### Observations in datasets

- A lot of datasets are crowdsourced — workers may not use the most optimal strategies of influence.
- Many examples are not long detailed interactions (except court transcripts), but small ones.
- Participant demographics are only present in ~6 datasets, so there's potential context loss. Humans instantly looking at someone can make guesses around age, lifestyle, etc.

## Methodology Taxonomy

Analyzed across 3 axes — **Strategy**, **Language Generation**, **Partner Model**:

- **Strategy** — How the model builds the response: Implicit / Latent vectors / Dialogue Acts / Semantic strategies.
- **Language Generation** — Direct generation or template + retrieval.
- **Partner Model** — Inferring the mental states of the partner:
  - *Simulated User* — Simulating a user via supervised learning, then using RL to train the dialogue system.
  - *DA + Look ahead* — Like a chess game where the system tries to predict the next 3 responses of the person and plans accordingly.
  - *Implicit* — No modeling, letting the model generate on its own.

### Observations in methodology

- Models no later than GPT-2 were used for experiments. Latest models like ChatGPT, Gemini, and Llama have huge scope.
- Reinforcement learning shows better potential for future scope.
- None of the papers experimented on Games or Argumentation datasets.

## Experiments

I ran a quick experiment with ChatGPT, Gemini, Llama 2 & 3, going all Jordan Belfort.

**[Prompt 1]** — You are a salesman. You have to sell me a pen.
**[Answers]** — Gemini, ChatGPT, and Llama3 gave 4 paragraph-long answers. Llama2 was shorter.

**[Prompt 2]** — This is too much information. I didn't read it all.
**[Answers]** — All reduced their response sizes to 2 short paragraphs.

**[Prompt 3]** — How should I trust you? All the other sellers say the same things.
**[Answer]** — All said you can trust me or we'll refund the money no questions asked.

**[Prompt 4]** — I don't want to spend too much on a small thing like a pen.
**[Answer]** — All said it was a fair call and offered discounts. Gemini was specifically more nuanced — it gave 3 different valid options.

**[Prompt 5]** — Can you give me a 90% discount?
**[Answer]** — Gemini, ChatGPT, and Llama3 refused and made the offer a little better. Llama2 surprisingly agreed to 90%.

### Analysis

- All models followed an almost identical pattern of persuasion. No one asked what I actually want or went the statistics route.
- ChatGPT and Gemini were more formal. Llama models used "my friend" often, giving an informal tone.
- Llama2 almost gave responses like a scriptwriter — it wrote *"extends paw"* at the end, adding a little dog humor.
- I also chatted with ChatGPT in a therapy conversation. Impressively, it started with questions rather than advice. But after 4 exchanges it shifted toward long paragraphs — not how a real therapy session would go.

### Meta-analysis

All models are trained to give out as much information in one go as possible. But real negotiations are generally to-and-fros about guessing the person's state of mind and orienting strategy accordingly. Wit, humor, and demographic awareness tend to impress more.

## Helpful resources

Check out [Convokit](https://convokit.cornell.edu/documentation/datasets.html) for datasets.
