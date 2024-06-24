let startEl = document.getElementById("start-el");
        
        let count = 0;
       
        function plusOne() {
            count = count + 1;
            startEl.textContent = count;
            home.textContent = "free throw"
        }
        function plusTwo(){
            count = count + 2;
            startEl.textContent = count;
            home.textContent = "inside the three point line"
        }
        function plusThree(){
            count = count + 3;
            startEl.textContent = count;
            home.textContent = "beyond the three point line"
        }

        let beginEl = document.getElementById("begin-el");
        let total = 0;
     

        function guestOne(){
            total = total + 1;
            beginEl.textContent = total;
             guest.textContent = "free throw"
        }
        function guestTwo(){
            total = total + 2;
            beginEl.textContent = total;
            guest.textContent = "inside the three point line"
        }
        function guestThree(){
             total = total + 3;
            beginEl.textContent = total;
            guest.textContent = "beyond the three point line"
        }