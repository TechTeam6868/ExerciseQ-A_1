
function fun_checkbox() {
    var x = document.getElementById("checkboxid").checked;
    
    if (x) {
        document.getElementById("check").style.color="green";
        document.getElementById("check").innerHTML = "Checked";
    }
    else {
        document.getElementById("check").style.color="red";
        document.getElementById("check").innerHTML = "Unchecked";
    }
}
