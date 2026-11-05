// Welcome Message

window.onload = function () {

    typeWriter();

    const btn =
        document.getElementById("theme-btn");

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme === "light"){

        document.body.classList.add("light-mode");

        btn.innerHTML = "☀️";

    }else{

        btn.innerHTML = "🌙";

    }

};

// Typing Animation

const text = "Terry Julian Anak Sylvester Igak";
let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);

    }

}

// Dark / Light Mode

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    const btn =
        document.getElementById("theme-btn");

    if(document.body.classList.contains("light-mode")){

        btn.innerHTML = "☀️";

        localStorage.setItem(
            "theme",
            "light"
        );

    }else{

        btn.innerHTML = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );
    }
}

// Live Clock

function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const currentDate = now.toLocaleDateString("en-US", options);
    const currentTime = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
        currentDate + " | " + currentTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Scroll To Top

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Contact Validation

function validateForm() {

    let name =
        document.getElementById("name").value;

    if (name === "") {

        alert("Please enter your name.");

    } else {

        alert("Thank you, " + name + "!");

    }

}
