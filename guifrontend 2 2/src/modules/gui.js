function displayTop5Points(playerArray) {
    const container = document.querySelector('#highscoreContainer')
    container.innerHTML = "";


    for (const player of playerArray) {
        const playerDiv = document.createElement('div')
        const playernameEl = document.createElement('h2')
        const highscoreEl = document.createElement('p')

        playernameEl.innerText = `${player.name}`
        highscoreEl.innerText = `${player.score}`
        playerDiv.append(playernameEl, highscoreEl)
        container.append(playerDiv)
    }
}


export { displayTop5Points }