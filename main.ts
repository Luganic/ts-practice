// 객체 타입 선언
let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  id: "coo1",
  name: "코드잇 블랙 후디",
  price: 129000,
  sizes: ["M", "L", "XL"],
};

// 동적 key 정의: 계산된 프로퍼티 이름
if (product.membersOnly) {
  console.log("회원 전용 상품");
} else {
  console.log("일반 상품");
}

// 인덱스 시그니처
let field = "field name";
let obj = {
  [field]: "field value",
};

let stock: {
  [id: string]: number;
} = {
  coo1: 3,
  c002: 0,
  c003: 1,
  c004: "codeit", // 타입 오류
};
