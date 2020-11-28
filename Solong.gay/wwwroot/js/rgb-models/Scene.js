var Scene = /** @class */ (function () {
    function Scene(jsonObj, screen) {
        this.Types = [
            "none",
            "horizontal marquee",
            "vertical marquee",
            "animation",
            "rainbow transition",
            "text"
        ];
        if (jsonObj) {
            for (var prop in jsonObj) {
                this[prop] = jsonObj[prop];
            }
        }
        this.TypeField = document.createElement("select");
        this.TypeLabel = document.createElement("<label>Scene Type</label>");
        this.screen = screen;
    }
    Scene.prototype.CreateTypeDropDownOptions = function (dropdown) {
        for (var i = 0, len = this.Types.length; i < len; i++) {
            dropdown.appendChild(document.createElement("<option value=\"" + this.Types[i] + "\">" + this.Types[i] + "</option>"));
        }
    };
    Scene.prototype.CreateNewScene = function (sceneName) {
        switch (sceneName) {
            case "horizontal marquee":
            case "vertical marquee":
                return new MarqueeScene(this.screen);
            case "animation":
                return new AnimationScene(this.screen);
            case "rainbow transition":
                break;
            case "text":
                return new TextScene(this.screen);
        }
    };
    /**
     * Render
     */
    Scene.prototype.Render = function (screen) {
        var _this = this;
        this.CreateTypeDropDownOptions(this.TypeField);
        this.TypeField.addEventListener("change", function (e) {
            _this.Type = _this.TypeField.value;
        });
        screen.appendChild(this.TypeLabel);
        screen.appendChild(this.TypeField);
    };
    Scene.prototype.ToJson = function () {
        return {
            "Type": this.Type
        };
    };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map