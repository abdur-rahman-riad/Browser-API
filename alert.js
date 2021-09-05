function alertEveryOne() {
    alert("Hey!! Are you serious..?");
}

const confirmPicnic = () => {
    const userResponse = confirm("Are you going with us?");
    // console.log(userResponse);
    if (userResponse === true) {
        document.getElementById('userClicked').innerText = "Ok";
    } else {
        document.getElementById('userClicked').innerText = "Cancel";
    }
}

const myName = () => {
    const nameResponse = prompt("What is your Name??");
    if (nameResponse === true) {
        document.getElementById('name-id').innerText = `My Name is: ${nameResponse}`;
    } else {
        document.getElementById('name-id').innerText = `Name not given by user`;
    }
    console.log(nameResponse);
}