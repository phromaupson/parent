import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { map, tap } from 'rxjs';
import { AppService } from '../../app.service';


@Component({
  selector: 'lab01-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit,OnDestroy {

  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();


  constructor(private appService:AppService) { }

  ngOnInit(): void {
    console.log('p:',this.item)
    this.getData()
    this.getDataByPostMethod()
  }

  getData():void{
    const  params = { b:1}
    this.appService.getDataFromBackend(params).subscribe((response)=>{
      console.log("response",response)
    })
  }

  getDataByPostMethod():void{
    const  params = { a:1}
    this.appService.getDataFromBackendPost(params)
    .pipe(
      // tap(x=>{})
      // filter(x=>{})
      // tap(x=>{})
      // map(x=>{})
      // tap(x=>{})
    )
    .subscribe((response)=>{
      console.log("response",response)
    })
  }

  addNewItem() {
    this.newItemEvent.emit("KAM");
  }

  /*addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }*/

  ngOnDestroy():void{
    console.log('DEAD!')
  }

}
