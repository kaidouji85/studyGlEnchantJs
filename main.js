enchant();
var game;
window.onload = function() {
    game = new Game(640, 640);
    game.onload = function() {
        scene = new Scene3D(); //3Dのシーンを作る
        obj = new Cube(); //立方体を作る
        scene.addChild(obj); //3Dシーンに立方体を追加

        obj.tl = new enchant.Timeline(obj);
        obj.tl.delay(30).then(function(){
            console.log('コールバック実行');
        });
    };
    game.start();
};