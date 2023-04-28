let btn =document.querySelector('.predict');
let userData = document.getElementById('userData');
let result =document.querySelector(".result");
let namedata =document.querySelector(".name");
let genderdata =document.querySelector(".gender");
let probabilitydata =document.querySelector(".probability");
let genderIcon = document.querySelector(".genderIcon");
let error=document.querySelector(".error");

let api =`https://api.genderize.io?name=`;

btn.addEventListener('click', ()=> {
    let realvalue =userData.value;

    let realApi =api +realvalue;
    fetch(realApi)
    .then((res) => res.json())
    .then((data) => {
        let {gender,name,probability} =data;
        if(gender){
            userData.value="";
            error.style.display = "none";
            result.style.display="flex";
            namedata.innerHTML =name;
            genderdata.innerHTML=gender;
            probability.innerHTML= `Probability : ${probability}`;
            // if(gender =="male"){
            //     genderIcon.classList.toggle("fa-person");
            // }else {
            //     genderIcon.classList.toggle("fa-person-dress");

            // }


        }else {
            result.style.display="none";
            error.style.display="flex";
            error.innerHTML=`${realvalue} is not a valid name`;


        }

    })

})