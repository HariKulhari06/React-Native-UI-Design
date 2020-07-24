import Category from '../model/Category';
import Furniture from '../model/Furniture';

export const CATEGORIES = [
  new Category(
    1,
    'Sofa',
    'https://www.pngmart.com/files/7/Sofa-Bed-Transparent-Background.png',
  ),
  new Category(
    2,
    'Bed',
    'https://purepng.com/public/uploads/large/purepng.com-bedbedpadsackdossbedstead-17015279216249al5q.png',
  ),
  new Category(
    3,
    'Chair',
    'https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Chair-PNG-Transparent-Image.png',
  ),
  new Category(
    4,
    'Table',
    'https://pluspng.com/img-png/table-hd-png-table-transparent-png-1000.png',
  ),
];

export const PRODUCTS = [
  new Furniture(
    1,
    'Taco Chair',
    'https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Chair-PNG-Transparent-Image.png',
    4.5,
    500,
    true,
    '#796580',
  ),
  new Furniture(
    2,
    'Easy Chair',
    'https://i0.wp.com/freepngimages.com/wp-content/uploads/2016/10/blue-wooden-chair.png?fit=669%2C939',
    4.2,
    647,
    false,
    '#3E2D26',
  ),
  new Furniture(
    3,
    'Hard Chair',
    'https://lh3.googleusercontent.com/proxy/9n82-lYKd8JlXNH7C9JLtK8cEYYXLptCwQgfhQakU0g7HhQp65FB_6AFnnHj0EqIGEseBdPmQO5KO41RMUj8yRr3_EJuQhfhSDKsWblJJPexz6q05caM',
    4.5,
    600,
    false,
    '#86938A',
  ),
];
export const BEST_SELLING_PRODUCTS = [
  new Furniture(
    1,
    'Modern Chair',
    'https://www.diiiz.com/2463-thickbox_default/daw-chair-eames-clear.jpg',
    4.5,
    500,
    true,
    '#C3BC2D',
  ),
  new Furniture(
    2,
    'Reading Chair',
    'https://purepng.com/public/uploads/large/purepng.com-old-chairchair-vintage-furniture-luxury-modern-object-old-wood-sofa-armchairobjectsold-chair-821523987619arqxr.png',
    4.1,
    800,
    true,
    '#768484',
  ),
];
