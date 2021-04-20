# BICEP fan site
View the live site [here](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite)
<br><br>
![Responsive site example](/assets/images/responsive/responsive_devices.png)

<br>

Table of Contents
- [Project Overview](#project-overview)
- [UX](#ux)
  * [Strategy](#strategy)
    + [Primary Goal](#primary-goal)
  * [Structure](#structure)
  * [Scope](#scope)
    + [User Stories Potential or Existing Customer](#user-stories-potential-or-existing-customer)
    + [User Stories Website Owner](#user-stories-website-owner)
  * [Skeleton](#skeleton)
    + [Wireframes](#wireframes)
  * [Surface](#surface)
    + [Color Palette](#color-palette)
    + [Typography](#typography)
- [Features](#features)
  * [Existing Features](#existing-features)
    + [Feature 1](#feature-1)
      - [Description](#description)
      - [User Stories](#user-stories)
    + [Feature 2](#feature-2)
      - [Description](#description-1)
      - [User Stories](#user-stories-1)
  * [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Libraries and other resources](#libraries-and-other-resources)
- [Testing](#testing)
  * [Test Results](#test-results)
    + [Feature 1](#feature-1-1)
  * [Bugs found during the testing phase](#bugs-found-during-the-testing-phase)
  * [Code Validators and Website Analysis](#code-validators-and-website-analysis)
    + [HTML Markup Validation Service](#html-markup-validation-service)
    + [CSS Validation Service](#css-validation-service)
    + [Chrome Dev tools Lighthouse](#chrome-dev-tools-lighthouse)
    + [Wave Accessibility](#wave-accessibility)
- [Deployment](#deployment)
- [Credits](#credits)
- [Content](#content)
- [Media](#media)
- [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# Project Overview

- This project is a website for the music DJ duo "BICEP" for submission as milestone project 2 as part of the Code Institute - Diploma in Software Development (Full stack) course.
- The website showcases the music DJ duo, their album information, event details and there is a quiz on the dj duo also.

- The website is deployed using Github pages at the following url: [BICEP](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite)

- The repository on Github that contains the website source code and assets is available at the following url: [Code Repository](https://github.com/pmeeny/CI-MS2-BicepMusicFanSite)

- The website was built with a responsive look and feel for desktop, tablet and mobile devices

# UX
## Strategy
### Primary Goal
- The primary goal of the website from the site owners perspective is to showcase the duo's music on spotify, let fans know about upcoming events, let fans learn more about the djs duo and to subscribe to their mailing list 
- The primary goal of the website from a site users perspective is to view and listen to the duo's music on spotify, learn about upcoming events, learn more about the djs duo and to subscribe to their mailing list 
## Structure
I have structured the website into four pages, each with clear, concise structure, information and purpose. I use the Bootstrap grid system throughout, which gave a consistent structure and responsive design "out of the box"

1. Index: The index(homepage): This is the first page the user encounters, it contains
2. About: The about page reads information from Spotify and displays the bands 2 albums with album information, track listing(with links), the dj's top tracks and the ability to listen to these top tracks on the page in a media player
3. Events: The events page reads information from ticketmaster on all of biceps events with date, time, title, ticket information and a link to the google map of where the event will be
4. Quiz: The quiz page asks 10 questions on the dj duo, with a timer, and displays the top score for the user for the browser session
## Scope
### User Stories Potential or Existing Customer
- The user stories for the website user(a potential or existing customer) are described as follows: 
- As a website user the navigation bar is displayed on the Index, About, Events and Quiz pages for easy navigation with a logo
- As a website user I can access the djs spotify, facebook, twitter and instagram pages via a link
- As a website user I can sign-up the the BICEP mailing list
- As a website user I can view track listing, album cover and album information about Biceps two albums
- As a website user I can listen to the dj's albums in spotify by clicking on a particular track
- As a website user I can view the top tracks for the DJ duo
- As a website user I can click on a top track and it will play a 30 second clip on a media player in the page
- As a website user I can view upcoming events from ticketmaster with date, time, title, ticket and map information
- As a website user I can click a buy tickets link on an event, and this will open up the event on the ticketmaster website
- As a website user I can take a quiz of 10 questions on the DJ duo
- As a website user I can view a timer on the quiz
- As a website user I can view my top score for the browser session
- As a website user I can view the question number, and the correct and incorrect answer as I complete the question
- As a website user I can view a summary of my answers for the quiz with the correct and incorrect answers displayed

### User Stories Website Owner
The user stories for the website owner are described as follows: 
- As a website owner I want to display links to spotify, facebook, twitter and instagram pages via a link
- As a website owner I want to provide the ability for a user to sign-up to a mailing list
- As a website owner I want to display track listing, album cover and album information about Biceps two albums, and the ability to listen to these tracks in Spotify
- As a website owner I want to display top tracks for the dj duo and the ability to listen to these top tracks on the page
- As a website owner the top tracks displayed and clicking on one  will play a 30 second clip on a media player in the page
- As a website owner I want to display upcoming events from ticketmaster with date, time, title, ticket and map information
- As a website owner I want the ability for users to buy tickets link on an event, and this will open up the event on the ticketmaster website
- As a website owner I want to display a quiz for users, and that they can see their top score, a timer for the attempt and correct and incorrect answers, wit a summary of all answers

## Skeleton
### Wireframes
- Wireframes for the website were developed in Balsamiq and are linked below for Desktop, Tablet and Mobile devices.
- The wireframes are stored in GIT in the png format and are available at the links below(Desktop, Tablet and Mobile wireframes)
- One overall pdf containing all wireframes is also stored in the GIT at the following location: - [All Wireframes in PDF format](assets/wireframes/Wireframes_allformats.pdf)
<br>

Desktop 
- [Index](assets/wireframes/desktop/index_desktop.png)
- [About](assets/wireframes/desktop/about_desktop.png)
- [Events](assets/wireframes/desktop/events_desktop.png)
- [Quiz](assets/wireframes/desktop/quiz_desktop.png)

Tablet
- [Index](assets/wireframes/tablet/index_tablet.png)
- [About](assets/wireframes/tablet/about_tablet.png)
- [Events](assets/wireframes/tablet/events_tablet.png)
- [Quiz](assets/wireframes/tablet/quiz_tablet.png)

Mobile
- [Index](assets/wireframes/mobile/index_mobile.png)
- [About](assets/wireframes/mobile/about_mobile.png)
- [Events](assets/wireframes/mobile/events_mobile.png)
- [Quiz](assets/wireframes/mobile/quiz_mobile.png)
 
## Surface
### Color Palette
I have gone for a simple and minimal design for the website, with black and white font colours over a large hero image on all pages
There are four colours in the color palette with a 
- #FFFFFF - White colour for text on background images
- #000000 - Black colour for text on a white background
- #0062CC - Blue colour for buttons and links
- rgba(255,255,255,.5) - Grey colour for not selected navbar icons and text

![Palette](/assets/images/color_palette.PNG)

- I feel the colours complement each other very well, and I choose those colours after testing a number of palettes while making sure the colour palette met accessibility standards.

### Typography
The Roboto font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the Roboto font cannot be imported into the website correctly.
This font is from the Google fonts library

# Features
The website has TBC
## Existing Features
### Feature 1 Navigation Bar
#### Description
This is the navigation bar of the website, and is displayed on the four web pages Index(Homepage), About, Events, Quiz. The navigation bar is a bootstrap component, and is a responsive component. It becomes a burger menu on tablet and mobile devices.

#### User Stories
User Story 1.1: As a website user the navigation bar is displayed on the Index, About, Events and Quiz pages for easy navigation with a logo


### Feature 2 Footer
#### Description
User Story 2.1: As a website user I can access the djs spotify, facebook, twitter and instagram pages via a link on the page footer

#### User Stories


### Feature 3 Index Page
#### Description

#### User Stories


### Feature 4 About Page
#### Description

#### User Stories

### Feature 5 Events Page
#### Description

#### User Stories

### Feature 6 Quiz Page
#### Description

#### User Stories

##  Features Left to Implement


# Technologies Used
## Languages 
- HTML (https://en.wikipedia.org/wiki/HTML)
    - The project uses html to build the relevant pages

- CSS (https://en.wikipedia.org/wiki/CSS)
    - The project uses CSS to style the relevant pages

- Javascript (https://www.javascript.com/)
    - Javascript was used for all scripting on the site

## Libraries and other resources
- Bootstrap 4.6 (https://getbootstrap.com/docs/4.6)
    - The project uses the bootstrap library for some of the UI components in the website

- Git (https://git-scm.com/)
    - Git was used as the source control tool for this project

- Github (https://github.com/)
    - Github was used to store the project code in a repository

- Guthub desktop (https://desktop.github.com/)
    - Github desktop was used to view and make commits into GIT

- Microsoft VSCode (https://code.visualstudio.com/)
    - A locally installed Integrated Development Environment
    - I also installed a number of extensions: Code Spell Checker, Beautify, Auto Rename Tag, Git, GitLens

- Google Fonts (https://fonts.google.com/)
    - Google font Lato was used as the website font

- Balsamiq (https://balsamiq.com/)
    - Balsamiq was used to create the website wireframes

- Font Awesome (https://fontawesome.com/)
    - Font awesome was used to provide the relevant fonts/icons for the website

- JQuery (https://jquery.com)
    - JQuery was used throughout in several of the javascript files fro DOM manipulation

- TinyPNG (https://tinypng.com/)
    - TinyPNG was used to compress images

 - CSS Validation Service (https://jigsaw.w3.org/css-validator/)
    - CSS validation service for validation the css in the project  

- HTML Markup Validation Service (https://validator.w3.org/)   
    - HTML validation service for validation the css in the project  

- Chrome dev tools (https://developers.google.com/web/tools/chrome-devtools)
    - For troubleshooting and debugging of the project code

- Chrome Lighthouse (https://developers.google.com/web/tools/lighthouse)
    - For performance, accessibility, progressive web apps, SEO analysis of the project code

- Responsive Design (http://ami.responsivedesign.is/)
    - Website for generating the responsive image in this README

- JS Fiddle (https://jsfiddle.net/)
    - Used for testing html and css concepts

- GitHub Wiki TOC generator (https://ecotrust-canada.github.io/markdown-toc/)
    - Used for generating a table of contents for this README

# Testing
The testing approach was manual and automated, and testing was completed on the following browsers and device types

Device Number | Physical/Emulator | Device Name | Device Type | Browser | Version
------------ | ------------ | ------------- | ------------- | ------------- | -------------
1 | Physical | iPad | Tablet |  Safari | 14.4 |
2 | Physical | iPhone | Mobile |Safari | 14.4 |
3 | Physical | One Plus 5 | Mobile | Chrome | 88.0 |
4 | Physical | Windows Desktop| Desktop | IE Edge | 88.0 |
5 | Physical | Windows Desktop| Desktop | Mozilla Firefox | 85.0 |
6 | Emulator | Galaxy S5 | Mobile | Chrome Emulator | 86.0 |
7 | Emulator | iPad | Tablet | Chrome Emulator | 86.0 |
8 | Emulator | iPhone X | Mobile | Chrome Emulator | 86.0 |
9 | Emulator | iPhone 5/SE | Mobile | Chrome Emulator | 86.0 |

## Test Results
Below are the test results for testing the website requirements against a range of browsers and devices


### Feature 2 Footer

User Story | Test Case Steps | Expected Result | Screenshots
------------ | ------------ | ------------- | ------------- 
User Story 2.1: As a website user I can access the djs spotify, facebook, twitter and instagram pages via a link on the page footer| 1. Click on each of the index, events, about and quiz pages and scroll down to the footer <br> 2. Click on the spotify image <br> 3. Click on the instagram social icon <br> 4. Click on the twitter social icon <br> 5. Click on the facebook social icon | 1. The footer is displayed on each page <br> 2. The bicep spotify page opens in a new tab <br> 3. The bicep instagram page opens in a new tab  <br> 4. The bicep twitter page opens in a new tab <br> 5. The bicep facebook page opens in a new tab 


<br>

## Bugs found during the testing phase

Bug Number | Comment |  Solution/Design decision |
------------ | ------------- | ------------- | 
1 | The time spent is displaying after each question, not in total | The fix was to create a new div called total_time_spent, and to update this div as part of the method displayQuestions() instead of checkAnswer()
2 | The allAnswers element was being overwritten if 2 questions had the same number | The fix was to create a new counter, and to increment that separately when adding to the allAnswers list
3 | The top score was not displaying the current value, once a quiz has been completed | The fix was to call getTopScore after setTopScore once 10 questions were complete
4 | The top score is not displayed after 1st attempt results page | The fix was to  $("#top_score").show() to show the div
5 | After the mailing list mailing list modal closes the screen remains dark and the index isn't loading properly. |The fix was to add $("#mailingListModal").modal("hide"); when submit button is clicked
6 | The dynamic about and quiz divs are not scaling properly on IE | The fix was to apply a more dynamic div:  https://stackoverflow.com/questions/4075440/dynamic-height-for-div/4075456 with a height: auto as IE doesn't support min-height

<br>

## Code Validators and Website Analysis
The website's pages were run against the following validators:

### HTML Markup Validation Service
I used https://validator.w3.org/

Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html | Passed, No errors found | [Results](assets/images/testing/html-validation/index_html_validation.jpg)
about.html | Passed, No errors found | [Results](assets/images/testing/html-validation/about_html_validation.JPG)
events.html | Passed, No errors found | [Results](assets/images/testing/html-validation/events_html_validation.JPG)
quiz.html | Passed, No errors found | [Results](assets/images/testing/html-validation/quiz_html_validation.JPG)
404.html | Passed, No errors found | [Results](assets/images/testing/html-validation/404_html_validation.JPG)

<br>

### CSS Validation Service
I used https://jigsaw.w3.org/css-validator/
<p>
    <a href="https://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
style.css | Passed, No errors found | [Results](assets/images/testing/css-validation/css_validation.jpg)

### Chrome Dev tools Lighthouse 

(I used Lighthouse https://developers.google.com/web/tools/lighthouse)

Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html (Desktop) | Performance: 98, Accessibility: 100, Best practices: 100, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/index_desktop.JPG)
index.html (Mobile) | Performance: 91, Accessibility: 100, Best practices: 100, SEO: 98 | [Results](assets/images/testing/lighthouse-testing/index_mobile.JPG)
quiz.html (Desktop) | Performance: 96, Accessibility: 100, Best practices: 100, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/quiz_desktop.JPG)
quiz.html (Mobile) | Performance: 95, Accessibility: 100, Best practices: 100, SEO: 98 | [Results](assets/images/testing/lighthouse-testing/quiz_mobile.JPG)
events.html (Desktop) | Performance: 94, Accessibility: 100, Best practices: 93, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/events_desktop.jpg)
events.html (Mobile) | Performance: 88, Accessibility: 100, Best practices: 93, SEO: 98 | [Results](assets/images/testing/lighthouse-testing/events_mobile.jpg)
about.html (Desktop) | Performance: , Accessibility: , Best practices: , SEO:  | [Results](assets/images/testing/lighthouse/lighthouse-testing/about_desktop.jpg)
about.html (Mobile) | Performance: , Accessibility: , Best practices: , SEO:  | [Results](assets/images/testing/lighthouse-testing/about_mobile.jpg)
404.html (Desktop) | Performance: 99, Accessibility: 100, Best practices: 100, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/404_desktop.JPG)
404.html (Mobile) | Performance: , Accessibility: , Best practices: , SEO:  | [Results](assets/images/testing/lighthouse-testing/404_mobile.jpg)

<br>

### Wave Accessibility
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/index_wave_validation.PNG)
quiz.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/quiz_wave_validation.PNG)
about.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/about_wave_validation.PNG)
events.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/events_wave_validation.PNG)
404.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/404_wave_validation.PNG)

<br>

### JSHint
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
about.js | TBC | TBC
events.js | 0 errors and 1 warning | [Results](assets/images/testing/jshint/events_jshint.JPG)
quiz.js | 0 errors and 0 warnings | [Results](assets/images/testing/jshint/quiz_jshint.JPG)
sendEmail.js | 0 errors and 0 warnings | [Results](assets/images/testing/jshint/sendemail_jshint.JPG)
questions.js | 0 errors and 0 warnings | [Results](assets/images/testing/jshint/questions_jshint.JPG)

# Deployment
The website was developed using the Visual Studio Code IDE due to the extensibility of the Visual Studio Code IDE and I plan on using this IDE for future projects. 

The source code is stored in GIT in the repo: pmeeny/CI-MS2-BicepMusicFanSite(master branch) 

The website was deployed on GitHub pages (https://pages.github.com/) using the following steps
1. Log to GitHub (https://wwww.github.com)
2. Click the Repositories tab and select the repository pmeeny/CI-MS2-BicepMusicFanSite
3. In the menu, select Settings
4. Scroll down to the GitHub Pages section
5. Under source, select the master branch and save
6. The website is now deployed, and the link is displayed in the GitHub Pages section

To run this project locally, you will need to clone the repository
1. Login to GitHub (https://wwww.github.com)
2. Select the repository pmeeny/CI-MS2-BicepMusicFanSite
3. Click the Code button and copy the HTTPS url, for example: https://github.com/pmeeny/CI-MS2-BicepMusicFanSite.git
4. In your IDE, open a terminal and run the git clone command, for example 

```git clone https://github.com/pmeeny/CI-MS2-BicepMusicFanSite.git```

5. The repository will now be cloned in your workspace

# Credits

- For the social media icons in the footer, I used the code with some modifications from the Code Institute, CV project, reference: https://github.com/Code-Institute-Org/ucd-resume

- For the navigation bar I used the code with some modifications from the Bootstrap website: https://getbootstrap.com/docs/4.6/components/navbar/

- For the hero video and text overlay on the index.html page, I used the code with some modifications from the w3schools website: https://www.w3schools.com/howto/howto_css_fullscreen_video.asp

- I use a number of Bootstrap components and the source code in the examples: Navbar, Carousel, Modal, Collapse in the four webpages
    - https://getbootstrap.com/docs/4.6/components/navbar/
    - https://getbootstrap.com/docs/4.6/components/modal/

- For layouts I use the Bootstrap Grid system: https://getbootstrap.com/docs/4.6/layout/grid/

- I used the W3 schools website to find out compatibility and examples of various form components: https://www.w3schools.com/

- For the events.html pagination styling, I used an example from https://www.w3schools.com/css/css3_pagination.asp 

- For the hero image and alignment on all pages, I used the examples described in https://codetheweb.blog/fullscreen-image-hero/ and https://stackoverflow.com/questions/4240015/css-text-in-center-of-background-image

- For the stopwatch: https://jsfiddle.net/Daniel_Hug/pvk6p/

- For updating the quiz progress bar, I found this page useful: https://stackoverflow.com/questions/21182058/dynamically-change-bootstrap-progress-bar-value-when-checkboxes-checked

- The Image flipping css, used in the about.html page: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_image2

- For IE support for a dynamic div I used the code in this url: https://stackoverflow.com/questions/4075440/dynamic-height-for-div/4075456

# Content
- Wikipedia (https://wikepedia.com/)
    - The text on the about page is from wikpedia

- Pixabay (https://pixabay.com/)
    - The images on the home page, a and background on events, quiz and about pages are from pixabay

- Font Awesome (http://fontawesome.com)    
    - The fonts on the footer and header are from font awesome

- Fonts (http://https://fonts.google.com/)    
    - The text font(Lato) is from google fonts

- Spotify (http://www.spotify.com)
    - The spotify logo is from spotify.com brand guidelines and content 

- Spotify Web API (https://developer.spotify.com/documentation/web-api/)    
    - The album information is read from the spotify API

- Ticketmaster (https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)     
    - The event information is read from the ticketmaster api

<br>

# Media
- Wikipedia (https://wikepedia.com/)
    - The text on index and about was taken from the dj's Wikipedia page

 <br>

# Acknowledgements
- I would like to thank my fiancee Mary for her help, constant support and ideas for the website, my son Liam who was born in March while I worked on this project, and also to my dog Lily for her company during development of the website.
- I would like to thank my mentor Mo Shami for his input, help and feedback.