const books = [
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  
  function logTitles(titles) {
    titles.sort();
    titles.forEach(title => console.log(title));
  }
  
  const bookTitles = books.map(book => book.title);
  logTitles(bookTitles);