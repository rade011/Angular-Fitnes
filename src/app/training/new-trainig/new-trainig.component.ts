import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-trainig',
  templateUrl: './new-trainig.component.html',
  styleUrls: ['./new-trainig.component.css']
})
export class NewTrainigComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartTraining() {
    this.trainingStart.emit();
    console.log(this.trainingStart.emit());
    
  }

}
