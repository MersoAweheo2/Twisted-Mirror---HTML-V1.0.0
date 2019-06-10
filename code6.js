gdjs.Level2Code = {};
gdjs.Level2Code.GDblackPlayerObjects3_1final = [];

gdjs.Level2Code.GDdeadlyPlatObjects3_1final = [];

gdjs.Level2Code.GDenemyObjects3_1final = [];

gdjs.Level2Code.GDwhitePlayerObjects3_1final = [];

gdjs.Level2Code.GDbackgroundWallObjects1= [];
gdjs.Level2Code.GDbackgroundWallObjects2= [];
gdjs.Level2Code.GDbackgroundWallObjects3= [];
gdjs.Level2Code.GDbackgroundWallObjects4= [];
gdjs.Level2Code.GDbackgroundWallObjects5= [];
gdjs.Level2Code.GDwall1Objects1= [];
gdjs.Level2Code.GDwall1Objects2= [];
gdjs.Level2Code.GDwall1Objects3= [];
gdjs.Level2Code.GDwall1Objects4= [];
gdjs.Level2Code.GDwall1Objects5= [];
gdjs.Level2Code.GDwall2Objects1= [];
gdjs.Level2Code.GDwall2Objects2= [];
gdjs.Level2Code.GDwall2Objects3= [];
gdjs.Level2Code.GDwall2Objects4= [];
gdjs.Level2Code.GDwall2Objects5= [];
gdjs.Level2Code.GDborderWallObjects1= [];
gdjs.Level2Code.GDborderWallObjects2= [];
gdjs.Level2Code.GDborderWallObjects3= [];
gdjs.Level2Code.GDborderWallObjects4= [];
gdjs.Level2Code.GDborderWallObjects5= [];
gdjs.Level2Code.GDportalObjects1= [];
gdjs.Level2Code.GDportalObjects2= [];
gdjs.Level2Code.GDportalObjects3= [];
gdjs.Level2Code.GDportalObjects4= [];
gdjs.Level2Code.GDportalObjects5= [];
gdjs.Level2Code.GDblackPlayerObjects1= [];
gdjs.Level2Code.GDblackPlayerObjects2= [];
gdjs.Level2Code.GDblackPlayerObjects3= [];
gdjs.Level2Code.GDblackPlayerObjects4= [];
gdjs.Level2Code.GDblackPlayerObjects5= [];
gdjs.Level2Code.GDwhitePlayerObjects1= [];
gdjs.Level2Code.GDwhitePlayerObjects2= [];
gdjs.Level2Code.GDwhitePlayerObjects3= [];
gdjs.Level2Code.GDwhitePlayerObjects4= [];
gdjs.Level2Code.GDwhitePlayerObjects5= [];
gdjs.Level2Code.GDenemyObjects1= [];
gdjs.Level2Code.GDenemyObjects2= [];
gdjs.Level2Code.GDenemyObjects3= [];
gdjs.Level2Code.GDenemyObjects4= [];
gdjs.Level2Code.GDenemyObjects5= [];
gdjs.Level2Code.GDdeadlyPlatObjects1= [];
gdjs.Level2Code.GDdeadlyPlatObjects2= [];
gdjs.Level2Code.GDdeadlyPlatObjects3= [];
gdjs.Level2Code.GDdeadlyPlatObjects4= [];
gdjs.Level2Code.GDdeadlyPlatObjects5= [];
gdjs.Level2Code.GDflashObjects1= [];
gdjs.Level2Code.GDflashObjects2= [];
gdjs.Level2Code.GDflashObjects3= [];
gdjs.Level2Code.GDflashObjects4= [];
gdjs.Level2Code.GDflashObjects5= [];
gdjs.Level2Code.GDmovementLeftCollideObjects1= [];
gdjs.Level2Code.GDmovementLeftCollideObjects2= [];
gdjs.Level2Code.GDmovementLeftCollideObjects3= [];
gdjs.Level2Code.GDmovementLeftCollideObjects4= [];
gdjs.Level2Code.GDmovementLeftCollideObjects5= [];
gdjs.Level2Code.GDmovementRightCollideObjects1= [];
gdjs.Level2Code.GDmovementRightCollideObjects2= [];
gdjs.Level2Code.GDmovementRightCollideObjects3= [];
gdjs.Level2Code.GDmovementRightCollideObjects4= [];
gdjs.Level2Code.GDmovementRightCollideObjects5= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.condition3IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};
gdjs.Level2Code.condition3IsTrue_1 = {val:false};
gdjs.Level2Code.conditionTrue_2 = {val:false};
gdjs.Level2Code.condition0IsTrue_2 = {val:false};
gdjs.Level2Code.condition1IsTrue_2 = {val:false};
gdjs.Level2Code.condition2IsTrue_2 = {val:false};
gdjs.Level2Code.condition3IsTrue_2 = {val:false};
gdjs.Level2Code.conditionTrue_3 = {val:false};
gdjs.Level2Code.condition0IsTrue_3 = {val:false};
gdjs.Level2Code.condition1IsTrue_3 = {val:false};
gdjs.Level2Code.condition2IsTrue_3 = {val:false};
gdjs.Level2Code.condition3IsTrue_3 = {val:false};


