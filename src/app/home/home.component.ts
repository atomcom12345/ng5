import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4
  itemxxx: string = ' new buttom'
  goalText: string = 'My first life goal'
  //กำหนดตัวแปร array
  goals = [];

  constructor() { }

  ngOnInit() {
    //นับจำนวนรายการใน list
    this.itemCount = this.goals.length;  // length เป็นคำสั่งนับ
  }

  xadditem() {
    //ตรวจค่าว่าง หรือไม่
    //if (this.goalText != ""l) {

      //ตรวจค่าในตัวแปรอาร์เรย์ ว่า ซ้ำกันหรือไม่
      if (this.goals.indexOf(this.goalText) !== -1) {
        alert("มีข้อมูลแล้ว")
      } else {
        this.goals.push(this.goalText);
        this.goalText = '';
        //นับจำนวนรายการใน list
        this.itemCount = this.goals.length;  // length เป็นคำสั่งนับ
      }
    }
  //}

  }
