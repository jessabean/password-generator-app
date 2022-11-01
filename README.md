# Password Generator

This implementation is a solution to the [Password Generator App prompt](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh) at FrontendMentor.io.

## Demo

Live demo can be found at https://jesaabean-password-generator.netlify.app/

## Technologies

- [React](https://reactjs.org/)
- [randomatic](https://github.com/jonschlinkert/randomatic)

## Setup

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone git@github.com:jessabean/password-generator-app.git

# Go to your local copy of the repository
$ cd password-generator-app

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Original prompt

Find the full brief on the [FrontendMentor.io challenge page](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh).

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Notes & to do

- No business rules for password strength were included with the prompt, so I did not implement and algorithm based on character length and inclusion options. This would be a good to do.
- Didn't write tests; mostly focused on getting familiar with React.
- The designs included a button to generate a new password, but I prefer the UX of having the password generate automatically as the user changes parameters, instead.
- I experimented with using [Context](https://reactjs.org/docs/context.html) and definitely have some more to learn there.
- 🪲: When the password length is `0`, the button state is disabled (as expected), but there is a flash of active state as the user checks inclusion options. Need to tinker with component rendering cycle here.
