var green = document.getElementsByClassName('green')[0],
    orange = document.getElementsByClassName('orange')[0],
    red = document.getElementsByClassName('red')[0];
//写一个宏观任务 让他每6秒执行一次 在宏观任务中使用微观异步任务 让他们分别
function traffic() {
  setTimeout(() =>{
    red.style.backgroundColor = '#000'
    red.style.boxShadow = '-1px -1px 2px #fff'
    orange.style.backgroundColor = 'orange'
    orange.style.boxShadow = 'none'
    setTimeout(() => {
      orange.style.backgroundColor = '#000'
      orange.style.boxShadow = '-1px -1px 2px #fff'
      green.style.backgroundColor = 'green'
      green.style.boxShadow = 'none'
      setTimeout(() => {
        green.style.backgroundColor = '#000'
        green.style.boxShadow = '1px -1px 2px #fff'
        red.style.backgroundColor = 'red'
        red.style.boxShadow = 'none'
        setTimeout(traffic(), 0)
      }, 3000)
    }, 1000)
  }, 2000)
}
traffic()


