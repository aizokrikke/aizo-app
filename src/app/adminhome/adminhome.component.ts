import { Component, OnInit } from '@angular/core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  faCogs = faCogs;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public handleClick(): void {
    this.router.navigate(['/admin']);
  }

}
