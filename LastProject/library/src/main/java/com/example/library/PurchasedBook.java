package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Purchase")
public class PurchasedBook {
    @Id
    String id;
     @Override
    public String toString() {
        return "PurchasedBook [authorName=" + authorName + ", bookName=" + bookName + ", dateOfPrchase=" + dateOfPrchase
                + ", dateOfReturn=" + dateOfReturn + ", id=" + id + ", isbnNumber=" + isbnNumber + ", uid=" + uid + "]";
    }
    String uid;
     String isbnNumber;
     String bookName;
   public PurchasedBook(String id, String uid, String isbnNumber, String bookName, String authorName,
            String dateOfPrchase, String dateOfReturn) {
        this.id = id;
        this.uid = uid;
        this.isbnNumber = isbnNumber;
        this.bookName = bookName;
        this.authorName = authorName;
        this.dateOfPrchase = dateOfPrchase;
        this.dateOfReturn = dateOfReturn;
    }
String authorName;
    String dateOfPrchase;
    String dateOfReturn;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getUid() {
        return uid;
    }
    public void setUid(String uid) {
        this.uid = uid;
    }
    public String getIsbnNumber() {
        return isbnNumber;
    }
    public void setIsbnNumber(String isbnNumber) {
        this.isbnNumber = isbnNumber;
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
    public String getDateOfPrchase() {
        return dateOfPrchase;
    }
    public void setDateOfPrchase(String dateOfPrchase) {
        this.dateOfPrchase = dateOfPrchase;
    }
    public String getDateOfReturn() {
        return dateOfReturn;
    }
    public void setDateOfReturn(String dateOfReturn) {
        this.dateOfReturn = dateOfReturn;
    }
    
    
}
