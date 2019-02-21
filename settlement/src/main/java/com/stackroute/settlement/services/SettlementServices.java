package com.stackroute.settlement.services;

import com.stackroute.settlement.domain.PendingTasks;
import com.stackroute.settlement.domain.Task;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SettlementServices {
    public List<PendingTasks> getAllPendingTasksForInsurer(String insurerName);
    public PendingTasks appendTask(int pendingTasksId, Task task);
    public PendingTasks modifyTask(int pendingTasksId, Task taskOldId, Task taskNewId);
    public PendingTasks removeTask(int pendingTasksId, Task taskOldId);
    public PendingTasks getAllPendingTasksForInsured(String insurerName, String insuredName);
    public PendingTasks putPendingTasks(PendingTasks pendingTasks);
}
