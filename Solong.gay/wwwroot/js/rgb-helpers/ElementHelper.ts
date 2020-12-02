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

    public static CreateFontChooser(fonts: string[], onChange): HTMLElement {
        const ret = document.createElement('div');
        const dropDown: HTMLSelectElement = document.createElement('select');
        const fontPreview: HTMLImageElement = document.createElement('img');
        const imageDir = "/assets/rgb-screen-font-examples";
        const dropDownandPreviewCont = document.createElement('div');

        dropDownandPreviewCont.appendChild(dropDown);
        dropDownandPreviewCont.appendChild(fontPreview);

        dropDown.addEventListener("change", onChange);
        dropDown.addEventListener("change", (e) => {
            const fontFileName = `${dropDown.value}.jpg`;
            const animatedFontFileName = `${dropDown.value}.gif`;

            this.CheckToSeeIfUrlResolves(`${imageDir}/${fontFileName}`).then(() => {
                fontPreview.setAttribute('src', `${location.protocol}//${location.host}${imageDir}/${fontFileName}`);
            }).catch(() => {
                fontPreview.setAttribute('src', `${location.protocol}//${location.host}${imageDir}/${animatedFontFileName}`);
            });
        });
        this.CreateFontDropDown(fonts, dropDown);

        ret.appendChild(dropDownandPreviewCont);

        this.CheckToSeeIfUrlResolves(`${imageDir}/${fonts[0]}.jpg`).then(() => {
            fontPreview.setAttribute('src', `${location.protocol}//${location.host}${imageDir}/${fonts[0]}.jpg`);
        }).catch(() => {
            fontPreview.setAttribute('src', `${location.protocol}//${location.host}${imageDir}/${fonts[0]}.gif`);
        });

        return ret;
    }

    public static CheckToSeeIfUrlResolves(url: string) {
        return new Promise<void>((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (this.readyState === this.DONE) {
                    this.status === 200 ? resolve() : reject();
                }
            };
            xhr.open('GET', url);
            xhr.send();
        });
    }

    public static CreateFontDropDown(fonts: string[], dropdown: HTMLElement) {
        for (let i = 0, len = fonts.length; i < len; i++) {
            dropdown.appendChild(ElementHelper.CreateOption(fonts[i], fonts[i]));
        }
    }
}