import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';// import{adapterId} from 'lightning/ui*api'
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields = [NAME_FIELD, EMAIL_FIELD];
export default class WireServiceAndFetchUserDetails extends LightningElement {
    userId = Id;//0050w000005XFKmAAO, we can get id like this but we cant fetch other details
    userDetails;

    // @wire(getRecord, {recordId: '0050w000005XFKmAAO', fields: ['User.Name', 'User.Email']})
    @wire(getRecord, {recordId: '$userId', fields})// here fields is equipvalent to fields = fields because js says if the key and value pair is same we can use just the name.
    userDataHandler({data, error}){
        //console.log(response);
        if(data){
            this.userDetails= data.fields;
        }
        if(error){
            console.error(error);
        }
    }
    //@wire(adapterId)(adapterID, {adapterConfig})
    //propertyOrFunction
    @wire(getRecord, {recordId: '$userId', fields})
    userDataProperty
}