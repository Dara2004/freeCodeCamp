var buttons = document.getElementsByClassName("btn");
var equation = document.getElementById('equation');
var result = document.getElementById('result');
var operators = document.getElementsByClassName('operator');
var arr = [];
var temInt = "";
var active = true;

function init() {
    active = true;
    arr = [];
    total = 0;
    tempTotal = 0;
    result.innerHTML = "";
    equation.innerHTML = "";

}
//http: //tobyho.com/2011/11/02/callbacks-in-loops/
//save inputs into arr as clicked

for (var i = 0; i < buttons.length; i++) {
    var data;
    buttons[i].addEventListener('click', function (e) {
        if (active === true) { //make the buttons inactive after pressing "="
            data = parseInt(this.textContent);
            //if data is a real number, pass to the arr 
            if (!isNaN(data)) {
                temInt += data;
                equation.innerHTML += data;
            } else if (this.textContent == ".") {
                temInt += this.textContent;
                equation.innerHTML += this.textContent;
            } else if (this.textContent == "%") {
                temInt += this.textContent;
                equation.innerHTML += this.textContent;
                arr.push(parseFloat(temInt) / 100);
            } else {
                if (temInt != "") {
                    arr.push(parseFloat(temInt));

                }
                equation.innerHTML += this.textContent;
                temInt = "";
                arr.push(this.textContent);
            }
        }

    }, false);
}


//calculations
var tempTotal;
var total = 0;

function multiply(currentArr) {
    function smallMultiply(currentArr) {
        for (var i = 0; i < currentArr.length; i++) {
            if (currentArr[i] == "*") {
                tempTotal = currentArr[i - 1] * currentArr[i + 1];
                currentArr.splice(i - 1, 3, tempTotal);
                smallMultiply(currentArr);
            } else if (currentArr[i] == "/") {
                tempTotal = currentArr[i - 1] / currentArr[i + 1];
                currentArr.splice(i - 1, 3, tempTotal);
                smallMultiply(currentArr);
            }
        }
    }
    smallMultiply(currentArr);
    add(currentArr);
}

function add(currentArr) {
    total = currentArr[0];
    for (var i = 0; i < currentArr.length; i++) {
        if (currentArr[i] == "+") {
            total += currentArr[i + 1];
        } else if (currentArr[i] == "-") {
            total -= currentArr[i + 1];
        }
    }
    return total;
}


//make calculator active again after pressing any operator
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function (e) {
        active = true;
    });
}

//equal btn
document.getElementById('equal').addEventListener('click', function () {
    if (temInt != "") {
        arr.push(parseInt(temInt));
    }
    multiply(arr);
    result.innerHTML = total;
    arr = [];
    arr[0] = total;
    active = false;
})

//Clear btn
document.getElementById('C').addEventListener('click', function () {
    if (active === true) {
        arr.splice(arr.length - 2, 2); //mutate arr
        equation.innerHTML = arr.join("");
    }
})


//Al clear btn
document.getElementById('AC').addEventListener('click', function () {
    init();
})
