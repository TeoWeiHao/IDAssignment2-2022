$(document).ready(function () {

    // Set Up
    var noOfLetters = 0;
    var answer = "ALBAN";

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
            var noOfCorrect = 0;
            for (let i = 0; i < 5; i++) {
                var filledToSubmit = document.querySelector(".filled");
                var filledCharacter = filledToSubmit.querySelector("span").innerHTML;

                if (filledCharacter == answer.slice(i, i+1)){
                    filledToSubmit.classList.add("full-correct");
                    filledToSubmit.classList.remove("filled");
                    noOfCorrect++;
                }
                else if(answer.indexOf(filledCharacter) != -1){
                    filledToSubmit.classList.add("part-correct");
                    filledToSubmit.classList.remove("filled");
                }
                else{
                    filledToSubmit.classList.add("not-correct");
                    filledToSubmit.classList.remove("filled");
                }
            }
            var unfilled = document.querySelector(".unfilled");
            if(noOfCorrect == 5){
                console.log("Correct")
            }
            else if(unfilled != null){
                SetUnfilledToCurrent();
                noOfLetters = 0;
            }
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
    $("#aButton").on("click", function(){
        EnterLetter("A");
    });
    $("#bButton").on("click", function(){
        EnterLetter("B");
    });
    $("#cButton").on("click", function(){
        EnterLetter("C");
    });
    $("#dButton").on("click", function(){
        EnterLetter("D");
    });
    $("#eButton").on("click", function(){
        EnterLetter("E");
    });
    $("#fButton").on("click", function(){
        EnterLetter("F");
    });
    $("#gButton").on("click", function(){
        EnterLetter("G");
    });
    $("#hButton").on("click", function(){
        EnterLetter("H");
    });
    $("#iButton").on("click", function(){
        EnterLetter("I");
    });
    $("#jButton").on("click", function(){
        EnterLetter("J");
    });
    $("#kButton").on("click", function(){
        EnterLetter("K");
    });
    $("#lButton").on("click", function(){
        EnterLetter("L");
    });
    $("#mButton").on("click", function(){
        EnterLetter("M");
    });
    $("#nButton").on("click", function(){
        EnterLetter("N");
    });
    $("#oButton").on("click", function(){
        EnterLetter("O");
    });
    $("#pButton").on("click", function(){
        EnterLetter("P");
    });
    $("#qButton").on("click", function(){
        EnterLetter("Q");
    });
    $("#rButton").on("click", function(){
        EnterLetter("R");
    });
    $("#sButton").on("click", function(){
        EnterLetter("S");
    });
    $("#tButton").on("click", function(){
        EnterLetter("T");
    });
    $("#uButton").on("click", function(){
        EnterLetter("U");
    });
    $("#vButton").on("click", function(){
        EnterLetter("V");
    });
    $("#wButton").on("click", function(){
        EnterLetter("W");
    });
    $("#xButton").on("click", function(){
        EnterLetter("X");
    });
    $("#yButton").on("click", function(){
        EnterLetter("Y");
    });
    $("#zButton").on("click", function(){
        EnterLetter("Z");
    });
    $("#deleteButton").on("click", function(){
        PressDelete();
    });
    $("#enterButton").on("click", function(){
        PressEnter();
    });

    // On Key Press
    var timePress = new Date("January 1, 1970 00:00:00");
    $("*").keyup(function(event){
        var d = new Date();
        let ms = d.getMilliseconds();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        console.log(s, " ", ms);

        if (timePress.getMinutes() == m && timePress.getSeconds() == s && timePress.getHours() == h){
            if(timePress.getMilliseconds + 5 > ms){
                press = true;
            }
            else{
                press = false;
            }
        }
        else{
            press = true;
        }

        timePress = d;

        if(press){
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
    });
});