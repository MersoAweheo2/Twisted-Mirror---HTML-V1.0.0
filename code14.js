gdjs.Level10Code = {};
gdjs.Level10Code.GDblackPlayerObjects3_1final = [];

gdjs.Level10Code.GDdeadlyPlatObjects3_1final = [];

gdjs.Level10Code.GDenemyObjects3_1final = [];

gdjs.Level10Code.GDwhitePlayerObjects3_1final = [];

gdjs.Level10Code.GDbackgroundWallObjects1= [];
gdjs.Level10Code.GDbackgroundWallObjects2= [];
gdjs.Level10Code.GDbackgroundWallObjects3= [];
gdjs.Level10Code.GDbackgroundWallObjects4= [];
gdjs.Level10Code.GDbackgroundWallObjects5= [];
gdjs.Level10Code.GDwall1Objects1= [];
gdjs.Level10Code.GDwall1Objects2= [];
gdjs.Level10Code.GDwall1Objects3= [];
gdjs.Level10Code.GDwall1Objects4= [];
gdjs.Level10Code.GDwall1Objects5= [];
gdjs.Level10Code.GDwall2Objects1= [];
gdjs.Level10Code.GDwall2Objects2= [];
gdjs.Level10Code.GDwall2Objects3= [];
gdjs.Level10Code.GDwall2Objects4= [];
gdjs.Level10Code.GDwall2Objects5= [];
gdjs.Level10Code.GDborderWallObjects1= [];
gdjs.Level10Code.GDborderWallObjects2= [];
gdjs.Level10Code.GDborderWallObjects3= [];
gdjs.Level10Code.GDborderWallObjects4= [];
gdjs.Level10Code.GDborderWallObjects5= [];
gdjs.Level10Code.GDportalObjects1= [];
gdjs.Level10Code.GDportalObjects2= [];
gdjs.Level10Code.GDportalObjects3= [];
gdjs.Level10Code.GDportalObjects4= [];
gdjs.Level10Code.GDportalObjects5= [];
gdjs.Level10Code.GDblackPlayerObjects1= [];
gdjs.Level10Code.GDblackPlayerObjects2= [];
gdjs.Level10Code.GDblackPlayerObjects3= [];
gdjs.Level10Code.GDblackPlayerObjects4= [];
gdjs.Level10Code.GDblackPlayerObjects5= [];
gdjs.Level10Code.GDwhitePlayerObjects1= [];
gdjs.Level10Code.GDwhitePlayerObjects2= [];
gdjs.Level10Code.GDwhitePlayerObjects3= [];
gdjs.Level10Code.GDwhitePlayerObjects4= [];
gdjs.Level10Code.GDwhitePlayerObjects5= [];
gdjs.Level10Code.GDenemyObjects1= [];
gdjs.Level10Code.GDenemyObjects2= [];
gdjs.Level10Code.GDenemyObjects3= [];
gdjs.Level10Code.GDenemyObjects4= [];
gdjs.Level10Code.GDenemyObjects5= [];
gdjs.Level10Code.GDdeadlyPlatObjects1= [];
gdjs.Level10Code.GDdeadlyPlatObjects2= [];
gdjs.Level10Code.GDdeadlyPlatObjects3= [];
gdjs.Level10Code.GDdeadlyPlatObjects4= [];
gdjs.Level10Code.GDdeadlyPlatObjects5= [];
gdjs.Level10Code.GDflashObjects1= [];
gdjs.Level10Code.GDflashObjects2= [];
gdjs.Level10Code.GDflashObjects3= [];
gdjs.Level10Code.GDflashObjects4= [];
gdjs.Level10Code.GDflashObjects5= [];
gdjs.Level10Code.GDmovementLeftCollideObjects1= [];
gdjs.Level10Code.GDmovementLeftCollideObjects2= [];
gdjs.Level10Code.GDmovementLeftCollideObjects3= [];
gdjs.Level10Code.GDmovementLeftCollideObjects4= [];
gdjs.Level10Code.GDmovementLeftCollideObjects5= [];
gdjs.Level10Code.GDmovementRightCollideObjects1= [];
gdjs.Level10Code.GDmovementRightCollideObjects2= [];
gdjs.Level10Code.GDmovementRightCollideObjects3= [];
gdjs.Level10Code.GDmovementRightCollideObjects4= [];
gdjs.Level10Code.GDmovementRightCollideObjects5= [];

