gdjs.Level3Code = {};
gdjs.Level3Code.GDblackPlayerObjects3_1final = [];

gdjs.Level3Code.GDdeadlyPlatObjects3_1final = [];

gdjs.Level3Code.GDenemyObjects3_1final = [];

gdjs.Level3Code.GDwhitePlayerObjects3_1final = [];

gdjs.Level3Code.GDbackgroundWallObjects1= [];
gdjs.Level3Code.GDbackgroundWallObjects2= [];
gdjs.Level3Code.GDbackgroundWallObjects3= [];
gdjs.Level3Code.GDbackgroundWallObjects4= [];
gdjs.Level3Code.GDbackgroundWallObjects5= [];
gdjs.Level3Code.GDwall1Objects1= [];
gdjs.Level3Code.GDwall1Objects2= [];
gdjs.Level3Code.GDwall1Objects3= [];
gdjs.Level3Code.GDwall1Objects4= [];
gdjs.Level3Code.GDwall1Objects5= [];
gdjs.Level3Code.GDwall2Objects1= [];
gdjs.Level3Code.GDwall2Objects2= [];
gdjs.Level3Code.GDwall2Objects3= [];
gdjs.Level3Code.GDwall2Objects4= [];
gdjs.Level3Code.GDwall2Objects5= [];
gdjs.Level3Code.GDborderWallObjects1= [];
gdjs.Level3Code.GDborderWallObjects2= [];
gdjs.Level3Code.GDborderWallObjects3= [];
gdjs.Level3Code.GDborderWallObjects4= [];
gdjs.Level3Code.GDborderWallObjects5= [];
gdjs.Level3Code.GDportalObjects1= [];
gdjs.Level3Code.GDportalObjects2= [];
gdjs.Level3Code.GDportalObjects3= [];
gdjs.Level3Code.GDportalObjects4= [];
gdjs.Level3Code.GDportalObjects5= [];
gdjs.Level3Code.GDblackPlayerObjects1= [];
gdjs.Level3Code.GDblackPlayerObjects2= [];
gdjs.Level3Code.GDblackPlayerObjects3= [];
gdjs.Level3Code.GDblackPlayerObjects4= [];
gdjs.Level3Code.GDblackPlayerObjects5= [];
gdjs.Level3Code.GDwhitePlayerObjects1= [];
gdjs.Level3Code.GDwhitePlayerObjects2= [];
gdjs.Level3Code.GDwhitePlayerObjects3= [];
gdjs.Level3Code.GDwhitePlayerObjects4= [];
gdjs.Level3Code.GDwhitePlayerObjects5= [];
gdjs.Level3Code.GDenemyObjects1= [];
gdjs.Level3Code.GDenemyObjects2= [];
gdjs.Level3Code.GDenemyObjects3= [];
gdjs.Level3Code.GDenemyObjects4= [];
gdjs.Level3Code.GDenemyObjects5= [];
gdjs.Level3Code.GDdeadlyPlatObjects1= [];
gdjs.Level3Code.GDdeadlyPlatObjects2= [];
gdjs.Level3Code.GDdeadlyPlatObjects3= [];
gdjs.Level3Code.GDdeadlyPlatObjects4= [];
gdjs.Level3Code.GDdeadlyPlatObjects5= [];
gdjs.Level3Code.GDflashObjects1= [];
gdjs.Level3Code.GDflashObjects2= [];
gdjs.Level3Code.GDflashObjects3= [];
gdjs.Level3Code.GDflashObjects4= [];
gdjs.Level3Code.GDflashObjects5= [];
gdjs.Level3Code.GDmovementLeftCollideObjects1= [];
gdjs.Level3Code.GDmovementLeftCollideObjects2= [];
gdjs.Level3Code.GDmovementLeftCollideObjects3= [];
gdjs.Level3Code.GDmovementLeftCollideObjects4= [];
gdjs.Level3Code.GDmovementLeftCollideObjects5= [];
gdjs.Level3Code.GDmovementRightCollideObjects1= [];
gdjs.Level3Code.GDmovementRightCollideObjects2= [];
gdjs.Level3Code.GDmovementRightCollideObjects3= [];
gdjs.Level3Code.GDmovementRightCollideObjects4= [];
gdjs.Level3Code.GDmovementRightCollideObjects5= [];

