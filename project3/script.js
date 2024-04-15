document.addEventListener("DOMContentLoaded", function() {
    // Get all the buttons
    var buttons = document.querySelectorAll("button");

    // Add click event listeners to each button
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Change the text based on the button clicked
            switch (button.id) {
                case "button1":
                    document.getElementById("output").innerText = "Goodnight moon";
                    break;
                case "button2":
                    document.getElementById("output").innerText = "Goodnight cow jumping over the moon";
                    break;
                case "button3":
                    document.getElementById("output").innerText = "Goodnight light and red balloon";
                    break;
                case "button4":
                    document.getElementById("output").innerText = "Goodnight bears";
                    break;
                case "button5":
                    document.getElementById("output").innerText = "Goodnight chairs";
                    break;
                case "button6":
                    document.getElementById("output").innerText = "Goodnight kittens";
                    break;
                case "button7":
                    document.getElementById("output").innerText = "And goodnight mittens";
                    break;
                case "button8":
                    document.getElementById("output").innerText = "Goodnight clocks";
                    break;
                case "button9":
                    document.getElementById("output").innerText = "And goodnight socks";
                    break;
                case "button10":
                    document.getElementById("output").innerText = "Goodnight little house";
                    break;
                case "button11":
                    document.getElementById("output").innerText = "And goodnight little mouse";
                    break;
                case "button12":
                    document.getElementById("output").innerText = "Goodnight comb";
                    break;
                case "button13":
                    document.getElementById("output").innerText = "And goodnight brush";
                    break;
                case "button14":
                    document.getElementById("output").innerText = "Goodnight nobody";
                    break;
                case "button15":
                    document.getElementById("output").innerText = "Goodnight mush";
                    break;
                case "button16":
                    document.getElementById("output").innerText = "and goodnight to the old lady whispering ~hush~";
                    break;
                case "button17":
                    document.getElementById("output").innerText = "Goodnight stars";
                    break;
                case "button18":
                    document.getElementById("output").innerText = "Goodnight air";
                    break;
                case "button19":
                    document.getElementById("output").innerText = "Goodnight noises everywhere";
                    break;
                default:
                    document.getElementById("output").innerText = "Say goodnight";
            }
        });
    });
});