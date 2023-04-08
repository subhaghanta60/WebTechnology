const captcha = document.querySelector(".captacha"),
 reloadBtn = document.querySelector(".reload-btn"),
 inputField = document.querySelector("input"),
 checkBtn = document.querySelector(".check-btn"),
 statusTxt = document.querySelector(".status-txt");

 let allCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                       'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                       'a','b','c','d','e','f','g','h','i','j','k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z',
                    '0','1','2','3','4','5','6','7','8','9'];

function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomChar =allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerHTML += `${randomChar}`;
        
    }
}
getCaptcha();
reloadBtn.addEventListener("click", ()=>{
    captcha.innerHTML="";
    getCaptcha();
});

checkBtn.addEventListener("click", e =>{
   e.preventDefault(); //preventing buttom from it's default behaviour
   statusTxt.style.display ="block";
   //adding space after each value of user entered captcha because I've added spaces while generating captcha
   let inputVal = inputField.value.split('').join('');

  
   if(inputVal == captcha.innerText){
    statusTxt.style.color="#4db2ec";
    statusTxt.innerText="Nice! You don't appear to be a robot";
    setTimeout(()=>{
        statusTxt.style.display ="";
        inputField.value ="";
        captcha.innerText="";
        getCaptcha();
    },4000); //removing user value and captcha innerText after 4 seonds
   } else {
    statusTxt.style.color="#ff0000";
    
    statusTxt.innerText="Captcha Not matched, Please try again!";
   }
});