gdjs.Level2Code.eventsList0x791f3c = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x791f3c
gdjs.Level2Code.eventsList0x792e0c = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects3[i].setX(970 - (( gdjs.Level2Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level2Code.GDblackPlayerObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects3[i].setY((( gdjs.Level2Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level2Code.GDblackPlayerObjects3[0].getPointY("")));
}
}}

}


{



}


{



}


}; //End of gdjs.Level2Code.eventsList0x792e0c
gdjs.Level2Code.eventsList0x791e8c = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Main Movement"); }gdjs.Level2Code.eventsList0x791f3c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Main Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("White Player Movement"); }gdjs.Level2Code.eventsList0x792e0c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("White Player Movement"); }
}


}; //End of gdjs.Level2Code.eventsList0x791e8c
gdjs.Level2Code.eventsList0x79392c = function(runtimeScene) {

{

gdjs.Level2Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDportalObjects4.length;i<l;++i) {
    if ( gdjs.Level2Code.GDportalObjects4[i].getX() <= 400 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDportalObjects4[k] = gdjs.Level2Code.GDportalObjects4[i];
        ++k;
    }
}
gdjs.Level2Code.GDportalObjects4.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDportalObjects4 */
{for(var i = 0, len = gdjs.Level2Code.GDportalObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDportalObjects4[i].rotate(-(60), runtimeScene);
}
}}

}


{

gdjs.Level2Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level2Code.GDportalObjects3[i].getX() >= 500 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDportalObjects3[k] = gdjs.Level2Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level2Code.GDportalObjects3.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDportalObjects3 */
{for(var i = 0, len = gdjs.Level2Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDportalObjects3[i].rotate(60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDportalObjects3[i].flipX(true);
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x79392c
gdjs.Level2Code.eventsList0x79374c = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList0x79392c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level2Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDportalObjects3[i].setOpacity(70);
}
}}

}


{

gdjs.Level2Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level2Code.GDportalObjects3[i].getOpacity() > 95 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDportalObjects3[k] = gdjs.Level2Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level2Code.GDportalObjects3.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(0);
}}

}


