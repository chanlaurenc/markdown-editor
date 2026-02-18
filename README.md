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

