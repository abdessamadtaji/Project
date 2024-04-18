const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `
        Full Name: ${fullName.value}<br>
        Email: ${email.value}<br>
        Phone Number: ${phone.value}<br>
        Subject: ${subject.value}<br>
        Message: ${mess.value}
    `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdo.tj88@gmail.com",
        Password : "12E320D541BAE9754E1B0A8DD5C87DF67553",
        To : 'abdo.tj88@gmail.com , khadijaouahmane13@gmail.com',
        From : "abdo.tj88@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message === "OK"){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-text.email");
    
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value !== "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        } else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    
    if (
        !fullName.classList.contains("error") &&
        !email.classList.contains("error") &&
        !phone.classList.contains("error") &&
        !subject.classList.contains("error") &&
        !mess.classList.contains("error")
    ) {
        sendEmail();
        form.reset();
    }
});

email.addEventListener("keyup", () => {
    checkEmail();
});
