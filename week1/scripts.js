let bodyTag = document.body;

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

// section 태그를 찾는다.
let sectionTag = document.querySelectorAll(".lineup");

let day1Tag = document.createElement("p");
day1Tag.innerText = hongikFestival.lineup.day1.join(" / ");
sectionTag[0].appendChild(day1Tag);


let day2Tag = document.createElement("p");
day2Tag.innerText = hongikFestival.lineup.day2.join(" / ");
sectionTag[1].appendChild(day2Tag);


let day3Tag = document.createElement("p");
day3Tag.innerText = hongikFestival.lineup.day3.join(" / ");
sectionTag[2].appendChild(day3Tag);

// h2 태그를 만든다.
////let pTag = document.createElement("p");
// p 태그에 텍스트를 추가한다.
////pTag.innerText = "프로미스나인";
// p 태그를 body 태그에 추가한다.
////sectionTag.appendChild(pTag);
// 화면을 본다.