public with sharing class AccountContact {
    @AuraEnabled(cacheable=true)
    public static List<Account> allAccountsWithContact(){
        return [SELECT Id, Name, Phone, Website, (SELECT Id, Name, Email FROM Contacts) FROM Account LIMIT 5];
    }
}