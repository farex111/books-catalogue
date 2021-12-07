import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

export interface signInForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private auth: AuthService,
    private loadingservice: LoadingService,
    private router: Router
  ) {}

  ngOnInit() {}

  signIn({ email, password }: signInForm) {
    if (!email || !password) {
      return;
    }
    this.loadingservice.start();
    from(this.auth.signIn({ email, password }))
      .pipe(finalize(() => this.loadingservice.stop()))
      .subscribe(() => {
        this.router.navigate(['content']);
      });
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
}
