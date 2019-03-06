package com.stackroute.controller;


import com.stackroute.domain.PendingTasks;
import com.stackroute.domain.Task;
import com.stackroute.services.SettlementServices;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@Data
@CrossOrigin("*")
@RequestMapping("api/v1/")
public class SettlementController {
    private SettlementServices settlementServices;
    @Autowired
    public SettlementController(SettlementServices settlementServices) {this.settlementServices = settlementServices;}
    @GetMapping("pendingtasks/{insurerName}")
    public ResponseEntity<List<PendingTasks>> getAllPendingTasksForInsurer(@PathVariable String insurerName) {
//        return (ResponseEntity<List<PendingTasks>>) settlementServices.getAllPendingTasksForInsurer(insurerName);
        return new ResponseEntity<List<PendingTasks>>(settlementServices.getAllPendingTasksForInsurer(insurerName), HttpStatus.OK);
    }
    @GetMapping("pendingtasks/{insurerName}/{insuredName}")
    public ResponseEntity<PendingTasks> getAllPendingTasksForAInsured(@PathVariable String insurerName, @PathVariable String insuredName) {
        return new ResponseEntity<PendingTasks>(settlementServices.getAllPendingTasksForInsured(insurerName, insuredName), HttpStatus.OK);
    }
    @PostMapping("pendingtask")
    public ResponseEntity<PendingTasks> putAPendingTasks(@RequestBody PendingTasks pendingTasks) {
        return new ResponseEntity<PendingTasks>(settlementServices.putPendingTasks(pendingTasks), HttpStatus.OK);
    }
    @PutMapping("pendingtask/{pendingTasksId}")
    public ResponseEntity<PendingTasks> appendAPendingTask(@RequestBody Task task, @PathVariable int pendingTasksId) {
        return new ResponseEntity<PendingTasks>(settlementServices.appendTask(pendingTasksId, task), HttpStatus.OK);
    }
    @GetMapping("pendingtasks/portingRequestId={portingRequestsId}")
    public ResponseEntity<List<PendingTasks>> getPendingTasksByPortingRequestId(@PathVariable int portingRequestsId) {
        return new ResponseEntity<List<PendingTasks>>(settlementServices.getPendingTasksByPortingRequestId(portingRequestsId), HttpStatus.OK);
    }
}
