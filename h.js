
function dialNumber(number) {
    window.location.href = 'tel:' + number;
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:youremail@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
    
    window.location.href = mailtoLink;
}