{

gdjs.Level2Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level2Code.GDportalObjects3[i].getOpacity() < 65 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDportalObjects3[k] = gdjs.Level2Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level2Code.GDportalObjects3.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(1);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 1;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level2Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDportalObjects3[i].setOpacity(gdjs.Level2Code.GDportalObjects3[i].getOpacity() + (1));
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 0;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDportalObjects2.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level2Code.GDportalObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDportalObjects2[i].setOpacity(gdjs.Level2Code.GDportalObjects2[i].getOpacity() - (1));
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x79374c
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level2Code_46GDwhitePlayerObjects3Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level2Code.GDblackPlayerObjects3, "whitePlayer": gdjs.Level2Code.GDwhitePlayerObjects3});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDportalObjects3Objects = Hashtable.newFrom({"portal": gdjs.Level2Code.GDportalObjects3});gdjs.Level2Code.eventsList0x794dc4 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7950252);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level2Code.eventsList0x794dc4
gdjs.Level2Code.eventsList0x794b7c = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7949860);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x794dc4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level2Code.eventsList0x794b7c
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level2Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level2Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level2Code.GDwhitePlayerObjects4});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDportalObjects4Objects = Hashtable.newFrom({"portal": gdjs.Level2Code.GDportalObjects4});gdjs.Level2Code.eventsList0x795b84 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7953772);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level2Code.eventsList0x795b84
gdjs.Level2Code.eventsList0x79593c = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7953380);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDblackPlayerObjects4 */
{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x795b84(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level2Code.eventsList0x79593c
gdjs.Level2Code.eventsList0x7965dc = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7957468);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level2Code.eventsList0x7965dc
gdjs.Level2Code.eventsList0x797134 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7959532);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level2Code.eventsList0x797134
gdjs.Level2Code.eventsList0x796dac = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7958932);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level2Code.eventsList0x797134(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level2Code.eventsList0x796dac
gdjs.Level2Code.eventsList0x79630c = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
{gdjs.Level2Code.conditionTrue_2 = gdjs.Level2Code.condition0IsTrue_1;
gdjs.Level2Code.condition0IsTrue_2.val = false;
{
gdjs.Level2Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}gdjs.Level2Code.conditionTrue_2.val = true && gdjs.Level2Code.condition0IsTrue_2.val;
}
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level2Code.conditionTrue_2 = gdjs.Level2Code.condition1IsTrue_1;
gdjs.Level2Code.condition0IsTrue_2.val = false;
gdjs.Level2Code.condition1IsTrue_2.val = false;
{
gdjs.Level2Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level2Code.condition0IsTrue_2.val ) {
{
{gdjs.Level2Code.conditionTrue_3 = gdjs.Level2Code.condition1IsTrue_1;
gdjs.Level2Code.conditionTrue_3.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}}
gdjs.Level2Code.conditionTrue_2.val = true && gdjs.Level2Code.condition0IsTrue_2.val && gdjs.Level2Code.condition1IsTrue_2.val;
}
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7956844);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level2Code.eventsList0x7965dc(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition2IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7958388);
}
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "noMistakeScore", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Level2Code.eventsList0x796dac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level2Code.eventsList0x79630c
gdjs.Level2Code.eventsList0x795684 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level2Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level2Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level2Code_46GDwhitePlayerObjects4Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDportalObjects4Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7952964);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDwhitePlayerObjects4 */
{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x79593c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDflashObjects4.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level2Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level2Code.GDflashObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects4[i].setOpacity(gdjs.Level2Code.GDflashObjects4[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "endTime");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("noMistakeOriginalScore"));
}
{ //Subevents
gdjs.Level2Code.eventsList0x79630c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level2Code.eventsList0x795684
gdjs.Level2Code.eventsList0x79478c = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level2Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level2Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level2Code_46GDwhitePlayerObjects3Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDportalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7949444);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x794b7c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level2Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level2Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects3[i].setOpacity(gdjs.Level2Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Animation End"); }gdjs.Level2Code.eventsList0x795684(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Animation End"); }
}


{



}


{



}


{



}


{



}


}; //End of gdjs.Level2Code.eventsList0x79478c
gdjs.Level2Code.eventsList0x79eddc = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7991436);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level2Code.eventsList0x79eddc
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level2Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level2Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level2Code.GDwhitePlayerObjects4});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects4ObjectsGDgdjs_46Level2Code_46GDdeadlyPlatObjects4Objects = Hashtable.newFrom({"enemy": gdjs.Level2Code.GDenemyObjects4, "deadlyPlat": gdjs.Level2Code.GDdeadlyPlatObjects4});gdjs.Level2Code.eventsList0x79f4dc = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7993028);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{runtimeScene.getVariables().get("deathAnim").setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level2Code.eventsList0x79f4dc
gdjs.Level2Code.eventsList0x79f1fc = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7992636);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x79f4dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level2Code.eventsList0x79f1fc
gdjs.Level2Code.eventsList0x79ebf4 = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level2Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects3[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("deathAnim").setNumber(0);
}
{ //Subevents
gdjs.Level2Code.eventsList0x79eddc(runtimeScene);} //End of subevents
}

}


