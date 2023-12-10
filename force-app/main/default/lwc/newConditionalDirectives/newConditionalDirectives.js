import { LightningElement } from 'lwc';

export default class NewConditionalDirectives extends LightningElement {
    showText = false;
    get getLabel(){
        return this.showText ? 'Hide Text' : 'Show Text';
    }
    showTextHandler(){
        this.showText = !this.showText;
    }
    
    // Getter demo if:true, if:false
    country = 'India';
    get isCountryIndia(){
        console.log("isCountryIndia getter called")
        return this.country === 'India';
    }
    changeHandler(event){
        this.country = event.target.value;
    }
    // Getter demo lwc:if lwc:elseif lwc:else
    newCountry = 'Austrailia';
    // isCountryCanada = 'Cananda';
    get isCountryAustrailia(){
        console.log("isCountryAustrailia getter called")
        return this.newCountry === 'Austrailia';
    }
    get isCountryCanada(){
        console.log("isCountryCananda getter called")
        return this.newCountry === 'Canada';
    }
    changeHandler1(event){
        this.newCountry = event.target.value;
    }
}