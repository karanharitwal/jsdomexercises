window.addEventListener('load', ()=>{
    const inputvalue=document.querySelector('#url');
    const encode=document.querySelector('#encode');
    const decode=document.querySelector('#decode');
    const result=document.querySelector('#result');
    encode.addEventListener('click', event=>
    {
        let val= inputvalue.value;
        result.value= encodeURIComponent(val);
        })
    decode.addEventListener('click',event =>{
        let val= inputvalue.value;
        result.value= decodeURIComponent(val);
    })
    
})
