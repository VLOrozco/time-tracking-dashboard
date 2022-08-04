// tab buttons daily/weekly/monthly
const dailyBtn = document.getElementById('dailyBtn');

const weeklyBtn = document.getElementById('weeklyBtn');

const monthlyBtn = document.getElementById('monthlyBtn');


// hours by class [console.log returns NodeList]
const dailyHours = document.querySelectorAll('.daily-hrs');

const weeklyHours = document.querySelectorAll('.weekly-hrs');

const monthlyHours = document.querySelectorAll('.monthly-hrs');


// previous hours by class [console-log returns NodeList]
const prevDailyHours = document.querySelectorAll('.daily-last-wk');

const prevWeeklyHours = document.querySelectorAll('.weekly-last-wk');

const prevMonthlyHours = document.querySelectorAll('.monthly-last-wk');


// set event listener for each tab

//daily tab
dailyBtn.addEventListener('click', function showDailyData() {
  // report button tabs
  dailyBtn.style.color = "rgb(255, 255, 255)";
  weeklyBtn.style.color = "rgb(112, 120, 201)";
  monthlyBtn.style.color = "rgb(112, 120, 201)";

  // current hours
  dailyHours.forEach(
    hour => {
      hour.style.opacity = "1";
    }
  )
  weeklyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  monthlyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )

  // previous hours
  prevDailyHours.forEach(
    hour => {
      hour.style.opacity = "1";
    }
  )
  prevWeeklyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  prevMonthlyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
})


//weekly tab
weeklyBtn.addEventListener('click', function showDailyData() {
  // report button tabs
  dailyBtn.style.color = "rgb(112, 120, 201)";
  weeklyBtn.style.color = "rgb(255, 255, 255)";
  monthlyBtn.style.color = "rgb(112, 120, 201)";

  // current hours
  dailyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  weeklyHours.forEach(
    hour => {
      hour.style.opacity = "1";
    }
  )
  monthlyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )

  // previous hours
  prevDailyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  prevWeeklyHours.forEach(
    hour => {
      hour.style.opacity = "1";
    }
  )
  prevMonthlyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
})


//monthly tab
monthlyBtn.addEventListener('click', function showDailyData() {
  // report button tabs
  dailyBtn.style.color = "rgb(112, 120, 201)";
  weeklyBtn.style.color = "rgb(112, 120, 201)";
  monthlyBtn.style.color = "rgb(255, 255, 255)";

  // current hours
  dailyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  weeklyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  monthlyHours.forEach(
    hour => {
      hour.style.opacity = "1";
    }
  )

  // previous hours
  prevDailyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  prevWeeklyHours.forEach(
    hour => {
      hour.style.opacity = "0";
    }
  )
  prevMonthlyHours.forEach(
    hour => {
      hour.style.opacity = "1";
    }
  )
})