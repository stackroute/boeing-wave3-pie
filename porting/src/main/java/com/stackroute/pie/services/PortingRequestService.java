package com.stackroute.pie.services;

import com.stackroute.pie.domain.PortingRequest;
import com.stackroute.pie.exceptions.RequestNotFoundException;

public interface PortingRequestService {
public PortingRequest postRequest(PortingRequest request);
public PortingRequest updateRequest(PortingRequest request) throws RequestNotFoundException;
public PortingRequest deleteRequest(int requestId) throws RequestNotFoundException;
//public PortingRequest getRequests(String insuredName) throws RequestNotFoundException;
}
