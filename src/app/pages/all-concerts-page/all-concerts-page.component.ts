import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-all-concerts-page',
  templateUrl: './all-concerts-page.component.html',
  styleUrls: ['./all-concerts-page.component.scss']
})
export class AllConcertsPageComponent implements OnInit {
  allConcerts: Concert[];
  todayDate: string;
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    this.getStarted();
    var today = new Date();
    this.todayDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  }

  async getStarted() {
    var conc: Concert[];
    conc = [];
    await this.getConcerts().then((value) => {
      conc = value as Concert[];
    });
    conc.sort(compareDate);
    this.allConcerts = [...conc];
  }

  getConcerts() {
    return new Promise((resolve, reject) => {
      this.db
        .list('concerts/concerts')
        .valueChanges()
        .subscribe((value) => {
          resolve(value);
        });
    });
  }

  notExpired(date) {
    return (
      date.split('/').reverse().join('') >=
      this.todayDate.split('/').reverse().join('')
    );
  }

}

class Concert {
  name: string | undefined;
  description: string | undefined;
  band_names: [] | undefined;
  music_genres: [] | undefined;
  locationName: string | undefined;
  locationAddress: string | undefined;
  concertDate: string | undefined;
  concertEvent: string | undefined;
  concertTickets: string | undefined;
}

function compareDate(a: Concert, b: Concert) {
  let task1 = a.concertDate.split('/').reverse().join('');
  let task2 = b.concertDate.split('/').reverse().join('');
  return task1 > task2 ? 1 : task1 < task2 ? -1 : 0;
}
