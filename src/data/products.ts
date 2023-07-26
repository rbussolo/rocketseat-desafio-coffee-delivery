import { Product } from "../reducers/shopping";

export const productList: Product[] = [
  {
    id: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    urlImage: '/src/assets/coffee/expresso.png',
    details: ['tradicional']
  },
  {
    id: 'expresso-americado',
    name: 'Expresso Americado',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    urlImage: '/src/assets/coffee/americano.png',
    details: ['tradicional']
  },
  {
    id: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    urlImage: '/src/assets/coffee/expresso-cremoso.png',
    details: ['tradicional']
  },
  {
    id: 'expresso-gelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    urlImage: '/src/assets/coffee/cafe-gelado.png',
    details: ['tradicional', 'gelado']
  },
  {
    id: 'cafe-com-leite',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    urlImage: '/src/assets/coffee/cafe-com-leite.png',
    details: ['tradicional', 'com leite']
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    urlImage: '/src/assets/coffee/latte.png',
    details: ['tradicional', 'com leite']
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    urlImage: '/src/assets/coffee/capuccino.png',
    details: ['tradicional', 'com leite']
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    urlImage: '/src/assets/coffee/macchiato.png',
    details: ['tradicional', 'com leite']
  },
  {
    id: 'mocaccino',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    urlImage: '/src/assets/coffee/mocaccino.png',
    details: ['tradicional', 'com leite']
  },
  {
    id: 'chocolate-quente',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    urlImage: '/src/assets/coffee/chocolate-quente.png',
    details: ['especial', 'com leite']
  },
  {
    id: 'cubano',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    urlImage: '/src/assets/coffee/cubano.png',
    details: ['especial', 'alcoólico', 'gelado']
  },
  {
    id: 'havaiano',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    urlImage: '/src/assets/coffee/havaiano.png',
    details: ['especial']
  },
  {
    id: 'arabe',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    urlImage: '/src/assets/coffee/arabe.png',
    details: ['especial']
  },
  {
    id: 'irlandes',
    name: 'Irlandês',
    description: 'Bebida a base de café, uisque irlandês, açúcar e chantilly',
    price: 9.9,
    urlImage: '/src/assets/coffee/irlandes.png',
    details: ['especial', 'alcoólico']
  }
];