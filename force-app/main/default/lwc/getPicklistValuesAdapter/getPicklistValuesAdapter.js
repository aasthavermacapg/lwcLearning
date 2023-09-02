import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD  from '@salesforce/schema/Account.Type'
export default class GetPicklistValuesAdapter extends LightningElement {
    
    selectedIndustry = '';
    industryOptions = [];
    selectedType = '';
    typeOptions = [];

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data, error}){
        if(data){
            console.log(data)
            
            this.industryOptions = [...this.generatePicklistValues(data)]
        }
        if(error){
            console.error(error)
        }
    }
    
    generatePicklistValues(data){
        //we are transforming data using map since we need to generate something
        return data.values.map(item=>({label: item.label, value: item.value }));
        //it will generate an array of object in the same format of label and value we mentioned above and return
    }

   
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    // second picklist
    @wire(getPicklistValues, { recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:TYPE_FIELD})
    typePicklist({data, error}){
        if(data){
            console.log(data)
            
            this.typeOptions = [...this.generatePicklistValues(data)]
        }
        if(error){
            console.error(error)
        }
    }
    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }
}