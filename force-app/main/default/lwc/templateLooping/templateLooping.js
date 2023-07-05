import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
    cars=["maruti","ford","honda","kia","hyundai"];
    ceos=[
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id:2,
            company:"Apple Inc",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Meta",
            name:"Mark Zuckerberg"
        },
        {
            id:4,
            company:"Amazon",
            name:"Jeff Bezos"
        }
    ];

}