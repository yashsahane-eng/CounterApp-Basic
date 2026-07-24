const countElement =document.getElementById('count');

const incrementbtn=document.getElementById('increment');

const decrementbtn =document.getElementById('decrement');

const resetbtn =document.getElementById('reset');

let count =0 ;

function updateCount(){
  countElement.innerText=count;
  if(count===0){
    decrementbtn.disabled=true;
  }
  else{
    decrementbtn.disabled=false;
  }
}

incrementbtn.addEventListener("click" ,function(){
  count++;
  updateCount();
})

decrementbtn.addEventListener("click",function(){
  if(count>0){
    count--;
  }
  updateCount();
})

resetbtn.addEventListener("click",function(){
  count=0;
  updateCount();
})