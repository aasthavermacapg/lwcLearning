import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate;
    endDate;
    error;
    dateHandler(event){
        const {name, value} = event.target;
        this[name] = value;
    }
    submitHandler(){
        if(this.validateDate(this.startDate, this.endDate)){
            console.log('Date is valid!');
        }
        else{
            this.error = 'Start date can not be greater than end date';
        }
    }
    validateDate(startDate, endDate){
        return new Date(startDate).getTime() <= new Date(endDate).getTime()
    }
}