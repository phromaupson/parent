import { Component } from '@angular/core';

@Component({
  selector: 'lab01-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  title = 'frontend';
  bShow = true;
  name = 'kam';
   items = ['item1', 'item2', 'item3', 'item4'];

  destroyCMP(){
    this.bShow = !this.bShow
  }

  
  
  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
