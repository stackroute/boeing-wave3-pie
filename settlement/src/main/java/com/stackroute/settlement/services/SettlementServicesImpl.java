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
    public PendingTasks appendTask(int pendingTasksId, Task task) {
        PendingTasks pendingTasks = settlementRepository.findByPendingTasksId(pendingTasksId);
        settlementRepository.deleteById(pendingTasksId);
        List<Task> currentListOfTasks = pendingTasks.getTaskList();
        currentListOfTasks.add(task);
        pendingTasks.setTaskList(currentListOfTasks);
        settlementRepository.save(pendingTasks);
        return pendingTasks;
    }

    @Override
    public PendingTasks modifyTask(int pendingTasksId, Task oldTask, Task newTask) {
        PendingTasks pendingTasks = settlementRepository.findByPendingTasksId(pendingTasksId);
        settlementRepository.deleteById(pendingTasksId);
        List<Task> currentListOfTasks = pendingTasks.getTaskList();
        for(Task task : currentListOfTasks) {
            if(task.equals(oldTask)) {
                task = newTask;
                break;
            }
        }
        pendingTasks.setTaskList(currentListOfTasks);
        settlementRepository.save(pendingTasks);
        return pendingTasks;
    }

    @Override
    public PendingTasks removeTask(int pendingTasksId, Task taskOldId) {
        return null;
    }

    @Override
    public PendingTasks getAllPendingTasksForInsured(String insurerName, String insuredName) {
        PendingTasks allPendingTasksForInsured = settlementRepository.findAllByInsurerNameAndInsuredName(insurerName, insuredName);
        return allPendingTasksForInsured;
    }

    @Override
    public PendingTasks putPendingTasks(PendingTasks pendingTasks) {
        settlementRepository.save(pendingTasks);
        return pendingTasks;
    }
}