gdjs.Level3Code.conditionTrue_0 = {val:false};
gdjs.Level3Code.condition0IsTrue_0 = {val:false};
gdjs.Level3Code.condition1IsTrue_0 = {val:false};
gdjs.Level3Code.condition2IsTrue_0 = {val:false};
gdjs.Level3Code.condition3IsTrue_0 = {val:false};
gdjs.Level3Code.conditionTrue_1 = {val:false};
gdjs.Level3Code.condition0IsTrue_1 = {val:false};
gdjs.Level3Code.condition1IsTrue_1 = {val:false};
gdjs.Level3Code.condition2IsTrue_1 = {val:false};
gdjs.Level3Code.condition3IsTrue_1 = {val:false};
gdjs.Level3Code.conditionTrue_2 = {val:false};
gdjs.Level3Code.condition0IsTrue_2 = {val:false};
gdjs.Level3Code.condition1IsTrue_2 = {val:false};
gdjs.Level3Code.condition2IsTrue_2 = {val:false};
gdjs.Level3Code.condition3IsTrue_2 = {val:false};
gdjs.Level3Code.conditionTrue_3 = {val:false};
gdjs.Level3Code.condition0IsTrue_3 = {val:false};
gdjs.Level3Code.condition1IsTrue_3 = {val:false};
gdjs.Level3Code.condition2IsTrue_3 = {val:false};
gdjs.Level3Code.condition3IsTrue_3 = {val:false};


gdjs.Level3Code.eventsList0x7aa90c = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level3Code.eventsList0x7aa90c
gdjs.Level3Code.eventsList0x7ab7dc = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects3[i].setX(970 - (( gdjs.Level3Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level3Code.GDblackPlayerObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects3[i].setY((( gdjs.Level3Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level3Code.GDblackPlayerObjects3[0].getPointY("")));
}
}}

}


{



}


{



}


}; //End of gdjs.Level3Code.eventsList0x7ab7dc
gdjs.Level3Code.eventsList0x7aa85c = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Main Movement"); }gdjs.Level3Code.eventsList0x7aa90c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Main Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("White Player Movement"); }gdjs.Level3Code.eventsList0x7ab7dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("White Player Movement"); }
}


}; //End of gdjs.Level3Code.eventsList0x7aa85c
gdjs.Level3Code.eventsList0x7ac2fc = function(runtimeScene) {

{

gdjs.Level3Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDportalObjects4.length;i<l;++i) {
    if ( gdjs.Level3Code.GDportalObjects4[i].getX() <= 400 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDportalObjects4[k] = gdjs.Level3Code.GDportalObjects4[i];
        ++k;
    }
}
gdjs.Level3Code.GDportalObjects4.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDportalObjects4 */
{for(var i = 0, len = gdjs.Level3Code.GDportalObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects4[i].rotate(-(60), runtimeScene);
}
}}

}


{

gdjs.Level3Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level3Code.GDportalObjects3[i].getX() >= 500 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDportalObjects3[k] = gdjs.Level3Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level3Code.GDportalObjects3.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDportalObjects3 */
{for(var i = 0, len = gdjs.Level3Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects3[i].rotate(60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level3Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects3[i].flipX(true);
}
}}

}


}; //End of gdjs.Level3Code.eventsList0x7ac2fc
gdjs.Level3Code.eventsList0x7ac11c = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList0x7ac2fc(runtimeScene);} //End of subevents
}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level3Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects3[i].setOpacity(70);
}
}}

}


{

gdjs.Level3Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level3Code.GDportalObjects3[i].getOpacity() > 95 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDportalObjects3[k] = gdjs.Level3Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level3Code.GDportalObjects3.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(0);
}}

}


