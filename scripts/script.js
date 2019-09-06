"use strict";

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
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
const formIncome = document.querySelector('#income');
const formJob = document.querySelector('#job');
const submitBtn = document.querySelector('.submit');
const submitBtn2 = document.querySelector('.submit2');

// DOM elements to change in regards to the  income info
const aIncome = document.querySelector('#a-income');
const mIncome = document.querySelector('#m-income');
const bwIncome = document.querySelector('#bw-income');
const wIncome = document.querySelector('#w-income');


userEdit.addEventListener('click', () => {
    modal.style.display = "block";
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

// Income information piece 
incomeEdit.addEventListener('click', () => {
    modal2.style.display = "block";
});

let annualIncome,biweekly, monthly, weekly;
console.log(parseFloat(aIncome.innerHTML));
let incomeBreakdown = {
  
}

submitBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    annualIncome = formIncome.value;
    biweekly= (annualIncome/24).toFixed();
    monthly = (annualIncome/12).toFixed();
    weekly = (annualIncome/52).toFixed();

    aIncome.innerHTML = annualIncome;
    incomeBreakdown.annual= annualIncome
    mIncome.innerHTML = monthly;
    incomeBreakdown.monthly= monthly
    bwIncome.innerHTML = biweekly;
    incomeBreakdown.biweekly= biweekly
    wIncome.innerHTML =  weekly;
    incomeBreakdown.weekly= weekly
    modal2.style.display = "none";
 
    console.log(incomeBreakdown);
})
 