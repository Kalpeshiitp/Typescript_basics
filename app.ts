var num1Element = document.getElementById('num1') as HTMLInputElement;
var num2Element = document.getElementById('num2') as HTMLInputElement;
var buttonElement = document.querySelector('button')!;
const numresult: Array<number> =[]
const textresult: string[] =[]

type NumofString = number |string;
type Result= {val:number,timestame: Date};

interface objResult {
    val:number,
    timestame: Date
}
function add(num1: NumofString,num2:NumofString){
    if(typeof num1 ==='number' && typeof num2 ==='number'){
          return num1 + num2
    }else if(typeof num1 ==='string' && typeof num2 ==='string'){
           return num1+ ' '+ num2
    }
    return +num1 + +num2;
}

function printresult(resultobj:objResult){
    return console.log(resultobj)
}
buttonElement.addEventListener('click', ()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1,+num2)
    numresult.push(result as number)
    const stringresult = add(num1,num2);
    textresult.push(stringresult as string)
    printresult({val:result as number, timestame: new Date()})
    console.log(numresult,textresult)

})

const mypromise = new Promise<string>((resolve,reject)=>{

    setInterval(()=>{
        resolve("It worked")
    },1000)
})

mypromise.then(result =>{
    console.log(result.split('w'))
})