gdjs.Level10Code.conditionTrue_0 = {val:false};
gdjs.Level10Code.condition0IsTrue_0 = {val:false};
gdjs.Level10Code.condition1IsTrue_0 = {val:false};
gdjs.Level10Code.condition2IsTrue_0 = {val:false};
gdjs.Level10Code.condition3IsTrue_0 = {val:false};
gdjs.Level10Code.conditionTrue_1 = {val:false};
gdjs.Level10Code.condition0IsTrue_1 = {val:false};
gdjs.Level10Code.condition1IsTrue_1 = {val:false};
gdjs.Level10Code.condition2IsTrue_1 = {val:false};
gdjs.Level10Code.condition3IsTrue_1 = {val:false};
gdjs.Level10Code.conditionTrue_2 = {val:false};
gdjs.Level10Code.condition0IsTrue_2 = {val:false};
gdjs.Level10Code.condition1IsTrue_2 = {val:false};
gdjs.Level10Code.condition2IsTrue_2 = {val:false};
gdjs.Level10Code.condition3IsTrue_2 = {val:false};
gdjs.Level10Code.conditionTrue_3 = {val:false};
gdjs.Level10Code.condition0IsTrue_3 = {val:false};
gdjs.Level10Code.condition1IsTrue_3 = {val:false};
gdjs.Level10Code.condition2IsTrue_3 = {val:false};
gdjs.Level10Code.condition3IsTrue_3 = {val:false};


gdjs.Level10Code.eventsList0x853754 = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
gdjs.Level10Code.condition2IsTrue_1.val = false;
{
gdjs.Level10Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level10Code.condition2IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
gdjs.Level10Code.condition2IsTrue_1.val = false;
{
gdjs.Level10Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level10Code.condition2IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
gdjs.Level10Code.condition2IsTrue_1.val = false;
{
gdjs.Level10Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level10Code.condition2IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level10Code.eventsList0x853754
gdjs.Level10Code.eventsList0x854624 = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects3[i].setX(970 - (( gdjs.Level10Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level10Code.GDblackPlayerObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects3[i].setY((( gdjs.Level10Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level10Code.GDblackPlayerObjects3[0].getPointY("")));
}
}}

}


{



}


{



}


}; //End of gdjs.Level10Code.eventsList0x854624
gdjs.Level10Code.eventsList0x8536a4 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Main Movement"); }gdjs.Level10Code.eventsList0x853754(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Main Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("White Player Movement"); }gdjs.Level10Code.eventsList0x854624(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("White Player Movement"); }
}


}; //End of gdjs.Level10Code.eventsList0x8536a4
gdjs.Level10Code.eventsList0x855144 = function(runtimeScene) {

{

gdjs.Level10Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDportalObjects4.length;i<l;++i) {
    if ( gdjs.Level10Code.GDportalObjects4[i].getX() <= 400 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDportalObjects4[k] = gdjs.Level10Code.GDportalObjects4[i];
        ++k;
    }
}
gdjs.Level10Code.GDportalObjects4.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDportalObjects4 */
{for(var i = 0, len = gdjs.Level10Code.GDportalObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDportalObjects4[i].rotate(-(60), runtimeScene);
}
}}

}