{

gdjs.Level3Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level3Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level3Code.GDportalObjects3[i].getOpacity() < 65 ) {
        gdjs.Level3Code.condition0IsTrue_0.val = true;
        gdjs.Level3Code.GDportalObjects3[k] = gdjs.Level3Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level3Code.GDportalObjects3.length = k;}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(1);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 1;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level3Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects3[i].setOpacity(gdjs.Level3Code.GDportalObjects3[i].getOpacity() + (1));
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 0;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDportalObjects2.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level3Code.GDportalObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects2[i].setOpacity(gdjs.Level3Code.GDportalObjects2[i].getOpacity() - (1));
}
}}

}


}; //End of gdjs.Level3Code.eventsList0x7ac11c
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level3Code_46GDwhitePlayerObjects3Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level3Code.GDblackPlayerObjects3, "whitePlayer": gdjs.Level3Code.GDwhitePlayerObjects3});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects3Objects = Hashtable.newFrom({"portal": gdjs.Level3Code.GDportalObjects3});gdjs.Level3Code.eventsList0x7ad794 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8051068);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level3Code.eventsList0x7ad794
gdjs.Level3Code.eventsList0x7ad54c = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8050676);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x7ad794(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level3Code.eventsList0x7ad54c
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level3Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level3Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level3Code.GDwhitePlayerObjects4});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects4Objects = Hashtable.newFrom({"portal": gdjs.Level3Code.GDportalObjects4});gdjs.Level3Code.eventsList0x7ae554 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8054588);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level3Code.eventsList0x7ae554
gdjs.Level3Code.eventsList0x7ae30c = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8054196);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDblackPlayerObjects4 */
{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x7ae554(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level3Code.eventsList0x7ae30c
gdjs.Level3Code.eventsList0x7aefac = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8058284);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level3Code.eventsList0x7aefac
gdjs.Level3Code.eventsList0x7afb04 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8060348);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level3Code.eventsList0x7afb04
gdjs.Level3Code.eventsList0x7af77c = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8059748);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level3Code.eventsList0x7afb04(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level3Code.eventsList0x7af77c
gdjs.Level3Code.eventsList0x7aecdc = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
{
{gdjs.Level3Code.conditionTrue_2 = gdjs.Level3Code.condition0IsTrue_1;
gdjs.Level3Code.condition0IsTrue_2.val = false;
{
gdjs.Level3Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}gdjs.Level3Code.conditionTrue_2.val = true && gdjs.Level3Code.condition0IsTrue_2.val;
}
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level3Code.conditionTrue_2 = gdjs.Level3Code.condition1IsTrue_1;
gdjs.Level3Code.condition0IsTrue_2.val = false;
gdjs.Level3Code.condition1IsTrue_2.val = false;
{
gdjs.Level3Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level3Code.condition0IsTrue_2.val ) {
{
{gdjs.Level3Code.conditionTrue_3 = gdjs.Level3Code.condition1IsTrue_1;
gdjs.Level3Code.conditionTrue_3.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}}
gdjs.Level3Code.conditionTrue_2.val = true && gdjs.Level3Code.condition0IsTrue_2.val && gdjs.Level3Code.condition1IsTrue_2.val;
}
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8057660);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level3Code.eventsList0x7aefac(runtimeScene);} //End of subevents
}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
gdjs.Level3Code.condition2IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}if ( gdjs.Level3Code.condition1IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition2IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8059204);
}
}}
}
if (gdjs.Level3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "noMistakeScore", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Level3Code.eventsList0x7af77c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level3Code.eventsList0x7aecdc
gdjs.Level3Code.eventsList0x7ae054 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level3Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level3Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level3Code_46GDwhitePlayerObjects4Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects4Objects, false, runtimeScene, false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8053780);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDwhitePlayerObjects4 */
{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x7ae30c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDflashObjects4.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level3Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level3Code.GDflashObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects4[i].setOpacity(gdjs.Level3Code.GDflashObjects4[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "endTime");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("noMistakeOriginalScore"));
}
{ //Subevents
gdjs.Level3Code.eventsList0x7aecdc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level3Code.eventsList0x7ae054
gdjs.Level3Code.eventsList0x7ad15c = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level3Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level3Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level3Code_46GDwhitePlayerObjects3Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8050260);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x7ad54c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level3Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level3Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects3[i].setOpacity(gdjs.Level3Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Animation End"); }gdjs.Level3Code.eventsList0x7ae054(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Animation End"); }
}


{



}


{



}


{



}


