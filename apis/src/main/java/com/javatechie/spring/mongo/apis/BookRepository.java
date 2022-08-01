package com.javatechie.spring.mongo.apis;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepository extends MongoRepository <Book, String>{

}
