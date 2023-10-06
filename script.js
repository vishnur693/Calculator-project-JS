
function clearbutton(){
    document.getElementById("display").value=""
}
function buttonclick(val){
    document.getElementById("display").value+=val

}
function equalbutton(){
    var text=document.getElementById('display').value
    var result=eval(text)
    document.getElementById('display').value=result
}