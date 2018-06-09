# Plotter - User Guide

[Check it out here!](https://colinlmacleod1.github.io/plotter/)
It should be mobile friendly!

### Overview

Plotter is a simple web app that let a user input a formula and it will generate a plot for them. The user can adjust the axes if needed.
If the user inputs an invalid function or axis errors will appear. The web app is designed to be responsive and easy to use and should be perfectly usable on mobile.

To try it out, click the link above.
For development just clone the repo and run `npm run start`

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

- Add function history. The history is already being stored, the component just needs to be mode to make it accessible
- Create smarter default axes
- There are issues on iPhone with styling that I haven't been able to recreate in-browser to debug
- Add service worker and manifest.json to make it a PWA
- Become the next Google
