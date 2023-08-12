import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToWebPage extends NavigationMixin(LightningElement) {
    navigateToWebpage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://github.com/aasthavermacapg'
            }
        })
    }
}