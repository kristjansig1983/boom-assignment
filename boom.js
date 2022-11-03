let increment = document.getElementById('inc');
let decrement = document.getElementById('dec');
let inp = document.getElementById('inpBox');
let limit = 35;

increment.addEventListener('click',() => {
    inp.value = parseInt(inp.value) + 5;
});

decrement.addEventListener('click',() => {
    inp.value = parseInt(inp.value) - 5;
});

if(inp > 35) {
    document.getElementById("boom") = 1;
}


