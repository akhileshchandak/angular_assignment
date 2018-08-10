import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  mdlUserIsOpen = false;
  hide_save = false;
  hide_update = true;
  adduser=false;
  edit_index:number;
  title:any;
  user_array=[
    {id: 0,name: 'Vrushali Vyas', contact: '0000000000', city: 'Mumbai', occupation: '',walletbalance: 0, status: true},
    {id: 1,name: 'Rohan Thakur', contact: '1231231231 (98335679067)', city: 'Mumbai', occupation: null,walletbalance: 0, status: true},
    {id: 2, name: 'Richa Bhanushali', contact: 12121212, city: 'Mumbai', occupation: '',walletbalance: null, status: true},
    {id: 3, name: 'Harshal Patel', contact: 7400477338, city: 'Mumbai', occupation: '',walletbalance:null, status: true},
    {id: 4, name: 'Deepak B', contact: 9773523570, city: 'Mumbai', occupation: '',walletbalance: null, status: true},
    {id: 5, name: 'Robin Vashisht', contact: 9930206758, city: 'Mumbai', occupation: '',walletbalance: 32708, status: true},
    {id: 6, name: 'Mrugesh Thaker', contact: 9654357450, city: 'Mumbai', occupation: 'software engineer',walletbalance: null, status: true}
  ]
  
  constructor() { }
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    occupation: new FormControl(''),
    walletbalance: new FormControl(''),
    status: new FormControl('')
  });
 
  ngOnInit() {
    
  }


   openUserModal(open, type) {
    this.mdlUserIsOpen = open;
    this.userForm.reset();
    this.edit_index=null;
    if ( type === 'add') {
      this.hide_save = false;
      this.hide_update = true;
      this.title='Add';
    } else if (type === 'edit') {
      this.hide_save = true;
      this.hide_update = false;
      this.title='Edit';
    }
  }

  closeUserModal() {
    this.mdlUserIsOpen = false;
    this.userForm.reset();
  }

  save_user_data(){
    this.user_array.push(this.userForm.value);
    this.user_array[this.user_array.length -1].status=true;
    this.user_array[this.user_array.length -1].id=this.user_array.length-1;
    console.log(this.user_array);
    this.closeUserModal();
    
  }

  delete_user_data(id){
    console.log(id);
      this.user_array[id].status= false;
  
  }

  edit_user_data(id){
    this.hide_save = true;
    this.hide_update = false;
    this.openUserModal(true, 'edit');
    this.userForm.patchValue({
      name: this.user_array[id].name,
      contact: this.user_array[id].contact,
      city: this.user_array[id].city,
      occupation: this.user_array[id].occupation,
      walletbalance: this.user_array[id].walletbalance,
      status: this.user_array[id].status
    })
    this.edit_index=this.user_array[id].id;
  }

  update_user_data(){
    console.log(this.edit_index);
    this.user_array[this.edit_index]=this.userForm.value;
    this.user_array[this.edit_index].id=this.edit_index;
    console.log(this.user_array);
    this.closeUserModal();
  }
}
