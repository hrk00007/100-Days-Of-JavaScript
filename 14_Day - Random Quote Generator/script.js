const content=document.querySelector('.content')
const button=document.querySelector('.btn')
const authorName=document.querySelector('.name')
const speech=document.querySelector('.speech')
const copy=document.querySelector('.copy')
const twitter=document.querySelector('.twitter')
const synth = window.speechSynthesis;

function randomQuote(){
    button.classList.add('loading')
    button.innerText='...Loading Quote';
    fetch("http://api.quotable.io/random").then(response=>response.json())
    .then(result=>{
        console.log(result)
        content.innerText=result.content;
        authorName.innerText=result.author;
        button.classList.remove('loading')
        button.innerText='New Quote';
       
    })
}

speech.addEventListener('click',()=>{
    if(!button.classList.contains('loading')){
        let utterance=new SpeechSynthesisUtterance(`${content.innerText} by ${authorName.innerText}`)
        synth.speak(utterance);
        setInterval(()=>{
            !synth.iSpeaking ? speech.classList.remove('active'):speechBtn.classList.add("active");
        },10)
    }
})

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(content.innerText)    
})
twitter.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${content.innerText}`;
    window.open(tweetUrl, "_blank");   
})

button.addEventListener("click", randomQuote);