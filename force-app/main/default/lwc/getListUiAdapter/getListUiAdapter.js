import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
export default class GetListUiAdapter extends LightningElement {
    contacts = [];
    pageToken = null; //initially it's null but since we're passing this as reactive property in wire, so whenever the pageTaken will be available it'll recall the wire adapter whenever this value gets changed
    nextPageToken = null; //same will happen to this as well
    previousPagetoken = null;
    @wire( getListUi, { objectApiName : CONTACT_OBJECT, listViewApiName : 'AllContacts', pageSize : 10, sortBy: TITLE_FIELD, pageToken : '$pageToken' })
    listViewHandler({data,error}){
        if(data){
            console.log(data);
            this.contacts = data.records.records; 
            this.nextPageToken = data.records.nextPageToken;
            this.previousPagetoken = data.records.previousPagetoken;
        }
        if(error){
            console.error(error);
        }
    }
    handlePrevious(){
        this.pageToken = this.previousPagetoken;
    }
    handleNext(){
        this.pageToken = this.nextPageToken;
    }
}