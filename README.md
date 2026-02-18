## MILESTONE 1 UNDERSTANDING QUIZ (Deeper Version)
1. What is stored inside the hidden `.git` folder?

    The hidden `.git` folder stores all of Git's internal data for your project, including the complete commit history, branches, tags, configuration settings, and the snapshots that let Git track and restore every version of your files.

2. Why does `git add` not create a commit?

    `git add` only moves changes into the staging area, while a commit isn't actually created until you run `git commit` which permanently records those staged changes in the repository history.

3. What would happen if you edited a file but didn’t commit?

    The changes stay only in your working directory, so they are not saved in Git history or backed up remotely.

4. Why must the GitHub repo be empty before connecting?

    If the repo already has files, it creates a separate initial commit history that can conflict with your local project's history.

5. What is the difference between: `git init` and `git clone`

    `git init` creates a brand-new, empty Git repository in your current folder, while `git clone` copies an existing remote repository onto your computer and automatically connects it to that remote.

## MILESTONE 1 QUIZ QUESTIONS
1. What is the purpose of `git commit` ?

    A `git commit` captures a snapshot of the project's currently staged changes.

2. What happens when you push to GitHub?

    Pushing changes to github makes your personal commits accessible to others who may be collaborating on the project and update any open pull requests with the branch that is being worked on. This sends the 'snapshots' to github.

3. Why should we commit multiple times instead of once at the end?

    We commit multiple times instead of once at the end to create safe, traceable checkpoints which make debugging, collaboration, and reverting changes much easier.

4. What is the difference between local repository and remote repository?

    A local repository lives on your own computer where you make commits and experiment, while a remote repository is a shared version hosted online that lets you back up your work and collaborate with others.

## MILESTONE 2 QUIZ QUESTIONS
1. What does `display: flex` do?

    `display: flex` turns an element into a flexible layout container, allowing its child elements to be aligned and arranged easily in a row or column with controleed spacing and positioning.

2. What is a media query?

    A media query applies certain styles only when specific conditions are met, such as screen width, allowing a layout to adapt to different device sizes.

3. Why should responsive design be handled in CSS, not JavaScript?

    Responsive design should be handled in CSS ebcause layout and styling are CSS's responsibility, making it more efficient, cleaner, and easier to maintain than using JavaScript for visual changes.

4. What happens if media query is placed before base styles?

    The base styles that come after it can override the media query rules, potentially breaking the responsive layout because CSS is applied from top to bottom.


## MILESTONE 3 QUIZ QUESTIONS 
1. What is the difference between `data` and `computed` in Vue?

    `data` stores the rreactive state of your app, while `computed` defines dereived values that automaticaly updated based on that state.

2. Why should we not manipulate DOM manually in Vue?

    We should not manipulate the DOM manually in Vue because Vue automatically manages and updates the DOM based on reactive state, and manual changes can conflict with its rendering system and cause unpredictable behavior.

3. What does `v-html` do?

    `v-html` takes a string of HTML and injects it into an element so it is rendered as actual HTML in the DOM, rather than displayed as plain text.


4. Why must we strip HTML before counting characters?

    We must strip HTML before counting characters because the rendered output includes HTML tages that are not visible to the user and counting them would inflate the character count inaccurately.

## MILESTONE 4 QUIZ QUESTIONS
1. What is localStorage?

    localStorage is a brower-based storage system that saves small key-value data pairs permanently on the user's device, even after the page is refreshed or the browser is closed.

2. When does `mounted()` run?

    `mounted()` runs after the Vue component has been created and isnerted into the DOM, making it the ideal place to load saved data or interact with the document.

3. What is a Vue watcher?

    A Vue watcher observes a reactive data property and automatially runs a function whenever that property changes.

4. Why should theme state also be persisted?

    Theme state should be persisted so the user's light/dark preference remains consistent across page reloads, improving user experience and maintaining interface consistency.

## FINAL REFLECTION QUIZ
1. How did you utilize AI to help you code the app, show some examples.

    I used AI as a step-by-step coding assistant throughout the entire project, but I followed the rule of asking for one small thing at a time instead of requesting the full solution. Some examples:

    In Milestone 2, I asked for CDN links for Bootstrap, Vue, and marked.js, and I asked how to switch flex direction using a media query at 768px. I also asked how to position an element in the top-right corner using CSS.

    In Milestone 3, I used AI to better understand Vue reactivity, including how v-model works, what a computed property is, and how to use v-html to render Markdown output. I also asked how to remove HTML tags from a string before counting characters for the character counter.

    In Milestone 4, I asked how to use localStorage inside the mounted() hook, how Vue watchers work, and how to dynamically update the Bootstrap theme using data-bs-theme.

    AI mainly helped clarify syntax, explain concepts, and debug small issues (like why my textarea text disappeared after adding v-model). I implemented and tested each step myself to ensure I understood what was happening.

2. What part of the build was most challenging?

    The most challenging part was understanding Vue reactivity, especially the difference between data, computed, and watch. At first it wasn't obvious why `v-model` overrides the textarea content or why computed properties update automatically. Getting the theme persistence and icon swap working correctly also required careful debugging.

3. What is the benefit of using a framework such as Vue for frontend development?

    Using Vue simplifies frontend development by managing state and automatically updating the DOM when data changes. Instead of manually manipulating the DOM, Vue handles reactivity, which makes the code cleaner, more maintainable, and easier to scale. it separates logic, structure, and styling in a clear and predictable way.

## AI PROMPTS I USED
- What are the CDN links for Bootstrap 5, Vue 3, and marked.js?
- How do I switch flex direction using a media query at 768px?
- How do I position an element in the top-right corner using CSS?
- How do I bind a textarea using `v-model` in Vue 3?
- What is a Vue computed property?
- What is the difference between data and computed in Vue?
- What does `v-html` do?
- Why does my textarea text disappear when using `v-model`?
- How do I render Markdown using marked.js in Vue?
- How can I remove HTML tags from a string in JS?
- When does the Vue mounted() lifecycle hook run?
- How do I use localStorage inside the Vue mounted() hook?
- What is a Vue watcher and how does it work?
- How do I persist theme preference across page reloads?
- How do I dynamically change Bootstrap's theme using data-bs-theme?
- Why shouldn’t we manipulate the DOM manually in Vue?