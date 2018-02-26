function openNav () {
  document.getElementById('mySidenav').style.width = '250px'
}

function closeNav () {
  document.getElementById('mySidenav').style.width = '0'
}

function selectStep (n) {
  $('.content-switcher').hide()
  $('#Content1' + n).show()
}
