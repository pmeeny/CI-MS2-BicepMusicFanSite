
# Testing
The testing approach is as follows
1. Manual testing using emulators and real devices
2. Automated E2E testing with Cypress (www.cypress.io)

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

### Feature 2 Quiz

User Story | Test Case Steps | Expected Result | Screenshots
------------ | ------------ | ------------- | ------------- 

1. Complte quiz, get 8 out of 10 questions right
expected: timer updates to correct value
Question number updates for every question
Results screens shows 8 questions correct, 2 incorrect, and the information
A rigth answer is highlighted inn green as the quiz progrsses
An incorrect  answer is highlighted inn green as the quiz progrsses
Top score is updated to 8

1. Complte quiz, the top score is displayed at 8
get 10 out of 10 questions right
expected: timer updates to correct value
Question number updates for every question
Results screens shows
Top score is updated to 10

Open quiz page, dont select a choice and click submit answer
A message is displayed "Please select one of the options" is displayed


### Feature Events

User Story | Test Case Steps | Expected Result | Screenshots
------------ | ------------ | ------------- | ------------- 
Click on the events page
10 events will be displayed over 5 pages
On each page the following information will be displayed per event: Date, Time, Titlel Tickets
Clickign on buy tickets will open the event in ticketmaster
Clicking on the event will display the venue details and a google map
Clicking on next will bring you to the next page
Clicking on previous will bring you to the next page


### Feature About

User Story | Test Case Steps | Expected Result | Screenshots
------------ | ------------ | ------------- | ------------- 
Click on the about page
2 albums are displayed
album track listing is displayed
album image is displayed
clicking on album displays album info
clicking on each track opens track in spotify in a new tab

top tracks are displayed in a list
clickign on each top track, plays a 30 second click in the media player in the page


### Feature About

User Story | Test Case Steps | Expected Result | Screenshots
------------ | ------------ | ------------- | ------------- 
Enter a url for a page that doesnt exist
result is 404 page is displayed

<br>