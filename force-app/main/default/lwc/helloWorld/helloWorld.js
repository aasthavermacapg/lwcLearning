import { LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName="Aastha Verma";
    title="Developer";
    changehandler(event){
        this.title=event.target.value;
    }

    address={
        city:'Melbourne',
        pincode:'3009',
        country:'Austrailia'
    }
    changehandler1(event){
        this.address={...this.address, "pincode":event.target.value};
    }
    @track address1={
        city:'Melbourne',
        pincode:'3009',
        country:'Austrailia'
    }
    trackhandler(event){
        this.address1.city=event.target.value;
    }
    users=["John","Mike","Nik"];
    num1=20;
    num2=80;
    get firstuser(){
        return this.users[0];
    }
    get sumofnums(){
        return this.num1+this.num2;
    }
    get multiply(){
        return this.num1*this.num2;
    }
    
}