import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-today-concerts-page',
  templateUrl: './today-concerts-page.component.html',
  styleUrls: ['./today-concerts-page.component.scss'],
})
export class TodayConcertsPageComponent implements OnInit {
  concertsToday: number = 0;
  todayDate: string;
  allConcerts: Concert[];
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

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

  concToday() {
    this.concertsToday = this.concertsToday + 1;
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
