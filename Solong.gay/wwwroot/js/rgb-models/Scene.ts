class Scene {
    public Type: string;
    private TypeField: HTMLSelectElement;
    private TypeLabel: HTMLElement;
    private Types = [
        "none",
        "horizontal marquee",
        "vertical marquee",
        "animation",
        "rainbow transition",
        "text"
    ];
    private screen: HTMLElement;

    constructor(jsonObj: any, screen: HTMLElement) {
        if (jsonObj) {
            for (let prop in jsonObj) {
                this[prop] = jsonObj[prop];
            }
        }

        this.TypeField = document.createElement("select");
        this.TypeLabel = document.createElement(`<label>Scene Type</label>`);
        this.screen = screen;
    }

    public CreateTypeDropDownOptions(dropdown: HTMLElement) {
        for (let i = 0, len = this.Types.length; i < len; i++) {
            dropdown.appendChild(document.createElement(`<option value="${this.Types[i]}">${this.Types[i]}</option>`));
        }
    }

    public CreateNewScene(sceneName: string) {
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
    }

    /**
     * Render
     */
    public Render(screen: HTMLElement) {
        this.CreateTypeDropDownOptions(this.TypeField);

        this.TypeField.addEventListener("change", (e) => {
            this.Type = this.TypeField.value;
        });

        screen.appendChild(this.TypeLabel);
        screen.appendChild(this.TypeField);
    }

    public ToJson() {
        return {
            "Type": this.Type
        };
    }
}