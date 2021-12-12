let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let gender = document.querySelector('input[name="gender"]:checked').value;
  console.log(gender); //just for debugging
  let dateOfBirth = document.getElementById('date').value;
  console.log(dateOfBirth);
  dateOfBirth = new Date(dateOfBirth);
  console.log(dateOfBirth);
  let dayOfWeek = dateOfBirth.getDay();
  console.log(dayOfWeek);

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = weekDays[dayOfWeek];
  console.log(day);

  let akanName;
  maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"]
})