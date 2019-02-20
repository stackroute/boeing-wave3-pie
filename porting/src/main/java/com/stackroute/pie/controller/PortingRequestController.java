package com.stackroute.pie.controller;

import com.stackroute.pie.domain.PortingRequest;
import com.stackroute.pie.exceptions.RequestNotFoundException;
import com.stackroute.pie.services.PortingRequestServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin("*")
public class PortingRequestController {

    PortingRequestServiceImpl requestService;
    @Autowired
    public PortingRequestController(PortingRequestServiceImpl requestService) {
        this.requestService = requestService;
    }

    //Method to store porting request details
    @PostMapping("request")
    public ResponseEntity PortingRequest (@RequestBody PortingRequest request) {
        ResponseEntity responseEntity;
        PortingRequest request1 = requestService.postRequest(request);

        responseEntity = new ResponseEntity<PortingRequest>(request1, HttpStatus.OK);
        return responseEntity;
    }

    //Method to update the request details
    @PutMapping("request/{requestId}")
    public ResponseEntity PortingRequest (@PathVariable("requestId") int requestId, @RequestBody PortingRequest request){
        ResponseEntity responseEntity;

        try {

            PortingRequest request1 = requestService.updateRequest(request,requestId);
            responseEntity =  new ResponseEntity<PortingRequest>(request1, HttpStatus.OK);

        }
        catch (RequestNotFoundException ex) {
            responseEntity = new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
            ex.printStackTrace();
        }
        return responseEntity;

    }

    //Method to delete porting request
    @DeleteMapping("request/{requestId}")
    public ResponseEntity PortingRequest (@PathVariable("requestId") int requestId){
        System.out.println("hi");
        ResponseEntity responseEntity;

        try {

            PortingRequest request1 = requestService.deleteRequest(requestId);
            responseEntity =  new ResponseEntity<PortingRequest>(request1, HttpStatus.OK);

        }
        catch (RequestNotFoundException ex) {
            responseEntity = new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
            ex.printStackTrace();
        }
        return responseEntity;

    }

    //Method to display requests
    @GetMapping("request/{username}")
    public ResponseEntity<List<PortingRequest>> requestLists(@PathVariable("username") String insuredName) {
        ResponseEntity responseEntity;
        try {
            List<PortingRequest> allRequests = requestService.getRequests(insuredName);
            return new ResponseEntity<List<PortingRequest>>(allRequests, HttpStatus.OK);
        }
        catch (RequestNotFoundException ex) {
            responseEntity = new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
            ex.printStackTrace();
        }
        return responseEntity;
    }

    //Method to display incoming porting requests
    @GetMapping("/incomingportingrequest/{newInsurerName}")
    public ResponseEntity<?> incomingPortingRequest( @PathVariable("newInsurerName") String newInsurerName) {
        List<PortingRequest> incomingPortingRequests = requestService.getIncomingPortingRequest(newInsurerName);
        List<PortingRequest> incomingPortingRequests1 = new ArrayList<>();
        System.out.println("In the incomingportingrequest");
        for(int i = 0;i < incomingPortingRequests.size(); i++) {
            if(incomingPortingRequests.get(i).getFromApproval() == 1 && incomingPortingRequests.get(i).getToApproval() == 0) {
                incomingPortingRequests1.add(incomingPortingRequests.get(i));
            }
        }
        return new ResponseEntity<List<PortingRequest>>(incomingPortingRequests1, HttpStatus.OK);
    }

    //Method to display outgoing porting requests
    @GetMapping("/outgoingportingrequest/{insurerName}")
    public ResponseEntity<?> outgoingPortingRequest(@PathVariable("insurerName") String insurerName) {
        List<PortingRequest> outgoingPortingRequests = requestService.getOutgoingPortingRequest(insurerName);
        List<PortingRequest> outgoingPortingRequests1 = new ArrayList<>();
        for(int i =0 ;i < outgoingPortingRequests.size(); i++) {
            if(outgoingPortingRequests.get(i).getFromApproval() != 1) {
                outgoingPortingRequests1.add(outgoingPortingRequests.get(i));
            }
        }
        return new ResponseEntity<List<PortingRequest>>(outgoingPortingRequests1, HttpStatus.OK);
    }

    //Method to accept outgoing requests
    @PutMapping("/acceptoutgoingportingrequest")
    public ResponseEntity<?> acceptOutgoingPortingRequest(@RequestBody PortingRequest portingRequest) {
        PortingRequest acceptOutgoingPortingRequest = requestService.acceptOutgoingPortingRequest(portingRequest);
        requestService.deletePortingRequest(portingRequest);
        acceptOutgoingPortingRequest.setFromApproval(1);
        Date d = new Date();
        acceptOutgoingPortingRequest.setAcceptedDateofPreviousInsurer(d);
        PortingRequest portingRequest1 = requestService.postRequest(acceptOutgoingPortingRequest);
        return new ResponseEntity<PortingRequest>(portingRequest1, HttpStatus.OK);
    }

    //Method to accept outgoing requests
    @PutMapping("/acceptincomingportingrequest")
    public ResponseEntity<?> acceptIncomingPortingRequest(@RequestBody PortingRequest portingRequest) {
        PortingRequest acceptIncomingPortingRequest = requestService.acceptIncomingPortingRequest(portingRequest);
        requestService.deletePortingRequest(portingRequest);
        acceptIncomingPortingRequest.setFromApproval(1);
        acceptIncomingPortingRequest.setToApproval(1);
        PortingRequest portingRequest1 = requestService.postRequest(acceptIncomingPortingRequest);
        return new ResponseEntity<PortingRequest>(portingRequest1, HttpStatus.OK);
    }

    //Method to reject incoming requests
    @PutMapping("/rejectincomingportingrequest")
    public ResponseEntity<?> rejectIncomingPortingRequest(@RequestBody PortingRequest portingRequest) {
        PortingRequest rejectIncomingPortingRequest = requestService.rejectIncomingPortingRequest(portingRequest);
        requestService.deletePortingRequest(portingRequest);
        rejectIncomingPortingRequest.setFromApproval(1);
        rejectIncomingPortingRequest.setToApproval(2);
        PortingRequest portingRequest1 = requestService.postRequest(rejectIncomingPortingRequest);
        return new ResponseEntity<PortingRequest>(portingRequest1, HttpStatus.OK);
    }

}