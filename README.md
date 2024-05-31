
# Book Store

Welcome to the Book Store project! This project is a web application designed to manage books, authors, and their information. Users can add, edit, delete, and view books and authors. .

## Table of Contents

- [Demo](#demo)
- [Usage](#usage)
- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)

## Features

- View a list of books
- View detailed information about a book
- Add a new book
- Edit book details
- Delete a book
- Responsive design

## Project Link

Check out the live  of the project: [Book Store](https://bookstore-git-main-lavarajus-projects.vercel.app/)


## Usage

1. **Home Page:**
   - Displays a list of books with their titles and authors.
   - Each book has options to view details, edit, or delete.

2. **Add/Edit Book:**
   - Form to add or edit book details, including title, author,Description and published year.
   - Option to upload an image for the book.

3. **Book Details:**
   - Displays detailed information about the book, including title, author, published year, and description.
   - Options to edit or delete the book.


## Technologies

- **Frontend:**
  - React with Vite
  - React Router
  - Axios
  - Tailwind CSS
  - react-icons

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - router for APIs

## API Endpoints

Here are some key API endpoints used in the project:

- **Book Management:**
  - `GET /books/get/data` - Get all books
  - `GET /books/get/singlebook/:id` - Get a single book by ID
  - `POST /books/post/book` - Add a new book
  - `PUT /books/update/book/:id` - Update a book by ID
  - `POST /books/delete/book/:id` - Delete a book by ID
