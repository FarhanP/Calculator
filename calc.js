var a='';
var b='';
var num=[];
var ans;
var regexPattern;

function sendNum(digit){


  if(num.length>20){
    var screen= document.getElementById('screen');

   console.log(screen);
    screen.classList.add('screenfix');
    
    
  }

  num.push(digit);

  
  console.log('Num array', num);


  if(num.length!=1 ){
    a='';
    document.getElementById('screen').innerHTML=a;
  }


  for(i=0; i<num.length;i++){
    a+=num[i];
  }

  console.log('A', a);




  document.getElementById('screen').innerHTML=a;
}

function equalTo(){
  document.getElementById('screen').innerHTML='';

  if(num.length!=1){
    b='';
    document.getElementById('screen').innerHTML=b;
  }

  for(i=0; i<num.length;i++){
    b+=num[i];
  }

  
//  regexPattern=/([0-9]*\.?[0-9]+[\/\+\-])+([0-9]+)/;
regexPattern=/([0-9]*\.?[0-9]+[\/\+\-\*])+([0-0.01]+)/;


  if(regexPattern.test(b)){

    console.log(regexPattern.test(b))
    // b=b.replace('*0.01', '');
    console.log('b',b);
  }



  ans= eval(b);
  console.log('The Equation', b)
  ans!==undefined?document.getElementById('screen').innerHTML=ans:'';

  while(num.length>0){
    num.pop();
  }


  if(ans!==undefined){
    num.push(ans.toString());
  }

  
}


function clearScr(){
  var screen=document.getElementById('screen');

  screen.classList.toggle('screenfix', false);
  screen.innerHTML='';
  
  while(num.length>0){
    num.pop();
  }
  a='';
  b='';
}