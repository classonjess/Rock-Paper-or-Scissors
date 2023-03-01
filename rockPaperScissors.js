 // The users input
 const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log("Invalid option.");
    }
  }
  
  console.log(getUserChoice('paper'));
  
  // Computers choice
  
  const randomNumber = Math.floor(Math.random() * 3);
  const getComputerChoice = () => {
    if ( randomNumber === 0){
      return 'paper';
    } else if (randomNumber === 1){
      return 'rock';
    } else if (randomNumber === 2){
      return 'scissors';
    } else {
      return 'Invalid answer';
    }
   }
  
   console.log(getComputerChoice(randomNumber));
  
  // Determine a winner:
  
  const determineWinner = (userChoice , computerChoice) =>{
    if (userChoice === computerChoice){
      return 'It is a tie.';
    } if (userChoice === 'rock'){
       if (computerChoice === 'paper'){
         return 'Computer won!';
    } else {
      return 'You won!';
     }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
      return 'Computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'paper'){
      return 'User won!';
    } else {
     return 'Computer won!';
    }
   }
  };
    console.log(determineWinner('paper', 'scissors'));
    console.log(determineWinner('scissors', 'paper'));
  
  // Start the game and log results:
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Calling the game:
  
  playGame();
  