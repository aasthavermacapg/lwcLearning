import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    viewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030w00000xvgfAAAQ',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    editMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030w00000xvgfAAAQ',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }
}