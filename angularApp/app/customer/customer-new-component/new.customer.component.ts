import { Component, OnInit } from '@angular/core';
//import { Customer } from '../shared/customer-models/customer.model'
import { CustomerServices } from '../shared/customer-services/customer.services'
import { trigger, state, style, transition, animate } from '@angular/animations';

import { ControlBase }              from '../../shared/components/common-control/control-definition/base.field';
import { FormGroup,FormBuilder,FormArray, Validators }                 from '@angular/forms';

import { DropdownColumnOption }     from '../../shared/components/common-control/control-definition/dropdown.field';
import { TextboxColumnOption }  from '../../shared/components/common-control/control-definition/textbox.field';

@Component({
    selector: 'app-new-customer-component',
    templateUrl: './new.customer.component.html',
    styleUrls: ['./new.customer.component.scss'],
    providers: [CustomerServices],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})

export class NewCustomerComponent implements OnInit {
    //@Input() questions: ControlBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  
  getQuestions() {

    let controls: any[] = [

      new DropdownColumnOption({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxColumnOption({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxColumnOption({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new ControlBase({
        key: 'contactGroup',
        order: 2,
        parent: true,
        children:[
          new TextboxColumnOption({
            key: 'firstName',
            label: 'First name',
            value: 'Bombasto',
            required: true,
            order: 1
          }),
    
        ]
      })

    ];

    return controls.sort((a, b) => a.order - b.order);
  }

  controls = this.getQuestions();

  constructor(private qcs: CustomerServices,private fb: FormBuilder) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.controls);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }



  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
