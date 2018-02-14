import { MatButtonModule, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialog-title>Are you sure</h1>
                <mat-dialog-content>
                    <p>You allready got {{passedData.progress}}%</p>
                </mat-dialog-content>
                <mat-dialog-actions>
                    <button mat-button [mat-dialog-close]="true">Yes</button>
                    <button mat-button [mat-dialog-close]="false">No</button>
                </mat-dialog-actions>`
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}