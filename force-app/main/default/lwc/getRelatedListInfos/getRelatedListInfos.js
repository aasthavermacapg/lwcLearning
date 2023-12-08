import { LightningElement , wire} from 'lwc';
import { getRelatedListInfo } from 'lightning/uiRelatedListApi';
export default class GetRelatedListInfos extends LightningElement {
    relatedListData;
    @wire(getRelatedListInfo , {
        parentObjectApiName : 'Account', //This is the API name of a parent object that you want to get the related list for
        relatedListId : 'Contacts' //API name of related list object
        // recordTypeId :  //optional
    })listInfoHandler({data, error}){
        if(data){
            console.log(JSON.stringify(data));
            this.relatedListData = data.displayColumns;
        }
        if(error){
            console.error(error);
        }
    }
}