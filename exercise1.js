window.addEventListener('load',()=>{
    const button= document.querySelector('#counter')
    button.addEventListener('click',event =>{
        event.target.value++;
    } )
})
