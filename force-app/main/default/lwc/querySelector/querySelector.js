import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    userNames=["John","Smith","Nik","Mike"];
    fetchDataHandler(){
        const elem=this.template.querySelector('h1');
        elem.style.border="1px solid red";
        console.log(elem.innerText);
        const userElements=this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText);
            item.setAttribute("title",item.innerText);
        })

        const childElem=this.template.querySelector('.child');
        childElem.innerHTML='<p>Hey I am a child component</p>';
    }
}