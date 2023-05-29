import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
<<<<<<< HEAD
  templateUrl: './footer.component.html'/*,
  styleUrls: ['./footer.component.scss']*/
=======
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
>>>>>>> 68dec48bb2e871b607a923652d5f106cba437150
})
export class FooterComponent implements OnInit {
  test : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
