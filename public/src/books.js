// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
    for (let author in authors) {
        if (authors[author].id === id) return authors[author];
    }
}

function findBookById(books, id) {
    for (let book in books) {
        if (books[book].id === id) return books[book];
    }
}

function partitionBooksByBorrowedStatus(books) {
    let out = [];
    let inn = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].borrows[0].returned === true) {
            inn.push(books[i]);
        } else {
            out.push(books[i]);
        }
    }
    return [out, inn];
}

function getBorrowersForBook(book, accounts) {
    const accountsById = accounts.reduce((acc, account) => {
        acc[account.id] = account;
        return acc;
    }, {});
    return book.borrows
        .map(({ id, returned }) => ({
            ...accountsById[id],
            returned,
        }))
        .slice(0, 10);
}






module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
};
