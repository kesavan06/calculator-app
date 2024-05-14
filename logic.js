function changeCSS(newCSS){
    var stylesheet=document.getElementById('styleType');
    stylesheet.href=newCSS;
}
function appendToDisplay(value){
    document.getElementById('inputBox').value +=value;
}
function clearDisplay(){
    document.getElementById('inputBox').value='';
}
function calculate(){
    var displayValue=document.getElementById('inputBox').value;
    var result=eval(displayValue)
    document.getElementById('inputBox').value=result;
}
function del(){
    var displayValue=document.getElementById('inputBox').value;
    document.getElementById('inputBox').value=displayValue.slice(0,-1);
}
