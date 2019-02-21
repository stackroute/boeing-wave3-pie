package com.stackroute.settlement.services;

import com.stackroute.settlement.domain.PendingTasks;
import com.stackroute.settlement.domain.Task;
import com.stackroute.settlement.repository.SettlementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SettlementServicesImpl implements SettlementServices {
    private SettlementRepository settlementRepository;
    @Autowired
    public SettlementServicesImpl(SettlementRepository settlementRepository) {this.settlementRepository = settlementRepository;}
    @Override
    public List<PendingTasks> getAllPendingTasksForInsurer(String insurerName) {
        List<PendingTasks> allPendingTasks = settlementRepository.findAllByInsurerName(insurerName);
        return allPendingTasks;
    }
    @Override
    public PendingTasks addTask(int pendingTasksId, Task task) {
        return null;
    }

    @Override
    public PendingTasks modifyTask(int pendingTasksId, Task taskOldId, Task taskNewId) {
        return null;
    }

    @Override
    public PendingTasks removeTask(int pendingTasksId, Task taskOldId) {
        return null;
    }

    @Override
    public PendingTasks getAllPendingTasksForInsured(String insurerName, String insuredName) {
        PendingTasks allPendingTasksForInsured = settlementRepository.findAllByInsuredName();
        return allPendingTasksForInsured;
    }
}
