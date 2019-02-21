package com.stackroute.settlement.controller;

import com.stackroute.settlement.domain.PendingTasks;
import com.stackroute.settlement.services.SettlementServices;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("pendingtasks/{insurerId}")
    public ResponseEntity<List<PendingTasks>> getAllPendingTasksForInsurer(@RequestParam Long insurerId) {
        return (ResponseEntity<List<PendingTasks>>) settlementServices.getAllPendingTasksForInsurer(insurerId);
    }

}
