import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';
export default class ApexImperativelyParams extends LightningElement {
    searchKey = '';
    accounts;
    timer;
    searchHandler(event){
        window.clearTimeout(this.timer);
        this.searchKey = event.target.value;
        this.timer = setTimeout(() => { //to give delay or else whenever user type any character it'll keep searching
            this.callApex();
        }, 1000);
    }
    callApex(){
        findAccounts({searchKey:this.searchKey}).then(result=>{
            this.accounts = result;
        }).catch(error=>{
            console.error(error);
        })
    }
}