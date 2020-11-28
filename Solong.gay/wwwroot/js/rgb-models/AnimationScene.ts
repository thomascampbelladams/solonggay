class AnimationScene extends Scene {
    public Content: string;
    private ContentTextBox: HTMLTextAreaElement;
    private ContentLabel: HTMLElement;
    public AnimationDelay: number;
    private AnimationDelayTextBox: HTMLInputElement;
    private MaxAnimationDelay: number = 100;
    private MinAnimationDelay: number = 0;
    private AnimationDelayLabel: HTMLElement;
    public NumberOfTimesToRepeat: number;
    private NumberOfTimesToRepeatTextBox: HTMLInputElement;
    private MaxNumberOfTimesToRepeat: number = 3;
    private MinNumberOfTimesToRepeat: number = 1;
    private NumberOfTimesToRepeatLabel: HTMLElement;
    public SceneToShowInBackground: Scene;
    private SceneToShowInBackgroundDropDown: HTMLSelectElement;
    private SceneToShowInBackgroundForm: HTMLElement;
    private SceneToShowInBackgroundLabel: HTMLElement;
    public isTwoBitAnimation: boolean;
    private isTwoBitAnimationCheckBox: HTMLInputElement;
    private isTwoBitAnimationLabel: HTMLElement;

    constructor(screen: HTMLElement) {
        super("", screen);

        this.ContentTextBox = document.createElement("textarea");
        this.ContentTextBox.addEventListener("change", (e) => {
            this.Content = this.ContentTextBox.value;
        });
        this.ContentLabel = document.createElement(`<label>Content</label>`);

        this.AnimationDelayTextBox = document.createElement("input");
        this.AnimationDelayTextBox.setAttribute("type", "range");
        this.AnimationDelayTextBox.setAttribute("min", `${this.MinAnimationDelay}`);
        this.AnimationDelayTextBox.setAttribute("max", `${this.MaxAnimationDelay}`);
        this.AnimationDelayTextBox.addEventListener("change", (e) => {
            this.AnimationDelay = parseInt(this.AnimationDelayTextBox.value);
        });
        this.AnimationDelayLabel = document.createElement("<label>Animation Delay</label>");

        this.NumberOfTimesToRepeatTextBox = document.createElement("input");
        this.NumberOfTimesToRepeatTextBox.setAttribute("type", "range");
        this.NumberOfTimesToRepeatTextBox.setAttribute("min", `${this.MinNumberOfTimesToRepeat}`);
        this.NumberOfTimesToRepeatTextBox.setAttribute("max", `${this.MaxNumberOfTimesToRepeat}`);
        this.NumberOfTimesToRepeatTextBox.addEventListener("change", (e) => {
            this.NumberOfTimesToRepeat = parseInt(this.NumberOfTimesToRepeatTextBox.value);
        });
        this.NumberOfTimesToRepeatLabel = document.createElement("<label>Number of times to repeat</label>");

        this.SceneToShowInBackgroundDropDown = document.createElement("select");
        this.SceneToShowInBackgroundForm = document.createElement("div");
        this.CreateTypeDropDownOptions(this.SceneToShowInBackgroundDropDown);
        this.SceneToShowInBackgroundDropDown.addEventListener("change", (e) => {
            if (this.SceneToShowInBackgroundDropDown.value == "none") {
                this.SceneToShowInBackgroundForm.innerHTML = "";
            } else {
                this.SceneToShowInBackground = this.CreateNewScene(this.SceneToShowInBackgroundDropDown.value);
                this.SceneToShowInBackground.Render(this.SceneToShowInBackgroundForm);
            }
        });
        this.SceneToShowInBackgroundLabel = document.createElement("<label>Scene to show in Background</label>");

        this.isTwoBitAnimationCheckBox = document.createElement("input");
        this.isTwoBitAnimationCheckBox.setAttribute("type", "checkbox");
        this.isTwoBitAnimationCheckBox.addEventListener("change", (e) => {
            this.isTwoBitAnimation = this.isTwoBitAnimationCheckBox.checked;
        });
        this.isTwoBitAnimationLabel = document.createElement("<label>Is two bit animation?</label>");
    }

    /**
     * Render
     */
    public Render(screen: HTMLElement) {
        super.Render(screen);

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
    }

    public ToJson(): any {
        let ret: any = super.ToJson();

        ret["Content"] = this.Content;
        ret["AnimationDelay"] = this.AnimationDelay;
        ret["NumberOfTimesToRepeat"] = this.NumberOfTimesToRepeat;
        ret["SceneToShowInBackground"] = this.SceneToShowInBackground.ToJson();
        ret["isTwoBitAnimation"] = this.isTwoBitAnimation;

        return ret;
    }
}