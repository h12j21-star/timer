const timer = document.querySelector('.timer');
const hour = document.querySelector('.hour-box');
const min = document.querySelector('.min-box');
const sec = document.querySelector('.sec-box');
const btnStart = document.querySelector('.start')
const btnReset = document.querySelector('.reset')
function change(){
  btnStart.style.background= "url('../image/icon-start.png') no-repeat 15px";
  btnReset.style.background="url('../image/icon-reset.png') no-repeat 15px";
  btnStart.style.backgroundColor= '#5180FF';
  btnReset.style.backgroundColor='#FB7099';
  btnStart.style.color='#fff';
  btnReset.style.color='#fff';
}
hour.addEventListener('input',change);
min.addEventListener('input',change);
sec.addEventListener('input',change);

btnStart.addEventListener('click',function(){
 // setTimeout((),parseInt(sec.value)*1000);
 btnStart.style.background= "url('../image/icon-start.png') no-repeat 15px";
 btnStart.textContent='PAUSE';
 btnStart.style.background="url('../image/icon-stop.png') no-repeat 15px";
 btnStart.style.backgroundColor='#15C2B8';

 if(sec.value>0)
 sec.value--;
 
})
btnReset.addEventListener('click',function(){
  hour.value = "00";
  min.value = "00";
  sec.value= "00";
})

