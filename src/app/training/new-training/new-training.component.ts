import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<Exercise[]>;

  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    console.log(this.db.collection('availableExercises').snapshotChanges());
    this.exercises = this.db.collection('availableExercises').snapshotChanges().map(docArr => {
      // console.log('docArr', docArr)
      return docArr.map(doc => {
        // console.log('doc', doc.payload)
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data()
        }
      })
    });
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
