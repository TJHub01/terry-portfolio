// Welcome Message

window.onload = function () {

    alert("Welcome to Terry Julian's Portfolio Website!");

    typeWriter();

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

function toggleTheme() {

    document.body.classList.toggle("light-mode");

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