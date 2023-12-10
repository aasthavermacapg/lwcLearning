import { LightningElement } from 'lwc';

export default class Refs extends LightningElement {
    submitHandler(){
        console.log("this.refs.nameRef", this.refs.nameRef); //let's see what this is returning
        const nameVal = this.refs.nameRef.value;
        const ageVal = this.refs.ageRef.value;
        // If the template contains duplicate lwc:ref directives, this.refs references the last directive
        console.log("nameVal", nameVal); //the value entered
        console.log("ageVal", ageVal); //the value entered

        this.refs.responseRef.innerHTML = `<p>Submitted name is ${nameVal} and age is ${ageVal}`;
    }
}