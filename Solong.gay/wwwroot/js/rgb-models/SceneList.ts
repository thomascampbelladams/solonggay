class SceneList {
    public Scenes: Scene[];
    public TimesToRepeat: number;
    private TheScreen: HTMLElement;
    private i: number = 0;

    constructor(jsonStr: string, screen: HTMLElement) {
        this.TheScreen = screen;
        this.TimesToRepeat = 1;
        this.Scenes = [];

        /*if (jsonStr) {
            let jsonObj: any = JSON.parse(jsonStr);

            jsonObj["Scenes"].forEach(obj => {
                this.Scenes[this.i] = this.TheScreen.TranslateScene(obj);

                this.i++;
            });
        }*/
    }

    public AddScene(sceneToAdd: Scene) {
        this.Scenes[this.i] = sceneToAdd;
        this.RenderScene(sceneToAdd);

        this.i++;
    }

    /**
     * Render
     */
    public Render() {
        for (let index = 0; index < this.Scenes.length; index++) {
            const scene = this.Scenes[index];

            this.RenderScene(scene);
        }
    }

    private RenderScene(scene: Scene) {
        scene.Render(this.TheScreen);
    }

    public ToJson() {
        var jsonObjs: any[] = [];

        for (let i = 0, len = this.Scenes.length; i < len; i++) {
            jsonObjs[i] = this.Scenes[i].ToJson();
        }

        return {
            "Scenes": jsonObjs,
            "TimeToRepeat": this.TimesToRepeat
        };
    }
}