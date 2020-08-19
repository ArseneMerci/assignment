function add() {
  var nbr1 = document.getElementById("nbr1").value;
  var nbr2 = document.getElementById("nbr2").value;
  var c = parseInt(nbr1, 10);
  var d = parseInt(nbr2, 10);
  var e = c + d;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter Numbers";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e;
  }
}
function sub() {
  var nbr1 = document.getElementById("nbr1").value;
  var nbr2 = document.getElementById("nbr2").value;
  var c = parseInt(nbr1, 10);
  var d = parseInt(nbr2, 10);
  var e = c - d;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter Numbers";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e;
  }
}
function times() {
  var nbr1 = document.getElementById("nbr1").value;
  var nbr2 = document.getElementById("nbr2").value;
  var c = parseInt(nbr1, 10);
  var d = parseInt(nbr2, 10);
  var e = c * d;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter Numbers";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e;
  }
}
function division() {
  var nbr1 = document.getElementById("nbr1").value;
  var nbr2 = document.getElementById("nbr2").value;
  var c = parseInt(nbr1, 10);
  var d = parseInt(nbr2, 10);
  var e = c / d;
  if (isNaN(e)) {
    document.getElementById("result").style.backgroundColor = "red";
    document.getElementById("result").value = "Enter Numbers";
  } else {
    document.getElementById("result").style.backgroundColor = "chartreuse";
    document.getElementById("result").value = e;
  }
}
function clr() {
  document.getElementById("result").style.backgroundColor = "white";
  document.getElementById("result").value = "";
  document.getElementById("nbr1").value = "";
  document.getElementById("nbr2").value = "";
}
