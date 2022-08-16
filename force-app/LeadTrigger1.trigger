trigger LeadTrigger1 on Lead (before insert, before update) {
    //for(Lead w : Trigger.new){
    //    w.LeadSource = 'Other';
    //}

    /*for(Lead w: Trigger.new){
        if (w.LeadSource =='') {
            w.LeadSource='Other';
            
        }
    }*/

    for(Lead w: Trigger.new){
        if (String.isBlank(w.Industry)) {
            w.Industry='Banking';
            
        }
    }

}