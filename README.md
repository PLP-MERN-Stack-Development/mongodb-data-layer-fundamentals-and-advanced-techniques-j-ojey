# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
```

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## How to run the scripts

Prerequisites:
- Node.js (v18+ recommended)
- MongoDB running locally (or a MongoDB Atlas connection string)

1. Install dependencies (if you haven't already):

```bash
npm install
```

2. To populate the database with sample books (uses local MongoDB by default):

```bash
# Run the insert script
node insert_books.js
```

If you're using MongoDB Atlas, edit the `uri` variable in `insert_books.js` and replace the connection string.

3. To run the queries (use `mongosh` or MongoDB Compass):

- Start `mongosh` and switch to the `plp_bookstore` database:

```bash
mongosh
use plp_bookstore
```

- Paste the queries from `queries.js` into the shell or open the file in MongoDB Compass's "Playground".

4. Optional: Run queries programmatically from Node.js

You can convert the queries into Node.js scripts that use the MongoDB driver. This repository currently contains shell-style queries in `queries.js` which are intended for `mongosh` or Compass.
