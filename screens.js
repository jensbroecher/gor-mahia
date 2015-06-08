function showindicator() {
document.getElementById("loadingindicator").className = "animated fadeIn";
document.getElementById("loadingindicator").style.display = "block";
}

$( document ).ready(function() {
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

function registernext_prep_eng() {
	var $myForm = $('#registernext_prep_eng')
	if (!$myForm[0].checkValidity()) {
    
	}
}
function registernext2_prep_eng() {
	var $myForm2 = $('#registernext2_prep_eng')
	if (!$myForm2[0].checkValidity()) {
   
	}
}
function complete_eng_prep() {
	var $myForm3 = $('#complete_eng')
	if (!$myForm3[0].checkValidity()) {
   
	}
}

function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }