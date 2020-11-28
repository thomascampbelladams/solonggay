import Scene from "./Scene";

class SceneList {
    public Scenes: Scene[];
    public TimesToRepeat: number;
    private TheScreen: HTMLElement;

    constructor(jsonStr: string, screen: ScreenHelper) {
        let jsonObj: any = JSON.parse(jsonStr);
        let i: number = 0;
        this.TheScreen = screen;

        this.TimesToRepeat = jsonObj["TimesToRepeat"];
        this.Scenes = [];

        jsonObj["Scenes"].forEach(obj => {
            this.Scenes[i] = this.TheScreen.TranslateScene(obj);

            i++;
        });
    }

    /**
     * Render
     */
    public async Render() {
        for (let index = 0; index < this.Scenes.length; index++) {
            const scene = this.Scenes[index];

            await scene.Render(this.TheScreen);
        }
    }
}