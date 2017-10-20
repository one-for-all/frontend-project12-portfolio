var toggle = true
document.getElementsByClassName('heading__icon')[0].addEventListener('click', function () {
  var showcases = document.getElementsByClassName('showcase__img')
  for (var i = 0; i < showcases.length; i ++) {
    showcases[i].style.border = toggle ? 'solid 2px yellow' : 'none'
  }
  toggle = !toggle
})