{



}


}; //End of gdjs.Level3Code.eventsList0x7ad15c
gdjs.Level3Code.eventsList0x7b77ac = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8092252);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level3Code.eventsList0x7b77ac
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level3Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level3Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level3Code.GDwhitePlayerObjects4});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects4ObjectsGDgdjs_46Level3Code_46GDdeadlyPlatObjects4Objects = Hashtable.newFrom({"enemy": gdjs.Level3Code.GDenemyObjects4, "deadlyPlat": gdjs.Level3Code.GDdeadlyPlatObjects4});gdjs.Level3Code.eventsList0x7b7eac = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8093844);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{runtimeScene.getVariables().get("deathAnim").setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level3Code.eventsList0x7b7eac
gdjs.Level3Code.eventsList0x7b7bcc = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8093452);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x7b7eac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level3Code.eventsList0x7b7bcc
gdjs.Level3Code.eventsList0x7b75c4 = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level3Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects3[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("deathAnim").setNumber(0);
}
{ //Subevents
gdjs.Level3Code.eventsList0x7b77ac(runtimeScene);} //End of subevents
}

}


{

gdjs.Level3Code.GDblackPlayerObjects3.length = 0;

gdjs.Level3Code.GDdeadlyPlatObjects3.length = 0;

gdjs.Level3Code.GDenemyObjects3.length = 0;

gdjs.Level3Code.GDwhitePlayerObjects3.length = 0;


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.GDblackPlayerObjects3_1final.length = 0;gdjs.Level3Code.GDdeadlyPlatObjects3_1final.length = 0;gdjs.Level3Code.GDenemyObjects3_1final.length = 0;gdjs.Level3Code.GDwhitePlayerObjects3_1final.length = 0;gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDdeadlyPlatObjects4.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level3Code.GDenemyObjects4.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level3Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level3Code_46GDwhitePlayerObjects4Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects4ObjectsGDgdjs_46Level3Code_46GDdeadlyPlatObjects4Objects, false, runtimeScene, false);
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level3Code.GDblackPlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level3Code.GDblackPlayerObjects3_1final.indexOf(gdjs.Level3Code.GDblackPlayerObjects4[j]) === -1 )
            gdjs.Level3Code.GDblackPlayerObjects3_1final.push(gdjs.Level3Code.GDblackPlayerObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level3Code.GDdeadlyPlatObjects4.length;j<jLen;++j) {
        if ( gdjs.Level3Code.GDdeadlyPlatObjects3_1final.indexOf(gdjs.Level3Code.GDdeadlyPlatObjects4[j]) === -1 )
            gdjs.Level3Code.GDdeadlyPlatObjects3_1final.push(gdjs.Level3Code.GDdeadlyPlatObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level3Code.GDenemyObjects4.length;j<jLen;++j) {
        if ( gdjs.Level3Code.GDenemyObjects3_1final.indexOf(gdjs.Level3Code.GDenemyObjects4[j]) === -1 )
            gdjs.Level3Code.GDenemyObjects3_1final.push(gdjs.Level3Code.GDenemyObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level3Code.GDwhitePlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level3Code.GDwhitePlayerObjects3_1final.indexOf(gdjs.Level3Code.GDwhitePlayerObjects4[j]) === -1 )
            gdjs.Level3Code.GDwhitePlayerObjects3_1final.push(gdjs.Level3Code.GDwhitePlayerObjects4[j]);
    }
}
}
{
gdjs.Level3Code.GDblackPlayerObjects3.createFrom(gdjs.Level3Code.GDblackPlayerObjects3_1final);
gdjs.Level3Code.GDdeadlyPlatObjects3.createFrom(gdjs.Level3Code.GDdeadlyPlatObjects3_1final);
gdjs.Level3Code.GDenemyObjects3.createFrom(gdjs.Level3Code.GDenemyObjects3_1final);
gdjs.Level3Code.GDwhitePlayerObjects3.createFrom(gdjs.Level3Code.GDwhitePlayerObjects3_1final);
}
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x7b7bcc(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime"));
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
gdjs.Level3Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level3Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects3[i].setOpacity(gdjs.Level3Code.GDflashObjects3[i].getOpacity() - (10));
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "deathTime");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("deathAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "deathTime");
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level3Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level3Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDflashObjects3[i].setOpacity(gdjs.Level3Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level3Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level3Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
gdjs.Level3Code.condition2IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Level3Code.condition1IsTrue_0.val ) {
{
gdjs.Level3Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), false);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
gdjs.Level3Code.condition2IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level3Code.condition1IsTrue_0.val ) {
{
gdjs.Level3Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.Level3Code.eventsList0x7b75c4
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level3Code.GDenemyObjects3});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDmovementRightCollideObjects3Objects = Hashtable.newFrom({"movementRightCollide": gdjs.Level3Code.GDmovementRightCollideObjects3});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level3Code.GDenemyObjects3});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDmovementLeftCollideObjects3Objects = Hashtable.newFrom({"movementLeftCollide": gdjs.Level3Code.GDmovementLeftCollideObjects3});gdjs.Level3Code.eventsList0x7b951c = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 0;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects3[i].setX(gdjs.Level3Code.GDenemyObjects3[i].getX() + (4));
}
}}

}


