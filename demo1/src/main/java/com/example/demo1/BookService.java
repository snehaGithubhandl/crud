package com.example.demo1;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BookService {
	
	private static Map<Long,Book> Books=new HashMap<>();
	private static long index=3L;
	static 
	{
		Book Book1=new Book(1L,"The India Story","Bimal Jalal","2999");
		Book Book2=new Book(2L,"Tomb of Sand","Geetanjali Shree","1999");
		Book Book3=new Book(3L,"‘Monsoon","Sahitya Akademi","999");
		Books.put(1L,Book1);
		Books.put(2L,Book2);
		Books.put(3L,Book3);
	}
	
	public static Book addBook(Book bok)
	{
		index +=1;
		bok.setBid(index);
		Books.put(index, bok);
		return bok;
		
	}
	public static List<Book> getAllbook()
	{
		return new ArrayList<>(Books.values());
	}
	public static Book getByIdBook(Long bookId)
	{
		return Books.get(bookId);
	}
	public static Book delete(Long bookId)
	{
		return Books.remove(bookId);
	}
	public static Book updateBook(Long bookId,Book bok)
	{
		bok.setBid(bookId);
		Books.put(bookId, bok);
		return bok;
	}

}