import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material';
import { ConfirmsnackbarComponent } from '../confirmsnackbar/confirmsnackbar.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

const URL = 'http://localhost:3000/posts';
@Component({
  selector: 'app-raectiveform',
  templateUrl: './raectiveform.component.html',
  styleUrls: ['./raectiveform.component.less'],
  providers: [NgbModalConfig, NgbModal]
})
export class RaectiveformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  model: any = {};
  filepath: any;
  localUrl: any;
  constructor(private formBuilder: FormBuilder, config: NgbModalConfig, private modalService: NgbModal, public modal: NgbActiveModal, private snackBar: MatSnackBar, private http: HttpClient, private data: DataService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      instituteName: ['', Validators.required],
      studentStength: ['', Validators.required],
      ContactNumber: ['', Validators.required],
      address: ['', Validators.required],
      PreffredContactTime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      query: ['', ''],
      uploadfile: ['', '']
      // password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
  
    let user = {
      name: this.registerForm.value.firstName,
      email: this.registerForm.value.email,
      instituteName: this.registerForm.value.instituteName,
      studentStength: this.registerForm.value.studentStength,
      ContactNumber: this.registerForm.value.ContactNumber,
      address: this.registerForm.value.address,
      PreffredContactTime: this.registerForm.value.PreffredContactTime,
      query: this.registerForm.value.query,
      uploadfile: this.filepath
    }
    this.submitted = true;


    if (this.registerForm.valid) {
      var mail= "mailto:career@mfksoftware.com?subject="+ this.registerForm.value.address + "&body="+ " Name: "+this.registerForm.value.firstName +"Instutute Name: "+this.registerForm.value.instituteName + " studentStength: "+this.registerForm.value.studentStength + " ContactNumber : "+this.registerForm.value.ContactNumber;
      window.open( mail,'_blank', 'height=400,width=400,resizable=yes,scrollbars=yes,status=no,titlebar=no');
      this.data.sendMail("http://localhost:3000/sendmail", user).subscribe(
        data => {
          this.snackBar.openFromComponent(ConfirmsnackbarComponent, {
            duration: 1000,
          });
        },
        err => {
          console.log(err);
        }
      );
    }

    if (this.registerForm.invalid) {
      return;
    }
  }
  
  upload(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.localUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
  }
    let files = event.target.files;
    let fData: FormData = new FormData;
    this.filepath=files[0].name;
    for (var i = 0; i < files.length; i++) {
      fData.append("file[]", files[i]);
    }
    var _data = {
      filename: 'Sample File',
      id: '0001'
    }

    fData.append("data", JSON.stringify(_data));

    this.data.uploadFile(fData).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    )
  }
  handleResponse(response: any) {
    console.log(response);
  }
  handleError(error: string) {
    console.log(error);
  }

}
