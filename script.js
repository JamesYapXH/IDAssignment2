const btn = document.querySelector('#btn');
        // handle click button
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="gender"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            if(selectedValue == "male"){
                document.getElementById("calogoal").innerHTML = "Your calorie goal: 2300 calories"
            }

           else if(selectedValue == "female"){
                document.getElementById("calogoal").innerHTML = "Your calorie goal: 1900 calories"
           }
                
            
        };
