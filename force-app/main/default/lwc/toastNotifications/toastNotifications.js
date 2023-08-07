import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastNotifications extends LightningElement {
    showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    'url':'https://www.salesforce.com',
                    'label':'Click here'
                }
            ],
            mode:'sticky'
        });
        this.dispatchEvent(evt);
    }
    toastHandlerSuccess(){
        this.showToast("Success","{0} This is the success toast notification!! {1}","success");
    }

    toastHandlerError(){
        this.showToast("Error","This is the error toast notification!!","error");
    }

    toastHandlerInfo(){
        this.showToast("Info","This is the info toast notification!!","info");
    }

    toastHandlerWarning(){
        this.showToast("Warning","This is the warning toast notification!!","warning");
    }
}