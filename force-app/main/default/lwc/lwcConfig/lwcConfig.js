import { LightningElement, api } from 'lwc';

export default class LwcConfig extends LightningElement {
    @api heading;
    @api recordId;
    @api age;
    @api levels;
}