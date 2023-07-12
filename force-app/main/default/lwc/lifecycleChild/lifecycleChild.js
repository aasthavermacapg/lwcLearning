import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {
    constructor(){
        super();
        console.log('Child Constructor called');
    }
    connectedCallback(){
        console.log('Child Connected Callback called');
        throw new Error('Loading of child component failed');
    }
    renderedCallback(){
        console.log('Child Rendered Callback called');
    }
    disconnectedCallback(){
        alert('Child Disconnected Callback called');
    }
}