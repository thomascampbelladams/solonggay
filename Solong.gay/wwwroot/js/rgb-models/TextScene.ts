class TextScene extends Scene {
    public Content: string;
    private ContentInput: HTMLInputElement;
    private ContentLabel: HTMLElement;
    public Color: number;
    private ColorInput: HTMLInputElement;
    private ColorLabel: HTMLElement;
    public Font: string;
    private FontDropDown: HTMLSelectElement;
    private FontLabel: HTMLElement;
    public CenteredVertically: boolean;
    private CenteredVerticallyCheckbox: HTMLInputElement;
    private CenteredVerticallyLabel: HTMLElement;
    public CenteredHorizontally: boolean;
    private CenteredHorizontallyCheckbox: HTMLInputElement;
    private CenteredHorizontallyLabel: HTMLElement;
    private availableFonts = [
        "10x20",
        "4x6",
        "5x7",
        "5x8",
        "6x10",
        "6x12",
        "6x13",
        "6x13B",
        "6x13O",
        "6x9",
        "7x13",
        "7x13B",
        "7x13O",
        "7x14",
        "7x14B",
        "8x13",
        "8x13B",
        "8x13O",
        "9x15",
        "9x15B",
        "9x18",
        "9x18B",
        "clR6x12",
        "creep",
        "HaxorMedium-10",
        "HaxorMedium-11",
        "HaxorMedium-12",
        "HaxorMedium-13",
        "HaxorNarrow-15",
        "HaxorNarrow-16",
        "HaxorNarrow-17",
        "helvR12",
        "knxt",
        "logisoso46",
        "peep-10x20",
        "PsevdoAzbukaMedium-12",
        "scientifica-11",
        "scientificaBold-11",
        "scientificaItalic-11",
        "spleen-12x24",
        "spleen-16x32",
        "spleen-32x64",
        "spleen-5x8",
        "spleen-8x16",
        "tom-thumb"
    ];

    constructor(screen: HTMLElement) {
        super("", screen);

        this.ContentInput = document.createElement("input");
        this.ContentInput.setAttribute("type", "text");
        this.ContentInput.addEventListener("change", (e) => {
            this.Content = this.ContentInput.value;
        });
        this.ContentLabel = document.createElement("<label>Content</label>");

        this.ColorInput = document.createElement("input");
        this.ColorInput.setAttribute("type", "color");
        this.ColorInput.addEventListener("change", (e) => {
            this.Color = parseInt(this.ColorInput.value);
        });
        this.ColorLabel = document.createElement("<label>Color of text</label>");

        this.FontDropDown = document.createElement("select");
        this.CreateFontDropDown(this.FontDropDown);
        this.FontDropDown.addEventListener("change", (e) => {
            this.Font = this.FontDropDown.value;
        });
        this.FontLabel = document.createElement("<label>Font</label>");

        this.CenteredVerticallyCheckbox = document.createElement("input");
        this.CenteredVerticallyCheckbox.setAttribute("type", "checkbox");
        this.CenteredVerticallyCheckbox.addEventListener("change", (e) => {
            this.CenteredVertically = this.CenteredVerticallyCheckbox.checked;
        });
        this.CenteredVerticallyLabel = document.createElement("Centered Vertically?");

        this.CenteredHorizontallyCheckbox = document.createElement("input");
        this.CenteredHorizontallyCheckbox.setAttribute("type", "checkbox");
        this.CenteredHorizontallyCheckbox.addEventListener("change", (e) => {
            this.CenteredHorizontally = this.CenteredHorizontallyCheckbox.checked;
        });
        this.CenteredHorizontallyLabel = document.createElement("Centered Horizontally?");
    }

    public CreateFontDropDown(dropdown: HTMLElement) {
        for (let i = 0, len = this.availableFonts.length; i < len; i++) {
            dropdown.appendChild(document.createElement(`<option value="${this.availableFonts[i]}">${this.availableFonts}</option>`));
        }
    }

    /**
     * Render
     */
    public Render(screen: HTMLElement) {
        super.Render(screen);

        screen.appendChild(this.ContentLabel);
        screen.appendChild(this.ContentInput);
        screen.appendChild(this.ColorLabel);
        screen.appendChild(this.ColorInput);
        screen.appendChild(this.FontLabel);
        screen.appendChild(this.FontDropDown);
        screen.appendChild(this.CenteredHorizontallyLabel);
        screen.appendChild(this.CenteredHorizontallyCheckbox);
        screen.appendChild(this.CenteredVerticallyLabel);
        screen.appendChild(this.CenteredVerticallyCheckbox);
    }

    public ToJson() {
        let ret: any = super.ToJson();

        ret["Content"] = this.Content;
        ret["Color"] = this.Color;
        ret["CenteredVertically"] = this.CenteredVertically;
        ret["CenteredHorizontally"] = this.CenteredHorizontally;

        return ret;
    }
}