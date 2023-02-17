// common function to add player in the selected file

function updatePlayerList(getPlayerName){
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = getPlayerName;
    li.style.color = 'white';
    li.style.textAlign = 'center';
    playerList.appendChild(li);
}