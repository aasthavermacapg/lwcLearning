import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';
export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false;
    openedCards = [];
    moves = 0;
    matchedCards = [];
    totalTime='00:00';
    timerRef;
    showCongratulations = false;
    cards = [
        {id:1, listClass:"card", type:"plane", icon:'fa fa-plane'},
        {id:2, listClass:"card", type:"umbrella", icon:'fa fa-solid fa-umbrella'},
        {id:3, listClass:"card", type:"diamond", icon:'fa fa-diamond'},
        {id:4, listClass:"card", type:"train", icon:'fa fa-train'},
        {id:5, listClass:"card", type:"anchor", icon:'fa fa-solid fa-anchor'},
        {id:6, listClass:"card", type:"bolt", icon:'fa fa-solid fa-bolt'},
        {id:7, listClass:"card", type:"thumbs", icon:' fa fa-thumbs-up'},
        {id:8, listClass:"card", type:"leaf", icon:'fa fa-solid fa-leaf'},
        {id:9, listClass:"card", type:"leaf", icon:'fa fa-solid fa-leaf'},
        {id:10, listClass:"card", type:"train", icon:'fa fa-train'},
        {id:11, listClass:"card", type:"diamond", icon:'fa fa-diamond'},
        {id:12, listClass:"card", type:"thumbs", icon:'fa fa-thumbs-up'},
        {id:13, listClass:"card", type:"plane",  icon:'fa fa-plane'},
        {id:14, listClass:"card", type:"umbrella", icon:'fa fa-solid fa-umbrella'},
        {id:15, listClass:"card", type:"anchor", icon:'fa fa-solid fa-anchor'},
        {id:16, listClass:"card", type:"bolt", icon:'fa fa-solid fa-bolt'}
    ]

    get gameRating(){
        let stars = this.moves <12 ? [1,2,3] : this.moves>=12 ? [1,2] :[1];
        return this.matchedCards.length === 16 ? stars : [];
    }

    renderedCallback(){
        if(this.isLibLoaded){
            return;
        }else{
            loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log("Loaded successfully");
            }).catch(error=>{
                console.error(error);
            });
            this.isLibLoaded=true;
        }
    }

    displayCard(event){
        let currentCard = event.target;
        currentCard.classList.add("open","show","disabled");
        this.openedCards = this.openedCards.concat(event.target);
        const len=this.openedCards.length;
        if(len === 2){
            this.moves = this.moves+1;
            if(this.moves === 1){
                this.timer();
            }
            if(this.openedCards[0].type === this.openedCards[1].type){
                this.matchedCards = this.matchedCards.concat(this.openedCards[0],this.openedCards[1]);
                this.matched();
            }else{
                this.unmatched();
            }
        }
    }

    matched(){
        this.openedCards[0].classList.add("match","disabled");
        this.openedCards[1].classList.add("match","disabled");
        this.openedCards[0].classList.add("show","open");
        this.openedCards[1].classList.add("show","open");
        this.openedCards = [];
        if(this.matchedCards.length === 16){
            window.clearInterval(this.timerRef);
            this.showCongratulations = true;
        }
    }

    unmatched(){
        this.openedCards[0].classList.add("unmatched");
        this.openedCards[1].classList.add("unmatched");
        this.action('DISABLE');

        setTimeout(()=>{
            this.openedCards[0].classList.remove("show","open","unmatched");
            this.openedCards[1].classList.remove("show","open","unmatched");
            this.action('ENABLE');
            this.openedCards=[];
        },1100);
    }

    action(action){
        let cards=this.template.querySelectorAll('.card');
        Array.from(cards).forEach(item=>{
            if(action === 'ENABLE'){
                let isMatch = item.classList.contains('match');
                if(!isMatch){
                    item.classList.remove('disabled')
                }
            }
            if(action === 'DISABLE'){
                item.classList.add('disabled');
            }
        })
    }

    timer(){
        let startTime = new Date();
        this.timerRef = setInterval(()=>{
            let diff = new Date().getTime() - startTime.getTime();
            let d = Math.floor(diff / 1000);
            const m = Math.floor(d % 3600 / 60);
            const s = Math.floor(d % 3600 % 60);
            const mDisplay = m > 0 ? m + (m === 1 ? "minute, " : "minutes, ") : "";
            const sDisplay = s > 0 ? s + (s === 1 ? "second" : "seconds") : "";
            this.totalTime = mDisplay + sDisplay;
        },1000);
    }

    resetHandler(){
        this.showCongratulations = false;
        this.openedCards = [];
        this.moves = 0;
        this.matchedCards = [];
        this.totalTime = '00:00';
        window.clearInterval(this.timerRef);
        let elem = this.template.querySelectorAll('.card');
        Array.from(elem).forEach(item=>{
            item.classList.remove("show","open","match","disabled");
        });
        // shuffling cards
        let array = [...this.cards];
        let counter = array.length;
        while(counter > 0){
            let index = Math.floor(Math.random()*counter);
            counter--;

            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        this.cards = [...array];
    }
}