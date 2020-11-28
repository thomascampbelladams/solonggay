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
var RainbowTransitionScene = /** @class */ (function (_super) {
    __extends(RainbowTransitionScene, _super);
    function RainbowTransitionScene(screen) {
        var _this = _super.call(this, screen) || this;
        _this.BlockHeightMax = 10;
        _this.BlockHeightMin = 1;
        _this.BlockWidthMax = 10;
        _this.BlockWidthMin = 1;
        _this.BlockHeightRangeElement = document.createElement("input");
        _this.BlockHeightRangeElement.setAttribute("type", "range");
        _this.BlockHeightRangeElement.setAttribute("min", "" + _this.BlockHeightMin);
        _this.BlockHeightRangeElement.setAttribute("max", "" + _this.BlockHeightMax);
        _this.BlockHeightRangeElement.addEventListener("change", function (e) {
            _this.BlockHeight = parseInt(_this.BlockHeightRangeElement.value);
        });
        _this.BlockHeightLabel = document.createElement("<label>Color block height (in pixels)</label>");
        _this.BlockWidthRangeElement = document.createElement("input");
        _this.BlockWidthRangeElement.setAttribute("type", "range");
        _this.BlockWidthRangeElement.setAttribute("min", "" + _this.BlockWidthMin);
        _this.BlockWidthRangeElement.setAttribute("max", "" + _this.BlockWidthMax);
        _this.BlockWidthRangeElement.addEventListener("change", function (e) {
            _this.BlockWidth = parseInt(_this.BlockWidthRangeElement.value);
        });
        _this.BlockWidthLabel = document.createElement("<label>Color block width (in pixels)</label>");
        return _this;
    }
    /**
     * Render
     */
    RainbowTransitionScene.prototype.Render = function (screen) {
        _super.prototype.Render.call(this, screen);
        screen.appendChild(this.BlockHeightLabel);
        screen.appendChild(this.BlockHeightRangeElement);
        screen.appendChild(this.BlockWidthLabel);
        screen.appendChild(this.BlockWidthRangeElement);
    };
    RainbowTransitionScene.prototype.ToJson = function () {
        var ret = _super.prototype.ToJson.call(this);
        ret["BlockHeight"] = this.BlockHeight;
        ret["BlockWidth"] = this.BlockWidth;
    };
    return RainbowTransitionScene;
}(AnimationScene));
//# sourceMappingURL=RainbowTransitionScene.js.map