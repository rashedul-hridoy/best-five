// step1: selecting the calculate field
// step2: getting the per player cost from text field
// step3: From the player list getting total number of players
// step5: multiplying player number with per player cost and putting it in player expense

document.getElementById('btn-calculate').addEventListener('click', function(){
    const calculateField = document.getElementById('calculate-field');
    const perPlayerCost = parseFloat(calculateField.value);
    const playerExpense = document.getElementById('player-expense');
    const players = document.getElementById('player-list');
    const playerNumber = players.childNodes.length -1;
    const totalPlayerCost = perPlayerCost * playerNumber;
    playerExpense.innerText = totalPlayerCost;
    calculateField.value = '';
});
// calculating total Budget of the team

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const coachField = document.getElementById('coach-field');
    const coachSalary = parseFloat(coachField.value);
    const managerField = document.getElementById('manager-field');
    const managerSalary = parseFloat(managerField.value);
    const playerExpense = document.getElementById('player-expense');
    const playerTotal = parseFloat(playerExpense.innerText);
    const totalBudget = coachSalary + managerSalary + playerTotal;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = totalBudget;
    coachField.value = '';
    managerField.value = '';

});