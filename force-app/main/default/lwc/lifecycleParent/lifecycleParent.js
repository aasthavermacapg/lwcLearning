import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {
    isChildVisible=false;
    constructor(){
        super();
        console.log('Parent Constructor called');
    }
    connectedCallback(){
        console.log('Parent Connected Callback called');
    }
    renderedCallback(){
        console.log('Parent Rendered Callback called');
    }
    handleClick(){
        this.isChildVisible=!this.isChildVisible;
    }
    disconnectedCallback(){
        console.log('Parent Disconnected Callback called');
    }
    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
}