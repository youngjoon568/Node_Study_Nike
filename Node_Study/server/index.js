const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    req.ip6 = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    next();
})

// app.get('/', (req, res) => {
//     return res.send(`안녕 ${req.query.name}`);
// })

// const CURRENT_PATH = "/Users/chaebg/Desktop/node_study/server";
// const CURRENT_PATH = __dirname;
const CURRENT_PATH = process.cwd();

app.get('/', (req, res) => {
    return res.sendFile(`${CURRENT_PATH}/public/index.html`);
});

const DB = {};

// signup
app.get('/signup', (req, res) => {
    return res.sendFile(`${CURRENT_PATH}/public/signup.html`);
});

app.post('/signup', (req, res) => {
    const { userID, userPW, name } = req.body;
    DB[userID] = { userID, userPW, name };
    return res.send(DB);
});

// signin
app.get('/signin', (req, res) => {
    return res.sendFile(`${CURRENT_PATH}/public/signin.html`);
});

app.post('/signin', (req, res) => {
    return res.send("로그인 성공!");
});

const cardArr = [
    { cardID: "C001", head: null, title: "나이키 엘레이트 스포츠 브라", text1: "자유로운 움직임을 위한 디자인. 꼭 맞는 지지력과 클래식한 디자인으로 완성된", text2: "새로운 나이키 엘레이트 스포츠 브라를 만나보세요.", type: "IMAGE", value: "https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220503_hp_p3_bg.jpg", read: false, substr: null },
    { cardID: "C002", head: null, title: "나이키 에어 줌 페가수스 39", text1: "혁신적인 디자인으로 새롭게 돌아온 나이키 에어 줌 페가수스 39를 만나보세요.", text2: "서포트를 위한 설계, 한결같은 편안함으로 어떤 상황에서도 최상의 레이스를 경험해보세요.", type: "VIDEO", value: "https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/5a977434-81a5-4c98-9f86-1d1ca21eeb96/d39634df-d8a0-441e-8803-56b3e7621c16/main.mp4", read: false, btn: null, substr: null },
    { cardID: "C003", head: "여름을 위한 스타일링 추천", title: "지속 가능한 썸머 스타일링 X 리뷰 챌린지", text1: "완벽한 여름을 위한 무브 투 제로 썸머 스타일링.", text2: "나만의 스타일로 리뷰 챌린지에 참여하고 특별한 혜택을 만나보세요.", type: "VIDEO", value: "https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/ffb7eca4-ddcf-4cdd-99ad-d7537c41de2a/974eced4-0502-4073-a7c8-f48e4db23d58/main.mp4", read: true, btn: null, substr: null },
    { cardID: "C004", head: null, title: "조던 자이언 X 나루토", text1: "자이언의 열정과 나루토에서 영감을 받은 스트리트웨어.", text2: "조던 자이언 X 나루토 컬렉션을 만나보세요.", type: "IMAGE", value: "https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220506_jd_p1_bg.jpg", read: false, btn: null, substr: null },
    { cardID: "C005", head: null, title: "여름에 떠나는 새로운 탐험", text1: "여름에 떠나는 새로운 모험.", text2: "궃은 날씨에도 방해받지 않는 ACG 컬렉션과 함께 새로운 세상을 향해 떠나보세요.", type: "IMAGE", value: "https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220504_hp_p5_bg.jpg", read: false, btn: "컬렉션 구매하기", substr: "나이키 ACG 가이드" },
    { cardID: "C006", head: null, title: "나이키 페크 팩", text1: "탁월한 가능성과 디자인으로 언제 어디서든 최상의 룩을 선사하는", text2: "나이키 테크 팩을 만나보세요.", type: "IMAGE", value: "https://static-breeze.nike.co.kr/kr/ko_kr//cmsstatic/structured-content/65250/220429_hp_p3_bg.jpg", read: false, btn: null, substr: null },
    { cardID: "C007", head: null, title: "나이키 에어맥스 90 퓨추라", text1: "나이키 에어멕스 90 퓨추라와 함께 나만의 무한한 세계로 나아가세요.", text2: "나이키 맴버가 되어 새로운 우먼스 스타일을 만나보세요.", type: "VIDEO", value: "https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/e8d88f07-4f38-4b19-9254-0782e7eacff4/036522f8-4dc3-4499-94fa-99934cf9580c/main.mp4", read: false, btn: null, substr: null },
    // { cardID: "C000", head: null, title: "", text1: "", text2: "", type: "", value: "", read: false, btn: null, substr: null },
];

const shoes = [{
    img: 'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DH0832-660/42b01b6f-a3b2-42ad-8dee-433c97d91e70_primary.jpg?gallery',
    name: '에어 조던 36 로우 PF',
    price: 209000,
    description: '경기장 주변부터 농구 골대까지',
    madein: '미국'
  }, {
    img: 'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/DA7995-200/e6056728-ca18-45dc-b23c-82bbf2b5873f_primary.jpg?gallery',
    name: '나이키 와플 원',
    price: 119000,
    description: '확신이 안선다면 와플을',
    madein: '중국'
  }, {
    img: 'https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/CT2392-001/9191175b-4de4-444f-be80-702e2e27a46d_primary.jpg?gallery',
    name: '나이키 줌 플라이 4',
    price: 151200,
    description: '트레이닝을 위한 내구성 좋은 스피드.',
    madein: '한국'
}];

app.get("/nike/products/", (req, res) => {
    return res.json(shoes);
});

app.get("/card", (req, res) => {
    return res.json(cardArr);
});

app.get('/nike/products/:productID', (req, res) => {
    // const productID = req.params.productID
    // const { productID } = req.params
    const { params: { productID } } = req;
  
    return res.json(shoes[productID]);
  })

const port = 8000;
app.listen(port, () => {
    console.log("너의 포트는 : " + port);
});