"use strict";
const shoeSizes = [230, 250, 280];
shoeSizes.map((num) => { });
const clothingSizes = ["M", "L", "XL"];
clothingSizes.map((names) => { });
function printArray(items) {
    // T: 타입 파라미터 | T, U, V
    for (const item of items) {
        console.log(item);
    }
}
printArray(shoeSizes);
printArray(clothingSizes);
/* 기본 제네릭 함수*/
function logValue(value) {
    console.log(value);
}
logValue("hello"); // T = string
logValue(42); // T = number
logValue(true); // T = boolean
/* 제네릭 배열 함수 */
function printItems(items) {
    for (const item of items) {
        console.log(item);
    }
}
printItems(["A", "B", "C"]); // T = string
printItems([1, 2, 3]); // T = number
const wrappedString = { value: "text" };
const wrappedNumber = { value: 123 };
const stringBox = { content: "Hello" };
const numberBox = { content: 99 };
/* 여러 제네릭 타입 사용 (T, U) */
function makePair(first, second) {
    return [first, second];
}
const pair1 = makePair("age", 20); // [string, number]
const pair2 = makePair(true, "yes"); // [boolean, string]
const option1 = { label: "One", value: 1 };
const option2 = { label: "Yes", value: "Y" };
const userResponse = {
    success: true,
    data: { name: "Alice " },
};
const productResponse = {
    success: true,
    data: ["Book", "phone"],
};
const loginState = { value: true, loading: false };
const profileState = {
    value: { name: "Tom" },
    loading: true,
};
