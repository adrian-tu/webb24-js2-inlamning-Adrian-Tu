import { getTop5Points, sendGuess } from "./modules/rightwrongguessrequests"
import { displayTop5Points } from "./modules/gui"

const form = document.querySelector('form')
const feedbackDiv = document.createElement('div');
form.append(feedbackDiv);  // Add a feedback div to the form for feedback messages

// Get high score list on page load
getTop5Points().then(displayTop5Points)

form.addEventListener('submit', async event => {
    event.preventDefault()

    const name = document.querySelector('#name').value
    const score = Number(document.querySelector('#number').value);
    const playerandnumber = { name, score }

    try {
        const res = await sendGuess(playerandnumber)
        feedbackDiv.innerText = res.message;  // Display feedback message
        getTop5Points().then(displayTop5Points);  // Refresh high score list after guess
    } catch (error) {
        feedbackDiv.innerText = 'Error submitting guess. Please try again!';
    }
})