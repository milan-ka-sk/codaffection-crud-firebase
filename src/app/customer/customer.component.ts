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
  formControls = this.custService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if (this.custService.form.valid){
      // TODO
      this.submitted = false;
    }

    // if(this.custService.form.get('$key').value == null){
    //   // insert
    // } else {
    //   // update
    // }
  }

}
