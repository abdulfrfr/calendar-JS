let nav = new Date().getMonth()

const calendar = document.getElementById('calendar')
const display_date = document.getElementById('date')

const next = document.getElementById('nextPage')
const prev = document.getElementById('prevPage')

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


//function to lad the page when it loads up
function load(){

const dt = new Date()
const day = dt.getDate()

if(nav !== new Date().getMonth()){
    dt.setMonth(nav)
}

const month = dt.getMonth()
const year = dt.getFullYear()



//total days in the month
const fullMonth = new Date(year, month + 1, 0).getDate()

//get month current month's full details in order to get the first day of the month
const lastdayOfMonth = new Date(year, month, 1)
const fullDate = lastdayOfMonth.toLocaleDateString('en-uk',{
weekday: 'long',
day: 'numeric',
month: 'numeric',
year: 'numeric'
})


//get the current month string
const currentMonth = new Date(year, month) . toLocaleDateString('en-uk', {month: 'long'})

display_date.innerText = `${currentMonth} ${year}`

//get previous month first day
const firstMonthDay = weekdays.indexOf(fullDate.split(', ')[0])


//set the calendar into an empty string before running the loop and re-rendering the calendar
calendar.innerHTML = ''

for(let i = 1; i <= firstMonthDay; i++){
    const paddingDays = document.createElement('div')
    paddingDays.classList.add('nonday')

    calendar.appendChild(paddingDays)
}
for(let i = 1; i <= fullMonth; i++){
    const days = document.createElement('div')
    days.classList.add('day')

    days.innerText = i

    calendar.appendChild(days)
}

}

function navigation(){

    next.addEventListener('click', ()=>{
        nav++

        console.log(nav);
        load()
    })
    prev.addEventListener('click', ()=>{
        nav--
        load()
    })

}
load()
navigation()


/* 

get the date api that javascript gives us that's built inside our browser, get the present weekday in string format, have an array of the seven weekdays
so that you can find the index with the string and also use the index to get the amount of free space to keep as the previous month endings and the start of the present month. get the year and month, get a state value that will be used to add and change the month, set that 
date api month using the state value.
 

*/