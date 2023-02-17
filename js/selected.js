// selecting Players, disabling button and adding them on selected List

document.getElementById('btn-messi').addEventListener('click',function(){
    const players = document.getElementById('player-list');
    if(players.childNodes.length >5){
        alert('You Can Not Select More Than 5 Players');
    }
    else{
        const playername = document.getElementById('messi-name');
        const getPlayerName = playername.innerText;
        updatePlayerList(getPlayerName);
        this.disabled = true;
        this.style.backgroundColor = 'grey';
    }
});
document.getElementById('btn-neymar').addEventListener('click',function(){
    const players = document.getElementById('player-list');
    if(players.childNodes.length >5){
        alert('You Can Not Select More Than 5 Players');
    }
    else{
        
        const playername = document.getElementById('neymar-name');
        const getPlayerName = playername.innerText;
        updatePlayerList(getPlayerName);
        this.disabled = true;
        this.style.backgroundColor = 'grey';
    }
});
document.getElementById('btn-mbappe').addEventListener('click',function(){
    const players = document.getElementById('player-list');
    if(players.childNodes.length >5){
        alert('You Can Not Select More Than 5 Players');
    }
    else{
        const playername = document.getElementById('mbappe-name');
        const getPlayerName = playername.innerText;
        updatePlayerList(getPlayerName);
        this.disabled = true;
        this.style.backgroundColor = 'grey';
    }
});
document.getElementById('btn-machado').addEventListener('click',function(){
    const players = document.getElementById('player-list');
    if(players.childNodes.length >5){
        alert('You Can Not Select More Than 5 Players');
    }
    else{
        const playername = document.getElementById('machado-name');
        const getPlayerName = playername.innerText;
        updatePlayerList(getPlayerName);
        this.disabled = true;
        this.style.backgroundColor = 'grey';
    }
});
document.getElementById('btn-ramos').addEventListener('click',function(){
    const players = document.getElementById('player-list');
    if(players.childNodes.length >5){
        alert('You Can Not Select More Than 5 Players');
    }
    else{
        const playername = document.getElementById('ramos-name');
        const getPlayerName = playername.innerText;
        updatePlayerList(getPlayerName);
        this.disabled = true;
        this.style.backgroundColor = 'grey';
    }
});
document.getElementById('btn-sanches').addEventListener('click',function(){
    const players = document.getElementById('player-list');
    if(players.childNodes.length >5){
        alert('You Can Not Select More Than 5 Players');
    }
    else{
        const playername = document.getElementById('sanches-name');
        const getPlayerName = playername.innerText;
        updatePlayerList(getPlayerName);
        this.disabled = true;
        this.style.backgroundColor = 'grey';
    }
});