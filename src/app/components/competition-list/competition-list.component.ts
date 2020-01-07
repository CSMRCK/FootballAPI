import {Component, OnInit} from '@angular/core';
import {APIService} from '../../api/api.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})


export class CompetitionListComponent implements OnInit {

  competitionsList: Array<string> = [];
  matchesList: Array<string> = [];
  id: number;

  constructor(private api: APIService) {}


  private loadCompetitionList() {
    this.api.getListOfCompetitions().subscribe(res => {
      this.competitionsList = res.competitions;
      console.log(res);
    });
  }

  public getMatches(id: number) {
    this.api.getItemOfCompetitions(id).subscribe(rez => {
      this.matchesList = rez.matches;
      console.log(rez);
    });
  }


  ngOnInit() {
    this.loadCompetitionList();

  }

}
