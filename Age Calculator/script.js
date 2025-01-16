function getDOB() {
    const dob = document.getElementById("inputDob").value;
    const currentDate = document.getElementById("cdate").value;
    
    if (!dob || !currentDate) {
        document.getElementById("currentAge").innerHTML = "Please enter both dates.";
        return;
    }

    const dobDate = new Date(dob);
    const current = new Date(currentDate);
    
    let age = current.getFullYear() - dobDate.getFullYear();
    const m = current.getMonth() - dobDate.getMonth();

    if (m < 0 || (m === 0 && current.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById("currentAge").innerHTML = `Your Age is ${age} years.`;
}
