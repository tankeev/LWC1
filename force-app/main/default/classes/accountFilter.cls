public with sharing class accountFilter {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(String filter){

        String keyName = '%'+filter+'%';
        List<Account> accountList = [SELECT Id,Name,Phone FROM Account WHERE Name LIKE:keyName]; 
        return accountList;
    }
}

