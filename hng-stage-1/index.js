const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const d = new Date()
const day = weekday[d.getDay()]

document.getElementById('date').innerText = day
document.getElementById('time').innerText = d.toLocaleTimeString()
