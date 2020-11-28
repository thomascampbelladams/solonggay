var SceneList = /** @class */ (function () {
    function SceneList(jsonStr, screen) {
        this.i = 0;
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
    SceneList.prototype.AddScene = function (sceneToAdd) {
        this.Scenes[this.i] = sceneToAdd;
        this.RenderScene(sceneToAdd);
        this.i++;
    };
    /**
     * Render
     */
    SceneList.prototype.Render = function () {
        for (var index = 0; index < this.Scenes.length; index++) {
            var scene = this.Scenes[index];
            this.RenderScene(scene);
        }
    };
    SceneList.prototype.RenderScene = function (scene) {
        scene.Render(this.TheScreen);
    };
    SceneList.prototype.ToJson = function () {
        var jsonObjs = [];
        for (var i = 0, len = this.Scenes.length; i < len; i++) {
            jsonObjs[i] = this.Scenes[i].ToJson();
        }
        return {
            "Scenes": jsonObjs,
            "TimeToRepeat": this.TimesToRepeat
        };
    };
    return SceneList;
}());
//# sourceMappingURL=SceneList.js.map