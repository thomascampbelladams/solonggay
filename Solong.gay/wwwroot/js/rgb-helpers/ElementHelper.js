var ElementHelper = /** @class */ (function () {
    function ElementHelper() {
    }
    ElementHelper.CreateLabel = function (labelText) {
        var ret = document.createElement('label');
        ret.innerText = labelText;
        return ret;
    };
    ElementHelper.CreateOption = function (valueStr, text) {
        var option = document.createElement("option");
        option.setAttribute("value", valueStr);
        option.innerText = text;
        return option;
    };
    ElementHelper.CreateNewScene = function (sceneName, screen) {
        switch (sceneName) {
            case "horizontal marquee":
                return new MarqueeScene(screen, true);
            case "vertical marquee":
                return new MarqueeScene(screen, false);
            case "animation":
                return new AnimationScene(screen);
            case "rainbow transition":
                return new RainbowTransitionScene(screen);
            case "text":
                return new TextScene(screen);
        }
    };
    ElementHelper.CombineIntoFormGroup = function (label, input) {
        var cont = document.createElement('div');
        cont.setAttribute('class', 'form-group');
        cont.appendChild(label);
        cont.appendChild(input);
        return cont;
    };
    ElementHelper.CreateRangeElement = function (min, max, onChange) {
        var ret = document.createElement('div');
        var numberShower = document.createElement('span');
        var input = document.createElement("input");
        input.setAttribute("type", "range");
        input.setAttribute("min", "" + min);
        input.setAttribute("max", "" + max);
        input.addEventListener("change", onChange);
        input.addEventListener("input", function (e) {
            numberShower.innerText = input.value;
        });
        numberShower.innerText = input.value;
        ret.appendChild(input);
        ret.appendChild(numberShower);
        return ret;
    };
    return ElementHelper;
}());
