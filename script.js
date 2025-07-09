const apiKeyInput = document.getElementById('#apiKey');
const gameSelect = document.getElementById('#gameSelection');
const questionInput = document.getElementById('#questionInput');
const askButton = document.getElementById('#askButton');
const aiResponse = document.getElementById('#aiResponse');
const form = document.getElementById('form');

// Function to handle form submission
const enviarFormulario = (event) => { 
    event.preventDefault(); // Prevent the default form submission behavior

}

form.addEventListener('submit', enviarFormulario);