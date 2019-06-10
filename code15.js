gdjs.Level11Code = {};
gdjs.Level11Code.GDbackObjects1= [];
gdjs.Level11Code.GDbackObjects2= [];

gdjs.Level11Code.conditionTrue_0 = {val:false};
gdjs.Level11Code.condition0IsTrue_0 = {val:false};
gdjs.Level11Code.condition1IsTrue_0 = {val:false};


gdjs.Level11Code.eventsList0xb24c0 = function(runtimeScene) {

{


gdjs.Level11Code.condition0IsTrue_0.val = false;
{
gdjs.Level11Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level11Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intermission1", false);
}}

}


}; //End of gdjs.Level11Code.eventsList0xb24c0


gdjs.Level11Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level11Code.GDbackObjects1.length = 0;
gdjs.Level11Code.GDbackObjects2.length = 0;

gdjs.Level11Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Level11Code'] = gdjs.Level11Code;
