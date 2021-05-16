import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  public action: string | null = '';
  public available = ['users', 'menu', 'content'];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const index = this.available.indexOf(params.action);
      if (index >= 0) {
        this.action = params.action;
      }
    });
  }

  public handleClick(action: string): void {
    let route = '/admin/';
    if (action) {
      route = route + action;
    }
    this.router.navigate([route]);
  }

}
