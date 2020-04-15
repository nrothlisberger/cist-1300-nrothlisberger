let btnShow = document.querySelector('button');
let output1 = document.querySelector('h1');

btnShow.addEventListener('click', () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date = `${month}/${date}/${year}`;
    output1.innerText = current_date;

});

function addZero(num){
    return num < 10 ? `0${num}`:num;
}