{

gdjs.Level10Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level10Code.GDportalObjects3[i].getX() >= 500 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDportalObjects3[k] = gdjs.Level10Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level10Code.GDportalObjects3.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDportalObjects3 */
{for(var i = 0, len = gdjs.Level10Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDportalObjects3[i].rotate(60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level10Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDportalObjects3[i].flipX(true);
}
}}

}


}; //End of gdjs.Level10Code.eventsList0x855144
gdjs.Level10Code.eventsList0x854f64 = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level10Code.eventsList0x855144(runtimeScene);} //End of subevents
}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level10Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDportalObjects3[i].setOpacity(70);
}
}}

}


{

gdjs.Level10Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level10Code.GDportalObjects3[i].getOpacity() > 95 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDportalObjects3[k] = gdjs.Level10Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level10Code.GDportalObjects3.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(0);
}}

}


{

gdjs.Level10Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level10Code.GDportalObjects3[i].getOpacity() < 65 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDportalObjects3[k] = gdjs.Level10Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level10Code.GDportalObjects3.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(1);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 1;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level10Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDportalObjects3[i].setOpacity(gdjs.Level10Code.GDportalObjects3[i].getOpacity() + (1));
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 0;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDportalObjects2.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level10Code.GDportalObjects2.length ;i < len;++i) {
    gdjs.Level10Code.GDportalObjects2[i].setOpacity(gdjs.Level10Code.GDportalObjects2[i].getOpacity() - (1));
}
}}

}


}; //End of gdjs.Level10Code.eventsList0x854f64
gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level10Code_46GDwhitePlayerObjects3Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level10Code.GDblackPlayerObjects3, "whitePlayer": gdjs.Level10Code.GDwhitePlayerObjects3});gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDportalObjects3Objects = Hashtable.newFrom({"portal": gdjs.Level10Code.GDportalObjects3});gdjs.Level10Code.eventsList0x8565dc = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8742852);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level10Code.eventsList0x8565dc
gdjs.Level10Code.eventsList0x856394 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8742460);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level10Code.eventsList0x8565dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level10Code.eventsList0x856394
gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level10Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level10Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level10Code.GDwhitePlayerObjects4});gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDportalObjects4Objects = Hashtable.newFrom({"portal": gdjs.Level10Code.GDportalObjects4});gdjs.Level10Code.eventsList0x85739c = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8746372);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level10Code.eventsList0x85739c
gdjs.Level10Code.eventsList0x857154 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8745980);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDblackPlayerObjects4 */
{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level10Code.eventsList0x85739c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level10Code.eventsList0x857154
gdjs.Level10Code.eventsList0x857df4 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8750068);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level10Code.eventsList0x857df4
gdjs.Level10Code.eventsList0x85894c = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8752132);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level10Code.eventsList0x85894c
gdjs.Level10Code.eventsList0x8585c4 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8751532);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level10Code.eventsList0x85894c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level10Code.eventsList0x8585c4
gdjs.Level10Code.eventsList0x857b24 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
{
{gdjs.Level10Code.conditionTrue_2 = gdjs.Level10Code.condition0IsTrue_1;
gdjs.Level10Code.condition0IsTrue_2.val = false;
{
gdjs.Level10Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}gdjs.Level10Code.conditionTrue_2.val = true && gdjs.Level10Code.condition0IsTrue_2.val;
}
if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level10Code.conditionTrue_2 = gdjs.Level10Code.condition1IsTrue_1;
gdjs.Level10Code.condition0IsTrue_2.val = false;
gdjs.Level10Code.condition1IsTrue_2.val = false;
{
gdjs.Level10Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level10Code.condition0IsTrue_2.val ) {
{
{gdjs.Level10Code.conditionTrue_3 = gdjs.Level10Code.condition1IsTrue_1;
gdjs.Level10Code.conditionTrue_3.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}}
gdjs.Level10Code.conditionTrue_2.val = true && gdjs.Level10Code.condition0IsTrue_2.val && gdjs.Level10Code.condition1IsTrue_2.val;
}
if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition1IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8749444);
}
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level10Code.eventsList0x857df4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
gdjs.Level10Code.condition2IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition1IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}if ( gdjs.Level10Code.condition1IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition2IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8750988);
}
}}
}
if (gdjs.Level10Code.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "noMistakeScore", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Level10Code.eventsList0x8585c4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level10Code.eventsList0x857b24
gdjs.Level10Code.eventsList0x856e9c = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level10Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level10Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level10Code_46GDwhitePlayerObjects4Objects, gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDportalObjects4Objects, false, runtimeScene, false);
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition1IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8745564);
}
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDwhitePlayerObjects4 */
{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level10Code.eventsList0x857154(runtimeScene);} //End of subevents
}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDflashObjects4.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level10Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level10Code.GDflashObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDflashObjects4[i].setOpacity(gdjs.Level10Code.GDflashObjects4[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "endTime");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("noMistakeOriginalScore"));
}
{ //Subevents
gdjs.Level10Code.eventsList0x857b24(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level10Code.eventsList0x856e9c
gdjs.Level10Code.eventsList0x855fa4 = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level10Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level10Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level10Code_46GDwhitePlayerObjects3Objects, gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDportalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition1IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8742044);
}
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level10Code.eventsList0x856394(runtimeScene);} //End of subevents
}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level10Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level10Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDflashObjects3[i].setOpacity(gdjs.Level10Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Animation End"); }gdjs.Level10Code.eventsList0x856e9c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Animation End"); }
}


