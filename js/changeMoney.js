function intergernumber(a) {
  var b = a.length,
      f, h = 0,
      g = "",
      e = Math.ceil(b / 3),
      k = b - e * 3;
      g = "";
  for (f = k; f < b; f += 3) {
      ++h;
      num3 = f >= 0 ? a.substring(f, f + 3) : a.substring(0, k + 3);
      strEng = English(num3);
      if (strEng != "") {
          if (g != "") g += ",";
          g += English(num3) + arr1[e - h]
      }
  }
  return "SAY US DOLLARS "+g.toUpperCase();
}

function decimalnumber2(a) {

  var b = a.length,
      f, h = 0,
      g = "",
      e = Math.ceil(b / 3),
      k = b - e * 3;
      g = "";
  for (f = k; f < b; f += 3) {
      ++h;
      num3 = f >= 0 ? a.substring(f, f + 3) : a.substring(0, k + 3);
      strEng = English(num3);
      if (strEng != "") {
          if (g != "") g += ",";
          g += English(num3) + arr1[e - h]
      }
  }
  return "CENTS "+g.toUpperCase()+" ONLY";
}

//美点表达法
// function decimalpoint(a) {

//   var b = a.length,
//       f, h = 0,
//       g = "",
//       e = Math.ceil(b / 3),
//       k = b - e * 3;
//       g = "";
//   for (f = k; f < b; f += 3) {
//       ++h;
//       num3 = f >= 0 ? a.substring(f, f + 3) : a.substring(0, k + 3);
//       strEng = English(num3);
//       if (strEng != "") {
//           if (g != "") g += ",";
//           g += English(num3) + arr1[e - h]
//       }
//   }
//   return "POINT "+g.toUpperCase()+" ONLY";
// }

//分数表达法
// function fraction(a) {

//   var b = a.length,
//       f, h = 0,
//       g = "",
//       e = Math.ceil(b / 3),
//       k = b - e * 3;
//       g = "";
//   for (f = k; f < b; f += 3) {
//       ++h;
//       num3 = f >= 0 ? a.substring(f, f + 3) : a.substring(0, k + 3);
//       strEng = English(num3);
//       if (strEng != "") {
//           if (g != "") g += ",";
//           g += English(num3) + arr1[e - h]
//       }
//   }
//   return g.toUpperCase();
// }

function numbertowords(number) {

if(number.value.indexOf(".")!=-1){

  var integer = number.value.split(".")[0];

  var decimal = number.value.split(".")[1];

var decimalword;

  var interword = intergernumber(integer);
  
  if(decimal.length>2){
    alert("The figure is account to two decimal places.eg：8765.55（只支持到小数点后2位如8765.55）")
  }else{

   decimalword = decimalnumber2(decimal);
   //point format
   //美点表达法
   //decimaltopoint = decimalpoint(decimal);
   //fraction foramt
   //分数表达法
   //decimalfraction=fraction(decimal);
  }
  document.getElementById("change-result").innerHTML = interword+" AND " + decimalword;
  //point format
  //美点表达法
  //document.getElementById("change-result").innerHTML += '\r\nOR'+'\r\n'+interword+" AND " + decimaltopoint;
  //fraction format
  //分数表达法
  //document.getElementById("change-result").innerHTML += '\r\nOR'+'\r\n'+interword+" AND " + decimalfraction+' ' +decimal+"/100 ONLY";
  
}
else{
  document.getElementById("change-result").innerHTML = numbertotext(number.value);
}
}

var arr1 = new Array("", " thousand", " million", " billion"),
  arr2 = new Array("zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"),
  arr3 = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"),
  arr4 = new Array("ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");

function numbertotext(a) {
  var b = a.length,
      f, h = 0,
      g = "",
      e = Math.ceil(b / 3),
      k = b - e * 3;
      g = "";
  for (f = k; f < b; f += 3) {
      ++h;
      num3 = f >= 0 ? a.substring(f, f + 3) : a.substring(0, k + 3);
      strEng = English(num3);
      if (strEng != "") {
          if (g != "") g += ",";
          g += English(num3) + arr1[e - h]
      }
  }
  return "SAY US DOLLARS "+g.toUpperCase()+" ONLY";
}


function English(a) {
  strRet = "";
  if (a.length == 3 && a.substr(0, 3) != "000") {
      if (a.substr(0, 1) != "0") {
          strRet += arr3[a.substr(0, 1)] + " hundred";
          if (a.substr(1, 2) != "00") strRet += " and "
      }
      a = a.substring(1);
  }
  if (a.length == 2)
      if (a.substr(0, 1) == "0") a = a.substring(1);
      else if (a.substr(0, 1) == "1") strRet += arr4[a.substr(1, 2)];
  else {
      strRet += arr2[a.substr(0, 1)];
      if (a.substr(1, 1) != "0") strRet += "-";
      a = a.substring(1)
  } if (a.length == 1 && a.substr(0, 1) != "0") strRet += arr3[a.substr(0, 1)];
  return strRet;
};

function findObj(a, b) {
  var c, d;
  b || (b = document);
  if ((c = a.indexOf("?")) > 0 && parent.frames.length) {
      b = parent.frames[a.substring(c + 1)].document;
      a = a.substring(0, c);
  }
  if (!(d = b[a]) && b.all) d = b.all[a];
  for (c = 0; !d && c < b.forms.length; c++) d = b.forms[c][a];
  for (c = 0; !d && b.layers && c < b.layers.length; c++) d = findObj(a, b.layers[c].document);
  if (!d && document.getElementById) d = document.getElementById(a);
  return d;
}

function changeMoney(num){
  
  let changeResult = document.getElementById('change-result')
  debugger
  changeResult.innerHTML = '转化结果为：(SAY US DOLLARS' + result + ' ONLY)'
  }

  function getValue() {
    let changeEnglishMoeny = document.getElementById('change-money')
        numbertowords(changeEnglishMoeny)
  }