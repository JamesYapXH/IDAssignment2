function scheduleReset() {
    // get current time
    let reset = new Date();
    // update the Hours, mins, secs to the 24th hour (which is when the next day starts)
    reset.setHours(24, 0, 0, 0);
    // calc amount of time until restart
    let t = reset.getTime() - Date.now();
    setTimeout(function() {
        // reset variable
        if(userObj.gender == "male"){
            userObj.calories = 2300;
            let saveObj = JSON.stringify(userObj);
            sessionStorage.setItem("currentUser",saveObj);
            localStorage.setItem(userObj.username,saveObj);
        }
        else if(userObj.gender == "female"){
            userObj.calories = 1900;
            let saveObj = JSON.stringify(userObj);
            sessionStorage.setItem("currentUser",saveObj);
            localStorage.setItem(userObj.username,saveObj);
        }
        // schedule the next variable reset
        scheduleReset();
    }, t);
}

if(sessionStorage.getItem("loggedIn")== "true"){
    let userObj = JSON.parse(sessionStorage.getItem("currentUser"));
    console.log(userObj);
    scheduleReset();

    $(".calorienum").text(userObj.calories);
    console.log(userObj.calories);
    const btn = document.querySelector('#calorieInput');
        // handle click button
        btn.onclick = function () {
            console.log("test");
            let userInput = document.getElementById("caloriesConsumed").value;
            let newValue = Number(userObj.calories) - Number(userInput);
            userObj.calories = newValue;
            let saveObj = JSON.stringify(userObj);
            sessionStorage.setItem("currentUser",saveObj);
            localStorage.setItem(userObj.username,saveObj);
            $(".calorienum").text(newValue);
            $(".consumedCalories").text(userInput);
        }

}

else{
    alert("Please login first!");
}

