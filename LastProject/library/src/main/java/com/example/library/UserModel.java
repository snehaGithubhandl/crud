package com.example.library;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection= "users")
public class UserModel {

    @Id
     String id;
     String uid;
     String name;
     String email;
     String type;
     String dateOfBirth;
     String password;
     String getId() {
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
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public UserModel(String id, String uid, String name, String email, String type, String dateOfBirth,
            String password) {
        this.id = id;
        this.uid = uid;
        this.name = name;
        this.email = email;
        this.type = type;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
    }
    @Override
    public String toString() {
        return "UserModel [dateOfBirth=" + dateOfBirth + ", email=" + email + ", id=" + id + ", name=" + name
                + ", password=" + password + ", type=" + type + ", uid=" + uid + "]";
    }

    
    
}
