const quotes = [
    {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
},
{
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
},
{
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
},
{
    quote: "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
    author: "헬렌 켈러",
},
{
    quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "제임스 오펜하임",
},
{
    quote: "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
    author: "L론허바드",
},
{
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다,",
    author: "앙드레 말로",
},
{
    quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
},
{
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
},
{
    quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다.",
    author: "아인슈타인",
},
{
    quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "톨스토이",
},
{
    quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다. ",
    author: "괴테",
},
{
    quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭",
},
{
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라.",
    author: "호라티우스",
},
{
    quote: "먹고 싶은것을 다 먹는 것은 그렇게 재미있지 않다. 인생을 경계선 없이 살면 기쁨이 덜하다. 먹고싶은대로 다 먹을 수있다면 먹고싶은 것을 먹는데 무슨 재미가 있겠나.",
    author: "톰행크스",
},
{
    quote: "인생에서 원하는 것을 엇기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤스타인",
},
{
    quote: "문제점을 찾지 말고 해결책을 찾으라.",
    author: "헨리 포드",
},
{
    quote: "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라.",
    author: "에픽토테스",
},
{
    quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토벤",
},
{
    quote: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
    author: "아인슈타인",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;