{

gdjs.Level3Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level3Code.GDmovementRightCollideObjects3.createFrom(runtimeScene.getObjects("movementRightCollide"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects3Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDmovementRightCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(1);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 1;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level3Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level3Code.GDenemyObjects3[i].setX(gdjs.Level3Code.GDenemyObjects3[i].getX() - (4));
}
}}

}


{

gdjs.Level3Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level3Code.GDmovementLeftCollideObjects3.createFrom(runtimeScene.getObjects("movementLeftCollide"));

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDenemyObjects3Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDmovementLeftCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(0);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDmovementLeftCollideObjects2.createFrom(runtimeScene.getObjects("movementLeftCollide"));
gdjs.Level3Code.GDmovementRightCollideObjects2.createFrom(runtimeScene.getObjects("movementRightCollide"));
{for(var i = 0, len = gdjs.Level3Code.GDmovementLeftCollideObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDmovementLeftCollideObjects2[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Level3Code.GDmovementRightCollideObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDmovementRightCollideObjects2[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Level3Code.eventsList0x7b951c
gdjs.Level3Code.eventsList0x7ba2b4 = function(runtimeScene) {

{



}


}; //End of gdjs.Level3Code.eventsList0x7ba2b4
gdjs.Level3Code.eventsList0x7ba0a4 = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDdeadlyPlatObjects2.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level3Code.GDwall1Objects2.createFrom(runtimeScene.getObjects("wall1"));
gdjs.Level3Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level3Code.GDwall1Objects2.length ;i < len;++i) {
    gdjs.Level3Code.GDwall1Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level3Code.GDwall2Objects2.length ;i < len;++i) {
    gdjs.Level3Code.GDwall2Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level3Code.GDdeadlyPlatObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDdeadlyPlatObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Level3Code.eventsList0x7ba2b4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level3Code.eventsList0x7ba0a4
gdjs.Level3Code.eventsList0x7ba76c = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.Level3Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level3Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
gdjs.Level3Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level3Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level3Code.GDwhitePlayerObjects3.length === 0 ) ? (( gdjs.Level3Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level3Code.GDblackPlayerObjects3[0].getPointY("")) :gdjs.Level3Code.GDwhitePlayerObjects3[0].getPointY("")), "", 0);
}}

}


{



}


}; //End of gdjs.Level3Code.eventsList0x7ba76c
gdjs.Level3Code.eventsList0x7bb34c = function(runtimeScene) {

{



}


{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8109468);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


}; //End of gdjs.Level3Code.eventsList0x7bb34c
gdjs.Level3Code.eventsList0x7aa7e4 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Controls"); }gdjs.Level3Code.eventsList0x7aa85c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Portal Effects"); }gdjs.Level3Code.eventsList0x7ac11c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Portal Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Level Ending"); }gdjs.Level3Code.eventsList0x7ad15c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Level Ending"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Death"); }gdjs.Level3Code.eventsList0x7b75c4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Death"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy Movement"); }gdjs.Level3Code.eventsList0x7b951c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Effects"); }gdjs.Level3Code.eventsList0x7ba0a4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.Level3Code.eventsList0x7ba76c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("External Events"); }gdjs.Level3Code.eventsList0x7bb34c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("External Events"); }
}


}; //End of gdjs.Level3Code.eventsList0x7aa7e4
gdjs.Level3Code.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Everything"); }gdjs.Level3Code.eventsList0x7aa7e4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Everything"); }
}


}; //End of gdjs.Level3Code.eventsList0xb24c0


