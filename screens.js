function showindicator() {
document.getElementById("loadingindicator").className = "animated fadeIn";
document.getElementById("loadingindicator").style.display = "block";
}
function hideindicator() {
document.getElementById("loadingindicator").className = "animated fadeOut";
setTimeout(function(){
document.getElementById("loadingindicator").style.display = "none";
}, 1000);
}

function checkNetConnection(){
 jQuery.ajaxSetup({async:true});
 re="";
 r=Math.round(Math.random() * 10000);
 $.get("http://enunua.com/gormahia/on.php",{subins:r},function(d){

 document.getElementById("offline").className = "animated fadeOut";
setTimeout(function(){
 document.getElementById('offline').style.display = 'none';
}, 1000);

 }).error(function(){
  re=false;
  
  document.getElementById("offline").className = "animated fadeIn";
  document.getElementById('offline').style.display = 'block';
  
 });
 return re;
}

$( document ).ready(function() {
	
setInterval(function(){ 
checkNetConnection();
}, 3000);

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
	
	localStorage.setItem('latitude', latitude);
	localStorage.setItem('longitude', longitude);
	
  };

  function error() {
    
  };

  navigator.geolocation.getCurrentPosition(success, error);


	
	
setTimeout(function(){
	document.getElementById("loadingindicator").style.display = "none";
	}, 1000);
	
lang = localStorage.getItem('lang');
if(lang == 'eng') {
	$(".eng").removeClass("eng");
}
if(lang == 'swa') {
	$(".swa").removeClass("swa");
}
});

function loginwithnumberandpin() {
	document.getElementById('loginwithnumberandpin').style.display = 'block';
	document.getElementById("mainholder").className = "blur";
}

function registernext() {
	document.getElementById('register2').style.display = 'block';
	document.getElementById('register1').style.display = 'none';
	
	var email_en = document.getElementById('email_en').value;
	
	if (email_en) {
    	
	}
	else  {
		alert('You did not enter an E-Mail. You can register without, but you will not be able to recover your account trough E-Mail if you forget your PIN.');
	}
}
function registernext2() {
	document.getElementById('register3').style.display = 'block';
	document.getElementById('register2').style.display = 'none';
}
function registerprev() {
	document.getElementById('register2').style.display = 'none';
	document.getElementById('register1').style.display = 'block';
}
function registerprev2() {
	document.getElementById('register3').style.display = 'none';
	document.getElementById('register2').style.display = 'block';
}
function register() {
	document.getElementById('registeraccount').style.display = 'block';
	document.getElementById("mainholder").className = "blur";
}
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

function askhowmuch() {

var valuefrompromt = prompt("Contribute to the team (Minimum KES 100) and become registered in the official Gor Mahia F.C. Fanclub! Contribution is valid for 6 Months after which it needs to be renewed.", "100");
while(valuefrompromt.length < 3){
alert("Please enter at least 3 digits");
valuefrompromt = prompt("Contribute to the team (Minimum KES 100) and become registered in the official Gor Mahia F.C. Fanclub! Membership is valid for 6 Months after which it needs to be renewed.", "100");
}
if ((valuefrompromt != 0) && (isNumber (valuefrompromt))) {
localStorage.setItem('amount',valuefrompromt);
contributiongo();
}
else if (!isNumber (valuefrompromt)) {
alert("Please enter a number");
askhowmuch();
}

}

function contribution() {
	document.getElementById('contribution').style.display = 'block';
	askhowmuch();
}
function contributiongo() {
	complete_eng();
}

