function showindicator() {
document.getElementById("loadingindicator").className = "animated fadeIn";
document.getElementById("loadingindicator").style.display = "block";
}

$( document ).ready(function() {

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
function complete_eng() {
var lat = localStorage.getItem('latitude');
var long = localStorage.getItem('longitude');
var pin_en = document.getElementById('pin_en').value;
var city_en = document.getElementById('city_en').value;
var gender_en = document.getElementById('gender_en').value;
var phone_en = document.getElementById('phone_en').value;
var email_en = document.getElementById('email_en').value;
var last_name_en = document.getElementById('last_name_en').value;
var first_name_en = document.getElementById('first_name_en').value;

alert('Data sent:\n\nfirst_name_en: '+first_name_en+'\nlast_name_en: '+last_name_en+'\nemail_en: '+email_en+'\nphone_en: '+phone_en+'\ngender_en: '+gender_en+'\ncity_en: '+city_en+'\npin_en: '+pin_en+'\nlong: '+long+'\nlat: '+lat+'');

$.get('http://enunua.com/gormahia/fan_number.php?pin_en='+pin_en+'&city_en='+city_en+'&gender_en='+gender_en+'&phone_en='+phone_en+'&email_en='+email_en+'&last_name_en='+last_name_en+'&first_name_en='+first_name_en+'&lat='+lat+'&long='+long+'', function(data) {
  	alert('Sent');
});

}

function registernext_prep_eng() {
	
}
function registernext2_prep_eng() {
	
}
function complete_eng_prep() {
	
}

function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }