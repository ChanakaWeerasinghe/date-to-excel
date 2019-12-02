import { Component } from '@angular/core';
import {ExcelService} from './services/excel.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    date: '02/02/2011'
  },
  {
    eid: 'e102',
    ename: 'ram',
    date: '02/02/2014'
  
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    date:  '02/02/2016'
  }];
  constructor(private excelService:ExcelService){

this.data[0].date=this.getDate();
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  getDate() :string{
    var today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let nmm, ndd;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      ndd = "0" + dd;
    }
    if (mm < 10) {
      nmm = "0" + mm;
    }
    return dd + "/" + mm + "/" + yyyy;
  }
}
