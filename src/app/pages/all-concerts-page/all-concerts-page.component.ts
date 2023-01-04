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
  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    this.getStarted();
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
