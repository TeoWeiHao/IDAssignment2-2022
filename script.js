function generateRandomWord(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=16440b1037af310afad6f03fbb00b6cadc7d282a3f8ce2a6a", requestOptions)
        .then(response => response.json())
        .then(function(data){
            localStorage.setItem("word", data.word.toUpperCase())
        })
        .catch(error => console.log('error', error));

}

$(document).ready(function () {

    // Set Up
    var noOfLetters = 0;
    var gameState = true;
    generateRandomWord();

    const ALERTDIV = document.querySelector("#alertspace");
    const HISTORYDIV = document.querySelector("#history");

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
    }

    function PressEnter(){
        var answer = localStorage.getItem("word");
        if(noOfLetters == 5){
            var noOfCorrect = 0;
            for (let i = 0; i < 5; i++) {
                var filledToSubmit = document.querySelector(".filled");
                var filledCharacter = filledToSubmit.querySelector("span").innerHTML;

                if (filledCharacter == answer.slice(i, i+1)){
                    filledToSubmit.classList.add("full-correct");
                    filledToSubmit.classList.remove("filled");
                    noOfCorrect++;

                    if(!document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.contains("btn-success")){
                        document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.add("btn-success");
                    }

                    if(document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.contains("btn-warning")){
                        document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.remove("btn-warning");
                    }
                }
                else if(answer.indexOf(filledCharacter) != -1){
                    filledToSubmit.classList.add("part-correct");
                    filledToSubmit.classList.remove("filled");

                    if(!document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.contains("btn-warning")){
                        document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.add("btn-warning");
                    }
                }
                else{
                    filledToSubmit.classList.add("not-correct");
                    filledToSubmit.classList.remove("filled");

                    if(!document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.contains("btn-dark")){
                        document.querySelector("#" + filledCharacter.toLowerCase() + "Button").classList.add("btn-dark");
                    }
                }
            }
            var unfilled = document.querySelector(".unfilled");
            if(noOfCorrect == 5){
                gameState = false;

                var doneAlert = document.createElement("div");
                doneAlert.append("Good job!");
                ALERTDIV.append(doneAlert);

                var alertList = ALERTDIV.querySelectorAll("div");
                var alertNo = ALERTDIV.querySelectorAll("div").length;
                var newAlert = alertList[alertNo-1];

                newAlert.setAttribute("class", "alert alert-success");
                newAlert.setAttribute("role", "alert");

                var alertCloseButton = document.createElement("button");
                newAlert.append(alertCloseButton);

                var newButton = newAlert.querySelector("button");
                newButton.setAttribute("type", "button");
                newButton.setAttribute("class", "close");
                newButton.setAttribute("data-dismiss", "alert");
                newButton.setAttribute("aria-label", "Close");

                var alertSpan = document.createElement("span");
                alertSpan.append("❌");
                newButton.append(alertSpan);

                var newSpan = newButton.querySelector("span");
                newSpan.setAttribute("aria-hidden", "true");

                var lottieDiv = document.createElement("div");
                lottieDiv.setAttribute("class", "container");
                lottieDiv.setAttribute("style", "text-align: center; vertical-align: middle;");

                var lottieAnimation = document.createElement("lottie-player");
                lottieAnimation.setAttribute("src", "https://assets3.lottiefiles.com/packages/lf20_lk80fpsm.json");
                lottieAnimation.setAttribute("background", "transparent");
                lottieAnimation.setAttribute("speed", "1");
                lottieAnimation.setAttribute("style", "width: 100%; height: 100px;");
                lottieAnimation.setAttribute("autoplay", "");

                lottieDiv.append(lottieAnimation);
                newAlert.append(lottieDiv);
            }
            else if(unfilled != null){
                SetUnfilledToCurrent();
                noOfLetters = 0;
            }
            else{
                gameState = false;
            }
        }
        else{
            var notFullAlert = document.createElement("div");
            notFullAlert.append("Not enough letters");
            ALERTDIV.append(notFullAlert);

            var alertList = ALERTDIV.querySelectorAll("div");
            var alertNo = ALERTDIV.querySelectorAll("div").length;
            var newAlert = alertList[alertNo-1];

            newAlert.setAttribute("class", "alert alert-warning");
            newAlert.setAttribute("role", "alert");

            var alertCloseButton = document.createElement("button");
            newAlert.append(alertCloseButton);

            var newButton = newAlert.querySelector("button");
            newButton.setAttribute("type", "button");
            newButton.setAttribute("class", "close");
            newButton.setAttribute("data-dismiss", "alert");
            newButton.setAttribute("aria-label", "Close");

            var alertSpan = document.createElement("span");
            alertSpan.append("❌");
            newButton.append(alertSpan);

            var newSpan = newButton.querySelector("span");
            newSpan.setAttribute("aria-hidden", "true");
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
    var timePress = "";
    var timeMili = 0;
    $("*").keyup(function(event){
        var d = new Date();
        let ms = d.getMilliseconds();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        var keyInput = event.keyCode + " " + h + " " + m + " " + s;

        if (timePress == keyInput){
            press = false;
        }
        else{
            press = true;
            timePress = keyInput;
            timeMili = ms;
        }

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