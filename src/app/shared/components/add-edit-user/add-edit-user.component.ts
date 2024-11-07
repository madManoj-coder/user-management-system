import { Component, Inject, OnInit } from '@angular/core';
import { Iuser } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  userForm!: FormGroup;
  roles: string[] = ['Admin', 'User'];
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Iuser | null
  ) { }

  ngOnInit(): void {
    this.isEditMode = !!this.data;

    this.userForm = this.fb.group({
      name: [this.data?.name || '', [Validators.required, Validators.maxLength(50)]],
      email: [this.data?.email || '', [Validators.required, Validators.email]],
      role: [this.data?.role || 'User', Validators.required]
    });
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get role() { return this.userForm.get('role'); }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    const user: Iuser = {
      id: this.data?.id || 0,
      name: this.name?.value.trim(),
      email: this.email?.value.trim(),
      role: this.role?.value
    };

    if (this.isEditMode) {
      this.userService.updateUser(user);
      this.snackBar.open('User updated successfully', 'Close', { duration: 3000 });
    } else {
      this.userService.addUser(user);
      this.snackBar.open('User added successfully', 'Close', { duration: 3000 });
    }

    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
