package com.stackroute.settlement.services;

import com.stackroute.settlement.domain.PendingTasks;
import com.stackroute.settlement.domain.Tasks;

import java.util.List;

public interface SettlementServices {
    public List<PendingTasks> getAllPendingTasksForInsurer(Long insurerId);
    public PendingTasks addTask(int pendingTasksId, Tasks task);
    public PendingTasks modifyTask(int pendingTasksId, Tasks taskOldId, Tasks taskNewId);
    public PendingTasks removeTask(int pendingTasksId, Tasks taskOldId);

}
