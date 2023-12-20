import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
const columns = [
    {label : 'First Name', fieldName : 'FirstName', editable : true },
    {label : 'Last Name', fieldName : 'LastName', editable : true },
    {label : 'Email', fieldName : 'Email', type : 'email' }
]
export default class RefreshLWC extends LightningElement {
    columns = columns;
    @wire(getContactList)
    contact;
    draftValues = [];

    handleSave(event){
        console.log(event.detail.draftValues);
        const recordInputs = event.detail.draftValues.slice().map(draft=>{ //slice will divide up the draft values and the we'll run a loop on that data and it'll return array of objects of fields
            const fields = Object.assign({}, draft) //format
            return {fields}
        })
        console.log("recordInputs : ", recordInputs)

        const promises = recordInputs.map(recordInput => updateRecord(recordInput)) //it'll return array of promises since it's an asynchronous approach
        Promise.all(promises).then(result=>{
            this.showToastMsg('Success', 'Contact Updated')
            this.draftValues = []
            return refreshApex(this.contact) //the first variable where our data was stored
        }).catch(error=>{
            this.showToastMsg('Error updating record', error.body.message, error)
        })
    }
    showToastMsg(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title : title,
                message : message,
                variant : variant || 'success'
            })
        )
    }
}