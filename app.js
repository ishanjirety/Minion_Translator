var btnTranslate = document.querySelector('#btn-translate');
var inputField = document.querySelector('#textIP');
var OutputField = document.querySelector('#textOP');

var Url = "https://api.funtranslations.com/translate/minion.json"

btnTranslate.addEventListener('mouseenter',()=>{
  btnTranslate.style.backgroundColor = "#FBBF24";
})
btnTranslate.addEventListener('mouseleave',()=>{
    btnTranslate.style.backgroundColor = "#FCD34D";
  })
  inputField.addEventListener("change", ()=>{
      OutputField.innerText="";
  });
  
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
});
function InputInDiv(json){
    OutputField.innerText=json.contents.translated;
}
function handelError(){
    OutputField.innerText="Limit Reached!😓 Have Banana🍌 Insted"
}
