export interface MenuItem {
  id: number;
  name: string;
  display: string;
  action: string;
  show: boolean;
  active: boolean;
  external: boolean;
  order: number;
  submenu: MenuItem[];
}

export interface MenuType {
  menu: MenuItem[];
}
