import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
 arr=[1,1,2,3,5,8,13]
 obj=[
   {title:'POst1',author:'me',comments:[
     {name:'angular',text:'lorem'},
     {name:'angular',text:'lorem2'},
     {name:'angular',text:'lorem3'},
   ]},
   {title:'POst2',author:'another',comments:[
    {name:'react',text:'lorem'},
    {name:'react',text:'lorem2'},
    {name:'react',text:'lorem3'},
  ]}
 ]
}
