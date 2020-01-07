import {Component, OnInit} from '@angular/core';
import {APIService} from '../../api/api.service';

@Component({
  selector: 'app-competition-item',
  templateUrl: './competition-item.component.html',
  styleUrls: ['./competition-item.component.css']
})
export class CompetitionItemComponent implements OnInit {

  matchesList: Array<string> = [];
  id: number;

  constructor(private api: APIService) {
  }

  public getMatches(id: number) {
    this.api.getItemOfCompetitions(id).subscribe(rez => {
      this.matchesList = rez.matches;
      console.log(rez);
    });
  }

  ngOnInit() {
    // this.getMatches(2001);
  }

}
