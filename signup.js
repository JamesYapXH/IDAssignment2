

let user = function(uname,pswd,gendr,calo){
    this.username = uname;
    this.password = pswd;
    this.gender = gendr;
    this.calories = calo;
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

             
            Object.keys(localStorage).forEach((key) => {
                if (newusername == key){
                    isUser = true;
                    alert("This user already exist! Please refresh and try again.");
                }
               });
            
                

            
            if (isUser == false){
                if(selectedValue == "male"){
                let newuser = new user(newusername,newpassword,selectedValue,2300);
                localStorage.setItem(newusername,JSON.stringify(newuser));
                alert("You have successfully signed up!");
                }
    
               else if(selectedValue == "female"){
                let newuser = new user(newusername,newpassword,selectedValue,1900);
                localStorage.setItem(newusername,JSON.stringify(newuser));
                alert("You have successfully signed up!");
               }

            }   
        
            
                
            
};