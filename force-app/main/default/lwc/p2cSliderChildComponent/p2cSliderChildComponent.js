import { LightningElement , api} from 'lwc';

export default class P2cSliderChildComponent extends LightningElement {
    val=20;
    changeHandler(event){
        this.val=event.target.value;
    }
    @api resetSlider(){
        this.val=0;
    }
}