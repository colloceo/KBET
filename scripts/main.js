document.getElementById('betting-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const team = document.getElementById('team').value;
    const amount = document.getElementById('amount').value;

    alert(`Bet placed on ${team} with an amount of $${amount}`);

    // Here you would handle the form submission, send data to the server, etc.
});
