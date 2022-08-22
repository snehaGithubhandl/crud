package com.example.library;

import java.util.List;

import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface PurchasedBookRepository extends MongoRepository <PurchasedBook, String> {
    @Query(value="{uid:?0}")
    List<PurchasedBook> findByuid(String uid);
    @DeleteQuery(value="{isbnNumber:?0}")
    void deleteByIsbnNumber(String isbnNumber);
    
}
