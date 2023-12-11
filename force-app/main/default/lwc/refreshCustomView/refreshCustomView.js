import { LightningElement, api } from 'lwc';
import getAccountRating from '@salesforce/apex/refreshController.getAccountRating'
import { registerRefreshHandler, unregisterRefreshHandler } from 'lightning/refresh'
export default class RefreshCustomView extends LightningElement {
    @api recordId
    ratingValue
    refreshHandlerId
    connectedCallback(){
        this.refreshHandlerId = registerRefreshHandler(this, this.refreshHandler) //(contextElement, providerMethod)
        this.fetchRating()
    }
    disconnectedCallback(){
        unregisterRefreshHandler(this.refreshHandlerId)
    }
    refreshHandler(){
        console.log("Something has changed!!")
        return new Promise(resolve=>{
            this.fetchRating()
            resolve(true)
        })
    }
    fetchRating(){
        getAccountRating({"accountId": this.recordId}).then(response=>{
            console.log(response)
            this.ratingValue = response[0].Rating
        }).catch(error=>{
            console.error(error)
        })
    }
}