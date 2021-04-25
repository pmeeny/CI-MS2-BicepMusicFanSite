
# Testing
The testing approach is as follows
1. Manual testing using emulators and real devices
2. Automated E2E testing with Cypress testing framework (www.cypress.io)

## Manual testing
Testing was completed on the following browsers and device types

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

## Feature 1 Footer

### User Story
User Story 2.1: As a website user I can access the djs spotify, facebook, twitter and instagram pages via a link on the page footer

### Test case steps
1. Click on each of the index, events, about and quiz pages and scroll down to the footer
2. Click on the spotify image
3. Click on the instagram social icon
4. Click on the twitter social icon
5. Click on the facebook social icon

### Expected Result
1. The footer is displayed on each page
2. The bicep spotify page opens in a new tab
3. The bicep instagram page opens in a new tab
4. The bicep twitter page opens in a new tab
5. The bicep facebook page opens in a new tab

### Test Results
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |
Steps 1-5 | dd |dd |dd |

<br>

### Feature 2 Footer
### User Story
- User Story 2.1: As a website user I can access the djs spotify, facebook, twitter and instagram pages via a link on the page footer
### Test case steps
### Expected Result
### Test Results
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |
Steps 1-5 | dd |dd |dd |

<br>

## Feature 3 Index Page
### User Stories
- User Story 3.1: As a website user I can access the About Page by clicking on a link on the index(homepage) page
- User Story 3.2: As a website user I can access the Events Page by clicking on a link on the index(homepage) page 
- User Story 3.3: As a website user I can access the Quiz Page by clicking on a link on the index(homepage) page
- User Story 3.4: As a website user I can sign-up to the BICEP email list by clicking on a link on the index(homepage) page, entering my full name and email address and clicking the Submit button on the modal screen to Submit or Close to close the modal
### Test case steps
1.
2.
3.
4.
5.
### Expected Result
1.
2.
3.
4.
5.
### Test Results
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |
Steps 1-5 | dd |dd |dd |

<br>

### Feature 4 About Page
### User Stories
- User Story 4.1: As a website user I can view track listing, album cover image and album about Biceps two albums
- User Story 4.2: As a website user I can view album information when I hover over an album image
- User Story 4.2: As a website user I can listen to the dj's albums tracks in a new tab in spotify by clicking on a particular track
- User Story 4.3: As a website user I can view the top tracks for the DJ duo
- User Story 4.4: As a website user I can click on a top track and it will play a 30 second clip on a media player in the page
### Test case steps
1. Go to the about page(about.html)
2. Navigate to the Albums section
3. Hover over one of the album images
4. Click on a track in the track listings
5. Navigate to the top tracks section
6. Click on one of the top tracks
### Expected Result
1. The about.html page is displayed, and there is a paragraph about the djs displayed in the About section
2. Two album images are displayed and the track listing for each album
3. The image clips to display album information(name, label, number of tracks)
4. The track opens in a new tab in spotify
5. The top tracks are displayed
6. The top track(a 30 second clip) starts playing in the media player on the page
### Test Results
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |
Steps 1-5 | dd |dd |dd |

<br>

### Feature 5 Events Page
### User Stories
- User Story 5.1: As a website user I can view upcoming events from ticketmaster with date, time, title, ticket purchase information
- User Story 5.2: As a website user I can click next and previous on the event pages and select a particular page, the events on that page will be displayed
- User Story 5.3: As a website user I can click the Buy Tickets link for an event and it will open up the event in ticketmaster in a new tab 
- User Story 5.4: As a website user I can click on an event and view the event venue name and google map information
### Test case steps
1.
2.
3.
4.
5.
Click on the events page
10 events will be displayed over 5 pages
On each page the following information will be displayed per event: Date, Time, Title, Tickets
Clicking on buy tickets will open the event in ticketmaster
Clicking on the event will display the venue details and a google map
Clicking on next will bring you to the next page
Clicking on previous will bring you to the next page

### Expected Result
1.
2.
3.
4.
5.
### Test Results
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |
Steps 1-5 | dd |dd |dd |

<br>

### Feature 6 404 Page
### User Story
- User Story 6.1: As a website user if I enter in an incorrect url or page, I will be presented with a 404 page with consistent header and footer
### Test case steps
1. Navigate to a page that does not exist (doesNotExist.html)
### Expected Result
1. The 404.html page is displayed
### Test Results
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |
Steps 1 | dd |dd |dd |
<br>

### Feature 7 Quiz

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
6. The results screen displays the 10 questions correctly answered. The order in which the question id displayed is random.
7. The top score is updated to 10 out of 10.

### Test Results
Step Number | Desktop | Tablet | Mobile |
------------ | ------------ | ------------- | ------------- |

<br>

## Automated testing
A number of testcases were written using the cypress testing framework, they are described below
Theses 6 test cases were part of a test suite, and the automation was run against the Chrome browser in the desktop, version 90.
### Test Cases
Test Case Number | Test Case Name | Test Case Steps | Test Case Result | Test Case Time | 
------------ | ------------ | ------------- | ------------- | ------------- |
1 | 404Test | | Passed | 9 seconds |
2 | aboutTest | | Passed | 11 seconds |
3 | eventsTest | | Passed | 28 seconds |
4 | indexTest |dd |  Passed | 6 seconds |
5 | mailingListTest |dd | Passed | 11 seconds |
6 | quizTest |dd | Passed | 1 minute, 49 seconds |

Total time: 2 minutes, 58 seconds

The test cases written are listed as follows
![Cypress Test Cases](/assets/images/readme/cypress_testcases.PNG)

The cypress.io dashboard displays the following informtion
![Cypress Dashboard](/assets/images/readme/cypress_dashboard.PNG)

The test automation suite results, which inclided 6 tests, all passed in a time of 90.61 seconds are displayed below
![Cypress Test Results](/assets/images/readme/cypress_testresults.PNG)

Video recordings of each of the 6 test cases are available at the following location
![Cypress Test Recordings](/assets/images/videos)

### Code Coverage
I configured my project to avail of the code coverage functionality provided by Cypress and Istanbul libraries

The Code coverage results for the javascript files as a result of running the test automation suite in Cypress are displayed below
![Cypress Test Coverage](/assets/images/readme/cypress_testcoverage.PNG)


The code cover

Further information is described below
- Cypress (https://www.cypress.io)
    - Cypress was used for automated e2e testing of all pages 
 - Cypress Code Coverage (https://docs.cypress.io/guides/tooling/code-coverage)      
    - Cypress was configured to generate code coverage
- Istanbul (https://istanbul.js.org/)   
    - Istanbul was used to instrument the javascript files in the project
    