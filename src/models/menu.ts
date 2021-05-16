export interface MenuItem {
  id: number;
  name: string;
  display: string;
  action: string;
  content?: string;
  show: boolean;
  external: boolean;
  order: number;
  submenu: MenuItem[];
  active?: boolean;
}

export interface MenuType {
  menu: MenuItem[];
}
