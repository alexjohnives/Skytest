// document.querySelectorAll('.img-button').forEach(item => {
//   item.addEventListener('click', event => {
//     console.log('Hello World');  
// })
// });

const ilse = document.querySelector('.img-button');

function loadEventListeners(){
  ilse.addEventListener('click', addInfo);
}

function addInfo(e) {
  const info = document.createElement('div');
  div.className = 'container';

}


// const div = document.createElement('div');
// div.className = 'container-fluid';
// div.appendChild(document.createElement('div'));
// div.className = 'row';
// console.log(div);

// const contentZero = document.createElement('col')
