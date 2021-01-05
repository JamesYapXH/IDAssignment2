
let user = function(uname,pswd,gendr){
    this.username = uname;
    this.password = pswd;
    this.gender = gendr;
}
const btn = document.querySelector('#signbtn');
        // handle click button
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="gender"]');
            var newusername = document.getElementById("uname").value;
            var newpassword = document.getElementById("pswed").value;
            var isUser = false;
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }

            
            for (var i = 0; i < localStorage.length; i++){
                console.log("working...")
                if (newusername === JSON.parse(localStorage.getItem(localStorage.key(i)))){
                    alert("This username already exist! Please try again!");
                    isUser = true;
                    break;
                }
            }
            
                

            
            if (isUser == false){
                if(selectedValue == "male"){
                    let newuser = new user(newusername,newpassword,selectedValue);
                    localStorage.setItem(newusername,JSON.stringify(newuser));
                    alert("You have successfully signed up!");
                }
    
               else if(selectedValue == "female"){
                let newuser = new user(newusername,newpassword,selectedValue);
                localStorage.setItem(newusername,JSON.stringify(newuser));
                alert("You have successfully signed up!");
               }

            }   
        
            
                
            
};