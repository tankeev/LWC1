trigger LeadTrigger1 on Lead (before insert, before update,after insert) {
    //for(Lead w : Trigger.new){
    //    w.LeadSource = 'Other';
    //}

    /*for(Lead w: Trigger.new){
        if (w.LeadSource =='') {
            w.LeadSource='Other';
            
        }
    }

    for(Lead w: Trigger.new){
        if (String.isBlank(w.Industry)) {
            w.Industry='Banking';
            
        }
    }

    if(Trigger.isBefore){
        for(Lead w: Trigger.new){
            if(String.isBlank(w.LeadSource)){
                w.LeadSource = 'Other';
            }
        }
    }
    else if(Trigger.isAfter){
        List<Task> newTaskList = new List<Task>();

        for (Lead w : Trigger.new) {
            Task leadTask = new Task(Subject='Follow up task friom lead', WhoId=w.Id);
            newTaskList.add(leadTask);
        }
        insert newTaskList;
    }*/


    //1) insdustry to education ->> before insert if industry is empty
    //2) before update if industry empty industry to banking
    
    if(Trigger.isBefore){
        if (Trigger.isInsert) {
            
            for(Lead w: Trigger.new){
                if(String.isBlank(w.Industry)){
                    w.Industry='Education';
                }
            }
        }

        if(Trigger.isUpdate){

            for(Lead w: Trigger.new){
                if(String.isBlank(w.Industry)){
                    w.Industry = 'Banking';
                }
            }
        }
    }
    

}