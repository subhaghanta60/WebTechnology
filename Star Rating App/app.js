let star_icons =document.querySelectorAll('.star_icon');
let submitBtn = document.querySelector('.submit');
let ratingText =document.querySelector('.ratingText');
let msg_box = document.querySelector('.msg_box');
let wrapper = document.querySelector('.wrapper');
star_icons.forEach((element,index) => {
    element.addEventListener('click',() =>{
        submitBtn.disabled =false;
        ratingText.style.display ="block";
        if(element.classList.contains('inactive')){
            update(0,index,true);

        }else {
            update(index,star_icons.length - 1,false);

        }

    });
})

const update = (start,end,active) => {
    
        for(let index =start; index <= end; index++){
            if(active){
                star_icons[index].classList.add('active');
                star_icons[index].classList.remove('inactive');


            }else {
                star_icons[index].classList.add('inactive');
                star_icons[index].classList.remove('active');

            }
        };

        let activeElement =document.getElementsByClassName('active');
       
        if(activeElement.length > 0) {
            switch (activeElement.length) {
                case 1:
                    ratingText.innerText = "Terrible";
                    break;
                case 2:
                    ratingText.innerText = "Bad";
                    break;
                case 3:
                    ratingText.innerText = "Satisfied";
                    break;
                case 4:
                    ratingText.innerText = "Good";
                    break;
                case 5:
                    ratingText.innerText = "Excellence";
                    break;

                default:
                    ratingText.innerText = "";
                    break;
            }
        }else {
            ratingText.innerText="";
        }




}

submitBtn.addEventListener("click", () => {
    wrapper.style.display ="none";
    msg_box.style.display ="block";
});