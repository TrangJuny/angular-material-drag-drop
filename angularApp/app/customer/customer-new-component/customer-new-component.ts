import { Component, OnInit } from '@angular/core';
//import { Customer } from '../shared/customer-models/customer.model'
import { CustomerServices } from '../shared/customer-services/customer.services';

// import { ControlBase }              from '../../shared/components/common-control/control-definition/base.field';
import { FormGroup,FormBuilder, Validators }                 from '@angular/forms';

// import { DropdownColumnOption }     from '../../shared/components/common-control/control-definition/dropdown.field';
// import { TextboxColumnOption }  from '../../shared/components/common-control/control-definition/textbox.field';

@Component({
    selector: 'app-new-customer-component',
    templateUrl: './customer-new-component.html',
    styleUrls: ['./customer-new-component.scss'],
    providers: [CustomerServices]
   
})

export class NewCustomerComponent implements OnInit {
    //@Input() questions: ControlBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private fb: FormBuilder) {  }

  ngOnInit() {
   
  }
  get f() { return this.profileForm.controls; }

  profileForm = this.fb.group({
    companyName: ['',  Validators.compose([Validators.required, Validators.minLength(5)])],
    president: [''],
    headQuater: [''],
    website: [''],
    email: ['',[Validators.email]],
    description: [''],
    addressContact: this.fb.group({
      address1: [''],
      address2: [''],
      country: [''],
      state: [''],
      zip: [''],
      phone: [''],
      faxNumber: [''],
    })
  });

  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
