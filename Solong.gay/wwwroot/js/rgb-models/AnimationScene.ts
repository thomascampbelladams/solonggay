class AnimationScene extends Scene {
    public Content: number[][][];
    private ContentTextBox: HTMLElement;
    public AnimationDelay: number;
    private AnimationDelayTextBox: HTMLElement;
    private MaxAnimationDelay: number = 100;
    private MinAnimationDelay: number = 0;
    public NumberOfTimesToRepeat: number;
    private NumberOfTimesToRepeatTextBox: HTMLElement;
    private MaxNumberOfTimesToRepeat: number = 3;
    private MinNumberOfTimesToRepeat: number = 1;
    public SceneToShowInBackground: Scene;
    private SceneToShowInBackgroundDropDown: HTMLElement;
    private SceneToShowInBackgroundForm: HTMLElement;
    public isTwoBitAnimation: boolean;
    private isTwoBitAnimationCheckBox: HTMLElement;

    constructor(screen: HTMLElement) {
        this.ContentTextBox = document.createElement("textarea");
        this.ContentTextBox.addEventListener("change", (e) => {
            this.Content = this.ContentTextBox.value;
        });

        this.AnimationDelayTextBox = document.createElement("input");
        this.AnimationDelayTextBox.setAttribute("type", "range");
        this.AnimationDelayTextBox.setAttribute("min", this.MinAnimationDelay);
        this.AnimationDelayTextBox.setAttribute("max", this.MaxAnimationDelay);
        this.AnimationDelayTextBox.addEventListener("change", (e) => {
            this.AnimationDelay = this.AnimationDelayTextBox.value;
        });

        this.NumberOfTimesToRepeatTextBox = document.createElement("input");
        this.NumberOfTimesToRepeatTextBox.setAttribute("type", "range");
        this.NumberOfTimesToRepeatTextBox.setAttribute("min", this.MinNumberOfTimesToRepeat);
        this.NumberOfTimesToRepeatTextBox.setAttribute("max", this.MaxNumberOfTimesToRepeat);
        this.NumberOfTimesToRepeatTextBox.addEventListener("change", (e) => {
            this.NumberOfTimesToRepeat = this.NumberOfTimesToRepeatTextBox.value;
        });

        this.SceneToShowInBackgroundDropDown = document.createElement("select");
        this.SceneToShowInBackgroundForm = document.createElement("div");
        this.CreateTypeDropDownOptions(this.SceneToShowInBackground);
        this.SceneToShowInBackgroundDropDown.addEventListener("change", (e) => {
            if (this.SceneToShowInBackgroundDropDown.value == "none") {
                this.SceneToShowInBackgroundForm.innerHTML = "";
            } else {
                this.SceneToShowInBackground = this.CreateNewScene(this.SceneToShowInBackgroundDropDown.value);
                this.SceneToShowInBackground.Render(this.SceneToShowInBackgroundForm);
            }
        });

        this.isTwoBitAnimationCheckBox = document.createElement("checkbox");
        this.isTwoBitAnimationCheckBox.addEventListener("change", (e) => {
            this.isTwoBitAnimation = this.isTwoBitAnimationCheckBox.isChecked;
        });
    }

    /**
     * Render
     */
    public Render(screen: HTMLElement) {
        super.Render(screen);

        screen.appendChild(this.AnimationDelayTextBox);
        screen.appendChild(this.NumberOfTimesToRepeatTextBox);
        screen.appendChild(this.SceneToShowInBackgroundDropDown);
        screen.appendChild(this.SceneToShowInBackgroundForm);
        screen.appendChild(this.isTwoBitAnimationCheckBox);
    }

    public ToJson(): any {
        let ret: any = super.ToJson();

        ret["Content"] = this.Content;
        ret["AnimationDelaty"] = this.AnimationDelay;
        ret["NumberOfTimesToRepeat"] = this.NumberOfTimesToRepeat;
        ret["SceneToShowInBackground"] = this.SceneToShowInBackground.ToJson();
        ret["isTwoBitAnimation"] = this.isTwoBitAnimation;

        return ret;
    }
}