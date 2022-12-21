import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';

export default class MyLWC extends LightningElement {
  handleSubmit(event) {
    event.preventDefault();

    const fields = event.detail.fields;
    const recordInput = { fields };

    updateRecord(recordInput)
      .then(() => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Success',
            message: 'Record updated',
            variant: 'success'
          })
        );
      })
      .catch(error => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Error updating record',
           
