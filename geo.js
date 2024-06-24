const x = document.getElementById("location");
        function getLocation() {
            if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);
                
            } else {
               x.innerHTML = "Geolocation is not supported by this browser";
            }
            function showPosition(position) {
                x.innerHTML = "latitude : " + position.coords.latitude + "<br>longitude : " + position.coords.longitude;
            }
        }

        function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }