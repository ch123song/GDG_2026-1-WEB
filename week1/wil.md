# 1. 오늘 공부한 내용

## let
변수를 선언할 떄는 **let** 사용

## JS 데이터 타입 - 문자열(String)
```javascript
let hello = "Hello Hongik"
// hello 변수에 "Hello Hongik" 문자열 넣기
// 쌍따옴표 (""), 홑따옴표 (''), 백틱 (``) 모두 사용 가능
```

## JS 데이터 타입 - 객체

### - 객체 타입 선언
```javascript
let hongik = {};

//객체 내부에서 속성, 값 정의하기
let hongik = {name:"Hongik University"};

// 객체 외부에서 속성, 값 정의하기
let hongik = {};
hongik.name = "Hongik University";
```

### - 특정 속성만 출력하기
. 을 통해서 접근한다.

```javascript
let hongikFestival = {
name: "축제 라인업",
date: "2026.05.13 - 2026.05.15",
location: "서울특별시 마포구 홍익대학교",
lineup: {
day1: ["드래곤포니","하입프린세스","다이나믹듀오"],
day2: ["키노","백예린","코르티스","하하"],
day3: ["엔플라잉","프로미스나인","그레이, 로꼬, 우원재"],
}
}

// location 만 출력하고 싶으면
console.log(hongik.location);

// 결과: 서울특별시 마포구 홍익대학교
```

## HTML 과 Javascript
HTML 이라는 document를 script 태그로 연결.
```HTML
<script src="./scripts.js"></script>
```
-> Javascript 에서 document 라는 객체 = script 태그로 연결한 HTML 문서

**이 관계를 이용해 JS로 HTML 조작 가능**

### * JavaScript가 HTML과 연결되는 시점
브라우저가 하는일
1. HTML 파일 열기
2. HTML 문서를 순차적으로 한 줄씩 읽기 (파싱)

    <파싱 중에 script 발견>
    1. 파싱을 중단한다.
    2. script 파일(js)을 다운받는다.
    3. script 파일을 열어 실행한다.
    4. HTML을 이어서 파싱한다.
     
3. DOM 트리 만들기
4. 화면에 표시하기

**따라서 body 태그 마지막에서 연결, HTML 해석을 끝내고 JS를 해석하도록 한다.**

---

# 2. JS 데이터 타입 - 배열(Array)

## 배열(Array)이란?

배열은 여러 개의 데이터를 하나의 변수에 저장하는 자료형이다.

```javascript
let fruits = ["apple", "banana", "orange"];
//문자열 데이터 3개가 저장된 배열
```

## 배열의 특징

### - Index

배열은 0번부터 시작하는 번호(index)를 가진다.

| 값 | index |
|---|---|
| apple | 0 |
| banana | 1 |
| orange | 2 |

```javascript
console.log(fruits[0]);
//출력 결과: apple
```



### - 여러 타입 저장 가능

숫자, 문자열, 논리값 등을 함께 저장할 수 있다.

```javascript
let mixed = [1, "hello", true];
```
 


## 배열 관련 주요 기능

### - push()

배열 맨 뒤에 데이터 추가

```javascript
let arr = ["A", "B"];

arr.push("C");

console.log(arr);
//결과: ["A", "B", "C"]
```

### - pop()

배열 맨 뒤 데이터 제거

```javascript
arr.pop();
```

### - length

배열 길이 확인

```javascript
console.log(arr.length);
```

### - join()

배열 데이터를 문자열로 연결

```javascript
let lineup = ["키노","백예린","코르티스","하하"];

console.log(singers.join(" / "));
//결과: 키노 / 백예린 / 코르티스 / 하하
```

---

# 3. JS로 class 설정된 태그 컨트롤

## class란?

여러 HTML 태그를 하나의 그룹처럼 관리하기 위해 사용하는 속성이다.

```html
<p class="artist">코르티스</p>
<p class="artist">백예린</p>
<p class="artist">하하</p>
```

위 예시에서 3개의 p 태그는 모두 `"artist"` class를 가진다.


## id와 class 차이

| 종류 | 특징 |
|---|---|
| id | 하나의 고유한 태그 선택 |
| class | 여러 태그를 그룹으로 관리 |

### - id 선택

```html
<section id="day1"></section>
```

```javascript
document.querySelector("#day1");
```

### - class 선택

```html
<section class="lineup"></section>
```

```javascript
document.querySelectorALL(".lineup");
```
#### 참고
**querySelector()** : 조건에 맞는 첫 번째 요소 하나만 선택한다.

**querySelectorAll()** : 조건에 맞는 모든 요소를 선택한다.

```javascript
let sectionTag = document.querySelectorAll(".lineup");
```

결과는 배열과 비슷한 형태로 저장된다.

```javascript
sectionTag[0].appendChild(day1Tag);
```
