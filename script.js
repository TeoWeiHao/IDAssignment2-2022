$(document).ready(function () {

    // Set Up
    var noOfLetters = 0;
    var answer = "trope";
    var press = false;

    function SetCurrentToFilled(){
        var currentToFilled = document.querySelector(".current");

        currentToFilled.classList.add("filled");
        currentToFilled.classList.remove("current");
        currentToFilled.querySelector("span").removeAttribute("id");
    }

    function SetUnfilledToCurrent(){
        var unfilledToCurrent = document.querySelector(".unfilled");

        unfilledToCurrent.classList.remove("unfilled");
        unfilledToCurrent.classList.add("current");

        var captionElement = document.createElement("span");
        unfilledToCurrent.appendChild(captionElement);
        unfilledToCurrent.querySelector("span").setAttribute("id", "entered");
    }

    function PressDelete(){
        if(noOfLetters == 5){
            var filledList = document.querySelectorAll(".filled");
            var filledNo = document.querySelectorAll(".filled").length;
            var newCurrent = filledList[filledNo-1];
            
            newCurrent.classList.add("current");
            newCurrent.classList.remove("filled");
            newCurrent.querySelector("span").setAttribute("id", "entered");
            newCurrent.querySelector("span").innerHTML = "";
            noOfLetters--;
        }
        else if(noOfLetters > 0){
            var currentToUnfilled = document.querySelector(".current");
            console.log(currentToUnfilled);
            currentToUnfilled.classList.add("unfilled");
            currentToUnfilled.classList.remove("current");
            currentToUnfilled.innerHTML = "";

            var filledList = document.querySelectorAll(".filled");
            var filledNo = document.querySelectorAll(".filled").length;
            var newCurrent = filledList[filledNo-1];
            
            newCurrent.classList.add("current");
            newCurrent.classList.remove("filled");
            newCurrent.querySelector("span").setAttribute("id", "entered");
            newCurrent.querySelector("span").innerHTML = "";
            noOfLetters--;
        }
        else{
            console.log("None")
        }
    }

    function PressEnter(){
        if(noOfLetters == 5){
            SetUnfilledToCurrent();
            noOfLetters = 0;
        }
        else{
            console.log("Not Full")
        }
    }

    function EnterLetter(letter){
        if(noOfLetters < 4){
            $("#entered").text(letter)

            SetCurrentToFilled();
            SetUnfilledToCurrent();

            noOfLetters++;
        }
        else if(noOfLetters == 4){
            $("#entered").text(letter)

            SetCurrentToFilled();

            noOfLetters++;
        }
        else{
            console.log("Full")
        }
    }

    // On Button Press

    // On Key Press
    $("*").keyup(function(event){
        if(press){
            press = false;
            console.log(event.keyCode);
            if(event.keyCode == 8){
                // Delete
                PressDelete();
            }
            else if(event.keyCode == 13){
                // Enter
                PressEnter();
            }
            else if(event.keyCode == 65){
                // A
                EnterLetter("A");
            }
            else if(event.keyCode == 66){
                // B
                EnterLetter("B");
            }
            else if(event.keyCode == 67){
                // C
                EnterLetter("C");
            }
            else if(event.keyCode == 68){
                // D
                EnterLetter("D");
            }
            else if(event.keyCode == 69){
                // E
                EnterLetter("E");
            }
            else if(event.keyCode == 70){
                // F
                EnterLetter("F");
            }
            else if(event.keyCode == 71){
                // G
                EnterLetter("G");
            }
            else if(event.keyCode == 72){
                // H
                EnterLetter("H");
            }
            else if(event.keyCode == 73){
                // I
                EnterLetter("I");
            }
            else if(event.keyCode == 74){
                // J
                EnterLetter("J");
            }
            else if(event.keyCode == 75){
                // K
                EnterLetter("K");
            }
            else if(event.keyCode == 76){
                // L
                EnterLetter("L");
            }
            else if(event.keyCode == 77){
                // M
                EnterLetter("M");
            }
            else if(event.keyCode == 78){
                // N
                EnterLetter("N");
            }
            else if(event.keyCode == 79){
                // O
                EnterLetter("O");
            }
            else if(event.keyCode == 80){
                // P
                EnterLetter("P");
            }
            else if(event.keyCode == 81){
                // Q
                EnterLetter("Q");
            }
            else if(event.keyCode == 82){
                // R
                EnterLetter("R");
            }
            else if(event.keyCode == 83){
                // S
                EnterLetter("S");
            }
            else if(event.keyCode == 84){
                // T
                EnterLetter("T");
            }
            else if(event.keyCode == 85){
                // U
                EnterLetter("U");
            }
            else if(event.keyCode == 86){
                // V
                EnterLetter("V");
            }
            else if(event.keyCode == 87){
                // W
                EnterLetter("W");
            }
            else if(event.keyCode == 88){
                // X
                EnterLetter("X");
            }
            else if(event.keyCode == 89){
                // Y
                EnterLetter("Y");
            }
            else if(event.keyCode == 90){
                // Z
                EnterLetter("Z");
            }
        }
        else{
            press = true;
        }
    });
});