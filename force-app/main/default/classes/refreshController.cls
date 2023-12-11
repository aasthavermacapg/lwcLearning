public with sharing class refreshController {
    @AuraEnabled
    public static List<Account> getAccountRating(Id accountId) {
        return [SELECT Id, Rating from Account WHERE Id = :accountId]; //returns 1 account details
    }
}