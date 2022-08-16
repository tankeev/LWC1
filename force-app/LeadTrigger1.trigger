trigger LeadTrigger1 on Lead (before insert) {
    for(Lead w : Trigger.new){
        w.LeadSource = 'Other';
    }
}