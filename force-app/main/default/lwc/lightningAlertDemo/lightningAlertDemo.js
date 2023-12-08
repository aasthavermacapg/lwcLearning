import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
export default class LightningAlertDemo extends LightningElement {
    alertHandler(event){
        const {name} = event.target;
        // window.alert("hello") - earlier we're using this but this is going to be deprecated soon
        LightningAlert.open({
            message : 'This is the alert',
            label : `I am ${name} alert header`, 
            theme : name // success=green, warning=orange, error=red, info=grey
            // variant : "headerless" - hides the header
        }).then(result=>{
            let x = 2
            let y = 3
            this.add(x,y);
        })
    }
    add(a,b){
        console.log(a+b);
    }
}