import { LightningElement } from 'lwc';
import CAROUSAL_IMAGES from '@salesforce/resourceUrl/carousal';
export default class CustomCarousalWrapper extends LightningElement {
    slides=[
        {
            image:`${CAROUSAL_IMAGES}/carousel/photo1.jpg`,
            heading:'Caption 1',
            description:'Description One'
        },
        {
            image:`${CAROUSAL_IMAGES}/carousel/photo2.jpg`,
            heading:'Caption 2',
            description:'Description Two'
        },
        {
            image:`${CAROUSAL_IMAGES}/carousel/photo3.jpg`,
            heading:'Caption 3',
            description:'Description Three'
        }
    ]
}