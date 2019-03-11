package com.stackroute.pie.exception;

public class PolicyNotFoundException extends Exception {
   String message;
    public PolicyNotFoundException(String message){
        super();
        this.message = message;
    }

    public PolicyNotFoundException() {
    }

}
