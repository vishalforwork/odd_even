document.getElementById('num').oninput = function(){
    const num = document.getElementById('num').value;
    let res;

    if (num % 2 != 0) {
        res = "odd";
    }
    else{
        res = "even";
    }

    document.getElementById('res').innerHTML = num + " is " + res;
}