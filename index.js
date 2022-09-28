
var readlineSync = require('readline-sync');
 let correctAnswerCount =0;
// Wait for user's response.

console.log("How well u know Our Indiaaaaaa...???")


let assessmentData = [
  {question: 'What is capital of india?',
  answer:"delhi",id:0},
  {question: 'How many state are there in India?',
  answer:28,id:1},
  {question: 'How many Union teritories are there in India?',
  answer:8,id:2},
  {question: 'what is national bird of India?',
  answer:'peacock',id:3},
  {question: 'What is financial capital of India?',
  answer:'mumbai',id:4},
]
function correctAnswer(){
  console.log("correct answer!!");
}
function wrongAnswer(){
  console.log("Wrong answer");
}
function playGame(question ,answer){
  var answerByUser = readlineSync.question(question);
    if(answer.toString().toUpperCase() === answerByUser.toUpperCase()){
      correctAnswerCount++;
      correctAnswer()
    }
  else{
    wrongAnswer()
  }
  
}
for(let i=0 ; i < assessmentData.length ;i++){
     playGame(assessmentData[i].question ,assessmentData[i].answer )
}
console.log('your score is ->> ' + correctAnswerCount);
if(correctAnswerCount> 3){
  console.log('You have good knowlede about our Country!!! well Doneee!!')
}
console.log("Thanks for playing!!")

