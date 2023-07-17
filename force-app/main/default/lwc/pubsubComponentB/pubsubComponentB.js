import { LightningElement } from 'lwc';
import pubsub from 'c/pubSub';
export default class PubsubComponentB extends LightningElement {
    message;
    connectedCallback(){
        this.callSubscriber();
    }
    callSubscriber(){
        pubsub.subscribe('componentA',(message)=>{
            this.message=message;
        });
    }
}