{

gdjs.Level2Code.GDblackPlayerObjects3.length = 0;

gdjs.Level2Code.GDdeadlyPlatObjects3.length = 0;

gdjs.Level2Code.GDenemyObjects3.length = 0;

gdjs.Level2Code.GDwhitePlayerObjects3.length = 0;


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.GDblackPlayerObjects3_1final.length = 0;gdjs.Level2Code.GDdeadlyPlatObjects3_1final.length = 0;gdjs.Level2Code.GDenemyObjects3_1final.length = 0;gdjs.Level2Code.GDwhitePlayerObjects3_1final.length = 0;gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDdeadlyPlatObjects4.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level2Code.GDenemyObjects4.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level2Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level2Code_46GDwhitePlayerObjects4Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects4ObjectsGDgdjs_46Level2Code_46GDdeadlyPlatObjects4Objects, false, runtimeScene, false);
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDblackPlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDblackPlayerObjects3_1final.indexOf(gdjs.Level2Code.GDblackPlayerObjects4[j]) === -1 )
            gdjs.Level2Code.GDblackPlayerObjects3_1final.push(gdjs.Level2Code.GDblackPlayerObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level2Code.GDdeadlyPlatObjects4.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDdeadlyPlatObjects3_1final.indexOf(gdjs.Level2Code.GDdeadlyPlatObjects4[j]) === -1 )
            gdjs.Level2Code.GDdeadlyPlatObjects3_1final.push(gdjs.Level2Code.GDdeadlyPlatObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level2Code.GDenemyObjects4.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDenemyObjects3_1final.indexOf(gdjs.Level2Code.GDenemyObjects4[j]) === -1 )
            gdjs.Level2Code.GDenemyObjects3_1final.push(gdjs.Level2Code.GDenemyObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level2Code.GDwhitePlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDwhitePlayerObjects3_1final.indexOf(gdjs.Level2Code.GDwhitePlayerObjects4[j]) === -1 )
            gdjs.Level2Code.GDwhitePlayerObjects3_1final.push(gdjs.Level2Code.GDwhitePlayerObjects4[j]);
    }
}
}
{
gdjs.Level2Code.GDblackPlayerObjects3.createFrom(gdjs.Level2Code.GDblackPlayerObjects3_1final);
gdjs.Level2Code.GDdeadlyPlatObjects3.createFrom(gdjs.Level2Code.GDdeadlyPlatObjects3_1final);
gdjs.Level2Code.GDenemyObjects3.createFrom(gdjs.Level2Code.GDenemyObjects3_1final);
gdjs.Level2Code.GDwhitePlayerObjects3.createFrom(gdjs.Level2Code.GDwhitePlayerObjects3_1final);
}
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x79f1fc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime"));
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level2Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects3[i].setOpacity(gdjs.Level2Code.GDflashObjects3[i].getOpacity() - (10));
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "deathTime");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("deathAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "deathTime");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level2Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level2Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDflashObjects3[i].setOpacity(gdjs.Level2Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level2Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level2Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
gdjs.Level2Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), false);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
gdjs.Level2Code.condition2IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level2Code.condition1IsTrue_0.val ) {
{
gdjs.Level2Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.Level2Code.eventsList0x79ebf4
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level2Code.GDenemyObjects3});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmovementRightCollideObjects3Objects = Hashtable.newFrom({"movementRightCollide": gdjs.Level2Code.GDmovementRightCollideObjects3});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level2Code.GDenemyObjects3});gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmovementLeftCollideObjects3Objects = Hashtable.newFrom({"movementLeftCollide": gdjs.Level2Code.GDmovementLeftCollideObjects3});gdjs.Level2Code.eventsList0x7a0b4c = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 0;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects3[i].setX(gdjs.Level2Code.GDenemyObjects3[i].getX() + (4));
}
}}

}


