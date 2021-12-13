let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let dateOfBirth = document.getElementById('date').value;
  
  dateOfBirth = new Date(dateOfBirth); //create date object
  
  let dayOfWeek = dateOfBirth.getDay(); //get day of week, Sunday is index 0

  let akanName;
  maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }
  document.getElementById("results").innerHTML = `<h4>Congratulations!!</h4><p>Your Akan name is</p><h5>${akanName}</h5>`;
  document.getElementById("form").reset();  
});