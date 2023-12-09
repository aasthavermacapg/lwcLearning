import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';
import LightningAlert from 'lightning/alert';
export default class LightningPromptDemo extends LightningElement {
    // async promptHandler(){
    //     const result = await LightningPrompt.open({
    //         message : "Please enter your age"
    //     })
    //     console.log(result);
    // }
        promptHandler(){
            LightningPrompt.open({
                message : "Please enter your age",
                label : "Check for voting eligibility",
                theme : "success",
                defaultValue : 18
            }).then(result=>{
                console.log(result);
                if(result && Number(result)>18){
                    console.log("Eligible")
                    this.alertHandler("Eligible", "Success!!", "success")
                }
                else{
                    console.log("Not Eligible")
                    this.alertHandler("Not Eligible", "Error!!", "error")
                }
            })
        }
        alertHandler(message, label, theme){
            LightningAlert.open({
                message : message,
                label : label,
                theme : theme
            })
        }

}