function complete_eng() {
var lat = localStorage.getItem('latitude');
var long = localStorage.getItem('longitude');
var amount = localStorage.getItem('amount');
var pin_en = document.getElementById('pin_en').value;
var city_en = document.getElementById('city_en').value;
var gender_en = document.getElementById('gender_en').value;
var phone_en = document.getElementById('phone_en').value;



var email_en = document.getElementById('email_en').value;

if (email_en) {
    	
	}
	else  {
		var email_en = 'officialfanclub@gormahiafc.co.ke';
	}


var age_en = document.getElementById('age_en').value;

if (age_en) {
    	
	}
	else  {
		var age_en = 'Unknown';
	}


var last_name_en = document.getElementById('last_name_en').value;
var first_name_en = document.getElementById('first_name_en').value;

// alert('Data sent:\n\nfirst_name_en: '+first_name_en+'\nlast_name_en: '+last_name_en+'\nemail_en: '+email_en+'\nphone_en: '+phone_en+'\ngender_en: '+gender_en+'\ncity_en: '+city_en+'\npin_en: '+pin_en+'\nlong: '+long+'\nlat: '+lat+'\namount: '+amount+'');

try {
window.location.replace('http://enunua.com/gormahia/fan_number.php?pin_en='+pin_en+'&city_en='+city_en+'&gender_en='+gender_en+'&phone_en='+phone_en+'&email_en='+email_en+'&age_en='+age_en+'&last_name_en='+last_name_en+'&first_name_en='+first_name_en+'&lat='+lat+'&long='+long+'&amount='+amount+'');
}
catch(e) {
   // alert("Error: " + e.message);
	return;
}


}

function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
  
function loginwithnumberandpingo() {

showindicator();

loginfannumberormail = document.getElementById('loginfannumberormail').value;
loginpin =  document.getElementById('loginpin').value;

if(loginfannumberormail.indexOf('@') === -1)
{
isemail = 'No';	
}
else {
isemail = 'Yes';	
}
	
$.get( "http://enunua.com/gormahia/logincheck.php?isemail="+isemail+"&loginfannumberormail="+loginfannumberormail+"&loginpin="+loginpin+"", function( data ) {

if(data == 'noemail')
{
alert('Your account is not associated with an E-Mail. Please login using your Fan-Number.');
hideindicator();
}
else if(data == 'pin0')
{
alert('Sorry, you entered an incorrect PIN. Please try again or contact officialfanclub@gormahiafc.co.ke for assistance.');
hideindicator();
}
else if(data == 'pin1')
{
gotocontentstart();
}
else
{
alert('Account not found. Please try again or contact officialfanclub@gormahiafc.co.ke for assistance.');	
hideindicator();
}

});

}

function gotocontentstart() {

if (isemail == 'No') {

localStorage.setItem('activefan',loginfannumberormail);
		
var activefan = localStorage.getItem('activefan');
// alert('Welcome back Fan No #'+activefan+'');

$("#fandetails").load("http://enunua.com/gormahia/loadfandetails.php?fannumber="+activefan+"",function(responseTxt,statusTxt,xhr){

var fan_details_first_name = document.getElementById('fan_details_first_name').innerHTML;
var fan_details_last_name = document.getElementById('fan_details_last_name').innerHTML;

var fan_details_first_name = fan_details_first_name.toUpperCase();
var fan_details_last_name = fan_details_last_name.toUpperCase();

localStorage.setItem('fan_details_first_name',fan_details_first_name);
localStorage.setItem('fan_details_last_name',fan_details_last_name);

document.location.href = 'main/gotostart.html?activefan='+activefan+'';
localStorage.setItem('rememberuser','Yes');

});

}

else if (isemail == 'Yes') {
		
$.get( "http://enunua.com/gormahia/logincheckfannumberfromemail.php?loginfannumberormail="+loginfannumberormail+"", function( data ) {
		
localStorage.setItem('activefan',data);
localStorage.setItem('rememberuser','Yes');
		
var activefan = localStorage.getItem('activefan');

$("#fandetails").load("http://enunua.com/gormahia/loadfandetails.php?fannumber="+activefan+"",function(responseTxt,statusTxt,xhr){

var fan_details_first_name = document.getElementById('fan_details_first_name').innerHTML;
var fan_details_last_name = document.getElementById('fan_details_last_name').innerHTML;

var fan_details_first_name = fan_details_first_name.toUpperCase();
var fan_details_last_name = fan_details_last_name.toUpperCase();

localStorage.setItem('fan_details_first_name',fan_details_first_name);
localStorage.setItem('fan_details_last_name',fan_details_last_name);

document.location.href = 'main/gotostart.html?activefan='+activefan+'';
localStorage.setItem('rememberuser','Yes');

});

});
		
}
}