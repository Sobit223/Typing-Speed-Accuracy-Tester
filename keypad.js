const buttons = document.querySelectorAll('.keys')
const question = document.querySelector('.texttowrite')
const inputarea = document.querySelector('.textarea')
const startbutton = document.querySelector('.Start')
const timer = document.querySelector('.timer')
const showaccuracy = document.querySelector('.response')

let counter = 20
let interval;
let value;
const arrayoftext = ['The readonly attribute can be set to keep a user from using a text area until some other condition has been met (like selecting a checkbox, etc.)',
'The name was suggested by Sanger on 11 January 2001 as a portmanteau of the words wiki (Hawaiian for "quick") and encyclopedia. The wikipedia.com and wikipedia.org domain names were registered on 12 and 13 January, respectively, with wikipedia.org being brought online on the same day.',
'I personally think that even though CR7 is more complete and more accomplished, R9 at his absolute best was just better. R9 pre-injury was basically one man army,']



function changeQuestion(){

    value = Math.round(Math.random()*2); 
    question.innerHTML= `<h2>${arrayoftext[value]}</h2>`
}

inputarea.addEventListener('keypress',(event)=>{
    let key = event.key
    buttons.forEach((nums)=>{
        if(key==nums.id){
            setTimeout(()=>{
                document.getElementById(key).style.backgroundColor='aqua'
            },100)
            document.getElementById(key).style.backgroundColor='red'

        }
    })
})


startbutton.addEventListener('click',(event)=>{
    inputarea.value=''
    startbutton.disabled=true;
    changeQuestion()
    interval = setInterval(changetimer,1000)
})


function changetimer(){
    counter-=1
    timer.innerHTML=`${counter}`
    if(counter==0){
        clearinterval()
        startbutton.disabled=false;
        counter=20;
        calculateAccuracy(inputarea.value) 
    }
}

function clearinterval(){
    clearInterval(interval);
}



function calculateAccuracy(string){
    let mark = 0;
 

    for(let i = 0; i<string.length; i++){
        if(arrayoftext[value][i]==string[i]){
            mark+=1
        }
    }

    console.log(mark);
    let temp = arrayoftext[value].slice(0,string.length)
    let accuracy = (mark/temp.length)*100
    showaccuracy.innerHTML=`Your Accuracy is ${accuracy}`
    showaccuracy.style.backgroundColor='aquamarine';
    setTimeout(changedefault, 5000)
    
}


function changedefault(){
    showaccuracy.style.backgroundColor='';
    showaccuracy.innerHTML=''
    inputarea.value = ''
    timer.innerHTML=''
}