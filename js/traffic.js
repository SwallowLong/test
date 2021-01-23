//异步函数根据时间调用setTimeout
function sleep(duration) { 
  return new Promise(function(resolve, reject) { 
    setTimeout(resolve,duration); 
  })
}

//async中的await先执行即先调用setTimeout函数时间为2000 然后执行之后的document4句语句
async function changeLight(existingColor, changeColor, duration) {
  await sleep(duration)
  document.getElementsByClassName(existingColor)[0].style.backgroundColor = '#000'
  document.getElementsByClassName(existingColor)[0].style.boxShadow = '-1px -1px 2px #fff'
  document.getElementsByClassName(changeColor)[0].style.backgroundColor = changeColor
  document.getElementsByClassName(changeColor)[0].style.boxShadow = 'none'
}

//async后面返回的异步函数
async function traffic() {
  while(true) {
    //使用多重await来调用 执行完第一个之后才回执行第二个
    await changeLight('red', 'orange', 2000)
    await changeLight('orange', 'green', 1000)
    await changeLight('green', 'red', 3000)
  }
}

traffic();



