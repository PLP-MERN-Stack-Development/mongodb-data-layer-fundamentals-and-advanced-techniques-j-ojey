//Finding Books By a Specific Author
db.books.find({genre: "Fiction"});

//Find books published after a certain year
db.books.find({published_year: {$gte: 1950}});

//Find books by a specific author
db.books.find({author: "George Orwell"});

//Update the price of a specific book
db.books.updateOne({_id : "68eff1fafb5d50bb6985c9da"}, {$set :{price: 18.00}});

//Delete a book by its title
db.books.deleteOne({title : "To Kill a Mockingbird"});

/*Advanced Queries*/
//Find books that are both in stock and published after 2010
db.books.find({in_stock: true, published_year: {$gte: 2010}});


//Use projection to return only the title, author, and price fields in your queries
// 1) For a genre
db.books.find(
	{ genre: "Fiction" },
	{ _id: 0, title: 1, author: 1, price: 1 }
);

// 2) For books published after a year
db.books.find(
	{ published_year: { $gte: 1950 } },
	{ _id: 0, title: 1, author: 1, price: 1 }
);

// 3) For a specific author
db.books.find(
	{ author: "George Orwell" },
	{ _id: 0, title: 1, author: 1, price: 1 }
);

//Implement sorting to display books by price (both ascending and descending)
// 1) Find - ascending (cheapest first)
db.books.find().sort({ price: 1 });

// 2) Find - descending (most expensive first)
db.books.find().sort({ price: -1 });

//Use the limit and skip methods to implement pagination (5 books per page)
db.books.find().skip(0).limit(5);  // Show first 5 books
db.books.find(). skip(5).limit(5); //SHow next 5 books


//Task 4: Aggregation Pipelines
//Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",         // group by genre
      average_price: { $avg: "$price" } // compute average price
    }
  },
  {
    $sort: { average_price: -1 } // optional: sort by avg price descending
  }
]);

//Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      total_books: { $sum: 1 }
    }
  },
  {
    $sort: { total_books: -1 }
  },
  {
    $limit: 1
  }
]);


//Group books by publication decade and count them
db.books.aggregate([
  {
    $addFields: {
      decade: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] }
    }
  },
  {
    $group: {
      _id: "$decade",
      books_in_decade: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 } // sort decades chronologically
  }
]);


//Task 5: Indexing
//Create an index on title
db.books.createIndex({ title: 1 });


//Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });


//Use explain() to show performance improvement
db.books.find({ title: "1984" }).explain("executionStats");
