const shoeSizes: number[] = [230, 250, 280];
shoeSizes.map((num) => {});

const clothingSizes: string[] = ["M", "L", "XL"];
clothingSizes.map((names) => {});

function printArray<T>(items: T[]) {
  // T: 타입 파라미터 | T, U, V
  for (const item of items) {
    console.log(item);
  }
}

printArray(shoeSizes);
printArray(clothingSizes);

/* 기본 제네릭 함수*/
function logValue<T>(value: T): void {
  console.log(value);
}

logValue("hello"); // T = string
logValue(42); // T = number
logValue(true); // T = boolean

/* 제네릭 배열 함수 */
function printItems<T>(items: T[]): void {
  for (const item of items) {
    console.log(item);
  }
}

printItems(["A", "B", "C"]); // T = string
printItems([1, 2, 3]); // T = number

/* 제네릭을 사용하는 탕비 별칭*/

type Wrapper<T> = {
  value: T;
};

const wrappedString: Wrapper<string> = { value: "text" };
const wrappedNumber: Wrapper<number> = { value: 123 };

/* 제네릭 interface */
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 99 };

/* 여러 제네릭 타입 사용 (T, U) */

function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair1 = makePair("age", 20); // [string, number]
const pair2 = makePair(true, "yes"); // [boolean, string]

/* 제네릭 이름을 명확하게 */

interface SelectOption<TValue> {
  label: string;
  value: TValue;
}

const option1: SelectOption<number> = { label: "One", value: 1 };
const option2: SelectOption<string> = { label: "Yes", value: "Y" };

/* API 응답을 위한 제네릭 구조 */

interface ApiResponse<TData> {
  success: boolean;
  data: TData;
}

const userResponse: ApiResponse<{ name: string }> = {
  success: true,
  data: { name: "Alice " },
};

const productResponse: ApiResponse<string[]> = {
  success: true,
  data: ["Book", "phone"],
};

/* 상태 관리용 제네릭 */
interface State<TValue> {
  value: TValue;
  loading: boolean;
}

const loginState: State<boolean> = { value: true, loading: false };
const profileState: State<{ name: string }> = {
  value: { name: "Tom" },
  loading: true,
};
