import { LightningElement } from 'lwc';
import ASSET_FILE from '@salesforce/contentAssetUrl/important_questions_200docx';
export default class ContentAssetFiles extends LightningElement {
    file=ASSET_FILE;
}