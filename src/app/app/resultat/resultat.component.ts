import { Component, OnInit } from '@angular/core';
import { FlaskapiService } from 'src/app/flaskapi.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html'/*,
  styleUrls: ['./resultat.component.scss']*/
})
export class ResultatComponent implements OnInit {
  
  prediction: string = "not initialsed yet";

  constructor(private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.prediction = params['prediction'];
      console.log(this.prediction);
    });
  }

}
