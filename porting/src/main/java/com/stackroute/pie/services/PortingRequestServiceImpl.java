package com.stackroute.pie.services;

import com.stackroute.pie.domain.PortingRequest;
import com.stackroute.pie.exceptions.RequestNotFoundException;
import com.stackroute.pie.repository.PortingRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PortingRequestServiceImpl implements PortingRequestService{
    private PortingRequestRepository requestRepository;
    private PortingRequest request2;
    @Autowired
    public PortingRequestServiceImpl(PortingRequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }
    //To post a request
    public PortingRequest postRequest(PortingRequest request){
        PortingRequest request1 = requestRepository.save(request);
        return request1;
    }

    //To edit the request details
    public PortingRequest updateRequest(PortingRequest request,int requestId) throws RequestNotFoundException{
        PortingRequest request1;
        if(requestRepository.existsByPortingRequestId(requestId) ){
            PortingRequest portingRequest1 = requestRepository.findByPortingRequestId(requestId).get();
            portingRequest1.setFromApproval(request.getFromApproval());
            portingRequest1.setInsuredName(request.getInsuredName());
            portingRequest1.setAddOns(request.getAddOns());
            portingRequest1.setCumulativeBonus(request.getCumulativeBonus());
            portingRequest1.setCreateDate(request.getCreateDate());
            portingRequest1.setDateOfBirth(request.getDateOfBirth());
            portingRequest1.setExclusionPeriod(request.isExclusionPeriod());
            portingRequest1.setInsuredAddress(request.getInsuredAddress());
            portingRequest1.setInsurerProduct(request.getInsurerProduct());
            portingRequest1.setNewCumulativeBonus(request.getNewCumulativeBonus());
            portingRequest1.setNewSumInsured(request.getNewSumInsured());
            portingRequest1.setPolicyNumber(request.getPolicyNumber());
            portingRequest1.setPortingRequestId(request.getPortingRequestId());
            portingRequest1.setSumInsured(request.getSumInsured());
            portingRequest1.setReasonForPortability(request.getReasonForPortability());

            requestRepository.deleteByPortingRequestId(requestId);
            request1 = requestRepository.save(portingRequest1);
            return request1;
        }
        else
            throw new RequestNotFoundException();
    }

    //To delete a request
    public PortingRequest deleteRequest(int requestId) throws RequestNotFoundException{
        Optional<PortingRequest> request1 = requestRepository.findByPortingRequestId(requestId);
        if(requestRepository.existsByPortingRequestId(requestId)){
            requestRepository.deleteByPortingRequestId(requestId);
        }
        else
            throw new RequestNotFoundException();
        return request1.get();
    }

    //To display requests
    public List<PortingRequest> getRequests(String insuredName) throws RequestNotFoundException {
        if(requestRepository.existsByInsuredName(insuredName)) {

            List<PortingRequest> request1 = requestRepository.findByInsuredName(insuredName);
            return request1;
        }
        else
            throw new RequestNotFoundException();
    }

    //To get incoming porting requests
    public List<PortingRequest> getIncomingPortingRequest(String newInsurerName) {
        List<PortingRequest>portingRequest1 = requestRepository.findByNewInsurerName(newInsurerName).get();
        return portingRequest1;
    }

    //To get outgoing requests
    public List<PortingRequest> getOutgoingPortingRequest(String insurerName) {
        List<PortingRequest>portingRequest1 = requestRepository.findByInsurerName(insurerName).get();
        return portingRequest1;
    }

    //To accept outgoing requests
    public PortingRequest acceptOutgoingPortingRequest(PortingRequest portingRequest) {
        PortingRequest portingRequest1 = requestRepository.findByInsuredNameAndCreateDate(portingRequest.getInsuredName(),portingRequest.getCreateDate()).get();
        return portingRequest1;
    }

    //To accept incoming requests
    public PortingRequest acceptIncomingPortingRequest(PortingRequest portingRequest) {
        PortingRequest portingRequest1 = requestRepository.findByInsuredNameAndCreateDate(portingRequest.getInsuredName(),portingRequest.getCreateDate()).get();
        return portingRequest1;
    }

    //To delete a request
    public void deletePortingRequest(PortingRequest portingRequest) {
        requestRepository.deleteByInsuredNameAndCreateDate(portingRequest.getInsuredName(),portingRequest.getCreateDate());
    }

    //To reject incoming request
    public PortingRequest rejectIncomingPortingRequest(PortingRequest portingRequest) {
        PortingRequest portingRequest1 = requestRepository.findByInsuredNameAndCreateDate(portingRequest.getInsuredName(),portingRequest.getCreateDate()).get();
        return portingRequest1;
    }
}