# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](./Screenshot%202022-10-13%20at%2015.59.05.png)

## My process

Mobile first workflow.
To implement the dark/light modes I created an object in javascript indexing the colours and updating a CSS variable in the
document root.

### What I learned

I learned that you cannot assign a CSS variable to another CSS variable using a string.
I also learned that for a SASS file to import another SASS file it must be positioned above the other file within the folder.
