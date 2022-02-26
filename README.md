# Guess the Word!

This is a word guessing game, based on the game Wordle. It allows the user to enter a 5 letter combination, the program would show which letters are present and in the right position.

## Design Process

I decided on a simple design so it would be more intuitive to the user, adding in many features without showing too much so it would be overwhelming

- As a user, I would like to use my keyboard to play the game instead of the HTML keyboard.
- As a user, I would like to use a on-website keyboard when I cannot use a physical keyboard.
- As a user, I would like to see what answers are correct and is closer to correct.

## Features

### Existing Features
- Game Board allows users to see their previous inputs and narrow down their answers.
- Keyboard shows users previous moves to know what letters to use.
- Keyboard allows users to enter and remove letters on the game board.
- Key Input allows users to use their own keyboard instead of the html one.
- Alerts to show errors or success.
- Previous Game results.

### Features left to Implement
- Checking if the 5 letter combination is a word before allowing the user to enter.
- Showing full History of games played.

## Technologies Used
- JQuery
    - This project uses JQuery to simplify DOM manipulation.
- Bootstrap
    - This project uses Bootstrap to simplify layouts and for components like the navbar.
- WordNik API
    - This project uses the WordNik API to generate random words.
- Lottie
    - This project uses Lottie to indicate a success when you finish the game.

## Testing

1. Testing the alerts
    - Press Enter without filling in the form
    (An alert should show up for having insufficient letters)
    - Check the localStorage to find the correct answer
    - Key in the correct answer
    (An alert should show up for winning the game)
    - Start a new game
    - Enter 6 wrong answers
    (An alert should show up for losing the game)

## Testing

### Acknowledgements
- I have recieved inspiration from Wordle to create this game.