const timer = document.querySelector('.timer');
const hour = document.querySelector('.hour-box');
const min = document.querySelector('.min-box');
const sec = document.querySelector('.sec-box');
const btnStart = document.querySelector('.start')
const btnReset = document.querySelector('.reset')
const hourvalue = hour.value ;
const minvalue = min.value;
const secvalue = sec.value;

btnStart.addEventListener('click',function(){
  
})
btnReset.addEventListener('click',function(){
  hour.value = "00";
  min.value = "00";
  sec.value= "00";
})

