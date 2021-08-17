import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup
  constructor(private formBuilder: FormBuilder,private userService: UserService) { 
    this.form = this.formBuilder.group({
      'name' : [null, Validators.required],
      'lastName' : [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  createUser() {
    if (this.form.valid) {
      this.userService.addUser(this.form.value);
      this.form.reset();
    }
  }
}
