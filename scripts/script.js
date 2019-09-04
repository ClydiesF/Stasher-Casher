"use strict";

var modal = document.getElementById("myModal");
const userEdit = document.querySelector('.fa-user-edit');
const incomeEdit = document.querySelector('.fa-edit');
const incomeView = document.querySelector('.fa-binoculars');
const close = document.querySelector('.close')
    // DOM elemnts toc hange int he profile info section
const userName = document.querySelector('.user-name');
const userAge = document.querySelector('.user-age');
const userJob = document.querySelector('.user-job');
// Form elements in the same  profile section
const formName = document.querySelector('#name');
const formAge = document.querySelector('#age');
const formJob = document.querySelector('#job');
const submitBtn = document.querySelector('.submit');



userEdit.addEventListener('click', () => {
    modal.style.display = "block";
});

incomeEdit.addEventListener('click', () => {
    alert('income edit button clicked!')
});

incomeView.addEventListener('click', () => {
    alert('income view button clicked!')
});
close.addEventListener('click', () => {
    modal.style.display = "none";
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userName.innerHTML = formName.value;
    userAge.innerHTML = formAge.value;
    userJob.innerHTML = formJob.value;
    modal.style.display = "none";

})
console.log(userAge.innerHTML);