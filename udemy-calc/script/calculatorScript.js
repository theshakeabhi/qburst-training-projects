function displayNum(val){
    document.getElementById("answerSpace").value+=val;
}

function clr(){
    document.getElementById("answerSpace").value = " ";
}

function solve(){
    var x = document.getElementById("answerSpace").value;
    document.getElementById("answerSpace").value = eval(x);
}