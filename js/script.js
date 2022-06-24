function next1() {
    var input = document.getElementsByName('home');

    for (var i = 0; i < input.length; i++) {
        var radio = input[i];
        if (radio.checked) {
            window.scrollTo(0, 850)
        } else {
            document.getElementById( 'draw1' ).innerHTML="Выберите вариант";
        }
    }
}

function next2() {
    var input = document.getElementsByName('time');

    for (var i = 0; i < input.length; i++) {
        var radio = input[i];
        if (radio.checked) {
            window.scrollTo(0, 1700)           
        } else {
            document.getElementById( 'draw2' ).innerHTML="Выберите вариант";            
        }
    }
}

function next3() {
    var input = document.getElementsByName('floor');

    for (var i = 0; i < input.length; i++) {
        var radio = input[i];
        if (radio.type == "radio" && radio.checked) {
            window.scrollTo(0, 2550)
        } else {
            document.getElementById( 'draw3' ).innerHTML="Выберите вариант";
        }
    }
}

function next4() {
    var input = document.getElementsByName('budget');

    for (var i = 0; i < input.length; i++) {
        var radio = input[i];
        if (radio.type == "radio" && radio.checked) {
            window.scrollTo(0, 3400)
        } else {
            document.getElementById( 'draw4' ).innerHTML="Выберите вариант";
        }
    }
}

function next5() {
    var input = document.getElementsByName('square');

    for (var i = 0; i < input.length; i++) {
        var radio = input[i];
        if (radio.type == "radio" && radio.checked) {
            window.scrollTo(0, 4250)
        } else {
            document.getElementById( 'draw5' ).innerHTML="Выберите вариант";
        }
    }
}