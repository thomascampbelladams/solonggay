var RgbScreenForm = /** @class */ (function () {
    function RgbScreenForm(screen) {
        var _this = this;
        this.SceneList = new SceneList("", screen);
        this.SceneList.AddScene(new Scene("", screen));
        this.AddButton = document.createElement("button");
        this.AddButton.innerText = "Add Scene +";
        this.AddButton.addEventListener("click", function (e) {
            _this.SceneList.AddScene(new Scene("", screen));
        });
        screen.appendChild(this.AddButton);
        this.SubmitButton = document.createElement("button");
        this.SubmitButton.innerText = "Submit";
        this.SubmitButton.addEventListener("click", function (e) {
            var jsonStr = JSON.stringify(_this.SceneList.ToJson());
            var req = new XMLHttpRequest();
            req.open('POST', '/Home/RgbScreenPost');
            req.onreadystatechange = function () {
                if (req.readyState === 4) {
                    if (req.status === 200) {
                        console.log("SUCCESS");
                    }
                    else {
                        console.log("FAILURE");
                    }
                }
            };
            req.send(jsonStr);
            console.log(_this.SceneList.ToJson());
        });
        screen.appendChild(this.SubmitButton);
    }
    return RgbScreenForm;
}());
var screenElem = document.createElement("div");
screenElem.setAttribute('id', "the-screen");
document.body.appendChild(screenElem);
new RgbScreenForm(screenElem);
