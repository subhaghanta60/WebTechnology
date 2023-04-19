const questions = [
    {
        'question':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'question':'Which Year was Javascript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'None Of The Above',
        'correct':'b'
    },
    {
        'question':'What does Css Stands for?',
        'a':'HyperText Markup Language',
        'b':'Cascadding Style Sheet',
        'c':'Json Object Notation',
        'd':'None of the Above',
        'correct':'b'
    }
]

let index=0;
let total=questions.length;
let correctAns=0;
let wrongAns=0;

const quesBox= document.getElementById("quesBox");
const optionInputs =document.querySelectorAll('.options');


const loadQuestion = ()=> {

    if(index === total){
      
        return endQuiz();
    }
    reset();
    const data=questions[index];
   
    quesBox.innerText = `${index+1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText =data.a;
    optionInputs[1].nextElementSibling.innerText =data.b;
    optionInputs[2].nextElementSibling.innerText =data.c;
    optionInputs[3].nextElementSibling.innerText =data.d;

}

const submitQuize = ()=> {
    const data=questions[index];
   
    const ans = getAnswer();
   
    console.log(ans);

    if(ans === data.correct){
        correctAns++;

    } else {
        wrongAns++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input)=> {
            if(input.checked){
                answer= input.value;
              
            } 
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked =false;
        }
    )
}


const endQuiz = () => {
   
    document.getElementById("box").innerHTML = `
    <h3>Thank You For Playing The Quize</h3>
    <h2> ${correctAns} / ${total} are correct </h2>
   
    
    
    `
}
loadQuestion();