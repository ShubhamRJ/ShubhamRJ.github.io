---
title: The fantastic engineering of code editors
date: 2023-08-15 19:00:00 -0400
categories: [Frontend, Engineering]
tags: [Frontend, Engineering Practices, Code Editors]
---

## Motivation
In my 6 months of internship at <a href="https://www.crio.do/" target="_blank">Crio.Do</a>, I was responsible for building a code editor from scratch and we would let our learners build the backend of it. Hence, I wasn't able to use any open-source existing code editors like Monaco, CodeMirror or Ace. This forced me to think and understand how web based code editors actually work. 
- We don't have any html elements that would talk any piece of code and highlight it based on its language syntax.
- How do online editors have intellisense built into it?
- VS Code the most used code editor is based on Electron which is primarily web technologies based. How does it work?

Let's explore this in detail.
<hr>

## Let's make a code editor from scratch

Ok so let's actually engineer a code editor from scratch first and then we will see how the existing ones work. To start on any new project, we first list
down the MVP (minimum viable product). So let's do that.

### Stage 1 - Basic functionalities (MVP)
1. A text area to type code.
2. Basic cut, copy, paste functionality
3. Read from an uploaded file and display it in the text area.

That's all. That's all we technically need to write code. I know this is a developer's nightmare to write code in but wait for it.   
This features can be implemented using a simple html <code>textarea</code> element, an upload button form with a file input and some javascript to handle the events. We can use browser's native APIs to handle the cut, copy, paste functionality. We can use the FileReader API to read the file and display it in the text area. Woohoo we have a basic code editor!

### Stage 2 - Syntax highlighting
Let's add some good stuff in our code editor and here's where things start getting tricky. The only feature we are gonna consider for this iteration is <i><u>syntax highlighting</u></i>. How can we do it?

Let's break it down into smaller problems. What do we need to do to achieve syntax highlighting?
1. We need a langauge parsing engine that can parse the code to identify the different parts of the code like keywords, variables, functions, etc. 
2. We need a highlighting engine to highlight the different parts of code.

##### 2.1 Language parsing engine    
We will build this as a server which will take the code from frontend and parse it. Why? cause supporting a wide range of languages will require building parsers for all in JS to be parsed in frontend. Seems redundant right? If we build it as a server, we can use the langauge's compiler right out-of-the-box.   
So we get the code from frontend  ➡️  parse it through selected language's compiler  ➡️  the compiler gives us what each keyword in the input is  ➡️   send it to highlighting engine.   
And what you've essentially built is here is a <a href="https://langserver.org/">Language Server</a>. Wow right! This allows 1 IDE for all programming languages just like VSCode. The language server can also provide a lot more features like autocompletion and intellisense. We will see how later.   
<a href="https://medium.com/@nadeeshaangunasinghe/why-use-language-server-aa9bb47207b8" target="_blank">More on Language Server</a>

##### 2.2 Highlighting engine
The <code>textarea</code> html element DOES NOT allow color its content. Ouch! We need to re-engineer our MVP code editor. <i>(Often the case with lots of projects in their initial stages. The trial and error method gets you to the most efficient design which is generally automatically scalable for new features.)</i> Let's see how - 

1. Content editable html?   
   <code>contenteditable</code> is a boolean attribute that allows the user to edit the content of the element. It is supported by all major browsers and it allows coloring its content too. I was surprised to see this as this attribute is not really well known. But there's an issue. Contenteditable divs 
   don't get the native browser API's of textarea, cross-browser support is an issue and accessibility is also an issue.
