import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.scss']
})
export class StudentdetailComponent implements OnInit {
  studentData: any[] = [];
  registerClicks: any = {};
  originalData: any[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentDetails().subscribe((res) => {
      this.studentData = res;
      this.originalData = [...res];
      this.buildCounts(this.studentData);
    });
  }

  sortColumn(key: string) {
    //First click , sort ascending
    if (this.registerClicks[key] === 0) {
      this.studentData = this.studentData.sort((a,b) => {
        return a[key] > b[key] ? 1 : -1;
      });
      this.registerClicks[key] = 1;
    } //Second click, sort descending
    else if (this.registerClicks[key] === 1) {
      this.studentData = this.studentData.sort((a,b) => {
        return a[key] > b[key] ? -1 : 1;
      });
      this.registerClicks[key] = 2;
    } //Third click, default to original
    else {
      this.studentData = [...this.originalData];
      this.registerClicks[key] = 0;
    }

  }

  buildCounts(arr: any[]) {
    Object.keys(arr[0]).forEach(key => {
      this.registerClicks[key] = 0;
    });
  }

}