{



}


{



}


{



}


{



}


}; //End of gdjs.Level10Code.eventsList0x855fa4
gdjs.Level10Code.eventsList0x8605f4 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8784036);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level10Code.eventsList0x8605f4
gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level10Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level10Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level10Code.GDwhitePlayerObjects4});gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects4ObjectsGDgdjs_46Level10Code_46GDdeadlyPlatObjects4Objects = Hashtable.newFrom({"enemy": gdjs.Level10Code.GDenemyObjects4, "deadlyPlat": gdjs.Level10Code.GDdeadlyPlatObjects4});gdjs.Level10Code.eventsList0x860cf4 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8785628);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{runtimeScene.getVariables().get("deathAnim").setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level10Code.eventsList0x860cf4
gdjs.Level10Code.eventsList0x860a14 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8785236);
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level10Code.eventsList0x860cf4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level10Code.eventsList0x860a14
gdjs.Level10Code.eventsList0x86040c = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level10Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDflashObjects3[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("deathAnim").setNumber(0);
}
{ //Subevents
gdjs.Level10Code.eventsList0x8605f4(runtimeScene);} //End of subevents
}

}


{

gdjs.Level10Code.GDblackPlayerObjects3.length = 0;

gdjs.Level10Code.GDdeadlyPlatObjects3.length = 0;

gdjs.Level10Code.GDenemyObjects3.length = 0;

gdjs.Level10Code.GDwhitePlayerObjects3.length = 0;


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.GDblackPlayerObjects3_1final.length = 0;gdjs.Level10Code.GDdeadlyPlatObjects3_1final.length = 0;gdjs.Level10Code.GDenemyObjects3_1final.length = 0;gdjs.Level10Code.GDwhitePlayerObjects3_1final.length = 0;gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
{
gdjs.Level10Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDdeadlyPlatObjects4.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level10Code.GDenemyObjects4.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level10Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
gdjs.Level10Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level10Code_46GDwhitePlayerObjects4Objects, gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects4ObjectsGDgdjs_46Level10Code_46GDdeadlyPlatObjects4Objects, false, runtimeScene, false);
if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level10Code.GDblackPlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level10Code.GDblackPlayerObjects3_1final.indexOf(gdjs.Level10Code.GDblackPlayerObjects4[j]) === -1 )
            gdjs.Level10Code.GDblackPlayerObjects3_1final.push(gdjs.Level10Code.GDblackPlayerObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level10Code.GDdeadlyPlatObjects4.length;j<jLen;++j) {
        if ( gdjs.Level10Code.GDdeadlyPlatObjects3_1final.indexOf(gdjs.Level10Code.GDdeadlyPlatObjects4[j]) === -1 )
            gdjs.Level10Code.GDdeadlyPlatObjects3_1final.push(gdjs.Level10Code.GDdeadlyPlatObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level10Code.GDenemyObjects4.length;j<jLen;++j) {
        if ( gdjs.Level10Code.GDenemyObjects3_1final.indexOf(gdjs.Level10Code.GDenemyObjects4[j]) === -1 )
            gdjs.Level10Code.GDenemyObjects3_1final.push(gdjs.Level10Code.GDenemyObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level10Code.GDwhitePlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level10Code.GDwhitePlayerObjects3_1final.indexOf(gdjs.Level10Code.GDwhitePlayerObjects4[j]) === -1 )
            gdjs.Level10Code.GDwhitePlayerObjects3_1final.push(gdjs.Level10Code.GDwhitePlayerObjects4[j]);
    }
}
}
{
gdjs.Level10Code.GDblackPlayerObjects3.createFrom(gdjs.Level10Code.GDblackPlayerObjects3_1final);
gdjs.Level10Code.GDdeadlyPlatObjects3.createFrom(gdjs.Level10Code.GDdeadlyPlatObjects3_1final);
gdjs.Level10Code.GDenemyObjects3.createFrom(gdjs.Level10Code.GDenemyObjects3_1final);
gdjs.Level10Code.GDwhitePlayerObjects3.createFrom(gdjs.Level10Code.GDwhitePlayerObjects3_1final);
}
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level10Code.eventsList0x860a14(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime"));
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
gdjs.Level10Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
gdjs.Level10Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level10Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDflashObjects3[i].setOpacity(gdjs.Level10Code.GDflashObjects3[i].getOpacity() - (10));
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "deathTime");
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
gdjs.Level10Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("deathAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "deathTime");
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level10Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level10Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDflashObjects3[i].setOpacity(gdjs.Level10Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level10Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level10Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
gdjs.Level10Code.condition2IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
gdjs.Level10Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Level10Code.condition1IsTrue_0.val ) {
{
gdjs.Level10Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level10Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), false);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
gdjs.Level10Code.condition2IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
gdjs.Level10Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level10Code.condition1IsTrue_0.val ) {
{
gdjs.Level10Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level10Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.Level10Code.eventsList0x86040c
gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level10Code.GDenemyObjects3});gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDmovementRightCollideObjects3Objects = Hashtable.newFrom({"movementRightCollide": gdjs.Level10Code.GDmovementRightCollideObjects3});gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level10Code.GDenemyObjects3});gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDmovementLeftCollideObjects3Objects = Hashtable.newFrom({"movementLeftCollide": gdjs.Level10Code.GDmovementLeftCollideObjects3});gdjs.Level10Code.eventsList0x862364 = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 0;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level10Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDenemyObjects3[i].setX(gdjs.Level10Code.GDenemyObjects3[i].getX() + (4));
}
}}

}


