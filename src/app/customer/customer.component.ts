import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public custService: CustomerService) { }
  submitted: boolean;
  showSuccessMsg: boolean;
  formControls = this.custService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if (this.custService.form.valid){
      if(this.custService.form.get('$key').value == null){
        // insert
        this.custService.insertCustomer(this.custService.form.value);
        this.showSuccessMsg = true;
        setTimeout(() => this.showSuccessMsg = false ,3000);
      } else{
        // update
        this.custService.updateCustomer(this.custService.form.value);
      }
      this.submitted = false;
      this.custService.form.reset();
    }

    // if(this.custService.form.get('$key').value == null){
    //   // insert
    // } else {
    //   // update
    // }
  }

}
