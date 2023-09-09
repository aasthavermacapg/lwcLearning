import { LightningElement,  wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class ApexWireMethod extends LightningElement {
    accountList;

    @wire(getAccountList)
    accounts; //as property

    //to display apex wire to function, let's say whenever we have type as customer - channel we want to display 'channel' and whenever we have customer - direct we want to display 'direct
    //so we need to transform the data

    @wire(getAccountList)
    accountHandler({data,error}){
        if(data){
            this.accountList = data.map(item=>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel': item.Type === 'Customer - Direct' ? 'Direct' : '---';
                return {...item, newType};
            })
        }
        if(error){
            console.error(error);
        }
    }
}