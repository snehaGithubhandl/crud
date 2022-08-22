package com.example.library;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
public class UserController {

@Autowired
UserRepository userRepository;
@Autowired
 BookRepository bookRepository;
 @Autowired
PurchasedBookRepository purchasedBookRepository;


@PostMapping("/create")
public void createUser(@RequestBody UserModel userModel )
{
	userRepository.save(userModel);
}
@DeleteMapping("/delete/{id}")
public void deleteUser(@PathVariable String id)
{
	userRepository.deleteById(id);
}
@GetMapping("/count")
public int listUser()
{
	List <UserModel> data=userRepository.findAll();
	int number=data.size();
	return number;
}
@PostMapping("/all")
public UserModel loguser(@RequestBody UserModel userModel )
{
	String email=userModel.getEmail();
	String password=userModel.getPassword();
	System.out.println(email);
	System.out.println(password);
	List<UserModel> data=userRepository.findAll();
	
	UserModel  v =null;
	for(int i=0;i<data.size();i++) {
        
		UserModel x=data.get(i);
		String email1=x.getEmail();
		
		String password1=x.getPassword();
		
		System.out.println(x.getEmail());
		 System.out.println(x.getPassword());
		
		if(Objects.equals(email1,email) && Objects.equals(password1,password))
		{
            v=x;
            break;
			// return "true";
//		    System.out.println("true");
		}
		else
		{
            v=null;
			// return "false";
			
		}
		
	}
	return v;
		
}
@PostMapping("/addbook")
public void addBook(@RequestBody BookModel bookModel)
{
	bookRepository.save(bookModel);
}
@GetMapping("/bookcount")
public int listBook()
{
	List<BookModel> bookdata=bookRepository.findAll();
	int num=bookdata.size();
	return num;
}
@GetMapping("/find")
public List<BookModel>findBook()
{
	System.out.println("helloooooooo");
	System.out.println( bookRepository.findAll());
	return bookRepository.findAll();
	
}
@DeleteMapping("/deleting/{id}")
public void deleteBook(@PathVariable ("id") String id)
{
	bookRepository.deleteById(id);
}




@PutMapping("/update")
	public ResponseEntity<String> updateinfo(
	        @RequestBody BookModel book)
	{
        String isbnNumber=book.getIsbnNumber();
		List<BookModel> data=bookRepository.findByisbnNumber(isbnNumber);
		BookModel bm=data.get(0);
		bm.setAuthorName(book.getAuthorName());
		bm.setBookName(book.getBookName());
		bm.setAdded(book.getAdded());
		bm.setGenre(book.getGenre());
	    bookRepository.save(bm);
	    return new ResponseEntity<>("Data Updated",HttpStatus.OK);
	}


	@GetMapping("/getuserbook/{uid}")
private List<PurchasedBook> getuserbook(@PathVariable String uid)
{
	System.out.println("Test");
	System.out.println(purchasedBookRepository.findByuid(uid));
return purchasedBookRepository.findByuid(uid);
}

@PutMapping("/bookbuyupdate/{isbnNumber}")
public ResponseEntity<String> bookbuyupdate(@PathVariable("isbnNumber") String isbnNumber, @RequestBody BookModel bookModel) {
	System.out.println("HAIIIIIIIIIII");
	System.out.println(isbnNumber);
	Optional<BookModel> addbookData= bookRepository.findByIsbnNumber(isbnNumber);
	
  if (addbookData.isPresent()) {
	BookModel BookModel = addbookData.get();
		 BookModel.setBookName(bookModel.getBookName());
		 BookModel.setAuthorName(bookModel.getAuthorName());
		 BookModel.setAdded(bookModel.getAdded());
		 int a=Integer.parseInt(bookModel.getAvailable());
		  if(a>=1)
		  {
			  String b=Integer.toString(a-1);
			BookModel.setAvailable(b);
			System.out.println(BookModel.getAvailable());
		  }
		  else{
			BookModel.setAvailable("0");
		  }
		  bookRepository.save(BookModel);
	return new ResponseEntity<>(BookModel.getAvailable(), HttpStatus.OK);
  } else {
	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
@DeleteMapping("deletebuybook/{isbnNumber}")
public String buybookdelete(@PathVariable ("isbnNumber") String isbnNumber)
{
	purchasedBookRepository.deleteByIsbnNumber(isbnNumber);
	System.out.println("Book DELETING");
	System.out.println(isbnNumber);
	//
	////////////////////////updatereturn book
	Optional<BookModel> addbookData = bookRepository.findById(isbnNumber);
  if (addbookData.isPresent()) {
	 BookModel Bookmodel = addbookData.get();
		  int a=Integer.parseInt(Bookmodel.getAvailable());
			String b=Integer.toString(a+1);
			Bookmodel.setAvailable(b);
			System.out.println(Bookmodel.getAvailable());
		  bookRepository.save(Bookmodel);
}
return "sucess";
}


@PostMapping("/buybookinsert")
private ResponseEntity<String> bookinsert(@RequestBody PurchasedBook purchasedBook)
{
	purchasedBookRepository.save(purchasedBook);
	return new ResponseEntity<>("Book Inserted",HttpStatus.OK);
}
}

