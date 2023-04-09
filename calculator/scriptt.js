let arr = [];
let op ='';
function display(operation){
    arr.push(operation);
    let l = arr.length;
    op = op + arr[l-1];
    document.getElementById('result').value = op;
    document.getElementById('result2').value = op;
}

function cle(){
    arr = [];
    op = '';
    rem = 0;
    result = 0;
    document.getElementById('result').value = '0';
}

let result;

function calculate(){
    result = eval(op);
    document.getElementById('result').value = result;
    document.getElementById('result2').value = op+"="+result;
    document.getElementById('result').style.textAlign = 'right';
}