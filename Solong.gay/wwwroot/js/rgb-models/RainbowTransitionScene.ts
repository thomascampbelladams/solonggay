class RainbowTransitionScene extends AnimationScene {
    public BlockHeight: number;
    private BlockHeightRangeElement: HTMLInputElement;
    private BlockHeightLabel: HTMLElement;
    private BlockHeightMax: number = 10;
    private BlockHeightMin: number = 1;
    public BlockWidth: number;
    private BlockWidthRangeElement: HTMLInputElement;
    private BlockWidthLabel: HTMLElement;
    private BlockWidthMax: number = 10;
    private BlockWidthMin: number = 1;


    constructor(screen: HTMLElement) {
        super(screen);

        this.BlockHeightRangeElement = document.createElement("input");
        this.BlockHeightRangeElement.setAttribute("type", "range");
        this.BlockHeightRangeElement.setAttribute("min", `${this.BlockHeightMin}`);
        this.BlockHeightRangeElement.setAttribute("max", `${this.BlockHeightMax}`);
        this.BlockHeightRangeElement.addEventListener("change", (e) => {
            this.BlockHeight = parseInt(this.BlockHeightRangeElement.value);
        });
        this.BlockHeightLabel = document.createElement("<label>Color block height (in pixels)</label>");

        this.BlockWidthRangeElement = document.createElement("input");
        this.BlockWidthRangeElement.setAttribute("type", "range");
        this.BlockWidthRangeElement.setAttribute("min", `${this.BlockWidthMin}`);
        this.BlockWidthRangeElement.setAttribute("max", `${this.BlockWidthMax}`);
        this.BlockWidthRangeElement.addEventListener("change", (e) => {
            this.BlockWidth = parseInt(this.BlockWidthRangeElement.value);
        });
        this.BlockWidthLabel = document.createElement("<label>Color block width (in pixels)</label>");
    }

    /**
     * Render
     */
    public Render(screen: HTMLElement) {
        super.Render(screen);

        screen.appendChild(this.BlockHeightLabel);
        screen.appendChild(this.BlockHeightRangeElement);
        screen.appendChild(this.BlockWidthLabel);
        screen.appendChild(this.BlockWidthRangeElement);
    }

    public ToJson() {
        let ret: any = super.ToJson();

        ret["BlockHeight"] = this.BlockHeight;
        ret["BlockWidth"] = this.BlockWidth;
    }
}