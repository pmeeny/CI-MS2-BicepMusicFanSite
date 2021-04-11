
# Project Overview

- This project is a website for the music DJ duo "BICEP" for submission as milestone project 2 as part of the Code Institute - Diploma in Software Development (Full stack) course.
- The website showcases the music DJ duo

- The website is deployed using GIThub pages at the following url: [BICEP](https://pmeeny.github.io/CodeInstitute-MilestoneProject2-BicepMusicFanSite/)

- The repository on Github that contains the website source code and assets is available at the following url: [Code Repository](https://github.com/pmeeny/CodeInstitute-MilestoneProject2-BicepMusicFanSite)

- The website was built with a responsive look and feel for desktop, tablet and mobile devices
![Responsive site example](/assets/images/responsive_devices.png)

# UX
## Strategy
### Primary Goal
- The primary goal of the website from the site owners perspective is 
- The primary goal of the website from a site users perspective is 
## Structure
I have structured the website into TBC pages, each with clear, concise structure, information and purpose. I use the Bootstrap grid system throughout, which gave a consistent structure and responsive design "out of the box"

1. Index: The index(homepage): This is the first page the user encounters, it contains
## Scope
### User Stories Potential or Existing Customer
The user stories for the website user(a potential or existing customer) are described as follows: 

### User Stories Website Owner
The user stories for the website owner are described as follows: 


## Skeleton
### Wireframes
- Wireframes for the website were developed in Balsamiq and are linked below for Desktop, Tablet and Mobile devices.
- The wireframes are stored in GIT in the png format and are available at the links below(Desktop, Tablet and Mobile wireframes)
- One overall pdf containing all wireframes is also stored in the GIT at the following location: - [All Wireframes in PDF format](assets/wireframes/Wireframes_allformats.pdf)
<br>

Desktop 


Tablet


Mobile

 
## Surface
### Color Palette
There are TBC colours in the color palette with a 
- Primary colour of 
- Secondary colour of 

![Responsive site example](/assets/images/color_palette.png)

- I feel the primary and secondary colours complement each other very well, and I choose those colours after testing a number of palettes while making sure the colour palette met accessibility standards.

### Typography
The Lato font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the Lato font cannot be imported into the website correctly.

# Features
The website has TBC
## Existing Features
### Feature 1 
#### Description

#### User Stories


### Feature 2 
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

- Gitpod (https://gitpod.io/)
    - An online Integrated Development Environment

- Github (https://github.com/)
    - Github was used to store the project code in a repository

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
    - JQuery was required by Bootstrap for some of the the UI components, for example the carousel and in several of the javascript scripts

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

- Canva (https://www.canva.com/)
    - Canva was used to design/create the website logo

- GitHub Wiki TOC generator (https://ecotrust-canada.github.io/markdown-toc/)
    - Used for generating a table of contents for this README
    
- Adobe Colour (https://color.adobe.com/create/color-wheel)
  - To generate the colour palette image used in this README

# Testing
The testing approach was manual, and testing was completed on the following browsers and device types

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


### Feature 1 



<br>

## Bugs found during the testing phase

Bug Number | Comment |  Solution/Design decision |
------------ | ------------- | ------------- | 
1 | TBC | TBC
The time spent is displaying after each question
The fix was to create a new div called total_time_spent, and to update this div as part of the method displayQuestions() instead of checkAnswer()

2 allAnswers element was being overwritten if 2 questions had the same number
The fix was to create a new counter, and to increment that seperatly when adding to the allAnswers list

<br>

## Code Validators and Website Analysis
The website's pages were run against the following validators:

### HTML Markup Validation Service
I used https://validator.w3.org/

Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------


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


### Chrome Dev tools Lighthouse 

(I used Lighthouse https://developers.google.com/web/tools/lighthouse)

Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html (Desktop) | Performance: 98, Accessibility: 97, Best practices: 93, SEO: 90  | [Results](assets/images/testing/google-lighthouse/index_desktop_lighthouse.png)


<br>

### Wave Accessibility
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave_validation/index_wave_validation.jpg)

<br>

# Deployment
The website was developed using the Visual Studio Code IDE due to the extensibility of the Visual Studio Code IDE and I plan on using this IDE for future projects. 

The source code is stored in GIT in the repo: pmeeny/CodeInstitute-MilestoneProject2-BicepMusicFanSite(master branch) 

The website was deployed on GitHub pages (https://pages.github.com/) using the following steps
1. Log to GitHub (https://wwww.github.com)
2. Click the Repositories tab and select the repository pmeeny/CodeInstitute-MilestoneProject2-BicepMusicFanSite
3. In the menu, select Settings
4. Scroll down to the GitHub Pages section
5. Under source, select the master branch and save
6. The website is now deployed, and the link is displayed in the GitHub Pages section

To run this project locally, you will need to clone the repository
1. Login to GitHub (https://wwww.github.com)
2. Select the repository pmeeny/CodeInstitute-MilestoneProject2-BicepMusicFanSite
3. Click the Code button and copy the HTTPS url, for example: https://github.com/pmeeny/CodeInstitute-MilestoneProject2-BicepMusicFanSite.git
4. In your IDE, open a terminal and run the git clone command, for example 

```git clone https://github.com/pmeeny/CodeInstitute-MilestoneProject2-BicepMusicFanSite.git```

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

- Image flipping css, used in the about.html page: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_image2

# Content

<br>

# Media
- Wikipedia (https://wikepedia.com/)
    - The text was used from Wikipedia


 <br>

# Acknowledgements
- I would like to thank my fiancee Mary for her help, constant support and ideas for the website, my son Liam who was born in March, and also to my dog Lily for her company during development of the website.
- I would like to thank my mentor Mo Shami for his input, help and feedback.