{

gdjs.Level2Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level2Code.GDmovementRightCollideObjects3.createFrom(runtimeScene.getObjects("movementRightCollide"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects3Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmovementRightCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(1);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 1;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level2Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDenemyObjects3[i].setX(gdjs.Level2Code.GDenemyObjects3[i].getX() - (4));
}
}}

}


{

gdjs.Level2Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level2Code.GDmovementLeftCollideObjects3.createFrom(runtimeScene.getObjects("movementLeftCollide"));

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects3Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmovementLeftCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(0);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDmovementLeftCollideObjects2.createFrom(runtimeScene.getObjects("movementLeftCollide"));
gdjs.Level2Code.GDmovementRightCollideObjects2.createFrom(runtimeScene.getObjects("movementRightCollide"));
{for(var i = 0, len = gdjs.Level2Code.GDmovementLeftCollideObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDmovementLeftCollideObjects2[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Level2Code.GDmovementRightCollideObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDmovementRightCollideObjects2[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Level2Code.eventsList0x7a0b4c
gdjs.Level2Code.eventsList0x7a18e4 = function(runtimeScene) {

{



}


}; //End of gdjs.Level2Code.eventsList0x7a18e4
gdjs.Level2Code.eventsList0x7a16d4 = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.Level2Code.GDdeadlyPlatObjects2.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level2Code.GDwall1Objects2.createFrom(runtimeScene.getObjects("wall1"));
gdjs.Level2Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level2Code.GDwall1Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDwall1Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level2Code.GDwall2Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDwall2Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level2Code.GDdeadlyPlatObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDdeadlyPlatObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Level2Code.eventsList0x7a18e4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level2Code.eventsList0x7a16d4
gdjs.Level2Code.eventsList0x7a1d9c = function(runtimeScene) {

{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
gdjs.Level2Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level2Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level2Code.GDwhitePlayerObjects3.length === 0 ) ? (( gdjs.Level2Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level2Code.GDblackPlayerObjects3[0].getPointY("")) :gdjs.Level2Code.GDwhitePlayerObjects3[0].getPointY("")), "", 0);
}}

}


{



}


}; //End of gdjs.Level2Code.eventsList0x7a1d9c
gdjs.Level2Code.eventsList0x7a297c = function(runtimeScene) {

{



}


{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8008652);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


}; //End of gdjs.Level2Code.eventsList0x7a297c
gdjs.Level2Code.eventsList0x791e14 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Controls"); }gdjs.Level2Code.eventsList0x791e8c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Portal Effects"); }gdjs.Level2Code.eventsList0x79374c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Portal Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Level Ending"); }gdjs.Level2Code.eventsList0x79478c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Level Ending"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Death"); }gdjs.Level2Code.eventsList0x79ebf4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Death"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy Movement"); }gdjs.Level2Code.eventsList0x7a0b4c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Effects"); }gdjs.Level2Code.eventsList0x7a16d4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.Level2Code.eventsList0x7a1d9c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("External Events"); }gdjs.Level2Code.eventsList0x7a297c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("External Events"); }
}


}; //End of gdjs.Level2Code.eventsList0x791e14
gdjs.Level2Code.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Everything"); }gdjs.Level2Code.eventsList0x791e14(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Everything"); }
}


}; //End of gdjs.Level2Code.eventsList0xb24c0


gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDbackgroundWallObjects1.length = 0;
gdjs.Level2Code.GDbackgroundWallObjects2.length = 0;
gdjs.Level2Code.GDbackgroundWallObjects3.length = 0;
gdjs.Level2Code.GDbackgroundWallObjects4.length = 0;
gdjs.Level2Code.GDbackgroundWallObjects5.length = 0;
gdjs.Level2Code.GDwall1Objects1.length = 0;
gdjs.Level2Code.GDwall1Objects2.length = 0;
gdjs.Level2Code.GDwall1Objects3.length = 0;
gdjs.Level2Code.GDwall1Objects4.length = 0;
gdjs.Level2Code.GDwall1Objects5.length = 0;
gdjs.Level2Code.GDwall2Objects1.length = 0;
gdjs.Level2Code.GDwall2Objects2.length = 0;
gdjs.Level2Code.GDwall2Objects3.length = 0;
gdjs.Level2Code.GDwall2Objects4.length = 0;
gdjs.Level2Code.GDwall2Objects5.length = 0;
gdjs.Level2Code.GDborderWallObjects1.length = 0;
gdjs.Level2Code.GDborderWallObjects2.length = 0;
gdjs.Level2Code.GDborderWallObjects3.length = 0;
gdjs.Level2Code.GDborderWallObjects4.length = 0;
gdjs.Level2Code.GDborderWallObjects5.length = 0;
gdjs.Level2Code.GDportalObjects1.length = 0;
gdjs.Level2Code.GDportalObjects2.length = 0;
gdjs.Level2Code.GDportalObjects3.length = 0;
gdjs.Level2Code.GDportalObjects4.length = 0;
gdjs.Level2Code.GDportalObjects5.length = 0;
gdjs.Level2Code.GDblackPlayerObjects1.length = 0;
gdjs.Level2Code.GDblackPlayerObjects2.length = 0;
gdjs.Level2Code.GDblackPlayerObjects3.length = 0;
gdjs.Level2Code.GDblackPlayerObjects4.length = 0;
gdjs.Level2Code.GDblackPlayerObjects5.length = 0;
gdjs.Level2Code.GDwhitePlayerObjects1.length = 0;
gdjs.Level2Code.GDwhitePlayerObjects2.length = 0;
gdjs.Level2Code.GDwhitePlayerObjects3.length = 0;
gdjs.Level2Code.GDwhitePlayerObjects4.length = 0;
gdjs.Level2Code.GDwhitePlayerObjects5.length = 0;
gdjs.Level2Code.GDenemyObjects1.length = 0;
gdjs.Level2Code.GDenemyObjects2.length = 0;
gdjs.Level2Code.GDenemyObjects3.length = 0;
gdjs.Level2Code.GDenemyObjects4.length = 0;
gdjs.Level2Code.GDenemyObjects5.length = 0;
gdjs.Level2Code.GDdeadlyPlatObjects1.length = 0;
gdjs.Level2Code.GDdeadlyPlatObjects2.length = 0;
gdjs.Level2Code.GDdeadlyPlatObjects3.length = 0;
gdjs.Level2Code.GDdeadlyPlatObjects4.length = 0;
gdjs.Level2Code.GDdeadlyPlatObjects5.length = 0;
gdjs.Level2Code.GDflashObjects1.length = 0;
gdjs.Level2Code.GDflashObjects2.length = 0;
gdjs.Level2Code.GDflashObjects3.length = 0;
gdjs.Level2Code.GDflashObjects4.length = 0;
gdjs.Level2Code.GDflashObjects5.length = 0;
gdjs.Level2Code.GDmovementLeftCollideObjects1.length = 0;
gdjs.Level2Code.GDmovementLeftCollideObjects2.length = 0;
gdjs.Level2Code.GDmovementLeftCollideObjects3.length = 0;
gdjs.Level2Code.GDmovementLeftCollideObjects4.length = 0;
gdjs.Level2Code.GDmovementLeftCollideObjects5.length = 0;
gdjs.Level2Code.GDmovementRightCollideObjects1.length = 0;
gdjs.Level2Code.GDmovementRightCollideObjects2.length = 0;
gdjs.Level2Code.GDmovementRightCollideObjects3.length = 0;
gdjs.Level2Code.GDmovementRightCollideObjects4.length = 0;
gdjs.Level2Code.GDmovementRightCollideObjects5.length = 0;

gdjs.Level2Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Level2Code'] = gdjs.Level2Code;
