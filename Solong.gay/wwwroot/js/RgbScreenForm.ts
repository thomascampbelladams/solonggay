class RgbScreenForm {
    private AddButton: HTMLElement;
    private SubmitButton: HTMLElement;
    private SceneList: SceneList;

    constructor(screen: HTMLElement) {
        this.SceneList = new SceneList("", screen);
        this.SceneList.AddScene(new Scene("", screen));

        this.AddButton = document.createElement("button");
        this.AddButton.innerText = "Add Scene +";
        this.AddButton.addEventListener("click", (e) => {
            this.SceneList.AddScene(new Scene("", screen));
        });
        screen.appendChild(this.AddButton);

        this.SubmitButton = document.createElement("button");
        this.SubmitButton.innerText = "Submit";
        this.SubmitButton.addEventListener("click", (e) => {
            console.log(this.SceneList.ToJson());
        });
        screen.appendChild(this.SubmitButton);
    }
}

const screenElem: HTMLElement = document.createElement("div");
screenElem.setAttribute('id', "the-screen");
document.body.appendChild(screenElem);
new RgbScreenForm(screenElem);