{

gdjs.Level10Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level10Code.GDmovementRightCollideObjects3.createFrom(runtimeScene.getObjects("movementRightCollide"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects3Objects, gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDmovementRightCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(1);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 1;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level10Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level10Code.GDenemyObjects3[i].setX(gdjs.Level10Code.GDenemyObjects3[i].getX() - (4));
}
}}

}


{

gdjs.Level10Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level10Code.GDmovementLeftCollideObjects3.createFrom(runtimeScene.getObjects("movementLeftCollide"));

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects3Objects, gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDmovementLeftCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(0);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDmovementLeftCollideObjects2.createFrom(runtimeScene.getObjects("movementLeftCollide"));
gdjs.Level10Code.GDmovementRightCollideObjects2.createFrom(runtimeScene.getObjects("movementRightCollide"));
{for(var i = 0, len = gdjs.Level10Code.GDmovementLeftCollideObjects2.length ;i < len;++i) {
    gdjs.Level10Code.GDmovementLeftCollideObjects2[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Level10Code.GDmovementRightCollideObjects2.length ;i < len;++i) {
    gdjs.Level10Code.GDmovementRightCollideObjects2[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Level10Code.eventsList0x862364
gdjs.Level10Code.eventsList0x8630fc = function(runtimeScene) {

{



}


}; //End of gdjs.Level10Code.eventsList0x8630fc
gdjs.Level10Code.eventsList0x862eec = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.Level10Code.GDdeadlyPlatObjects2.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level10Code.GDwall1Objects2.createFrom(runtimeScene.getObjects("wall1"));
gdjs.Level10Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level10Code.GDwall1Objects2.length ;i < len;++i) {
    gdjs.Level10Code.GDwall1Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level10Code.GDwall2Objects2.length ;i < len;++i) {
    gdjs.Level10Code.GDwall2Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level10Code.GDdeadlyPlatObjects2.length ;i < len;++i) {
    gdjs.Level10Code.GDdeadlyPlatObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Level10Code.eventsList0x8630fc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level10Code.eventsList0x862eec
gdjs.Level10Code.eventsList0x8635b4 = function(runtimeScene) {

{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition1IsTrue_0;
gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
gdjs.Level10Code.condition2IsTrue_1.val = false;
{
gdjs.Level10Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level10Code.condition2IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition1IsTrue_0;
gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
gdjs.Level10Code.condition2IsTrue_1.val = false;
{
gdjs.Level10Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level10Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level10Code.condition2IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
gdjs.Level10Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level10Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level10Code.GDwhitePlayerObjects3.length === 0 ) ? (( gdjs.Level10Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level10Code.GDblackPlayerObjects3[0].getPointY("")) :gdjs.Level10Code.GDwhitePlayerObjects3[0].getPointY("")), "", 0);
}}

}


{



}


}; //End of gdjs.Level10Code.eventsList0x8635b4
gdjs.Level10Code.eventsList0x864194 = function(runtimeScene) {

{



}


{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition1IsTrue_0;
gdjs.Level10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8801252);
}
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


}; //End of gdjs.Level10Code.eventsList0x864194
gdjs.Level10Code.eventsList0x85362c = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Controls"); }gdjs.Level10Code.eventsList0x8536a4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Portal Effects"); }gdjs.Level10Code.eventsList0x854f64(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Portal Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Level Ending"); }gdjs.Level10Code.eventsList0x855fa4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Level Ending"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Death"); }gdjs.Level10Code.eventsList0x86040c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Death"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy Movement"); }gdjs.Level10Code.eventsList0x862364(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Effects"); }gdjs.Level10Code.eventsList0x862eec(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.Level10Code.eventsList0x8635b4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("External Events"); }gdjs.Level10Code.eventsList0x864194(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("External Events"); }
}


}; //End of gdjs.Level10Code.eventsList0x85362c
gdjs.Level10Code.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Everything"); }gdjs.Level10Code.eventsList0x85362c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Everything"); }
}


}; //End of gdjs.Level10Code.eventsList0xb24c0


