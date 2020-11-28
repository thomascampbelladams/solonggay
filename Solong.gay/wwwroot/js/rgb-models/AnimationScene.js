var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimationScene = /** @class */ (function (_super) {
    __extends(AnimationScene, _super);
    function AnimationScene(screen) {
        var _this = _super.call(this, "", screen) || this;
        _this.MaxAnimationDelay = 100;
        _this.MinAnimationDelay = 0;
        _this.MaxNumberOfTimesToRepeat = 3;
        _this.MinNumberOfTimesToRepeat = 1;
        _this.ContentTextBox = document.createElement("textarea");
        _this.ContentTextBox.addEventListener("change", function (e) {
            _this.Content = _this.ContentTextBox.value;
        });
        _this.ContentLabel = document.createElement("<label>Content</label>");
        _this.AnimationDelayTextBox = document.createElement("input");
        _this.AnimationDelayTextBox.setAttribute("type", "range");
        _this.AnimationDelayTextBox.setAttribute("min", "" + _this.MinAnimationDelay);
        _this.AnimationDelayTextBox.setAttribute("max", "" + _this.MaxAnimationDelay);
        _this.AnimationDelayTextBox.addEventListener("change", function (e) {
            _this.AnimationDelay = parseInt(_this.AnimationDelayTextBox.value);
        });
        _this.AnimationDelayLabel = document.createElement("<label>Animation Delay</label>");
        _this.NumberOfTimesToRepeatTextBox = document.createElement("input");
        _this.NumberOfTimesToRepeatTextBox.setAttribute("type", "range");
        _this.NumberOfTimesToRepeatTextBox.setAttribute("min", "" + _this.MinNumberOfTimesToRepeat);
        _this.NumberOfTimesToRepeatTextBox.setAttribute("max", "" + _this.MaxNumberOfTimesToRepeat);
        _this.NumberOfTimesToRepeatTextBox.addEventListener("change", function (e) {
            _this.NumberOfTimesToRepeat = parseInt(_this.NumberOfTimesToRepeatTextBox.value);
        });
        _this.NumberOfTimesToRepeatLabel = document.createElement("<label>Number of times to repeat</label>");
        _this.SceneToShowInBackgroundDropDown = document.createElement("select");
        _this.SceneToShowInBackgroundForm = document.createElement("div");
        _this.CreateTypeDropDownOptions(_this.SceneToShowInBackgroundDropDown);
        _this.SceneToShowInBackgroundDropDown.addEventListener("change", function (e) {
            if (_this.SceneToShowInBackgroundDropDown.value == "none") {
                _this.SceneToShowInBackgroundForm.innerHTML = "";
            }
            else {
                _this.SceneToShowInBackground = _this.CreateNewScene(_this.SceneToShowInBackgroundDropDown.value);
                _this.SceneToShowInBackground.Render(_this.SceneToShowInBackgroundForm);
            }
        });
        _this.SceneToShowInBackgroundLabel = document.createElement("<label>Scene to show in Background</label>");
        _this.isTwoBitAnimationCheckBox = document.createElement("input");
        _this.isTwoBitAnimationCheckBox.setAttribute("type", "checkbox");
        _this.isTwoBitAnimationCheckBox.addEventListener("change", function (e) {
            _this.isTwoBitAnimation = _this.isTwoBitAnimationCheckBox.checked;
        });
        _this.isTwoBitAnimationLabel = document.createElement("<label>Is two bit animation?</label>");
        return _this;
    }
    /**
     * Render
     */
    AnimationScene.prototype.Render = function (screen) {
        _super.prototype.Render.call(this, screen);
        screen.appendChild(this.ContentLabel);
        screen.appendChild(this.ContentTextBox);
        screen.appendChild(this.AnimationDelayLabel);
        screen.appendChild(this.AnimationDelayTextBox);
        screen.appendChild(this.NumberOfTimesToRepeatLabel);
        screen.appendChild(this.NumberOfTimesToRepeatTextBox);
        screen.appendChild(this.SceneToShowInBackgroundLabel);
        screen.appendChild(this.SceneToShowInBackgroundDropDown);
        screen.appendChild(this.SceneToShowInBackgroundForm);
        screen.appendChild(this.isTwoBitAnimationLabel);
        screen.appendChild(this.isTwoBitAnimationCheckBox);
    };
    AnimationScene.prototype.ToJson = function () {
        var ret = _super.prototype.ToJson.call(this);
        ret["Content"] = this.Content;
        ret["AnimationDelay"] = this.AnimationDelay;
        ret["NumberOfTimesToRepeat"] = this.NumberOfTimesToRepeat;
        ret["SceneToShowInBackground"] = this.SceneToShowInBackground.ToJson();
        ret["isTwoBitAnimation"] = this.isTwoBitAnimation;
        return ret;
    };
    return AnimationScene;
}(Scene));
//# sourceMappingURL=AnimationScene.js.map