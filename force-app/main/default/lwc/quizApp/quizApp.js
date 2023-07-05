import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions=[
        {
            id:1,
            question:"Which of the following is not a template loop?",
            answer:{
                a:"for:each loop",
                b:"iterator loop",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:2,
            question:"Which of the following file is invalid for lwc folder?",
            answer:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:3,
            question:"Which of the following is not a directive?",
            answer:{
                a:"for:each loop",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }

    ];
    selected={};
    correctAnswers=0;
    isSubmitted=false;
    changeHandler(event){
        console.log("name",event.target.name);
        console.log("value",event.target.value);

        const{name,value}=event.target;
        this.selected={...this.selected,[name]:value};

    }
    submitHandler(event){
        event.preventDefault();//to stop refreshing on click of submit 
        let correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer);
        this.correctAnswers=correct.length;
        this.isSubmitted=true;
        
    }
    resetHandler(){
        this.isSubmitted=false;
        this.selected={};
        this.correctAnswers=0;

    }
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length);
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
    }

}