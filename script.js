const table = document.getElementById("tab");
const rng = document.getElementById("rng");
const odia = ['&#2918;','&#2919;','&#2920;','&#2921;','&#2922;','&#2923;','&#2924;','&#2925;','&#2926;','&#2927;'];
const body = document.body;

function odiaf(zx){
  var cod = '';
  for(var eq = 0;eq < zx.length;eq++){
    var subs = zx.substring(eq,eq+1);
    cod = cod + odia[subs];
  }
  return cod;
}

function genit(){
 var tb =  document.createElement("table");
 var ins = '<tr>';
 var qe = '<tr>';
 var tie = '<tr>';
  for(var ew = 1; (ew-1) < rng.value;ew++){
    ins = ins + "<td>"+ odiaf((tab.value*ew).toString()) + "</td>";
  }
  ins = ins + "</tr>";
  
  for (var i = 1; (i-1) < rng.value; i++) {
   qe = qe + "<td>"+ odiaf(i.toString()) + "</td>";
  }
  qe = qe + "</tr>";
  
  for(var bv = 1;(bv-1) < rng.value; bv++){
    tie = tie + "<td>"+ odiaf(tab.value.toString()) +"</td>";
  }
  tb.innerHTML = ins + qe + tie;
  body.appendChild(tb);
}