gdjs.Level3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level3Code.GDbackgroundWallObjects1.length = 0;
gdjs.Level3Code.GDbackgroundWallObjects2.length = 0;
gdjs.Level3Code.GDbackgroundWallObjects3.length = 0;
gdjs.Level3Code.GDbackgroundWallObjects4.length = 0;
gdjs.Level3Code.GDbackgroundWallObjects5.length = 0;
gdjs.Level3Code.GDwall1Objects1.length = 0;
gdjs.Level3Code.GDwall1Objects2.length = 0;
gdjs.Level3Code.GDwall1Objects3.length = 0;
gdjs.Level3Code.GDwall1Objects4.length = 0;
gdjs.Level3Code.GDwall1Objects5.length = 0;
gdjs.Level3Code.GDwall2Objects1.length = 0;
gdjs.Level3Code.GDwall2Objects2.length = 0;
gdjs.Level3Code.GDwall2Objects3.length = 0;
gdjs.Level3Code.GDwall2Objects4.length = 0;
gdjs.Level3Code.GDwall2Objects5.length = 0;
gdjs.Level3Code.GDborderWallObjects1.length = 0;
gdjs.Level3Code.GDborderWallObjects2.length = 0;
gdjs.Level3Code.GDborderWallObjects3.length = 0;
gdjs.Level3Code.GDborderWallObjects4.length = 0;
gdjs.Level3Code.GDborderWallObjects5.length = 0;
gdjs.Level3Code.GDportalObjects1.length = 0;
gdjs.Level3Code.GDportalObjects2.length = 0;
gdjs.Level3Code.GDportalObjects3.length = 0;
gdjs.Level3Code.GDportalObjects4.length = 0;
gdjs.Level3Code.GDportalObjects5.length = 0;
gdjs.Level3Code.GDblackPlayerObjects1.length = 0;
gdjs.Level3Code.GDblackPlayerObjects2.length = 0;
gdjs.Level3Code.GDblackPlayerObjects3.length = 0;
gdjs.Level3Code.GDblackPlayerObjects4.length = 0;
gdjs.Level3Code.GDblackPlayerObjects5.length = 0;
gdjs.Level3Code.GDwhitePlayerObjects1.length = 0;
gdjs.Level3Code.GDwhitePlayerObjects2.length = 0;
gdjs.Level3Code.GDwhitePlayerObjects3.length = 0;
gdjs.Level3Code.GDwhitePlayerObjects4.length = 0;
gdjs.Level3Code.GDwhitePlayerObjects5.length = 0;
gdjs.Level3Code.GDenemyObjects1.length = 0;
gdjs.Level3Code.GDenemyObjects2.length = 0;
gdjs.Level3Code.GDenemyObjects3.length = 0;
gdjs.Level3Code.GDenemyObjects4.length = 0;
gdjs.Level3Code.GDenemyObjects5.length = 0;
gdjs.Level3Code.GDdeadlyPlatObjects1.length = 0;
gdjs.Level3Code.GDdeadlyPlatObjects2.length = 0;
gdjs.Level3Code.GDdeadlyPlatObjects3.length = 0;
gdjs.Level3Code.GDdeadlyPlatObjects4.length = 0;
gdjs.Level3Code.GDdeadlyPlatObjects5.length = 0;
gdjs.Level3Code.GDflashObjects1.length = 0;
gdjs.Level3Code.GDflashObjects2.length = 0;
gdjs.Level3Code.GDflashObjects3.length = 0;
gdjs.Level3Code.GDflashObjects4.length = 0;
gdjs.Level3Code.GDflashObjects5.length = 0;
gdjs.Level3Code.GDmovementLeftCollideObjects1.length = 0;
gdjs.Level3Code.GDmovementLeftCollideObjects2.length = 0;
gdjs.Level3Code.GDmovementLeftCollideObjects3.length = 0;
gdjs.Level3Code.GDmovementLeftCollideObjects4.length = 0;
gdjs.Level3Code.GDmovementLeftCollideObjects5.length = 0;
gdjs.Level3Code.GDmovementRightCollideObjects1.length = 0;
gdjs.Level3Code.GDmovementRightCollideObjects2.length = 0;
gdjs.Level3Code.GDmovementRightCollideObjects3.length = 0;
gdjs.Level3Code.GDmovementRightCollideObjects4.length = 0;
gdjs.Level3Code.GDmovementRightCollideObjects5.length = 0;

gdjs.Level3Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Level3Code'] = gdjs.Level3Code;
