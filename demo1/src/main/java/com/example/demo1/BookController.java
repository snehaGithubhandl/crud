package com.example.demo1;


import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class BookController {
	@PostMapping("/addBooks")
	public Book addBook(@RequestBody Book Bok)
	{
		return BookService.addBook(Bok);
		
	}
	@GetMapping("/book")
	public List<Book> getAllBook()
	{
		return BookService.getAllbook();
		
	}
	@GetMapping("/book/{bookid}")
	public Book getByIdBook(@PathVariable Long bookId)
	{
		return BookService.getByIdBook(bookId);
		
	}
	@PutMapping("/updateBo/{bookid}")
	public Book updateBook(@PathVariable Long bookId,@RequestBody Book Bok)
	{
		return BookService.updateBook(bookId,Bok);
	}
	@DeleteMapping("/delete/{bookid}")
	public Book delete(@PathVariable Long bookId)
	{
		return BookService.delete(bookId);
	}

}