function getInput(){
    var input=document.getElementById("txtin").value;
    if (input == "" || input == null){
        alert("Please enter a valid resquest.");
        return;
    }
    alert("Your resquest of \"" +input + "\" is being processed.");
}