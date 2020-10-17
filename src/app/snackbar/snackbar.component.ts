import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnDestroy {

  sbSubscribe = null;

  constructor(private _snackBar: MatSnackBar, private comments: CommentsService) {
    this.sbSubscribe = merge(
      this.comments.add.pipe(mapTo('Commentaire ajouté')),
      this.comments.delete.pipe(mapTo('Commentaire supprimé')),
    ).subscribe(this.openSnackBar)
  }
  ngOnDestroy(): void {
    this.sbSubscribe.unsubscribe();
  }

  openSnackBar = (message: string) => {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }

}
