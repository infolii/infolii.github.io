document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('meowButton');
    const message = document.getElementById('message');
    const catEmoji = document.getElementById('catEmoji');
    const catTitle = document.getElementById('catTitle');

    // Массив с разными реакциями кота
    const catReactions = [
        { emoji: '😸', text: 'Мяу! Счастье-то какое!', color: '#2da44e' },
        { emoji: '😻', text: 'Мур-р-р... Я тебя люблю!', color: '#ff477e' },
        { emoji: '😼', text: 'Хм, продолжай в том же духе.', color: '#6f42c1' },
        { emoji: '🙀', text: 'Ой! Щекотно, перестань!', color: '#d93f0b' },
        { emoji: '🦁', text: 'Р-р-мяу! Я грозный лев!', color: '#b08500' },
        { emoji: '😴', text: 'Хр-р-р... Ты меня убаюкал...', color: '#0969da' }
    ];

    button.addEventListener('click', () => {
        // Выбираем случайную реакцию из массива
        const randomIdx = Math.floor(Math.random() * catReactions.length);
        const reaction = catReactions[randomIdx];

        // Меняем текст и эмодзи
        message.textContent = reaction.text;
        message.style.color = reaction.color;
        catEmoji.textContent = reaction.emoji;
        catTitle.textContent = 'Кот доволен!';

        // Запускаем анимацию прыжка
        catEmoji.classList.remove('bounce');
        void catEmoji.offsetWidth; // Магия для перезапуска CSS-анимации
        catEmoji.classList.add('bounce');
    });
});
