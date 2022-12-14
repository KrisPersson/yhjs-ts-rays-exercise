let state = {
    currentView: '',
    moodValue: 6,
    // Mock data
    moodHistory: [
        { date: 1, month: 9, year: 2021, moodValue: 1 },
        { date: 2, month: 9, year: 2021, moodValue: 4 },
        { date: 3, month: 9, year: 2021, moodValue: 6 },
        { date: 4, month: 9, year: 2021, moodValue: 7 },
        { date: 5, month: 9, year: 2021, moodValue: 5 },
        { date: 6, month: 9, year: 2021, moodValue: 2 },
        { date: 7, month: 9, year: 2021, moodValue: 2 },
        { date: 8, month: 9, year: 2021, moodValue: 1 },
        { date: 9, month: 9, year: 2021, moodValue: 2 },
        { date: 10, month: 9, year: 2021, moodValue:10 },
        { date: 11, month: 9, year: 2021, moodValue: 10 },
        { date: 12, month: 9, year: 2021, moodValue: 6 },
        { date: 13, month: 9, year: 2021, moodValue: 7 },
        { date: 14, month: 9, year: 2021, moodValue: 8 },
        { date: 15, month: 9, year: 2021, moodValue: 8 },
        { date: 16, month: 9, year: 2021, moodValue: 2 },
        { date: 17, month: 9, year: 2021, moodValue: 1 },
        { date: 18, month: 9, year: 2021, moodValue: 1 },
        { date: 19, month: 9, year: 2021, moodValue: 1 },
        { date: 20, month: 9, year: 2021, moodValue: 2 },
        { date: 21, month: 9, year: 2021, moodValue: 4 },
        { date: 22, month: 9, year: 2021, moodValue: 7 },
        { date: 23, month: 9, year: 2021, moodValue: 7 },
        { date: 24, month: 9, year: 2021, moodValue: 10 },
        { date: 25, month: 9, year: 2021, moodValue: 8 },
        { date: 26, month: 9, year: 2021, moodValue: 4 },
        { date: 27, month: 9, year: 2021, moodValue: 4 },
        { date: 28, month: 9, year: 2021, moodValue: 7 },
        { date: 29, month: 9, year: 2021, moodValue: 10 },
        { date: 30, month: 9, year: 2021, moodValue: 9 },
        { date: 1, month: 10, year: 2021, moodValue: 1 },
        { date: 2, month: 10, year: 2021, moodValue: 4 },
        { date: 3, month: 10, year: 2021, moodValue: 6 },
        { date: 4, month: 10, year: 2021, moodValue: 7 },
        { date: 5, month: 10, year: 2021, moodValue: 5 },
        { date: 6, month: 10, year: 2021, moodValue: 2 },
        { date: 7, month: 10, year: 2021, moodValue: 2 },
        { date: 8, month: 10, year: 2021, moodValue: 1 },
        { date: 9, month: 10, year: 2021, moodValue: 2 },
        { date: 10, month: 10, year: 2021, moodValue:10 },
        { date: 11, month: 10, year: 2021, moodValue: 10 },
        { date: 12, month: 10, year: 2021, moodValue: 6 },
        { date: 13, month: 10, year: 2021, moodValue: 7 },
        { date: 14, month: 10, year: 2021, moodValue: 8 },
        { date: 15, month: 10, year: 2021, moodValue: 8 },
        { date: 16, month: 10, year: 2021, moodValue: 2 },
        { date: 17, month: 10, year: 2021, moodValue: 1 },
        { date: 18, month: 10, year: 2021, moodValue: 1 },
        { date: 19, month: 10, year: 2021, moodValue: 1 },
        { date: 20, month: 10, year: 2021, moodValue: 2 },
        { date: 21, month: 10, year: 2021, moodValue: 4 },
        { date: 22, month: 10, year: 2021, moodValue: 7 },
        { date: 23, month: 10, year: 2021, moodValue: 7 },
        { date: 24, month: 10, year: 2021, moodValue: 10 },
        { date: 25, month: 10, year: 2021, moodValue: 8 },
        { date: 26, month: 10, year: 2021, moodValue: 4 },
        { date: 27, month: 10, year: 2021, moodValue: 4 }
    ]
};


let dot = document.querySelector('figure > div');
let d = new Date();
let event = {
    date: d.getDate(),
    month: d.getMonth()+1, // remove index 0
    year: d.getFullYear(),
    moodValue: state.moodValue
}
let historyEl = document.querySelector('#history > section');



document.querySelector('#home').style.display = 'none';
document.querySelector('#dailymood').style.display = 'none';
document.querySelector('#history').style.display = 'none';
document.querySelector(`#${route}`).style.display = 'flex';
document.querySelector('nav').classList.toggle('open');
document.querySelector('nav').classList.toggle('open');    



if(toggleMenu){}

if(entry.date === 1){
    let month = '';

    switch(entry.month) {
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'Mars';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
    } historyEl.insertAdjacentHTML('beforeend', `<div class="blankrow"></div><h3>${month}</h3><aside><div class="grade-${entry.moodValue}">${entry.moodValue}</div></aside>`)
} else {
    historyEl.insertAdjacentHTML('beforeend', `<aside><div class="grade-${entry.moodValue}">${entry.date}</div></aside>`)
}




state.moodValue = e.target.value;
dot.className = '';
dot.classList.add(`grade-${e.target.value}`);
state.moodHistory = [...state.moodHistory, event];
historyEl.innerHTML = '';
state.moodHistory.forEach(entry => {})




renderHistory();
goTo(element.getAttribute('data-route'), true);
goTo('history', false);




document.querySelector('#app > img').addEventListener('click', () => {});
element.addEventListener('click', () => {});
document.querySelector('#moodvalue').addEventListener('input', (e) => {});
document.querySelector('figure > div').addEventListener('click', (e) => {});

document.querySelectorAll('nav > a').forEach(element => {});



async function getQuote() {
    let resp = await fetch('https://quotes.rest/qod.json');
    let data = await resp.json();
    document.querySelector('blockquote')!.innerText = data.contents.quotes[0].quote;

}
function goTo(route, toggleMenu){}
function renderHistory(){}
