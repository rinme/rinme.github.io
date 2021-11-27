var Flip = true;

var CurStr = "";
var Pos = 0;
var Invert = false;

var TextL = "Rinme";
var TextR = "⌨⌛⌚";

function loop() {
    var Target = Flip ? TextR : TextL;

    if (Pos > Target.length) {
        Invert = true;
    } else if (Pos < 0) {
        if (Invert) {
            Flip = !Flip;
            Target = Flip ? TextR : TextL;
            Pos = 0;
        }

        Invert = false;
    }

    CurStr = Target.substring(0, Pos);
    Pos += (Invert ? -1 : 1);

    if (CurStr.length == 0)
        CurStr = "▪";

    document.getElementsByTagName("title")[0].innerHTML = CurStr;
}

setInterval(loop, 300);