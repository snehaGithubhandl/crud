package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "book")
public class BookModel {

    @Id
     String id;
     String bookName;
     String authorName;
     String isbnNumber;
     String added;
     String genre;
     String available;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getBookName() {
        return bookName;
    }
    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
    public String getAuthorName() {
        return authorName;
    }
    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }
    public String getIsbnNumber() {
        return isbnNumber;
    }
    public void setIsbnNumber(String isbnNumber) {
        this.isbnNumber = isbnNumber;
    }
    public String getAdded() {
        return added;
    }
    public void setAdded(String added) {
        this.added = added;
    }
    public String getGenre() {
        return genre;
    }
    public void setGenre(String genre) {
        this.genre = genre;
    }
    public String getAvailable() {
        return available;
    }
    public void setAvailable(String available) {
        this.available = available;
    }
    public BookModel(String id, String bookName, String authorName, String isbnNumber, String added, String genre,
            String available) {
        this.id = id;
        this.bookName = bookName;
        this.authorName = authorName;
        this.isbnNumber = isbnNumber;
        this.added = added;
        this.genre = genre;
        this.available = available;
    }
    @Override
    public String toString() {
        return "BookModel [added=" + added + ", authorName=" + authorName + ", available=" + available + ", bookName="
                + bookName + ", genre=" + genre + ", id=" + id + ", isbnNumber=" + isbnNumber + "]";
    }
    
    
}
