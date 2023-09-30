import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class FilteringAndSorting extends LightningElement {
    headings = ["Id", "Name", "Title" , "Email"];
    fullTableData = [];
    filteredData = [];
    timer;
    filterBy = "Name";
    sortedBy = "Name";
    sortDirection = "asc";
    @wire(getContactList)
    contactHandler({data,error}){
        if(data){
            console.log(data);
            this.fullTableData = data;
            this.filteredData = [...this.sortBy(data)]; //for sorting to happen onload according to default 'name' property 
        }
        if(error){
            console.error(error);
        }
    }

    get FilterByOptions(){
        return [
            {label:'All', value:'All'},
            {label:'Id', value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ]
    }
    get sortByOptions(){
        return [
            {label:'Id', value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ]
    }

    filterByHandler(event){
        this.filterBy = event.target.value;
    }

    filterHandler(event){
        const {value} =event.target;
        console.log(value);
        window.clearTimeout(this.timer);
        if(value){
            this.timer = window.setTimeout(()=>{
                this.filteredData = this.fullTableData.filter(eachObj=>{
                    if(this.filterBy === 'All'){
                        //below is the logic where each and ever property of object will get filtered
                        //Object.keys(eachObj) = ["Id", "Name", "Title", "Email"]
                        return Object.keys(eachObj).some(key=>{
                            return eachObj[key].toLowerCase().includes(value)
                        })
                    }
                    else{
                        //below is the logic where only selected properties of object will get filtered
                        const val = eachObj[this.filterBy] ? eachObj[this.filterBy] : '';
                        return val.toLowerCase().includes(value)
                    }
                })
            }, 500);
        }
        else{
            this.filteredData = [...this.fullTableData];
        }
    }
    sortByHandler(event){
        this.sortedBy = event.target.value;
        this.filteredData = [...this.sortBy(this.filteredData)];
    }
    sortBy(data){
        const cloneData = [...data];
        cloneData.sort((a,b)=>{ //inbuilt js function takes a callback method
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0;
            }
            return this.sortDirection === 'desc' ? a[this.sortedBy] > b[this.sortedBy] ? -1 : 1 :a[this.sortedBy] < b[this.sortedBy] ? -1 : 1 ;
        })
        return cloneData;
    }
}