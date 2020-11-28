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
var MarqueeScene = /** @class */ (function (_super) {
    __extends(MarqueeScene, _super);
    function MarqueeScene(screen) {
        var _this = _super.call(this, screen) || this;
        _this.MaxDelay = 100;
        _this.MinDelay = 0;
        _this.AnimationDelayRangeElement = document.createElement("input");
        _this.AnimationDelayRangeElement.setAttribute("type", "range");
        _this.AnimationDelayRangeElement.setAttribute("min", "" + _this.MinDelay);
        _this.AnimationDelayRangeElement.setAttribute("max", "" + _this.MaxDelay);
        _this.AnimationDelayRangeElement.addEventListener("change", function (e) {
            _this.AnimationDelay = parseInt(_this.AnimationDelayRangeElement.value);
        });
        _this.AnimationDelayLabel = document.createElement("<label>Animation Delay</label>");
        return _this;
    }
    /**
     * async Render
     */
    MarqueeScene.prototype.Render = function (screen) {
        _super.prototype.Render.call(this, screen);
        screen.appendChild(this.AnimationDelayLabel);
        screen.appendChild(this.AnimationDelayRangeElement);
    };
    MarqueeScene.prototype.ToJson = function () {
        var ret = _super.prototype.ToJson.call(this);
        ret["AnimationDelay"] = this.AnimationDelay;
    };
    return MarqueeScene;
}(TextScene));
//# sourceMappingURL=MarqueeScene.js.map