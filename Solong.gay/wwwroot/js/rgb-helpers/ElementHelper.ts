class ElementHelper {
    public static CreateLabel(labelText: string): HTMLLabelElement {
        const ret = document.createElement('label');

        ret.innerText = labelText;

        return ret;
    }

    public static CreateOption(valueStr: string, text: string): HTMLOptionElement {
        const option = document.createElement("option");

        option.setAttribute("value", valueStr);
        option.innerText = text;

        return option;
    }

    public static CreateNewScene(sceneName: string, screen: HTMLElement) {
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
    }

    public static CombineIntoFormGroup(label: HTMLLabelElement, input: HTMLElement): HTMLElement {
        const cont = document.createElement('div');

        cont.setAttribute('class', 'form-group');
        cont.appendChild(label);
        cont.appendChild(input);

        return cont;
    }

    public static CreateRangeElement(min: number, max: number, onChange): HTMLElement {
        const ret = document.createElement('div');
        const numberShower = document.createElement('span');
        const input = document.createElement("input");

        input.setAttribute("type", "range");
        input.setAttribute("min", `${min}`);
        input.setAttribute("max", `${max}`);
        input.addEventListener("change", onChange);
        input.addEventListener("input", (e) => {
            numberShower.innerText = input.value;
        });

        numberShower.innerText = input.value;

        ret.appendChild(input);
        ret.appendChild(numberShower);

        return ret;
    }
}