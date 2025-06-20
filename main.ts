enum Product {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

type ClothingSize = 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface ClothingSize extends Product {
  sizes: ClothingSize[];
  color: string;
}

type ShoeSize  = 220 | 225 | 230 | 235 | 240 | 245 | 250 | 260

interface shoeProduct extends Product {
  sizes: ShoeSize[];
  handmade: boolean;
}


function printSizes(product: ClothingSize | shoeProduct) {
  const availableSizes = product.sizes.join(', ');
  console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);

  if ('color' in product) {
    console.log(`색상: ${product.color}`);
  }

  if ('handmade' in product) {
    console.log(
      product.handmade
      ? '이 상품은 장인이 직접 만듭니다.'
      : '이 상품은 공장에서 만들어졌습니다.'
    )
  }
}