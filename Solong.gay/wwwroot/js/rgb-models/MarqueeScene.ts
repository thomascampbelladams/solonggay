class MarqueeScene extends TextScene {
    public AnimationDelay: number;
    private AnimationDelayRangeElement: HTMLInputElement;
    private AnimationDelayLabel: HTMLElement;
    private MaxDelay: number = 100;
    private MinDelay: number = 0;

    constructor(screen: HTMLElement) {
        super(screen);

        this.AnimationDelayRangeElement = document.createElement("input");
        this.AnimationDelayRangeElement.setAttribute("type", "range");
        this.AnimationDelayRangeElement.setAttribute("min", `${this.MinDelay}`);
        this.AnimationDelayRangeElement.setAttribute("max", `${this.MaxDelay}`);
        this.AnimationDelayRangeElement.addEventListener("change", (e) => {
            this.AnimationDelay = parseInt(this.AnimationDelayRangeElement.value);
        });
        this.AnimationDelayLabel = document.createElement("<label>Animation Delay</label>");
    }

    /**
     * async Render
     */
    public Render(screen: HTMLElement) {
        super.Render(screen);

        screen.appendChild(this.AnimationDelayLabel);
        screen.appendChild(this.AnimationDelayRangeElement);
    }

    public ToJson() {
        var ret: any = super.ToJson();

        ret["AnimationDelay"] = this.AnimationDelay;
    }
}