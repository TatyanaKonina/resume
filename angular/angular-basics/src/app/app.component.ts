
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers : []
})



export class AppComponent implements OnInit{
  form: FormGroup
  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, 
        Validators.required,
        MyValidators.restrictedEmails
      ], [MyValidators.uniqEmail]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }
  submit(){
    const formData = {...this.form.value}
    console.log(formData)
  }
  setCapital(){
    const cityMap:{[country:string]:string} = {
      ru: 'Moscow',
      ua:'Kiev',
      by: 'Minsk'
    }
    const cityKey = ((this.form.get('address') as FormGroup).get('country') as FormControl).value
    const city = cityMap[cityKey]
    this.form.patchValue({
      address: {city}
    })
  }
  addSkill(){
    const control = new FormControl('',Validators.required);
    // <FormArray>this.form.get('skills').push()
    (this.form.get('skills') as FormArray).push(control)

  }
  getControls() {
    return (this.form.get('skills') as FormArray).controls;
  }
  
}
