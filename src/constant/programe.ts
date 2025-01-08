export const stringOperations = [
  {
    id: 1,
    functionality: "String Length",
    javascript: '"hello".length',
    python: 'len("hello")',
    description: "Get the number of characters in a string.",
  },
  {
    id: 2,
    functionality: "Convert to Uppercase",
    javascript: '"hello".toUpperCase()',
    python: '"hello".upper()',
    description: "Convert all characters to uppercase.",
  },
  {
    id: 3,
    functionality: "Convert to Lowercase",
    javascript: '"HELLO".toLowerCase()',
    python: '"HELLO".lower()',
    description: "Convert all characters to lowercase.",
  },
  {
    id: 4,
    functionality: "Trim Whitespaces",
    javascript: '" hello ".trim()',
    python: '" hello ".strip()',
    description: "Remove whitespace from both ends.",
  },
  {
    id: 5,
    functionality: "Substring",
    javascript: '"hello".substring(1, 3)',
    python: '"hello"[1:3]',
    description: "Extract a part of the string.",
  },
  {
    id: 6,
    functionality: "Replace Substring",
    javascript: '"hello".replace("h", "H")',
    python: '"hello".replace("h", "H")',
    description: "Replace occurrences of a substring.",
  },
  {
    id: 7,
    functionality: "Split into List/Array",
    javascript: '"a,b,c".split(",")',
    python: '"a,b,c".split(",")',
    description: "Split string into parts by a delimiter.",
  },
  {
    id: 8,
    functionality: "Join from List/Array",
    javascript: '["a", "b"].join("-")',
    python: '"-".join(["a", "b"])',
    description: "Join list/array elements into a string.",
  },
  {
    id: 9,
    functionality: "String Contains",
    javascript: '"hello".includes("e")',
    python: '"e" in "hello"',
    description: "Check if a substring exists.",
  },
  {
    id: 10,
    functionality: "Starts With",
    javascript: '"hello".startsWith("he")',
    python: '"hello".startswith("he")',
    description: "Check if string starts with a substring.",
  },
  {
    id: 11,
    functionality: "Ends With",
    javascript: '"hello".endsWith("lo")',
    python: '"hello".endswith("lo")',
    description: "Check if string ends with a substring.",
  },
  {
    id: 17,
    functionality: "String indexOf()",
    javascript: "'hello'.indexOf('e')",
    python: "'hello'.find('e')",
    description: "Get the index of the first occurrence of a substring.",
  },
  {
    id: 18,
    functionality: "String lastIndexOf()",
    javascript: "'hello'.lastIndexOf('l')",
    python: "'hello'.rfind('l')",
    description: "Get the index of the last occurrence of a substring.",
  },
  {
    id: 19,
    functionality: "String search()",
    javascript: "'hello'.search(/e/)",
    python: "'hello'.find('e')",
    description: "Find a substring using a regular expression or substring.",
  },
  {
    id: 20,
    functionality: "String match()",
    javascript: "'hello'.match(/l+/)",
    python: "re.findall(r'l+', 'hello')",
    description: "Match a pattern in a string using regular expressions.",
  },
  {
    id: 21,
    functionality: "String matchAll()",
    javascript: "'hello'.matchAll(/l/g)",
    python: "re.finditer(r'l', 'hello')",
    description:
      "Find all matches for a pattern in a string and get an iterator.",
  },
  {
    id: 22,
    functionality: "String includes()",
    javascript: "'hello'.includes('ell')",
    python: "'ell' in 'hello'",
    description: "Check if a substring exists in the string.",
  },
  {
    id: 23,
    functionality: "String startsWith()",
    javascript: "'hello'.startsWith('he')",
    python: "'hello'.startswith('he')",
    description: "Check if the string starts with a specific substring.",
  },
  {
    id: 24,
    functionality: "String endsWith()",
    javascript: "'hello'.endsWith('lo')",
    python: "'hello'.endswith('lo')",
    description: "Check if the string ends with a specific substring.",
  },
];
export const arrayListOperations = [
  {
    id: 1,
    functionality: "Array/List Length",
    javascript: "[1, 2, 3].length",
    python: "len([1, 2, 3])",
    description: "Get the number of elements.",
  },
  {
    id: 2,
    functionality: "Add Element (End)",
    javascript: "[1, 2].push(3)",
    python: "[1, 2].append(3)",
    description: "Add an element at the end.",
  },
  {
    id: 3,
    functionality: "Add Element (Start)",
    javascript: "[1, 2].unshift(0)",
    python: "[1, 2].insert(0, 0)",
    description: "Add an element at the start.",
  },
  {
    id: 4,
    functionality: "Remove Element (End)",
    javascript: "[1, 2, 3].pop()",
    python: "[1, 2, 3].pop()",
    description: "Remove the last element.",
  },
  {
    id: 5,
    functionality: "Remove Element (Start)",
    javascript: "[1, 2, 3].shift()",
    python: "[1, 2, 3].pop(0)",
    description: "Remove the first element.",
  },
  {
    id: 6,
    functionality: "Concatenate Arrays/Lists",
    javascript: "[1, 2].concat([3, 4])",
    python: "[1, 2] + [3, 4]",
    description: "Combine two arrays/lists.",
  },
  {
    id: 7,
    functionality: "Slice Array/List",
    javascript: "[1, 2, 3, 4].slice(1, 3)",
    python: "[1, 2, 3, 4][1:3]",
    description: "Extract a part of the array/list.",
  },
  {
    id: 8,
    functionality: "Find Index of Element",
    javascript: "[1, 2, 3].indexOf(2)",
    python: "[1, 2, 3].index(2)",
    description: "Get the index of an element.",
  },
  {
    id: 9,
    functionality: "Array/List Contains",
    javascript: "[1, 2, 3].includes(2)",
    python: "2 in [1, 2, 3]",
    description: "Check if an element exists.",
  },
  {
    id: 10,
    functionality: "Sort Elements",
    javascript: "[3, 1, 2].sort()",
    python: "sorted([3, 1, 2])",
    description: "Sort the elements.",
  },
  {
    id: 11,
    functionality: "Reverse Elements",
    javascript: "[1, 2, 3].reverse()",
    python: "[1, 2, 3][::-1]",
    description: "Reverse the order of elements.",
  },
  {
    id: 12,
    functionality: "Array forEach",
    javascript: "[1, 2, 3].forEach(x => console.log(x))",
    python: "for x in [1, 2, 3]: print(x)",
    description: "Iterate and perform an action for each element.",
  },
  {
    id: 13,
    functionality: "Array map()",
    javascript: "[1, 2, 3].map(x => x * 2)",
    python: "list(map(lambda x: x * 2, [1, 2, 3]))",
    description: "Apply a function to all elements.",
  },
  {
    id: 14,
    functionality: "Array flatMap()",
    javascript: "[1, [2], 3].flatMap(x => [x])",
    python:
      "[y for x in [1, [2], 3] for y in (x if isinstance(x, list) else [x])]",
    description: "Flatten and map in one operation.",
  },
  {
    id: 15,
    functionality: "Array filter()",
    javascript: "[1, 2, 3].filter(x => x > 1)",
    python: "[x for x in [1, 2, 3] if x > 1]",
    description: "Filter elements based on a condition.",
  },
  {
    id: 16,
    functionality: "Array flat()",
    javascript: "[1, [2, 3]].flat()",
    python:
      "[x for sublist in [1, [2, 3]] for x in (sublist if isinstance(sublist, list) else [sublist])]",
    description: "Flatten a nested array.",
  },
  {
    id: 17,
    functionality: "Array reduce()",
    javascript: "[1, 2, 3].reduce((a, b) => a + b, 0)",
    python:
      "from functools import reduce; reduce(lambda a, b: a + b, [1, 2, 3], 0)",
    description: "Reduce the array to a single value.",
  },
  {
    id: 18,
    functionality: "Array every()	",
    javascript: "[1, 2, 3].every(x => x > 0)",
    python: "all(x > 0 for x in [1, 2, 3])",
    description: "Check if all elements satisfy a condition.",
  },
  {
    id: 19,
    functionality: "Array some()	",
    javascript: "	[1, 2, 3].some(x => x > 2)",
    python: "any(x > 2 for x in [1, 2, 3])",
    description: "Check if any element satisfies a condition.",
  },
  {
    id: 20,
    functionality: "Array from()",
    javascript: "	Array.from('123')",
    python: "list('123')",
    description: "Create an array/list from an iterable.",
  },
  {
    id: 21,
    functionality: "Array keys()",
    javascript: "	[...Array(3).keys()]",
    python: "range(len([1, 2, 3]))",
    description: "Get the indexes of an array/list.",
  },
  {
    id: 22,
    functionality: "Array entries()",
    javascript: "	[...Array(3).entries()]	",
    python: "	enumerate([1, 2, 3])",
    description: "Get index-value pairs as an iterator.",
  },
  {
    id: 23,
    functionality: "Array with()",
    javascript: "	[1, 2, 3].with(1, 5)	",
    python: "		[1, 5, 3] (no direct Python equivalent, use slicing instead)",
    description: "Replace an element at a specific index.",
  },
  {
    id: 24,
    functionality: "Array Spread (...)",
    javascript: "	[...arr1, ...arr2]",
    python: "	[*arr1, *arr2]	",
    description: "Combine or copy arrays using spread.",
  },
];
export const objectOperations = [
  {
    id: 1,
    functionality: "Create Object/Dictionary",
    javascript: "let obj = { a: 1, b: 2 }",
    python: 'obj = { "a": 1, "b": 2 }',
    description: "Create a key-value store.",
  },
  {
    id: 2,
    functionality: "Access Value",
    javascript: "obj.a or obj['a']",
    python: "obj['a']",
    description: "Get value by key.",
  },
  {
    id: 3,
    functionality: "Set Value",
    javascript: "obj.c = 3 or obj['c'] = 3",
    python: "obj['c'] = 3",
    description: "Add or update a key-value pair.",
  },
  {
    id: 4,
    functionality: "Delete Key",
    javascript: "delete obj.a",
    python: "del obj['a']",
    description: "Remove a key-value pair.",
  },
  {
    id: 5,
    functionality: "Get Keys",
    javascript: "Object.keys(obj)",
    python: "list(obj.keys())",
    description: "Get all keys.",
  },
  {
    id: 6,
    functionality: "Get Values",
    javascript: "Object.values(obj)",
    python: "list(obj.values())",
    description: "Get all values.",
  },
  {
    id: 7,
    functionality: "Get Entries",
    javascript: "Object.entries(obj)",
    python: "list(obj.items())",
    description: "Get key-value pairs as a list.",
  },
  {
    id: 8,
    functionality: "Check Key Existence",
    javascript: '"a" in obj',
    python: '"a" in obj',
    description: "Check if a key exists.",
  },
];
export const timersAndScheduling = [
  {
    id: 1,
    functionality: "Delay Execution",
    javascript: "setTimeout(() => {}, 1000)",
    python: "import time; time.sleep(1)",
    description: "Execute code after a delay.",
  },
  {
    id: 2,
    functionality: "Repeated Execution",
    javascript: "setInterval(() => {}, 1000)",
    python:
      "import threading; def repeat(): threading.Timer(1, repeat).start()",
    description: "Execute code repeatedly.",
  },
  {
    id: 3,
    functionality: "Clear Timeout/Interval",
    javascript: "clearTimeout(id) / clearInterval(id)",
    python: "Use flags or thread control",
    description: "Stop scheduled execution.",
  },
];
export const advancedFeatures = [
  {
    id: 1,
    functionality: "Promises (Async Code)",
    javascript: 'fetch("url").then(...)',
    python: 'import requests; requests.get("url")',
    description: "Handle asynchronous calls.",
  },
  {
    id: 2,
    functionality: "Async/Await",
    javascript: "async function func() { await ... }",
    python: "import asyncio; async def func(): await ...",
    description: "Syntactic sugar for async code.",
  },
  {
    id: 3,
    functionality: "Arrow Functions",
    javascript: "const add = (a, b) => a + b",
    python: "add = lambda a, b: a + b",
    description: "Concise syntax for functions.",
  },
  {
    id: 4,
    functionality: "Regular Expressions",
    javascript: "/\\d+/.test('123')",
    python: "import re; re.match(r'\\d+', '123')",
    description: "Pattern matching in strings.",
  },
  {
    id: 5,
    functionality: "Generate Random Number",
    javascript: "Math.random()",
    python: "import random; random.random()",
    description: "Generate a random float.",
  },
  {
    id: 6,
    functionality: "Multithreading",
    javascript: "Use Web Workers or Worker APIs",
    python: "import threading; thread = threading.Thread(...)",
    description: "Run code in parallel.",
  },
];
export const htmlShorthands = [
  {
    shorthand: "!",
    description: "Basic HTML boilerplate",
    output: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>`,
  },
  {
    shorthand: "div",
    description: "Single div element",
    output: "<div></div>",
  },
  {
    shorthand: ".class-name",
    description: "Div with a class",
    output: '<div class="class-name"></div>',
  },
  {
    shorthand: "#id-name",
    description: "Div with an ID",
    output: '<div id="id-name"></div>',
  },
  {
    shorthand: "ul>li*3",
    description: "Unordered list with 3 items",
    output: `
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>`,
  },
  {
    shorthand: "table>tr*2>td*3",
    description: "Table with 2 rows and 3 columns",
    output: `
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>`,
  },
  {
    shorthand: "form>input+button",
    description: "Form with input and button",
    output: `
<form>
  <input type="text">
  <button></button>
</form>`,
  },
  {
    shorthand: "a[href='#']",
    description: "Anchor link",
    output: '<a href="#"></a>',
  },
  {
    shorthand: "img[src='image.jpg' alt='']",
    description: "Image with source and alt attribute",
    output: '<img src="image.jpg" alt="">',
  },
  {
    shorthand: "header>nav>ul>li*3>a[href='#']",
    description: "Header with navigation links",
    output: `
<header>
  <nav>
    <ul>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
      <li><a href="#"></a></li>
    </ul>
  </nav>
</header>`,
  },
  {
    shorthand: ".container>.item*3",
    description: "Div with 3 child divs",
    output: `
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>`,
  },
  {
    shorthand: "section>h1+p",
    description: "Section with an h1 and a paragraph",
    output: `
<section>
  <h1></h1>
  <p></p>
</section>`,
  },
];
export const gitCommands = [
  {
    category: "Configuration",
    command: "git config --list",
    response: "Displays a list of current Git configurations.",
  },
  {
    category: "Repository Initialization",
    command: "git init",
    response: "Initializes an empty Git repository in the current directory.",
  },
  {
    category: "Cloning",
    command: "git clone <url>",
    response: "Clones a remote repository to your local machine.",
  },
  {
    category: "Status and Info",
    command: "git status",
    response: "Shows the status of your working directory and staging area.",
  },
  {
    category: "Status and Info",
    command: "git log",
    response: "Displays the commit history.",
  },
  {
    category: "Status and Info",
    command: "git log --oneline",
    response: "Displays a summarized commit history (one line per commit).",
  },
  {
    category: "Adding and Committing",
    command: "git add <file>",
    response: "Stages a file for the next commit.",
  },
  {
    category: "Adding and Committing",
    command: 'git commit -m "message"',
    response: "Records changes to the repository with a message.",
  },
  {
    category: "Branching",
    command: "git branch",
    response: "Lists all branches in the repository.",
  },
  {
    category: "Branching",
    command: "git branch <branch_name>",
    response: "Creates a new branch.",
  },
  {
    category: "Branching",
    command: "git checkout <branch>",
    response: "Switches to the specified branch.",
  },
  {
    category: "Branching",
    command: "git checkout -b <branch>",
    response: "Creates and switches to a new branch.",
  },
  {
    category: "Pushing and Pulling",
    command: "git push",
    response: "Pushes local changes to the remote repository.",
  },
  {
    category: "Pushing and Pulling",
    command: "git pull",
    response:
      "Fetches and merges changes from the remote repository into the current branch.",
  },
  {
    category: "Stashing",
    command: "git stash",
    response: "Saves changes temporarily without committing.",
  },
  {
    category: "Stashing",
    command: "git stash list",
    response: "Lists all stashed changes.",
  },
  {
    category: "Merging",
    command: "git merge <branch_name>",
    response:
      "Merges changes from the specified branch into the current branch.",
  },
  {
    category: "Tags",
    command: "git tag",
    response: "Lists all tags in the repository.",
  },
  {
    category: "Undoing Changes",
    command: "git restore <file>",
    response: "Discards changes in a file (unstaged changes only).",
  },
  {
    category: "Undoing Changes",
    command: "git reset --hard",
    response:
      "Resets the repository to a previous commit, discarding all changes.",
  },
  {
    category: "Remote",
    command: "git remote -v",
    response: "Lists the URLs of remote repositories.",
  },
  {
    category: "Remote",
    command: "git fetch",
    response:
      "Downloads changes from the remote repository without merging them.",
  },
  {
    category: "Rewriting History",
    command: "git commit --amend",
    response: "Amends the last commit (message or staged changes).",
  },
  {
    category: "Inspecting",
    command: "git reflog",
    response: "Displays a log of all changes made to the tips of branches.",
  },
  {
    category: "Cherry-Picking",
    command: "git cherry-pick <hash>",
    response: "Applies a specific commit to the current branch.",
  },
  {
    category: "Clean-up",
    command: "git clean -f",
    response: "Removes untracked files from the working directory.",
  },
  {
    category: "Help",
    command: "git help",
    response: "Displays help information for Git commands.",
  },
];
