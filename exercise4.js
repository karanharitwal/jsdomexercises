window.addEventListener('load', ()=>{
    const ele= document.querySelector('#input-text');
    const divele= document.querySelector('#count');
    ele.addEventListener('input',event =>{
    divele.innerText= event.target.value.length;
 })


})