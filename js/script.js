function next1() {
        let radio = document.querySelector(`input[type="radio"][name="home"]:checked`);
        if (radio.value !== "") {
            window.scrollTo(0, 850)
        } else {
            document.getElementById( 'draw1' ).innerHTML="Выберите вариант";
    }
}

function next2() {
    let radio = document.querySelector(`input[type="radio"][name="time"]:checked`);
        if (radio.value !== "") {
            window.scrollTo(0, 850)
        } else {
            document.getElementById( 'draw1' ).innerHTML="Выберите вариант";
    }
}

function next3() {
    let radio = document.querySelector(`input[type="radio"][name="floor"]:checked`);
    if (radio.value !== "") {
        window.scrollTo(0, 850)
    } else {
        document.getElementById( 'draw1' ).innerHTML="Выберите вариант";
}
}

function next4() {
    let radio = document.querySelector(`input[type="radio"][name="budget"]:checked`);
    if (radio.value !== "") {
        window.scrollTo(0, 850)
    } else {
        document.getElementById( 'draw1' ).innerHTML="Выберите вариант";
}
}

function next5() {
    let radio = document.querySelector(`input[type="radio"][name="square"]:checked`);
    if (radio.value !== "") {
        window.scrollTo(0, 850)
    } else {
        document.getElementById( 'draw1' ).innerHTML="Выберите вариант";
}
}