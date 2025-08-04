import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRequestDto } from '../../core/dtos/auth-request-dto';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      senha: ['']
    })
  }

  onSubmit() {
    const request: AuthRequestDto = {
      email: this.form.value.email as string,
      senha: this.form.value.senha as string
    }

    this.authService.login(request).subscribe({
      next: (data) => { 
        console.log(data); 
      },
      error: (e) => { 
        console.log(e.error )
      }
    })
  }
}
