import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-aizo',
  templateUrl: './aizo.component.html',
  styleUrls: ['./aizo.component.scss']
})

export class AizoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
  }

  public action: string | null = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params.action;
    });
  }

}
