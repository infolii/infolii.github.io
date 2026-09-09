
document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Ура! JavaScript-файл успешно подключен и работает!';
        message.style.color = '#28a745';
    });
    
});
