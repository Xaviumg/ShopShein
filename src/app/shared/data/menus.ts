export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '/products',
    name: 'Productos'
  },
  {
    path: '/about',
    name: 'Quienes somos'
  },
  {
    path: '/contact',
    name: 'Contactanos'
  },
  {
    path: '/dashboard',
    name: 'Dashboard'
  },
  {
    path: '/doc',
    name: 'Documentos'
  }
];
