document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
}

// Elemen Notice
const notice = document.querySelector('.chat-notice');
const noticeCloseButton = document.querySelector(".chat-notice-close-button");

// Elemen Chatbox
const chatbox = document.querySelector(".chat-box")
const chatButton = document.querySelector(".chat-button")

// Event listener untuk notice
noticeCloseButton.addEventListener("click", function() {
    notice.classList.add("hidden");
})

// Event listener untuk chatbox
chatButton.addEventListener("click", function() {
    notice.classList.add("hidden");
    chatbox.classList.toggle("hidden");
})


