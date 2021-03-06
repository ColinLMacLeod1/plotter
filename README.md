# Plotter - User Guide

[Check it out here!](https://colinlmacleod1.github.io/plotter/)
It should be mobile friendly!

### Overview

Plotter is a simple web app that lets a user input a formula and it will generate a plot for them. The user can adjust the axes if needed.
If the user inputs an invalid function or axis errors will appear. The web app is designed to be responsive and easy to use and should be usable on mobile, although there are some styling issues on iPhone.

To try it out, click the link above.  
To run the dev server just `clone` the repo, run `npm run start` in the root directory and it will automatically open in you browser.  
To deploy to a github page, specify the `"homepage"` in `package.json` and run `npm run deploy`  
A simple build can be done with `npm run build` and can be served by installing serve with `npm install -g serve` and running `serve -s build`

### Libraries Used

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [react-dimensions](https://github.com/digidem/react-dimensions)
- [react-easy-chart](https://rma-consulting.github.io/react-easy-chart/)
- [mathjs](http://mathjs.org/)

### Sources

- [Favicon](https://www.favicon-generator.org/)
- [Logo](https://www.flaticon.com/free-icon/line-chart_179121)

#### Next Steps

- Add function history. The history is already being stored, the component just needs to be created to make it accessible
- Create smarter default axes that are based on the given function
- There are issues on iPhone with styling that I haven't been able to recreate in-browser to debug
- Better error messages and handling (automatically fixing simple things)
- Add testing (Jest)
- Add a nicer font
- The graph doesn't handle non-continuous functions well at all (Adding a threshold between points and starting a new line could fix this)
- Add service worker and manifest.json to make it a PWA
- Become the next Google
