# Best Timer Ever ⏱️
## Description
Ever been in a meeting where you just want to tell the speaker -- we get the point! Well, here is a  multi-purpose timer to keep one right on time and reaching their talking points in adequate time. Our responsive web application incorporates a form to let a user add talking points, notes, and the time allotted to that point. Once the user has included all their talking points, the application will calculate the total amount of time. The user can then start a timer, which displays the talking point the user should be at.
### Project Links
- Back end git
- Front end git
### Wireframes and Architecture
- Wireframes: [Figma](https://www.figma.com/file/YYKI41CzLE6mq3nKCqlpzO/Best-Meeting-Timer?node-id=0%3A1)
- Architecture: [Google Drawing](https://docs.google.com/drawings/d/1QnfQrfsA5B_Z0-H4OkIHzYKonrOfJGI1wSDYNjucwVM/edit)
### Time/Priority Matrix
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Git management | H | 2hrs | -hrs | -hrs |
| Q&A and bug fixes | H | 2hrs | -hrs | -hrs |
| Connection | H | 0.5hrs | -hrs | -hrs |
| Express  | H | 0.5hrs | -hrs | -hrs |
| Routes | H | 0.5hrs | -hrs | -hrs |
| Controllers | H | 2hrs | -hrs | -hrs |
| Seed | H | 2hrs | -hrs | -hrs |
| Deployment | H | 1hrs | -hrs | -hrs |
| Install and set up react router | H | 0.5hrs | -hrs | -hrs |
| Switch, Links, Routes | H | 1hrs | -hrs | -hrs |
| Header| H | 1hrs | -hrs | -hrs |
| Home Display List from Backend | H | 2hrs | -hrs | -hrs |
| Home CRUD options | H | 4hrs | -hrs | -hrs |
| Form | H | 3hrs | -hrs | -hrs |
| Connecting Form to backend | H | 2hrs | -hrs | -hrs |
| Timer Outline | H | 3hrs| -hrs | -hrs |
| Timer | H | 2hrs | -hrs | -hrs |
| Talking point synchronized timer | H | 4hr s| -hrs | -hrs |
| Responsiveness | H | 4hrs | -hrs | -hrs |
| Progress Bar | L | 3hrs | -hrs | -hrs |
| Timer Interface | L | 4hrs | -hrs | -hrs |
| Dark mode/lightmode | L | 1hrs| -hrs | -hrs |
| Extra Styling | L | 2hrs | -hrs | -hrs |
| Talking points drop down menu | L | 2hrs | -hrs | -hrs |
| Confetti | L | 2hrs | -hrs | -hrs |
| Alert | L | 1hrs| -hrs | -hrs |
| Total | H | 52hrs| -hrs | -hrs |
## MVP/Post-MVP
### MVP
- Connection
- Models(2 schemas with association)
- Set up express server in index.js
- Routes
- Controllers
- Deployment to heroku
- Install and set up “react router” in index and app
- Sweet Header in App outside of Routes that gives option to go back to Home
- Switch Routes in App (Home, Form, Timers)
- Home Page
    - List of default timers and user timers(links to Timers Page)
    - Option to delete timer(connection to delete backend)
    - Option to add a timer(links to Form component)
- Color palette/styling
- Form Page
    - Instructions
    - Input form(Connection to post database)
    - Calculate total time
- Timer Page
    - Show talking points and time with option to update(connection to backend)
    - Talking Point
    - Timer
### Post-MVP
- dark/light mode
- Progress bar
- Mode
- Talking points drop down menu
- Animated timer
- Multiple use timer (save and use schema again)
- Event when timer runs out (like confetti, alert, message) and also a way to turn it off
## Components - Descriptions
- React hooks, states, etc
- Routes
- Index renders app
    - Header, footer
    - Instructions / about
    - Saved timers
    - New timer button takes you to Create Timer Page
- Create Timer Page
    - Form - notes, about, talking points
- Timer Page
    - Has a timer and shows talking points and countdown
- Light / Dark -- usecontext
## Additional Libraries
- Bootstrap
- Axios
- React, react-router-dom
- Node
- Express
## Code Snippet
