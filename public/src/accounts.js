// Note: Please do not change the name of the functions. The tests use those names to validate your code.
/*
  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }q
*/

const { getTotalBooksCount, getTotalAccountsCount } = require("./home");

function findAccountById(accounts, id) {
    let found = accounts.find((account) => account.id === id);
    return found;
}

function sortAccountsByLastName(accounts) {
    const { name } = accounts;
    let sorted = accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
    return sorted;
}

function getTotalNumberOfBorrows(account, books) {
    let found = books.filter((book) => {
        return book.borrows.some((checkout) => checkout.id === account.id);
    });
    return found.length;
}

function getBooksPossessedByAccount(account, books, authors) {
    let result = books
        .filter(
            ({ borrows }) => borrows[0].id === account.id && !borrows[0].returned
        )
        .map((book) => {
            const author = authors.find((auth) => auth.id === book.authorId);
            return {...book, author };
        });
    return result;
}

module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
};