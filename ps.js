let vlog = document.getElementById("vlog")
        let countEl = document.getElementById("count-el")
        let count = 0


        function increment(){
           count = count + 1;
           countEl.textContent = count
        }

        function save() {
            let countStr = count + " - ";
            vlog.textContent += countStr;
            countEl.textContent = 0
            count = 0
        }