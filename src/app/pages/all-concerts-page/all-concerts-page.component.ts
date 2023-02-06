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
    let dtask = date.split('/').reverse();
    let dtoday = this.todayDate.split('/').reverse();
    for (let i = 0; i < 3; i++) {
      if (parseInt(dtask[i]) > parseInt(dtoday[i])) return true;
      else if (parseInt(dtask[i]) < parseInt(dtoday[i])) return false;
    }

    return true;
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
  let concert1 = a.concertDate.split('/').reverse();
  let concert2 = b.concertDate.split('/').reverse();

  for (let i = 0; i < 3; i++) {
    if (parseInt(concert1[i]) > parseInt(concert2[i])) return 1;
    else if (parseInt(concert1[i]) < parseInt(concert2[i])) return -1;
  }

  return 0;
}
