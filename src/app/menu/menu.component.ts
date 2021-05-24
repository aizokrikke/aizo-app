import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuType } from '../../models/menu';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuList: MenuType = {
    menu: []
  };

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getMenu();
  }


  public getMenu(): void {
    this.menuService.getMenu().subscribe(
      (data) => {
        this.menuList = {
          menu: data
        };
      }
    );
  }

  public showSubMenu(id: number): void {
  // show submenu
    const item = this.menuList.menu.find(item => item.id == id);
    if (item) {
        item.active = true;
      }
    }

  public hideSubMenu(id: number): void {
    // hide submenu
    const item = this.menuList.menu.find(item => item.id == id)
    if (item) {
         item.active = false;
      }
  }

  public handleClick(action: string, id: number, actionItem?: string): void {
    if (!action) {
      this.showSubMenu(id);
    } else {
      // navigate to action
      if (actionItem) {
        this.router.navigate(['/show', actionItem]);
      }
    }

  }




}
