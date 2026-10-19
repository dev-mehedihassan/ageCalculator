const birthDate = document.getElementById("birthDate");
const calculateBtn = document.getElementById("calculateBtn");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const message = document.getElementById("message");

calculateBtn.addEventListener("click", () => {
    const birthDateValue = birthDate.value;

    // Check if the input is empty
    if(birthDateValue === "") {
        message.textContent = "Please enter your date of birth.";
        return;
    }

    const birth = new Date(birthDateValue);
    const today = new Date();

    // Check if the input is a valid date
    if(birth > today) {
        message.textContent = "Please enter a valid date of birth.";
        return;
    }

    message.textContent = ""; // Clear any previous messages

    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();

    // Adjust for negative days
    if(ageDays < 0) {
        ageMonths--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += previousMonth.getDate();
    }

    // Adjust for negative months
    if(ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    years.textContent = ageYears;
    months.textContent = ageMonths;
    days.textContent = ageDays;
})