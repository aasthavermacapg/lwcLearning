import { LightningElement, api} from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;
    callAura(){
        const event= new CustomEvent('sendmsg', {
            detail:{
                "msg":"This message is passed from LWC"
            }
        });
        this.dispatchEvent(event);
    }
}