window.addEventListener('load',() => {
    const dec= document.querySelector('#decrement_value');
    const inc= document.querySelector('#increment_value');
    const val= document.querySelector('#value_being_displayed');
    dec.addEventListener('click', event=>{
        let value_displayed= val.value;
        value_displayed=parseInt(value_displayed);
        value_displayed--;
        val.value= value_displayed
    })
    inc.addEventListener('click',event=>{
        let value_displayed= val.value;
        value_displayed= parseInt(value_displayed)+1;
        val.value= value_displayed
    })
    val.addEventListener('change', event => {
        val.value= event.target.value;
        
    })
})