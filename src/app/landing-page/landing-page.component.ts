import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() {
    this.peliculasEnCines = [
      {
        titulo: 'Spider-Man Far From Home',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:'https://en.wikipedia.org/wiki/File:Spider-Man_Far_From_Home_poster.jpg'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster:'https://www.imdb.com/title/tt3521164/mediaviewer/rm618728448/?ref_=tt_ov_i'
      },
    ];
   }

  ngOnInit(): void {
  }
  peliculasEnCines: any;

  peliculasProximosEstrenos = [
    {
      titulo: 'Avengers',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
    },
    {
      titulo: 'Inception',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 300.99,
    },
    {
      titulo: 'Rocky',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 300.99,
    },
  ];
}
