function Todo() {
    x.push(document.getElementById("myText").value);
    length = x.length - 1;
    xcheck.push(0);
    console.log(xcheck);
    document.getElementById("Enter").innerHTML += 
    '<div><input id="checkbtn" onclick="strike(length)" type="checkbox"><p style="display: inline-block;">' + x[length] + '</p></div>';
    
    document.getElementById("myText").value = '';
  }
  
function strike(length) {
    var g = document.getElementById('checkbtn').checked;
//    console.log(xcheck.forEach(function(c,i,a){
//      return document.getElementById('Enter').children[i].children.checkbtn.checked;  
//    }))

    for(i = 0;i<xcheck.length;i++)
    {
      if(document.getElementById('Enter').children[i].children.checkbtn.checked)
      {
        xcheck[i] = 1;
        document.getElementById('Enter').children[i].children[1].style.textDecoration = "line-through";
      }
      else
      {
        xcheck[i] = 0;
        document.getElementById('Enter').children[i].children[1].style.textDecoration = "none";
      }
    }
    

}

function Clear() {
  x = [];
  xcheck = [];
  length = x.length;
  document.getElementById("Enter").innerHTML = '';
}

var x = [];
var length = -1;
var xcheck = [];