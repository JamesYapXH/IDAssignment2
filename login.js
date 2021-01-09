const btn = document.querySelector('#logbtn');
        // handle click button
        btn.onclick = function (){
                //check if user has logged in before
                if(sessionStorage.getItem("loggedIn")== "true"){
                        alert("You are already logged in.");
                }
                //get values and loop through local storage to check if they match and log user into website.
                else{
                        let loginusername = document.getElementById("loginuname").value;
                        let loginpassword = document.getElementById("loginpswd").value;
                        let loginStatus = false;
                        console.log("test");
                        Object.keys(localStorage).forEach((key) =>{
                                let userObj = JSON.parse(localStorage.getItem(key));
                                
                                if(loginusername == userObj.username && loginpassword == userObj.password){
                                        loginStatus = true;
                                        sessionStorage.setItem("loggedIn",true);
                                        let loggedInUser = userObj;
                                        sessionStorage.setItem("currentUser",JSON.stringify(loggedInUser))
                                        alert("Login successful");
                                }

                        });
                        if(loginStatus == false){
                                alert("Login unsuccessful,try again.")
                        }
                }

                
                

        }
