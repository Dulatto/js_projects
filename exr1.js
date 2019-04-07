 const SPEND = 200;
const TAX = 0.08;
const MOBILE_PRICE = 99.99;
const ACCESORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount){
	
	return amount = amount * TAX;
}

function formatAmount(amount){
	return "$" + amount.toFixed(2);
}
while (amount < bank_balance) {
	amount = amount + MOBILE_PRICE;

	if (amount < SPEND){
	amount = amount + ACCESORY_PRICE;
	}
}

amount = amount + calculateTax(amount);

console.log("Your buy:" + formatAmount(amount));

if (amount > bank_balance) {
	console.log(
		"Вы не можете позволить себе эту покупку. :("
	);
}

/////////////////////////////////////////

var name = prompt('what is your name?', '');
alert('Your name is' +  name);

/////////////////////////////////////////
var question = prompt('What is official name of JavaScript?', '');

	if (question == 'Ecmascript'){
	    alert('Right');
	}else{
	alert('Dont you know? Ecmascript')
	};

	///////////////////////////////////////
var number = prompt('Fill any number', 0);

if (number < 1){
	alert(1);
}else if (number < 0){
	alert(-1);
}else{
	alert(0);
};
///////////////////////////////////////
var visitor = prompt ('Who comes?', '');

if (visitor == 'Admin'){
	var pass = prompt('Password','');
	if (pass == 'black boss'){
		alert('Welcome!');
	}else if (pass == null){
		alert('canceled');
	}else{
		alert('password is incorrect');
	}
}else if (visitor == null){
	alert('cancel');
}else{
	alert('I dont know you!')
}
/////////////////////////////
result = (a + b < 4) ? 'less': 'more';

//////////////////////////////
   var message = (login =='vasia')? 'Hello':
	   (login == 'director')?'how do you do?:
	   (login == '')? "no login":
        '';

   /////////////////////////////////////
if (age >=14 && age <=90);

/////////////////////////
	if (!(age >=14 && age <=90));
	///////////////////

for(i=0;i <=10;i++){
        if (i%2 == 0){
            alert(i);
        }
}
////////////////////////////////
var number;
do{
	number = prompt('insert the number bigger then 100', 0 );
}while(number <=100 && number != null);

///////////////////////////////////////////
nextPrime:
for(var i=2;i <=10;i++){
   for (var j=2;  j<i;j++){
   	if (i%j==0)continue nextPrime;
   }
   alert(i);
}
///////////////////////////////////
if (browser == 'IE'){
	alert('o, this is IE!');
}else if(browser == 'Chrome'||browser =='Frefox'||browser =='Safari'||browser =='Opera'){
	alert('Yes, we are supporting these browsers');
}else{
	alert('We hope that in your browser everything is okay');
}
///////////////////////////////////////////
function checkAge(age){
         return (age > 18)|| confirm('Родители разрешили?');

}
////////////////////////////
function checkAge(age) {
    return (age > 18) ? true: confirm('Родители разрешили?');
}
/////////////////////////////
let answer =confirm('Are you here?');
console.log(answer);