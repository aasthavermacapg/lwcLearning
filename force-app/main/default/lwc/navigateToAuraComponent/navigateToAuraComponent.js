import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {
    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__navigationAuraTarget'
            },
            state:{
                "c__id":"241232q4352"
            }
        })
    }
}