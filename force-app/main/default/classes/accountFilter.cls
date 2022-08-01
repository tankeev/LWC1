public with sharing class accountFilter {
    public static List<Account> getAccount(String filter){

        String keyName = '%'+filter+'%';
        List<Account> accountList = [SELECT Id,Name,Phone FROM Account WHERE Name LIKE:keyName]; 
        return accountList;
    }
}

