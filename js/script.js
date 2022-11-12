//input
const hour = document.querySelector('.hour-box');
const min = document.querySelector('.min-box');
const sec = document.querySelector('.sec-box');
//button
const btn_start = document.querySelector('.start');
const btn_reset = document.querySelector('.reset');
const btn_pause = document.querySelector('.pause');

function btnChange(){
  btn_start.setAttribute('hidden','hidden');
  btn_pause.removeAttribute('hidden')
}
function timer(){
  let totalTime = [hour,min,sec].reduce((acc,cur,i)=>{
  return acc + (parseInt(cur.value))*[3600,60,1][i]
},0)
   let setTime = setTimeout(()=>{
    totalTime--;
    let newHour = Math.floor(parseInt(totalTime) / 3600);
    totalTime -= newHour*3600;

    let newMin = Math.floor(parseInt(totalTime) / 60);
    totalTime -= newMin * 60;

    let newSec = totalTime;

    hour.value=newHour;
    min.value = newMin;
    sec.value = newSec;

    if(totalTime > 0){
      timer();
    }
    else{
      clearTimeout(setTime);
      btn_pause.setAttribute('hidden','hidden');
      btn_start.removeAttribute('hidden')
    }
  
  },1000)
  btnChange()
  btn_reset.addEventListener(('click'),function(){
    clearTimeout(setTime);
    hour.value="00"
    min.value ="00"
    sec.value ="00"
    btn_pause.setAttribute('hidden','hidden');
    btn_start.removeAttribute('hidden')
  })
}
btn_start.addEventListener(('click'),timer)




