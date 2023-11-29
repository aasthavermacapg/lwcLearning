import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import input from '@salesforce/resourceUrl/input'
export default class InputIcon extends LightningElement {
    showpassword = false;

    get passwordIcon(){
        return this.showpassword ? 'utility:hide' :'utility:preview';
    }

    get passwordType(){
        return this.showpassword ? 'text' : 'password';
    }

    connectedCallback(){
        loadStyle(this, input).then(()=>{
            console.log("Styles loaded successfully")
        }).catch(error=>{
            console.log(error)
        })
    }

    passwordHandler(){
        this.showpassword = !this.showpassword;
    }

}