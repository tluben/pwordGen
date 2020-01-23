            var passWordLength = parseInt(prompt("How long do you want your password?"))
            var lowerCase = "abcdegfhijklmnopqrstuvwxyz"
            var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            var specialCase = "~!@#$%^&*()-_+=|::?"
            var numberCase = "0123456789"
            var passwordPool = ""
            var myArray = []
            var tflc = confirm("Do you want lower-case letter included?")
            var tfuc = confirm("Do you want upper-case letter included?")
            var tfsc = confirm("Do you want special cases included?")
            var tfnc = confirm("Do you want numbers included?")
            var final = document.getElementById("button")


            if (tflc === true) {
                passwordPool += lowerCase
            }

            if (tfuc === true) {
                passwordPool += upperCase
            }

            if (tfsc === true) {
                passwordPool += specialCase
            }

            if (tfnc === true) {
                passwordPool += numberCase
            }



            passwordPool = passwordPool.split("");


            for (i = 0; i < passWordLength; i++) {
                var cc = Math.floor(Math.random() * passwordPool.length)
                myArray.push(passwordPool[cc])
            }

            console.log(myArray.join(""))
            var output = myArray.join("")

            var htmlSelector = document.getElementById("button")
            htmlSelector.value = output
            
            
            function myFunction(){
            final.select()
            final.setSelectionRange(0, 99999)
            document.execCommand("copy")
            }
