function Us() {
  var nbr1 = document.getElementById("nbr1").value;
  var c = parseInt(nbr1, 10);
  var e = c / 961.83;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter The Rwanda fr";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e + "$";
  }
}
function Canada() {
  var nbr1 = document.getElementById("nbr1").value;
  var c = parseInt(nbr1, 10);
  var e = c / 721.3946;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter The Rwanda fr";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e + "$";
  }
}
function euro() {
  var nbr1 = document.getElementById("nbr1").value;
  var c = parseInt(nbr1, 10);
  var e = c / 1136.363636;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter The Rwanda fr";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e + "€";
  }
}
function pounds() {
  var nbr1 = document.getElementById("nbr1").value;
  var c = parseInt(nbr1, 10);
  var e = c / 1265.822785;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter The Rwanda fr";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e + "£";
  }
}
function chines() {
  var nbr1 = document.getElementById("nbr1").value;
  var c = parseInt(nbr1, 10);
  var e = c / 138.8888889;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter The Rwanda fr";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e + "¥";
  }
}
function clr() {
  document.getElementById("result").style.backgroundColor = "white";
  document.getElementById("result").value = "";
  document.getElementById("nbr1").value = "";
  document.getElementById("nbr2").value = "";
}
