import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PasswordMatchDirective } from './password-match.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent, FormComponent, PasswordMatchDirective ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }