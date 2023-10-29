document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const resultsList = document.getElementById('results');
    const content = document.querySelector('.content').children;

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        resultsList.innerHTML = '';

        for (let i = 0; i < content.length; i++) {
            const text = content[i].textContent.toLowerCase();
            if (text.includes(query)) {
                const listItem = document.createElement('li');
                listItem.textContent = text;
                resultsList.appendChild(listItem);
            }
        }
    });
});
