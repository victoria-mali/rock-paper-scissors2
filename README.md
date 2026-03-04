# rock-paper-scissors2
A program that returns a random choice between rock, paper and scissors, lets the user input rock, paper or scissors into a prompt, then returns a score between computer and human via console.log - that will be a round. The game should play 5 rounds, show current score via console.log and after 5 rounds declare a winner via console.log.

1. When a user inputs rock/paper/scissors
2. Computer returns rock/paper/scissors as well via console
3. The score of either human or computer is incremented by 1
4. Both scores are returned in the console.log
5. Next round starts and the game continues until 5 rounds have been played
6. The overall score is returned after 5 rounds
7. The winner message is printed


With UI
1. When user presses one of the buttons
2. Computer returns its own option
3. The score of either human or computer is incremented by 1
4. Both scores and a message are returned in the text field
5. Player can then press another button which will play another game round
6. After the button was clicked 5 times/ after playRound function has been executed 5 times
7. There should be a final message and score, and a button to play another game


If it's all one big function playGame
it starts with a loop - as long as the number of rounds is less than 5, the function can execute
otherwise it should stop, erase the buttons and print the final message