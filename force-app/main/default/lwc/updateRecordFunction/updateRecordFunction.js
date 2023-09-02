import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi'; //to get the records
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { updateRecord } from 'lightning/uiRecordApi';
const COLS = [
    {label : 'Id', fieldName : 'Id'},
    {label : 'Name', fieldName : 'Name'},
    {label : 'Title', fieldName : 'Title'},
    {label : 'Phone', fieldName : 'Phone', type : 'tel', editable : true},
    {label : 'Email', fieldName : 'Email', type : 'email', editable : true}
]
export default class UpdateRecordFunction extends LightningElement {
   contacts = [];
   columns = COLS;
   draftValues= []; 
    @wire(getListUi, {objectApiName : CONTACT_OBJECT, listViewApiName : 'AllContacts'})
    listViewHandler({data,error}){
        if(data){
            console.log(data);
            this.contacts = data.records.records.map(item=>{
                return {
                    "Id":this.getValue(item, 'Id'),
                    "Name":this.getValue(item, 'Name'),
                    "Title":this.getValue(item, 'Title'),
                    "Phone":this.getValue(item, 'Phone'),
                    "Email":this.getValue(item, 'Email')
                }
            })
        }
        if(error){
            console.error(error);
        }
    }

    getValue(data,field){
        return data.fields[field].value;
    }

    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues));
        const recordInputs = event.detail.draftValues.map(draft=>{
            const fields = {...draft}
            return {fields : fields}
        })
        const promises = recordInputs.map(recordInput=>updateRecord(recordInput)) //because update record updates only one record at a timw but we are updating multiple records in lightning data table, thats' why we are using map operation
        //first we are creating inputs and inputs are nothing but rows and it'll come in form of draftvalues, we need to pass it in the form of fields
        //so our each record input should be a object of fields
        //so based on the number of rows we updated, record inputs will run map
        Promise.all(promises).then(()=>{
            //Promise.all because there can we multiple promises 
            console.log("Contact updated Succesfully")
            this.draftValues = [] //for removing the yellow color selections
        }).catch(error=>{
            console.error('Error updating record : ', error)
        })
    }
}