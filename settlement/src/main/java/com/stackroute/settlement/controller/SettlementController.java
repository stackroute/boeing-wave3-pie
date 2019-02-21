package com.stackroute.settlement.controller;

import com.stackroute.settlement.domain.PendingTasks;
import com.stackroute.settlement.services.SettlementServices;
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
    @PostMapping
    public ResponseEntity<PendingTasks> getAllPendingTasksForAInsured(@PathVariable String insurerName, @PathVariable String insuredName) {
        return new ResponseEntity<PendingTasks>(settlementServices.getAllPendingTasksForInsured(insurerName, insuredName), HttpStatus.OK);
    }
    @PostMapping("pendingtasks/{insurerName}/{pendingTasksId}")
    public ResponseEntity<PendingTasks> putAPendingTask(@PathVariable int insurerId, @PathVariable String pendingTasksId) {
        return null;
    }
}
