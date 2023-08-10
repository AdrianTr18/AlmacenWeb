import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // Variables
  loginform!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ){}
  
  ngOnInit(): void {
      this.loginform = this.fb.group({
        usuario: ['', Validators.required, Validators.email],
        contrasenia: ['', Validators.required]
      });
  }

  Ingresar(){
    this.router.navigate(['/inicio']);
  }

  login(form: NgForm) {
    const usuario = form.value.usuario; 
    const contrasenia = form.value.contrasenia;
  }

}
