import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesByRecordTypeAdapter extends LightningElement {
    ratingOptions
    industryOptions
    ratingSelected='';
    industrySelected='';
    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValuesByRecordType, {objectApiName : ACCOUNT_OBJECT, recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    picklistHandler({data,error}){
        if(data){
            console.log(data);
            this.ratingOptions=this.picklistGeneator(data.picklistFieldValues.Rating);
            this.industryOptions=this.picklistGeneator(data.picklistFieldValues.Industry);
        }
        if(error){
            console.error(error);
        }
    }
    picklistGeneator(data){
        return data.values.map(item=>({"label" : item.label , "value" : item.value}));
    }
    handleChange(event){
        const {name,value} = event.target;//short hand notation
        console.log(name + ' => ' + value);
        if(name === 'industry'){
            this.industrySelected = value;
        }
        if(name === 'rating'){
            this.ratingSelected = value;
        }
    }

}