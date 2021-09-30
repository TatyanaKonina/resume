import { Component, OnInit } from '@angular/core';

export interface Post{
  title:string
  text:string
  id? : number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})



export class AppComponent implements OnInit{
  posts: Post[]=[
    {title: 'dlldld', text: 'vfvvvvvvv',id:1},
    {title: 'krfnrgrg', text: 'fvd',id:2}
  ]
  updatePosts(post:Post){
    this.posts.unshift(post)
  }
  removePost(id:number){
    this.posts= this.posts.filter(p => p.id !== id)

  }
  ngOnInit(){
    setTimeout(()=>{
      console.log('Timeout')
      this.posts[0].title = 'CHANGE'
    },5000)
  }
  
}
