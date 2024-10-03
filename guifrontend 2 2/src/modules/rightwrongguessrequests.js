const baseURL = "http://localhost:3000/top5points";

async function getTop5Points() {
    const res = await fetch(baseURL)
    const Top5Points = await res.json()

    return Top5Points
}

async function sendGuess(numberToEvaluate) {
    const options = {
        method: 'POST',
        body: JSON.stringify(numberToEvaluate),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    const res = await fetch(baseURL, options)
    if (!res.ok) {
        throw new Error('Failed to send guess');
    }
    const data = await res.json();
    return data;  // Return the response message
}



export { getTop5Points, sendGuess }