var inches = 
 document.getElementById('inches');
var cm =   
   document.getElementById('centi');
inches.addEventListener('input',function(){
     
let i = this.value;
let c =  i*2.54;
cm.value =  c;

});
inches.addEventListener('input',function(){
     
    let i = this.value;
    let c =  i/2.54;
    inch.value =  i;
    
    });

    let celcius =
     document.getElementById('cel');
     let farnheit =
     document.getElementById('fn')
     celcius.oninput = () => {
        let output = (parseFloat(cel.value)) *9/5 + 32;
        fn.value=parseFloat(output.toFixed(2));


     }
 


  var a;//Global variable
var b;
var c;
var result=0; //Global variable
var avg=0; //Global variable
 
function Calculate()
{
a=parseInt(form1.txtNum1.value);
b=parseInt(form1.txtNum2.value);
c=parseInt(form1.txtNum3.value);
result=a+b+c;
avg = result/3;
 
// document.write("The Total is  :"+ "<b>" + result  +  "<b>" + "</br>");
 
document.write("The Avg is  :"+ "<b>" + avg  +  "<b>" + "</br>");
 
if(avg > 80)
{
    document.write(" :"+ "<b>"+"You are above standard.Addmission Granted.." +   "<b>" );
// document.getElementById('result');
 
}
else
{
    document.write( "Sorry! you Failed" +  "<b>" );
}
}



