import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLwc.getAccounts';
export default class MapsInLwc extends LightningElement {
    mapMarkers=[];
    markersTitle="Account's Location";
    @wire(getAccounts)
    wireHandler({data, error}){
        if(data){
            console.log(data);
            this.formatResponse(data);
        }
        if(error){
            console.error(error);
        }
    }
    formatResponse(data){
        this.mapMarkers = data.map(item=>{
            return {
                location:{
                    Street : item.BillingStreet || '',
                    City : item.BillingCity || '',
                    PostalCode : item.BillingPostalCode || '',
                    State : item.BillingState || '',
                    Country : item.BillingCountry || ''
                },
                icon : 'utility.salesforce1',
                title : item.Name,
                value : item.Name,
                description : item.Description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value; //this will assign the first value to the selected marker
    }
    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue;
    }
}