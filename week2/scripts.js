

let root = document.getElementById("root");
let postsButton = document.getElementById("posts");


function onButtonClick() {
    //console.log("버튼이 클릭되었습니다.");
    fetch('https://jsonplaceholder.typicode.com/posts/ ')
    .then((response) => response.json())
    .then(( json) => render( json));
}

postsButton.addEventListener("click", onButtonClick);

function render(data) {

    for (let i = 0; i < data.length; i++) {

        //console.log("데이터 확인: ", data[0]);
        //console.log("1. h2 태그/p 태그를 만들기");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        //console.log("2. h2 태그에 title / p태그에 body를 넣기");
        h2.innerText = data[i].title;
        p.innerText = data[i].body;
        //console.log("3. 두 태그를 root에 추가하기");
        root.appendChild(h2);
        root.appendChild(p);
        //return console.log("4. 화면을 확인하기");
    }
}

