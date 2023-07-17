import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    // @api details;
    userDetail;
    @api
    get details(){
        return this.userDetail;
    }
    set details(data){
        let newAge=data.age*2;
        this.userDetail={...data,age:newAge,"location":"California, US"};
    }

}