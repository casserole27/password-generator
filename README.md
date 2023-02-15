
 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Overview

Scrimba Module 3 solo project: Password Generator


### The challenge

Requirements
- build from scratch
- generate two random passwords when the user clicks the button
- each password should be 15 characters long

Stretch goals
- ability to set a password length
- add copy-on-click
- toggle "symbols" and "numbers" on and off

Personal stretch goals
- responsive
- "generate passwords" button resets to generate new passwords every time it is clicked, 
instead of making reset button / function


 ### Screenshot

 ![Screenshot-desktop](/images/screenshot-desktop.png)
 ![Screenshot-mobile](/images/screenshot-mobile.png)

### Links

- [Scrim](https://scrimba.com/scrim/co89b4c52a995b9674453af92)
- [Github](https://github.com/casserole27/password-generator)
- [Live Site](https://www.clewisdev.com/password-generator/)

## My process

Create Github repository
- initialize README

Setup basic HTML file 
- insert my personal comment credit
- head tag includes stylesheet/link and fonts, double check for meta viewport tag
- initial semantic, accessible markup: placing main, heading and paragraph tags
 - commit and push

Setup basic CSS file
- insert my personal comment credit
- decide on mobile or desktop-first design based on design file examples
- set up root selector with variables: colors, border radius, and font size
- margin, padding, box-size reset, root
- decide on global styles
- commit and push

Consult Figma design files
 - use rems or ems
 - adjust text properties: size, line height, color
 - insert images and color properties
 - decide on layout tools and markup accordingly
 - add effects: borders, box shadows, etc
 - commit and push after each major change

Publish live URL

Check markup and accessibility
(https://validator.w3.org/)
(https://wave.webaim.org/)
 - make adjustments as necessary
 - commit and push
 - finish README


### Built with

- [Figma Design](https://www.figma.com/file/Kr6KbuePZa2BNgepo86fhd/Random-Password-Generator-(New-version)-(Copy)?node-id=0%3A1&t=XAg6Ub6YeB5oQOiH-0) 
- Modified Figma wireframe to account for additional input fields
- CSS custom properties
- CSS flexbox
- Responsive Web Design
- vanilla JavaScript

### What I learned

- I really wanted to do the stretch goals and I didn't know how, so I did a lot of piecing together from Google, MDN Webdocs, and W3 Schools. Interested to see how I did in the code review.

- Best practice: interactive elements on a page should usually be some kind of input. I originally coded the password fields as paragraph tags when they should have been inputs.

- This was a major leap forward to me regarding how to work with forms in JavaScript.
```javascript
    resultTwo.value += pw[randomCharTwo];
```
- Use .value for any input field instead of .textContent

- Custom alert: best practice?
```css
.alert { /*! FOR JAVASCRIPT */
    font-family: 'Inter', sans-serif;
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--purple);
    color: var(--darkest-gray);
    font-size: var(--fs-m);
    padding: 1rem;
    border-radius: var(--br-soft);
}
```
```javascript
  //! create a div and add it to the document
  const alert = document.createElement("div");
  //! add the alert class and text
  alert.classList.add("alert");
  alert.textContent = "Copied to clipboard";
   //! add alert element to the body as child node 
  document.body.appendChild(alert);
  
  setTimeout(function() {
    //! remove the alert from the document after 1000ms
      document.body.removeChild(alert);
  }, 1000);
  return resultOne;
```

### Continued development

- Accessibility of project
- Copy text from clipboard - curious about site permissions
- Custom alert best practice

### Useful resources

[Scrimba hint](https://scrimba.com/scrim/co9d34e7a92d4ccfd5d3999ee)

[Google - PW generator tutorial](https://webdesign.tutsplus.com/tutorials/build-a-configurable-random-password-generator-with-javascript--cms-93262)
[Copy text to clipboard](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)
[Random password help](https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/)


[.concat() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
[.select() method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
[Copy text to clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard)(https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
[.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
[.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
[setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)


[clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

## Author

- Website - [C Lewis](https://www.clewisdev.com)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)


## Acknowledgments

[Andy Leverenz](https://web-crunch.com/)
[W3 Schools](https://www.w3schools.com/) 





