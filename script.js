//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    submitButton.addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        if (title && author && isbn) {
            addBookToTable(title, author, isbn);

            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });

    function addBookToTable(title, author, isbn) {
        const row = document.createElement('tr');
		row.insertCell(0).innerHTML = title;
		row.insertCell(1).innerHTML = author;
		row.insertCell(2).innerHTML = isbn;
		row.insertCell(3).innerHTML = `<td><button class="delete">Clear</button></td>`;
        row.querySelector('.delete').addEventListener('click', () => {
            row.remove();
        });

        bookList.appendChild(row);
    }
});
