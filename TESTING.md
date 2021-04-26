# Table of Contents
- [Testing](#testing)
  * [Manual testing information](#manual-testing-information)
  * [Feature 1 Navigation Bar](#feature-1-navigation-bar)
    + [User Story](#user-story)
    + [Test case steps](#test-case-steps)
    + [Expected Result](#expected-result)
    + [Test Results](#test-results)
  * [Feature 2 Footer](#feature-2-footer)
    + [User Story](#user-story-1)
    + [Test case steps](#test-case-steps-1)
    + [Expected Result](#expected-result-1)
    + [Actual Result](#actual-result)
  * [Feature 3 Index Page](#feature-3-index-page)
    + [User Stories](#user-stories)
    + [Test case steps](#test-case-steps-2)
    + [Expected Result](#expected-result-2)
    + [Actual Result](#actual-result-1)
  * [Feature 4 About Page](#feature-4-about-page)
    + [User Stories](#user-stories-1)
    + [Test case steps](#test-case-steps-3)
    + [Expected Result](#expected-result-3)
    + [Actual Result](#actual-result-2)
  * [Feature 5 Events Page](#feature-5-events-page)
    + [User Stories](#user-stories-2)
    + [Test case steps](#test-case-steps-4)
    + [Expected Result](#expected-result-4)
    + [Actual Result](#actual-result-3)
  * [Feature 6 404 Page](#feature-6-404-page)
    + [User Story](#user-story-2)
    + [Test case steps](#test-case-steps-5)
    + [Expected Result](#expected-result-5)
    + [Actual Result](#actual-result-4)
  * [Feature 7 Quiz](#feature-7-quiz)
    + [User Stories](#user-stories-3)
    + [Test case steps](#test-case-steps-6)
    + [Expected Result](#expected-result-6)
    + [Actual Result](#actual-result-5)
  * [Automated testing](#automated-testing)
    + [Test Cases](#test-cases)
    + [Test case recordings](#test-case-recordings)
    + [Code Coverage](#code-coverage)
- [Bugs found during the testing phase](#bugs-found-during-the-testing-phase)
- [Code Validators and Website Analysis](#code-validators-and-website-analysis)
  * [HTML Markup Validation Service](#html-markup-validation-service)
  * [CSS Validation Service](#css-validation-service)
  * [Chrome Dev tools Lighthouse](#chrome-dev-tools-lighthouse)
  * [Wave Accessibility](#wave-accessibility)
  * [JSHint](#jshint)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# Testing
The testing approach(described in detail in this testing readme) is as follows:
1. Manual testing using emulators and real devices
2. Automated E2E testing with Cypress testing framework (www.cypress.io)
## Manual testing information
Testing was completed on the following browsers and device types

Device Number | Physical/Emulator | Device Name | Device Type | Browser | Version
------------ | ------------ | ------------- | ------------- | ------------- | -------------
1 | Physical | iPad | Tablet |  Safari | 14.4 |
2 | Physical | iPhone | Mobile |Safari | 14.4 |
3 | Physical | One Plus 5 | Mobile | Chrome | 88.0 |
4 | Physical | Windows Desktop| Desktop | IE Edge | 88.0 |
5 | Physical | Windows Desktop| Desktop | Mozilla Firefox | 85.0 |
6 | Physical | Windows Desktop| Desktop | Chrome | 86.0 |
7 | Emulator | Galaxy S5 | Mobile | Chrome Emulator | 86.0 |
8 | Emulator | iPad | Tablet | Chrome Emulator | 86.0 |
9 | Emulator | iPhone X | Mobile | Chrome Emulator | 86.0 |
10 | Emulator | iPhone 5/SE | Mobile | Chrome Emulator | 86.0 |

- Below are the test results for testing the website requirements against a range of browsers and devices
- For the purpose of the screenshots I used a Chrome emulator for desktop, tablet and mobile (Device numbers 6(Desktop), 8(Tablet), 9(Mobile))

## Feature 1 Navigation Bar
### User Story
User Story 1.1: As a website user the navigation bar is displayed with a logo on the Index, About, Events, 404 and Quiz pages for easy navigation

### Test case steps
1. Click on each of the index, events, about, 404 and quiz pages in the navigation bar
2. Switch the devices that views the page to Tablet or Mobile

### Expected Result
1. The page is displayed with consistent navigation bar and logo
2. The navigation bar is displayed as a burger menu to the right of the page (once the screen width is less than 990 pixels)
### Test Results
Step Number | Desktop | Tablet | Mobile | Result 
------------ | ------------ | ------------- | ------------- | ------------- |
Step 1, 2 | [Desktop Result](assets/images/testing/manual-tests/testcase_1_1_desktop.PNG) | [Tablet Result](assets/images/testing/manual-tests/testcase_1_1_tablet.PNG)  | [Mobile Result](assets/images/testing/manual-tests/testcase_1_1_mobile.PNG)  | Passed |

<br>

## Feature 2 Footer
### User Story
- User Story 2.1: As a website user I can access the djs spotify, facebook, twitter and instagram pages via a link on the page footer
### Test case steps
1. View the footer on the index, 404, quiz, events and about html pages
2. Click on the spotify link(image)
3. Click on the facebook link(image)
4. Click on the twitter link(image)
5. Click on the instagram link(image)
### Expected Result
1. The footer is consistent across the 5 pages, and a link(image) to the spotify, facebook, twitter and instagram pages of the DJ duo is displayed
2. The dj's spotify page opens in a new tab
3. The dj's facebook page opens in a new tab
4. The dj's twitter page opens in a new tab
5. The dj's instagram page opens in a new tab

### Actual Result
Step Number | Desktop | Tablet | Mobile | Result 
------------ | ------------ | ------------- | ------------- | ------------- |
Step 1 | [Desktop Result](assets/images/testing/manual-tests/testcase_2_1_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_2_1_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_2_1_mobile.PNG) | Passed |
Step 2 | [Desktop Result](assets/images/testing/manual-tests/testcase_2_2_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_2_2_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_2_2_mobile.PNG) | Passed |
Step 3 | [Desktop Result](assets/images/testing/manual-tests/testcase_2_3_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_2_3_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_2_3_mobile.PNG) | Passed |
Step 4 | [Desktop Result](assets/images/testing/manual-tests/testcase_2_4_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_2_4_tablet.PNG) | [Mobile Result](assets/images/testing/manual-tests/testcase_2_4_mobile.PNG) | Passed |
Step 5 | [Desktop Result](assets/images/testing/manual-tests/testcase_2_5_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_2_5_tablet.PNG) | [Mobile Result](assets/images/testing/manual-tests/testcase_2_5_mobile.PNG) | Passed 

<br>

## Feature 3 Index Page
### User Stories
- User Story 3.1: As a website user I can access the About Page by clicking on a link on the index(homepage) page
- User Story 3.2: As a website user I can access the Events Page by clicking on a link on the index(homepage) page 
- User Story 3.3: As a website user I can access the Quiz Page by clicking on a link on the index(homepage) page
- User Story 3.4: As a website user I can sign-up to the BICEP email list by clicking on a link on the index(homepage) page, entering my full name and email address and clicking the Submit button on the modal screen to Submit or Close to close the modal
### Test case steps
1. Navigate to the index.html page
2. Click on the BICEP ABOUT image/link on the index.html page
3. Click on the BICEP EVENT INFO on the index.html page
4. Click on the BICEP QUIZ GAME on the index.html page
5. Click on the BICEP MAIL LIST on the index.html page
6. Close the mailing list modal
7. Click on the BICEP MAIL LIST on the index.html page
8. Enter no value for either name and email address and click the Submit button
9. Enter a value for the name and email address and click the Submit button
### Expected Result
1. The index.html page is displayed
2. The about.html page is displayed in the same tab
3. The events.html page is displayed in the same tab
4. The quiz.html page is displayed in the same tab
5. A modal is displayed called Mailing List sign-up
6. The mailing list modal is closed
7. A modal is displayed called Mailing List sign-up
8. A message is displayed that each field must be filled in
9. The modal closes and an email is sent to the email list provided

### Actual Result
Step Number | Desktop | Tablet | Mobile | Result 
------------ | ------------ | ------------- | ------------- | ------------- |
Step 1 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_1_desktop.png)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_1_tablet.png) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_1_mobile.png) | Passed |
Step 2 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_2_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_2_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_2_mobile.PNG) | Passed |
Step 3 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_3_desktop.png)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_3_tablet.png) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_3_mobile.png) | Passed |
Step 4 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_4_desktop.png)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_4_tablet.png) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_4_mobile.png) | Passed |
Step 5 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_5_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_5_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_5_mobile.PNG) | Passed |
Step 6 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_6_desktop.png)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_6_tablet.png) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_6_mobile.png) | Passed |
Step 7 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_7_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_7_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_7_mobile.PNG) | Passed |
Step 8 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_8_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_8_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_8_mobile.PNG) | Passed |
Step 9 | [Desktop Result](assets/images/testing/manual-tests/testcase_3_9_alldevices.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_3_9_alldevices.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_3_9_alldevices.PNG) | Passed |
<br>

## Feature 4 About Page
### User Stories
- User Story 4.1: As a website user I can view track listing, album cover image and album information about Biceps two albums
- User Story 4.2: As a website user I can view album information when I hover over an album image
- User Story 4.2: As a website user I can listen to the dj's albums tracks in a new tab in spotify by clicking on a particular track
- User Story 4.3: As a website user I can view the top tracks for the DJ duo
- User Story 4.4: As a website user I can click on a top track and it will play a 30 second clip on a media player in the page
### Test case steps
1. Navigate to the about page(about.html)
2. Navigate to the Albums section
3. Click on one of the album images
4. Click on each track in the track listings
5. Navigate to the top tracks section
6. Click on each of the top tracks
### Expected Result
1. The about.html page is displayed, and there is a paragraph about the djs displayed in the About section
2. Two album images are displayed and the track listing for each album
3. The image flips to display album information(name, label, number of tracks)
4. Each track opens in a new tab in spotify
5. The top tracks are displayed
6. The top track(a 30 second clip) starts playing in the media player on the page
### Actual Result
Step Number | Desktop | Tablet | Mobile | Result 
------------ | ------------ | ------------- | ------------- | ------------- |
Step 1 | [Desktop Result](assets/images/testing/manual-tests/testcase_4_1_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_4_1_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_4_1_mobile.PNG) | Passed |
Step 2 | [Desktop Result](assets/images/testing/manual-tests/testcase_4_2_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_4_2_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_4_2_mobile.PNG) | Passed |
Step 3 | [Desktop Result](assets/images/testing/manual-tests/testcase_4_3_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_4_3_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_4_3_mobile.PNG) | Passed |
Step 4 | [Desktop Result](assets/images/testing/manual-tests/testcase_4_4_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_4_4_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_4_4_mobile.PNG) | Passed |
Step 5 | [Desktop Result](assets/images/testing/manual-tests/testcase_4_5_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_4_5_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_4_5_mobile.PNG) | Passed |
Step 6 | [Desktop Result](assets/images/testing/manual-tests/testcase_4_6_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_4_6_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_4_6_mobile.PNG) | Passed |

<br>

## Feature 5 Events Page
### User Stories
- User Story 5.1: As a website user I can view upcoming events from ticketmaster with date, time, title, ticket purchase information
- User Story 5.2: As a website user I can click next and previous on the event pages and select a particular page, the events on that page will be displayed
- User Story 5.3: As a website user I can click the Buy Tickets link for an event and it will open up the event in ticketmaster in a new tab 
- User Story 5.4: As a website user I can click on an event and view the event venue name and google map information
### Test case steps
1. Navigate to the events page(about.html)
2. Click on the Buy Tickets link for an event
3. Click on an event, and then click on the same link again
4. Click on a particular page number, then click on the next link and then click on the previous link

### Expected Result
1. The events.html page is loaded, and an Events table with a number of columns(Date, Time, Title, Tickets) is displayed. Two events will be displayed on each page
2. A new tab will open and display the event in ticketmaster
3. The events venue details and a google map of the venue will be displayed. Re-clicking on the event will hide this information
4. The page will update page selected and refresh with new events. The page number will increase and the page will refresh with new events, if you are on the last page the Next link will not be displayed. The page number will decrease and the page will refresh with new events, if you are on the first page the Previous link will not be displayed
### Actual Result
Step Number | Desktop | Tablet | Mobile | Result 
------------ | ------------ | ------------- | ------------- | ------------- |
Step 1 | [Desktop Result](assets/images/testing/manual-tests/testcase_5_1_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_5_1_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_5_1_mobile.PNG) | Passed |
Step 2 | [Desktop Result](assets/images/testing/manual-tests/testcase_5_2_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_5_2_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_5_2_mobile.PNG) | Passed |
Step 3 | [Desktop Result](assets/images/testing/manual-tests/testcase_5_3_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_5_3_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_5_3_mobile.PNG) | Passed |
Step 4 | [Desktop Result](assets/images/testing/manual-tests/testcase_5_4_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_5_4_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_5_4_mobile.PNG) | Passed |

<br>

## Feature 6 404 Page
### User Story
- User Story 6.1: As a website user if I enter in an incorrect url or page, I will be presented with a 404 page with consistent header and footer
### Test case steps
1. Navigate to a page that does not exist (for example: doesNotExist.html or quiz1.html)
### Expected Result
1. The 404.html page is displayed
### Actual Result
Step Number | Desktop | Tablet | Mobile | Result 
------------ | ------------ | ------------- | ------------- | ------------- |
Step 1 | [Desktop Result](assets/images/testing/manual-tests/testcase_6_1_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_6_1_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_6_1_mobile.PNG) | Passed |

<br>

## Feature 7 Quiz

### User Stories
- User Story 7.1: As a website user I can take a quiz of 10 questions on the DJ duo
- User Story 7.2: As a website user I can view a timer on the quiz
- User Story 7.3: As a website user I can view my current quiz score and top score for the browser session
- User Story 7.4: As a website user I can view the question number, and the correct(green color) and incorrectly selected answer(red color) is highlighted as I complete the question
- User Story 7.5: As a website user I can view a summary of my answers for the quiz with the correct and incorrect answers displayed

### Test case steps
1. Navigate to the quiz page(quiz.html)
2. On question one, do not select an answer and click the Submit Answer button
3. Answer 8 of the 10 questions correct
4. View the results screen on the quiz page that is displayed when all 10 questions are answered
5. View the top score on the results screen
6. Retake the quiz and answer 10 of the 10 questions correct
7. View the top score on the results screen

### Expected Result
1. The quiz page opens on question one and the timer starts
2. The quiz stays on question 1 and the following message is displayed: Please select one of the options
3. The correct answer of each question is highlighted in green, and any incorrect answers selected are highlighted in red. The question number and quiz score updates for each question. The timer stops and the time taken is displayed.
4. The results screen displays the 8 questions correctly answered, and the 2 questions incorrect answered.
5. The top score is updated to 8 out of 10
6. The results screen displays the 10 questions correctly answered. Note: The order in which the question is displayed is random.
7. The top score is updated to 10 out of 10.

### Actual Result
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |
Step 1 | [Desktop Result](assets/images/testing/manual-tests/testcase_7_1_desktop.png)  | [Tablet Result](assets/images/testing/manual-tests/testcase_7_1_tablet.png) |[Mobile Result](assets/images/testing/manual-tests/testcase_7_1_mobile.png) | Passed |
Step 2 | [Desktop Result](assets/images/testing/manual-tests/testcase_7_2_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_7_2_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_7_2_mobile.PNG) | Passed |
Step 3 | [Desktop Result](assets/images/testing/manual-tests/testcase_7_3_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_7_3_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_7_3_mobile.PNG) | Passed |
Step 4 | [Desktop Result](assets/images/testing/manual-tests/testcase_7_4_5_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_7_4_5_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_7_4_5_mobile.PNG) | Passed |
Step 5 | [Desktop Result](assets/images/testing/manual-tests/testcase_7_4_5_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_7_4_5_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_7_4_5_mobile.PNG) | Passed |
Step 6 | [Desktop Result](assets/images/testing/manual-tests/testcase_7_6_7_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_7_6_7_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_7_6_7_mobile.png) | Passed |
Step 7 | [Desktop Result](assets/images/testing/manual-tests/testcase_7_6_7_desktop.PNG)  | [Tablet Result](assets/images/testing/manual-tests/testcase_7_6_7_tablet.PNG) |[Mobile Result](assets/images/testing/manual-tests/testcase_7_6_7_mobile.PNG) | Passed |

<br>

## Automated testing
- Six testcases were written using the cypress testing framework, they are described below
- These 6 test cases were part of a test suite, and the automation was run against the Chrome browser in the desktop, version 90.
- The total time for the test cases was around 2 minutes, 58 seconds on average to run
### Test Cases
Test Case Number | Test Case Name | Test Case Steps | Test Case Result | Test Case Time | 
------------ | ------------ | ------------- | ------------- | ------------- |
1 | 404Test | This test opens the 404 page and checks the contents of the page | Passed | 9 seconds |
2 | aboutTest | This test opens the About Page, checks the contents of the album 1,2 divs, checks that 10 top tracks are displayed and clicks on each one of them  | Passed | 11 seconds |
3 | eventsTest | This test opens the event page, checks the content of each event(ticket url, date, time, google map), and clicks on the page number, next and previous to test the pagination | Passed | 28 seconds |
4 | indexTest | This test opens the index.html page and checks the content |  Passed | 6 seconds |
5 | mailingListTest | This test opens the index.html page, opens the mailing list and submits values for name, email address and clicks Submit to send an email | Passed | 11 seconds |
6 | quizTest | This test opens the quiz.html page, then takes the quiz 4 times, once for each open(a-d), it checks the percentage value, score value and top score value of every attempt | Passed | 1 minute, 49 seconds |

The test cases written are listed as follows
![Cypress Test Cases](/assets/images/readme/cypress_testcases.PNG)

The cypress.io dashboard displays the following information
![Cypress Dashboard](/assets/images/readme/cypress_dashboard.PNG)

The test automation suite results, which included 6 tests, all passed in a time of 90.61 seconds are displayed below
![Cypress Test Results](/assets/images/readme/cypress_testresults.PNG)
### Test case recordings
Video recordings of each of the 6 test cases are available at the following location:
These can be viewed  in a media player, for example windows media player or an embedded media player in the browser
- [404 Test Case Video](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/cypress/videos/404Testjs.mp4)
- [About Test Case Video](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/cypress/videos/abouttestjs.mp4)
- [Events Test Case Video](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/cypress/videos/eventstestjs.mp4)
- [Index Test Case Video](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/cypress/videos/indextestjs.mp4)
- [Mailing List Test Case Video](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/cypress/videos/mailingtestjs.mp4)
- [Quiz Test Case Video](https://pmeeny.github.io/CI-MS2-BicepMusicFanSite/cypress/videos/quiztestjs.mp4)

### Code Coverage
I configured my project to avail of the code coverage functionality provided by Cypress and Istanbul libraries
Further information is described below
- Cypress (https://www.cypress.io)
    - Cypress was used for automated e2e testing of all pages 
 - Cypress Code Coverage (https://docs.cypress.io/guides/tooling/code-coverage)      
    - Cypress was configured to generate code coverage
- Istanbul (https://istanbul.js.org/)   
    - Istanbul was used to instrument the javascript files in the project

The Code coverage results for the javascript files as a result of running the test automation suite in Cypress are displayed below
![Cypress Test Coverage](/assets/images/readme/cypress_testcoverage.PNG)

The code coverage is generated in a folder "coverage" every time the test suit is run.  


# Bugs found during the testing phase

Bug Number | Comment |  Solution/Design decision |
------------ | ------------- | ------------- | 
1 | The time spent is displaying after each question, not in total | The fix was to create a new div called total_time_spent, and to update this div as part of the method displayQuestions() instead of checkAnswer()
2 | The allAnswers element was being overwritten if 2 questions had the same number | The fix was to create a new counter, and to increment that separately when adding to the allAnswers list
3 | The top score was not displaying the current value, once a quiz has been completed | The fix was to call getTopScore after setTopScore once 10 questions were complete
4 | The top score is not displayed after 1st attempt results page | The fix was to  $("#top_score").show() to show the div
5 | After the mailing list mailing list modal closes the screen remains dark and the index isn't loading properly. |The fix was to add $("#mailingListModal").modal("hide"); when submit button is clicked
6 | The dynamic about and quiz divs are not scaling properly on IE | The fix was to apply a more dynamic div:  https://stackoverflow.com/questions/4075440/dynamic-height-for-div/4075456 with a height: auto as IE doesn't support min-height
7 | The quiz score was not updating on question 10 of the quiz. | The fix was to update the current_score div using JQuery at the last question as well as the first 1-9 

<br>

# Code Validators and Website Analysis
The website's pages were run against the following validators:

## HTML Markup Validation Service
I used https://validator.w3.org/

Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html | Passed, No errors found | [Results](assets/images/testing/html-validation/index_html_validation.jpg)
about.html | Passed, No errors found | [Results](assets/images/testing/html-validation/about_html_validation.JPG)
events.html | Passed, No errors found | [Results](assets/images/testing/html-validation/events_html_validation.JPG)
quiz.html | Passed, No errors found | [Results](assets/images/testing/html-validation/quiz_html_validation.JPG)
404.html | Passed, No errors found | [Results](assets/images/testing/html-validation/404_html_validation.JPG)

<br>

## CSS Validation Service
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
style.css | Passed, No errors found | [Results](assets/images/testing/css-validation/css_validation.JPG)

## Chrome Dev tools Lighthouse 

(I used Lighthouse https://developers.google.com/web/tools/lighthouse)

Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html (Desktop) | Performance: 98, Accessibility: 100, Best practices: 100, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/index_desktop.JPG)
index.html (Mobile) | Performance: 91, Accessibility: 100, Best practices: 100, SEO: 98 | [Results](assets/images/testing/lighthouse-testing/index_mobile.JPG)
quiz.html (Desktop) | Performance: 96, Accessibility: 100, Best practices: 100, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/quiz_desktop.JPG)
quiz.html (Mobile) | Performance: 95, Accessibility: 100, Best practices: 100, SEO: 98 | [Results](assets/images/testing/lighthouse-testing/quiz_mobile.JPG)
events.html (Desktop) | Performance: 94, Accessibility: 100, Best practices: 93, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/events_desktop.jpg)
events.html (Mobile) | Performance: 88, Accessibility: 100, Best practices: 93, SEO: 98 | [Results](assets/images/testing/lighthouse-testing/events_mobile.jpg)
about.html (Desktop) | Performance: 97, Accessibility: 100, Best practices: 93, SEO: 90 | [Results](assets/images/testing/lighthouse-testing/about_desktop.PNG)
about.html (Mobile) | Performance: 87, Accessibility: 100, Best practices: 93, SEO: 90 | [Results](assets/images/testing/lighthouse-testing/about_mobile.PNG)
404.html (Desktop) | Performance: 99, Accessibility: 100, Best practices: 100, SEO: 100 | [Results](assets/images/testing/lighthouse-testing/404_desktop.JPG)
404.html (Mobile) | Performance: , Accessibility: , Best practices: , SEO:  | [Results](assets/images/testing/lighthouse-testing/404_mobile.JPG)

<br>

## Wave Accessibility
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
index.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/index_wave_validation.PNG)
quiz.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/quiz_wave_validation.PNG)
about.html | 2 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/about_wave_validation.PNG)
events.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/events_wave_validation.PNG)
404.html | 0 errors and 0 contrast errors| [Results](assets/images/testing/wave-validation/404_wave_validation.PNG)

Note: The two errors on the about.html page were reported from within the google maps, and although I investigated could inject or resolve the errors, I was not succesful

<br>

## JSHint
Page | Result | Test Detail/Screenshot
------------ | ------------- | -------------
about.js | 0 errors and 0 warnings | [Results](assets/images/testing/jshint/about_jshint.PNG)
events.js | 0 errors and 1 warning | [Results](assets/images/testing/jshint/events_jshint.JPG)
quiz.js | 0 errors and 0 warnings | [Results](assets/images/testing/jshint/quiz_jshint.JPG)
sendEmail.js | 0 errors and 0 warnings | [Results](assets/images/testing/jshint/sendemail_jshint.JPG)
questions.js | 0 errors and 0 warnings | [Results](assets/images/testing/jshint/questions_jshint.JPG)

- I have analysed the warning in events.js, and consider it not to be a serious issue, it is in relation to using the new keyword to create an instance of a google map object in the code
<br>