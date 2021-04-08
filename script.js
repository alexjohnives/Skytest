const imgSelected = document.querySelectorAll('.img-select');

imgSelected.forEach((imgSelect) => {
  imgSelect.addEventListener('click', () => {
    imgSelect.classList.toggle('activeimg');
  });
});

// ---------------

function select0() {
  var x = document.getElementById('i0div');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function select1() {
  var x = document.getElementById('i1div');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function select2() {
  var x = document.getElementById('i2div');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function select3() {
  var x = document.getElementById('i3div');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function select4() {
  var x = document.getElementById('i4div');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function select5() {
  var x = document.getElementById('i5div');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

// -----------

// var imgSelect = document.querySelectorAll('.img-select');
// imgSelect.forEach(function(imgSelect) {
// console.log('imgSelect: ', imgSelect);
// })

// imgSelect.forEach(function)

// ---------

//  document.querySelectorAll('.img-').forEach(item => {
//    item.addEventListener('click', event => {
//      console.log('Hello World');
//  })
//  });

// $('imgButton').on('click', function() {
//   $('imgButton').removeClass('active');
//   $(this).addClass('active');
// })

// ---------------

// const ilse = document.querySelector('.img-select');

// function loadEventListeners(){
//   ilse.addEventListener('click', addInfo);
// }

// function addInfo(e) {
//   const info = document.createElement('div');
//   div.className = 'container';

// }

// -------------------

// const div = document.createElement('div');
// div.className = 'container-fluid';
// div.appendChild(document.createElement('div'));
// div.className = 'row';
// console.log(div);

// const contentZero = document.createElement('col')
