var btnTranslate = document.querySelector('#btn-translate');
var inputField = document.querySelector('#textIP');
var OutputField = document.querySelector('#textOP');

var Url = "https://api.funtranslations.com/translate/yoda.json"

btnTranslate.addEventListener('mouseenter',()=>{
  btnTranslate.style.backgroundColor = "#60A5FA";
})
btnTranslate.addEventListener('mouseleave',()=>{
    btnTranslate.style.backgroundColor = "#DBEAFE";
  })
  
btnTranslate.addEventListener('click',function ClickEventHandler(){
    if(inputField.value.length < 1){
        alert("Please Enter Text To Translate");
    } 
    else{
    inputText=inputField.value;

    FetchUrl= Url + "?" + "text=" +inputText;

    fetch(FetchUrl)
    .then(response => response.json())
    .then(json => InputInDiv(json))
    .catch(handelError)
    }
})
function InputInDiv(json){
    console.log(json)
    OutputField.innerText=json.contents.translated;
}
function handelError(){
    console.log("Limit reached! You can translate 5 time in hour")
}