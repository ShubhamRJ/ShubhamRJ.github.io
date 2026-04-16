---
title: The fantastic engineering of code editors
date: 2023-08-15
category: Engineering
excerpt: Building a code editor from scratch at Crio.Do forced me to understand how web-based editors actually work — syntax highlighting, document models, intellisense, and the brilliant engineering hidden behind a blinking cursor.
---

# The fantastic engineering of code editors

## Motivation

In my 6 months of internship at [Crio.Do](https://www.crio.do/), I was responsible for building a code editor from scratch and we would let our learners build the backend of it. Hence, I wasn't able to use any open-source existing code editors like Monaco, CodeMirror or Ace. This forced me to think and understand how web-based code editors actually work.

- We don't have any HTML elements that would take a piece of code and highlight it based on its language syntax.
- How do online editors have intellisense built into them?
- VS Code, the most used code editor, is based on Electron which is primarily web technologies. How does it work?

Let's explore this in detail.

---

## Let's make a code editor from scratch

Let's actually engineer a code editor from scratch first, then see how the existing ones work. First, list down the MVP.

### Stage 1 — Basic functionalities (MVP)

1. A text area to type code.
2. Basic cut, copy, paste functionality.
3. Read from an uploaded file and display it in the text area.

That's all we technically need to write code. This can be implemented using a simple HTML `textarea` element, an upload button with file input, and some JavaScript to handle events. We can use the FileReader API to read the file. We have a basic code editor!

### Stage 2 — Syntax highlighting

Here's where things start getting tricky. What do we need to achieve syntax highlighting?

1. A language parsing engine that can parse the code to identify keywords, variables, functions, etc.
2. A highlighting engine to highlight the different parts.

#### 2.1 Language parsing engine

Build this as a server which takes code from the frontend and parses it. Why? Supporting a wide range of languages would require building parsers for all of them in JS. If we build it as a server, we can use the language's compiler right out of the box.

Code from frontend → parse through selected language's compiler → compiler gives us what each keyword is → send to highlighting engine.

What you've essentially built is a [Language Server](https://langserver.org/). This allows 1 IDE for all programming languages, just like VS Code. The language server can also provide autocompletion and intellisense.

#### 2.2 Highlighting engine

The `textarea` HTML element **does not** allow coloring its content. We need to re-engineer our MVP.

Options:

1. **`contenteditable`** — A boolean attribute that allows the user to edit the content and supports coloring. But cross-browser support is an issue and accessibility is also a concern.
2. **Break the code into `span` elements** — The most common approach:
   - Use a hidden `textarea` (or `contenteditable` div) to capture actual typing.
   - Send the code to your language server to get it parsed.
   - Add a visible `div` on top, rendering colored `span` elements based on parsed tokens.

And voilà — a code editor with syntax highlighting. You might notice a slight delay between typing and highlighting. That's why.

### Stage 3 — Advanced features

#### Syntax and semantic issues

Your language server can parse error logs and debugger logs, and send them to the highlighting engine to highlight errors in the code.

#### Intellisense

If a code snippet declares a variable of type string, just suggest the list of all string methods. The language server can do this too.

#### Auto-completion

Keep 2 Tries in your language server — one for user-submitted code variables and one for language keywords. Search the user-submitted trie first, then the language trie. If you find a match, send it to the highlighting engine.

#### Code formatting / linting

Send the code to the language server, parse it, then clean up extra spaces, tabs, etc. That's why VS Code provides this natively — it has the processing power of your machine, while it could be slower in a server-client model. The Language Server Protocol helps keep a standard communication pattern between multiple entities.

#### Diffing and advanced optimizations

You can use git or the underlying algorithms (Longest Common Subsequence, Edit Distance). Optimize to only highlight what's in the viewport and render as the user scrolls — crucial for 1000+ line files.

## How do actual code editors work?

Syntax and semantic highlighting wasn't present in IDEs until 2009 ([refer](https://zwabel.wordpress.com/2009/01/08/c-ide-evolution-from-syntax-highlighting-to-semantic-highlighting/)). We should be super grateful.

The most commonly used editors:
- [Monaco](https://github.com/microsoft/monaco-editor) — Powers VS Code.
- [Ace](https://ace.c9.io/)
- [CodeMirror](https://codemirror.net/)

A comparison of these is available [here](https://blog.replit.com/code-editors).

## Conclusion

The more you read into VS Code and Monaco docs, the more you'll understand the level of complex engineering these editors hide in plain sight. With every keystroke going through layers of brilliant engineering, the blinking cursor hides a lot of careful work. Truly amazing!

## Further Reads

- [Internal representation of text for code editors](https://zed.dev/blog/zed-decoded-rope-sumtree)
- [How VS Code optimized bracket pair colorization](https://code.visualstudio.com/blogs/2021/09/29/bracket-pair-colorization)
