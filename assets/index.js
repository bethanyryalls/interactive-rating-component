let submit=document.querySelector('.submitBtn');
let rateState=document.querySelector('.rating-state');
let thankyouState=document.querySelector('.thanksState');
let rateBtn=document.querySelectorAll('.circle');
let rate=document.querySelector('#rate');

submit.addEventListener('click', function() {
    rateState.style.display='none';
    thankyouState.classList.remove('hidden');
});

for (let i = 0; i < rateBtn.length; i++) {
    rateBtn[i].addEventListener('click', function() {
        if(this.innerHTML==1) {
            rate.innerHTML=1;
        } else if (this.innerHTML==2) {
            rate.innerHTML=2;
        } else if (this.innerHTML==3) {
            rate.innerHTML=3;
        } else if (this.innerHTML==4) {
            rate.innerHTML=4;
        } else if (this.innerHTML==5) {
            rate.innerHTML=5;
        }
    })
}