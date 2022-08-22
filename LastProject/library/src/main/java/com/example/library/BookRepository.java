package com.example.library;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends MongoRepository <BookModel, String> {
    @Query(value="{isbnNumber:?0}")
	List<BookModel> findByisbnNumber(String isbnNumber);

    Optional<BookModel> findByIsbnNumber(String isbnNumber);





}
