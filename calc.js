var a='';
var b='';
var num=[];
var ans;

function sendNum(digit){

  num.push(digit);
  console.log('Num array', num);


  if(num.length!=1){
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

  ans= eval(b);
  document.getElementById('screen').innerHTML=ans;

  while(num.length>0){
    num.pop();
  }

  num.push(ans.toString());
}


function clearScr(){
  document.getElementById('screen').innerHTML='';

  while(num.length>0){
    num.pop();
  }

  a='';
  b='';
}