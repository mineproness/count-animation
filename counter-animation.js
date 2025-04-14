 var counter = function count (cls){
  const emliment = document.querySelector(cls)
  const value = emliment.getAttribute('value')
  let index = 0;
  function check(){
    if(index == Number(value)){
      clearInterval(res)
    }
  }
  const res = setInterval(()=>{
    index += 1
    emliment.innerHTML = index 
    check()
  } , 10)
 }

