
const Numberofdrum = document.querySelectorAll(".drum").length;

for (let i = 0; i < Numberofdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "w":
        var audio = new Audio("accets/tom_1.mp3");
        audio.play();
        break;
      case "a":
        var audio2 = new Audio("accets/tom_2.mp3");
        audio2.play();
        break;

      case "b":
        var audio3 = new Audio("accets/tom_3.mp3");
        audio3.play();
        break;

      case "s":
        var audio4 = new Audio("accets/tom_4.mp3");
        audio4.play();
        break;

      case "p":
        var audio5 = new Audio("accets/tom_5.mp3");
        audio5.play();
        break;

      case "t":
        var audio6 = new Audio("accets/tom_1.mp3");
        audio6.play();
        break;

      default:
        console.log(buttonInnerHtml);
        break;
    }
  });
}
