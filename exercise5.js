window.addEventListener('load', event=> {
    const hexvalue= document.querySelector('#Hex-rgb');
    const colorbox= document.querySelector('#color-box')
    hexvalue.addEventListener('input', event=>{
        colorbox.style.backgroundColor= event.target.value;
 
    })
})