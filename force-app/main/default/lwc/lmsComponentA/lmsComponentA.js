import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {
    inputMessage;
    @wire(MessageContext)
    context;
    inputHandler(event){
        this.inputMessage=event.target.value;
    }
    publishMessage(){
        const message={
            lmsData:{
                value:this.inputMessage
            }
        }
        publish(this.context,SAMPLEMC,message);
    }
}