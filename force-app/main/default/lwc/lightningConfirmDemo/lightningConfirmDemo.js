import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';
export default class LightningConfirmDemo extends LightningElement {
    async confirmHandler(){
        const result = await LightningConfirm.open({
            message : "Would you like to refresh the page",
            label : "Are you sure?",
            theme : 'success' //success-green info-grey error-red warning-orange
            // variant : 'headerless' -hides header
        })
        console.log("result", result);
        //on click of ok, result will be true or else, false
        if(result){
            location.reload();
        }
    }
}