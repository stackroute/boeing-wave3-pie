package com.stackroute.settlement.services;

import com.stackroute.settlement.domain.PendingTasks;
import com.stackroute.settlement.domain.Tasks;
import com.stackroute.settlement.repository.SettlementRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class SettlementServicesImpl implements SettlementServices {
    private SettlementRepository settlementRepository;
    @Autowired
    public SettlementServicesImpl(SettlementRepository settlementRepository) {this.settlementRepository = settlementRepository;}
    @Override
    public List<PendingTasks> getAllPendingTasksForInsurer(Long insurerId) {
        List<PendingTasks> pendingTasksList = settlementRepository.findAll();
        List<PendingTasks> pendingTasksList = settlementRepository.
        return pendingTasksList;
    }

    @Override
    public PendingTasks addTask(int pendingTasksId, Tasks task) {
        return null;
    }

    @Override
    public PendingTasks modifyTask(int pendingTasksId, Tasks taskOldId, Tasks taskNewId) {
        return null;
    }

    @Override
    public PendingTasks removeTask(int pendingTasksId, Tasks taskOldId) {
        return null;
    }
}
