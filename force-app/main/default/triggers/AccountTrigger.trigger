trigger AccountTrigger on Account (before insert) {
    //While a user creates an account, if the user provides a billing address but doesn't
    //provide a shipping address, creating a Trigger makes the shipping address the same as
    //the billing address

    if(Trigger.isBefore){
        if (Trigger.isInsert) {
            
            for(Account acc: Trigger.new){
                if(!String.isBlank(acc.BillingAddress)){
                    if(String.isBlank(acc.ShippingAddress)){
                        acc.ShippingAddress=acc.BillingAddress;
                    }
                }
            }
        }          

}
}