gdjs.Level10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level10Code.GDbackgroundWallObjects1.length = 0;
gdjs.Level10Code.GDbackgroundWallObjects2.length = 0;
gdjs.Level10Code.GDbackgroundWallObjects3.length = 0;
gdjs.Level10Code.GDbackgroundWallObjects4.length = 0;
gdjs.Level10Code.GDbackgroundWallObjects5.length = 0;
gdjs.Level10Code.GDwall1Objects1.length = 0;
gdjs.Level10Code.GDwall1Objects2.length = 0;
gdjs.Level10Code.GDwall1Objects3.length = 0;
gdjs.Level10Code.GDwall1Objects4.length = 0;
gdjs.Level10Code.GDwall1Objects5.length = 0;
gdjs.Level10Code.GDwall2Objects1.length = 0;
gdjs.Level10Code.GDwall2Objects2.length = 0;
gdjs.Level10Code.GDwall2Objects3.length = 0;
gdjs.Level10Code.GDwall2Objects4.length = 0;
gdjs.Level10Code.GDwall2Objects5.length = 0;
gdjs.Level10Code.GDborderWallObjects1.length = 0;
gdjs.Level10Code.GDborderWallObjects2.length = 0;
gdjs.Level10Code.GDborderWallObjects3.length = 0;
gdjs.Level10Code.GDborderWallObjects4.length = 0;
gdjs.Level10Code.GDborderWallObjects5.length = 0;
gdjs.Level10Code.GDportalObjects1.length = 0;
gdjs.Level10Code.GDportalObjects2.length = 0;
gdjs.Level10Code.GDportalObjects3.length = 0;
gdjs.Level10Code.GDportalObjects4.length = 0;
gdjs.Level10Code.GDportalObjects5.length = 0;
gdjs.Level10Code.GDblackPlayerObjects1.length = 0;
gdjs.Level10Code.GDblackPlayerObjects2.length = 0;
gdjs.Level10Code.GDblackPlayerObjects3.length = 0;
gdjs.Level10Code.GDblackPlayerObjects4.length = 0;
gdjs.Level10Code.GDblackPlayerObjects5.length = 0;
gdjs.Level10Code.GDwhitePlayerObjects1.length = 0;
gdjs.Level10Code.GDwhitePlayerObjects2.length = 0;
gdjs.Level10Code.GDwhitePlayerObjects3.length = 0;
gdjs.Level10Code.GDwhitePlayerObjects4.length = 0;
gdjs.Level10Code.GDwhitePlayerObjects5.length = 0;
gdjs.Level10Code.GDenemyObjects1.length = 0;
gdjs.Level10Code.GDenemyObjects2.length = 0;
gdjs.Level10Code.GDenemyObjects3.length = 0;
gdjs.Level10Code.GDenemyObjects4.length = 0;
gdjs.Level10Code.GDenemyObjects5.length = 0;
gdjs.Level10Code.GDdeadlyPlatObjects1.length = 0;
gdjs.Level10Code.GDdeadlyPlatObjects2.length = 0;
gdjs.Level10Code.GDdeadlyPlatObjects3.length = 0;
gdjs.Level10Code.GDdeadlyPlatObjects4.length = 0;
gdjs.Level10Code.GDdeadlyPlatObjects5.length = 0;
gdjs.Level10Code.GDflashObjects1.length = 0;
gdjs.Level10Code.GDflashObjects2.length = 0;
gdjs.Level10Code.GDflashObjects3.length = 0;
gdjs.Level10Code.GDflashObjects4.length = 0;
gdjs.Level10Code.GDflashObjects5.length = 0;
gdjs.Level10Code.GDmovementLeftCollideObjects1.length = 0;
gdjs.Level10Code.GDmovementLeftCollideObjects2.length = 0;
gdjs.Level10Code.GDmovementLeftCollideObjects3.length = 0;
gdjs.Level10Code.GDmovementLeftCollideObjects4.length = 0;
gdjs.Level10Code.GDmovementLeftCollideObjects5.length = 0;
gdjs.Level10Code.GDmovementRightCollideObjects1.length = 0;
gdjs.Level10Code.GDmovementRightCollideObjects2.length = 0;
gdjs.Level10Code.GDmovementRightCollideObjects3.length = 0;
gdjs.Level10Code.GDmovementRightCollideObjects4.length = 0;
gdjs.Level10Code.GDmovementRightCollideObjects5.length = 0;

gdjs.Level10Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Level10Code'] = gdjs.Level10Code;
