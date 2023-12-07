import { LightningElement, wire } from 'lwc';
import { getRelatedListCount } from 'lightning/uiRelatedListApi';
export default class GetRelatedListsCount extends LightningElement {
    relatedData;
    @wire(getRelatedListCount, {
        parentRecordId : '001H3000002IaXrIAK', //The ID of the parent record that you want to get related list for
        relatedListId : 'Contacts' //The API name of a related list 
    })listCountHandler({data, error}){
        if(data){
            console.log(data);
            this.relatedData = data;
        }
        if(error){
            console.error(error);
        }
    }
}