2. Let's break the code :P   
   So <code>textarea</code> doesn't allow highlighting and <code>contenteditable</code> has issues. Hmm. What can we do? Maybe you've thought about this already. Let's break the code into multiple <code>span</code> elements and color them. This is the most common approach used by most code editors. Let's see how it's done:
   1. First use a <code>textarea</code> element to get the code from the user. This <code>textarea</code> is hidden from the user by manipulating its z-index. So it's basically an invisible area to actually type the code into. Or you can use contenteditable div. This is better cause the contenteditable div can support the font-styling out-of-the-box.
   2. Now you get the whole code as a string. Send it to your language server to get the parsed code. The language server protocol is helpful here.
   3. Add a <code>div</code> on top of the hidden textarea/contenteditable div. This is the div where you will actually render the colored code. Based on the parsed code from language server, you will add <code>span</code> elements to this div. Each span element will have a class based on the type of the code. For example, if the code is a keyword, the span will have a class keyword and the text will be the keyword itself. If the code is a variable, the span will have a class variable and the text will be the variable name. And so on. You can also build this as a single highlighting engine that does it for you.   
   <br>
   And voila! You have a code editor with syntax highlighting. You might think this has to be atleast a little slow right? It is. But not that much. And that's why you actually might notice some time between the typing and highlighting.

### Stage 3 - Advanced features

##### 1. Syntax and semantic issues
So, what would you do if the code has <b> syntax issues </b> ? What about semantic issues like using an undeclared variable?
Your language sever can do it for you. Compiler throwing some errors? The language server parses the error logs, debugger logs and sends that too to the highlighting engine. The highlighting engine can then highlight the errors in the code.

##### 2. Intellisense
What about <b>intellisense</b>? Well if you actually try to think about it, it's just advanced suggestions based on your parsed code. If a code snippet a variable of type string, we just have to suggest the list of all string methods right? So the language server can do that too. It can send the suggestions to the highlighting engine and the highlighting engine can show it to the user.

##### 3. Auto-completion
<b>Auto-completion</b>? You can keep 2 Trie in your language server. One of the user submitted code variables and other for language keywords. Search in user-submitted trie first and then in the language trie. If you find a match, send it to the highlighting engine. The highlighting engine can then show it to the user.

##### 4. Code formatting / refactoring / linting
This is an even advanced feature. Not a lot of web based code-editors provide this. Cause this could take some time. You basically have to send the code to language server - parse it - and than clear up the extra spaces, tabs, etc, maybe move all variables to the top of the code, etc. That's why VSCode provides it cause it got the processing power of your machine while it could be slower on a server-client model. You can even make a plugin architecture like VSCode to plug your linters automatically and the syntax highlighting engine takes care of the rest. Again the Language Server Protocal helps you keep a standard communication pattern between multiple entities.

##### 5. Diffing and advanced optimizations
Providing diffing is another feature - you can use git or you can use the underlying algorithm of git such as Longest Common Subsequence or Edit Distance etc. You can optimize your code editor to provide all the above listed functionalities for the code in the viewport and render as the user scrolls. This is very powerful cause code files can be 1000+ lines long but you don't really need to highlight everything at once as it could be slower.


## How do actual code editors work?
These are the most commonly used code-editors out there. And if you actually go through the history of code editors, syntax and semantic highlighting wasn't there till 2009 <a href="https://zwabel.wordpress.com/2009/01/08/c-ide-evolution-from-syntax-highlighting-to-semantic-highlighting/" target="_blank">refer </a>. So we should be super grateful to the developers of these code editors for making our lives easier. 
1. <a href="https://github.com/microsoft/monaco-editor#concepts">Monaco</a> - The most used and the one that powers VS Code. 
2. <a href="https://ace.c9.io/#nav=about">Ace</a>
3. <a href="https://codemirror.net/">CodeMirror</a>

A comparison of these code editors is available <a href="https://blog.replit.com/code-editors">here</a>.

## Integration with your application

I won't write about this myself as there are lots of tutorials available. People have open-sourced this code-editors in the form of npm packages and their versions in frameworks like react. <a href="https://blog.logrocket.com/build-web-editor-with-react-monaco-editor/">Refer</a>

## Conclusion
That's it! This is the world of code editors. With the number of features modern day code-editors like VSCode, IntelliJ IDEs etc. provide its just insane to even think about the engineering and optimizations that go into building these blazing fast, intelligent code editors. Thanks for reading!
