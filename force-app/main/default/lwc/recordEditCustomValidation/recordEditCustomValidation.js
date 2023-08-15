import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditCustomValidation extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue = '';
    changeHandler(event){//added event here but this was not in the lecture because event is depreceated and this is the only way to use event
        this.inputValue = event.target.value;
    }
    submitHandler(event){
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;
        if(!value.includes('Austrailia')){
            inputCmp.setCustomValidity("The Account's Name must include 'Austrailia'");
        }else{
            inputCmp.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity();
    }
    successHandler(event){
        const toastEvent = new ShowToastEvent({
            title : "Account Created!",
            message : "Record Id is : "+ event.detail.id,
            variant : "success"
        })
        this.dispatchEvent(toastEvent);
    }
    errorHandler(event){
        const toastEvent = new ShowToastEvent({
            title : "Error occured creating Account",
            message : event.detail.message,
            variant : "error"
        })
        this.dispatchEvent(toastEvent)
    }
}