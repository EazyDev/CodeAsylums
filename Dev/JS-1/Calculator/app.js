function Minus() {
    document.getElementById('myText').value += ' - ';
    countOfOperations = 1;
    subtration = 1;
}

function Add() {
    document.getElementById('myText').value += ' + ';
    countOfOperations = 1;
    addition = 1;
}

function Multiply() {
    document.getElementById('myText').value += ' * ';
    countOfOperations = 1;
    multiplication = 1;
}

function Divide() {
    document.getElementById('myText').value += ' / ';
    countOfOperations = 1;
    division = 1;
}
///Numbers from here
function One() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 1;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 1;
        document.getElementById('myText').value = Number2;
    } 
}

function Two() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 2;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 2;
        document.getElementById('myText').value = Number2;
    }   
}

function Three() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 3;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 3;
        document.getElementById('myText').value = Number2;
    }
}

function Four() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 4;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 4;
        document.getElementById('myText').value = Number2;
    }
    
}

function Five() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 5;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 5;
        document.getElementById('myText').value = Number2;
    }
}

function Six() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 6;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 6;
        document.getElementById('myText').value = Number2;
    }
}

function Seven() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 7;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 7;
        document.getElementById('myText').value = Number2;
    }
}

function Eight() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 8;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 8;
        document.getElementById('myText').value = Number2;
    }
}

function Nine() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 9;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 9;
        document.getElementById('myText').value = Number2;
    }
}

function Zero() {
    if(countOfOperations == 0)
    {
        Number1 = Number1*10 + 0;
        document.getElementById('myText').value = Number1;
    }
    else
    {
        Number2 = Number2*10 + 0;
        document.getElementById('myText').value = Number2;
    }
}

function Decimal() {
    if(countOfOperations == 0)
    {   
        Number1 = Number1 + 0.2;
        console.log(Number1); 
    }
    document.getElementById('myText').value += '.YetToFigure.';

}

function EqualsTo() {
    document.getElementById('myText').value = '=';
    if(countOfOperations == 0)
    {
        countOfOperations = 0;
    }
    else if(countOfOperations > 0)
    {
        if(multiplication == 1)
        {
            document.getElementById('myText').value = Number1 * Number2;
        }
        else if(division == 1)
        {
            document.getElementById('myText').value = Number1 / Number2;
        }
        else if(addition == 1)
        {
            document.getElementById('myText').value = Number1 + Number2;
        }
        else if(subtration == 1)
        {
            document.getElementById('myText').value = Number1 - Number2;
        }
    }
    count = 0;
}

function OnCancel() {
    var Number1 = 0;
    var Number2 = 0;
    var countOfOperations = 0;
    var multiplication = 0;
    var addition = 0;
    var subtration = 0;
    var division = 0;
    document.getElementById('myText').value = '';
}





var Number1 = 0;
var Number2 = 0;
var countOfOperations = 0;
var multiplication = 0;
var addition = 0;
var subtration = 0;
var division = 0;