
const second_hand=document.querySelector(".second-hand");
const minute_hand=document.querySelector(".minute-hand");
const hour_hand=document.querySelector(".hour-hand");


function setTime(){

    var date =new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    var deg_sec=(seconds*6+(15*6));
    second_hand.style.transform = `rotate(${deg_sec}deg)`;

    var deg_min=(minutes*6+(15*6));
    minute_hand.style.transform = `rotate(${deg_min}deg)`;

    var deg_hour=((hours%12)*30+90);
    hour_hand.style.transform = `rotate(${deg_hour}deg)`;
    console.log(hours+"  "+minutes+"  "+seconds);
}

setInterval(setTime,1000);