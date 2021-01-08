if(sessionStorage.getItem("loggedIn")== "true"){
    let userObj = JSON.parse(sessionStorage.getItem("currentUser"));
    console.log(userObj);

    $(".calorienum").text(userObj.calories);
    console.log(userObj.calories);
    const btn = document.querySelector('#calorieInput');
        // handle click button
        btn.onclick = function () {
            console.log("test");
            let userInput = document.getElementById("caloriesConsumed").value;
            console.log(userObj.calories);
            console.log(userInput);
            let newValue = Number(userObj.calories) - Number(userInput);
            console.log(newValue);
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

