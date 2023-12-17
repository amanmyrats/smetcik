import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smeta-home',
  templateUrl: './smeta-home.component.html',
  styleUrls: ['./smeta-home.component.scss']
})
export class SmetaHomeComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      this.router.navigateByUrl('smeta/boqs');
  }
}
