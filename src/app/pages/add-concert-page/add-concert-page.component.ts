import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-concert-page',
  templateUrl: './add-concert-page.component.html',
  styleUrls: ['./add-concert-page.component.scss'],
})
export class AddConcertPageComponent implements OnInit {
  addConcertForm: FormGroup;
  allConcerts: Concert[];

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //DD/MM/YYYY
    this.getStarted();
  }

  ngOnInit(): void {
    this.addConcertForm = new FormGroup({
      concertName: new FormControl('', Validators.required),
      concertDescription: new FormControl('', [Validators.required]),
      bandsNames: new FormControl('', Validators.required),
      musicGenres: new FormControl('', Validators.required),
      locationName: new FormControl('', Validators.required),
      locationAddress: new FormControl('', Validators.required),
      concertDate: new FormControl('', [Validators.required]),
      concertEvent: new FormControl(''),
      concertTickets: new FormControl(''),
    });
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

  addConcert() {
    if (this.addConcertForm.valid) {
      let completeConcertForm = {
        name: this.addConcertForm.value.concertName,
        description: this.addConcertForm.value.concertDescription,
        band_names: this.addConcertForm.value.bandsNames.split(';'),
        music_genres: this.addConcertForm.value.musicGenres.split(';'),
        locationName: this.addConcertForm.value.locationName,
        locationAddress: this.addConcertForm.value.locationAddress,
        concertDate:
          this.addConcertForm.value.concertDate.getDate() +
          '/' +
          (this.addConcertForm.value.concertDate.getMonth() + 1) +
          '/' +
          this.addConcertForm.value.concertDate.getFullYear(),
        concertEvent: this.addConcertForm.value.concertEvent,
        concertTickets: this.addConcertForm.value.concertTickets,
      };
      this.allConcerts.push(completeConcertForm);
      this.db
        .object('concerts')
        .set({ concerts: this.allConcerts });
      alert("The concert has been added. Thank you!")
      this.addConcertForm.reset();
      this.getStarted();
    } else {
      return;
    }
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
