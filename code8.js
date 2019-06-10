gdjs.Level4Code = {};
gdjs.Level4Code.GDblackPlayerObjects3_1final = [];

gdjs.Level4Code.GDdeadlyPlatObjects3_1final = [];

gdjs.Level4Code.GDenemyObjects3_1final = [];

gdjs.Level4Code.GDwhitePlayerObjects3_1final = [];

gdjs.Level4Code.GDbackgroundWallObjects1= [];
gdjs.Level4Code.GDbackgroundWallObjects2= [];
gdjs.Level4Code.GDbackgroundWallObjects3= [];
gdjs.Level4Code.GDbackgroundWallObjects4= [];
gdjs.Level4Code.GDbackgroundWallObjects5= [];
gdjs.Level4Code.GDwall1Objects1= [];
gdjs.Level4Code.GDwall1Objects2= [];
gdjs.Level4Code.GDwall1Objects3= [];
gdjs.Level4Code.GDwall1Objects4= [];
gdjs.Level4Code.GDwall1Objects5= [];
gdjs.Level4Code.GDwall2Objects1= [];
gdjs.Level4Code.GDwall2Objects2= [];
gdjs.Level4Code.GDwall2Objects3= [];
gdjs.Level4Code.GDwall2Objects4= [];
gdjs.Level4Code.GDwall2Objects5= [];
gdjs.Level4Code.GDborderWallObjects1= [];
gdjs.Level4Code.GDborderWallObjects2= [];
gdjs.Level4Code.GDborderWallObjects3= [];
gdjs.Level4Code.GDborderWallObjects4= [];
gdjs.Level4Code.GDborderWallObjects5= [];
gdjs.Level4Code.GDportalObjects1= [];
gdjs.Level4Code.GDportalObjects2= [];
gdjs.Level4Code.GDportalObjects3= [];
gdjs.Level4Code.GDportalObjects4= [];
gdjs.Level4Code.GDportalObjects5= [];
gdjs.Level4Code.GDblackPlayerObjects1= [];
gdjs.Level4Code.GDblackPlayerObjects2= [];
gdjs.Level4Code.GDblackPlayerObjects3= [];
gdjs.Level4Code.GDblackPlayerObjects4= [];
gdjs.Level4Code.GDblackPlayerObjects5= [];
gdjs.Level4Code.GDwhitePlayerObjects1= [];
gdjs.Level4Code.GDwhitePlayerObjects2= [];
gdjs.Level4Code.GDwhitePlayerObjects3= [];
gdjs.Level4Code.GDwhitePlayerObjects4= [];
gdjs.Level4Code.GDwhitePlayerObjects5= [];
gdjs.Level4Code.GDenemyObjects1= [];
gdjs.Level4Code.GDenemyObjects2= [];
gdjs.Level4Code.GDenemyObjects3= [];
gdjs.Level4Code.GDenemyObjects4= [];
gdjs.Level4Code.GDenemyObjects5= [];
gdjs.Level4Code.GDdeadlyPlatObjects1= [];
gdjs.Level4Code.GDdeadlyPlatObjects2= [];
gdjs.Level4Code.GDdeadlyPlatObjects3= [];
gdjs.Level4Code.GDdeadlyPlatObjects4= [];
gdjs.Level4Code.GDdeadlyPlatObjects5= [];
gdjs.Level4Code.GDflashObjects1= [];
gdjs.Level4Code.GDflashObjects2= [];
gdjs.Level4Code.GDflashObjects3= [];
gdjs.Level4Code.GDflashObjects4= [];
gdjs.Level4Code.GDflashObjects5= [];
gdjs.Level4Code.GDmovementLeftCollideObjects1= [];
gdjs.Level4Code.GDmovementLeftCollideObjects2= [];
gdjs.Level4Code.GDmovementLeftCollideObjects3= [];
gdjs.Level4Code.GDmovementLeftCollideObjects4= [];
gdjs.Level4Code.GDmovementLeftCollideObjects5= [];
gdjs.Level4Code.GDmovementRightCollideObjects1= [];
gdjs.Level4Code.GDmovementRightCollideObjects2= [];
gdjs.Level4Code.GDmovementRightCollideObjects3= [];
gdjs.Level4Code.GDmovementRightCollideObjects4= [];
gdjs.Level4Code.GDmovementRightCollideObjects5= [];

gdjs.Level4Code.conditionTrue_0 = {val:false};
gdjs.Level4Code.condition0IsTrue_0 = {val:false};
gdjs.Level4Code.condition1IsTrue_0 = {val:false};
gdjs.Level4Code.condition2IsTrue_0 = {val:false};
gdjs.Level4Code.condition3IsTrue_0 = {val:false};
gdjs.Level4Code.conditionTrue_1 = {val:false};
gdjs.Level4Code.condition0IsTrue_1 = {val:false};
gdjs.Level4Code.condition1IsTrue_1 = {val:false};
gdjs.Level4Code.condition2IsTrue_1 = {val:false};
gdjs.Level4Code.condition3IsTrue_1 = {val:false};
gdjs.Level4Code.conditionTrue_2 = {val:false};
gdjs.Level4Code.condition0IsTrue_2 = {val:false};
gdjs.Level4Code.condition1IsTrue_2 = {val:false};
gdjs.Level4Code.condition2IsTrue_2 = {val:false};
gdjs.Level4Code.condition3IsTrue_2 = {val:false};
gdjs.Level4Code.conditionTrue_3 = {val:false};
gdjs.Level4Code.condition0IsTrue_3 = {val:false};
gdjs.Level4Code.condition1IsTrue_3 = {val:false};
gdjs.Level4Code.condition2IsTrue_3 = {val:false};
gdjs.Level4Code.condition3IsTrue_3 = {val:false};


gdjs.Level4Code.eventsList0x7c2f34 = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level4Code.eventsList0x7c2f34
gdjs.Level4Code.eventsList0x7c3e04 = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects3[i].setX(970 - (( gdjs.Level4Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level4Code.GDblackPlayerObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects3[i].setY((( gdjs.Level4Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level4Code.GDblackPlayerObjects3[0].getPointY("")));
}
}}

}


{



}


{



}


}; //End of gdjs.Level4Code.eventsList0x7c3e04
gdjs.Level4Code.eventsList0x7c2e84 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Main Movement"); }gdjs.Level4Code.eventsList0x7c2f34(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Main Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("White Player Movement"); }gdjs.Level4Code.eventsList0x7c3e04(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("White Player Movement"); }
}


}; //End of gdjs.Level4Code.eventsList0x7c2e84
gdjs.Level4Code.eventsList0x7c4924 = function(runtimeScene) {

{

gdjs.Level4Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDportalObjects4.length;i<l;++i) {
    if ( gdjs.Level4Code.GDportalObjects4[i].getX() <= 400 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDportalObjects4[k] = gdjs.Level4Code.GDportalObjects4[i];
        ++k;
    }
}
gdjs.Level4Code.GDportalObjects4.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDportalObjects4 */
{for(var i = 0, len = gdjs.Level4Code.GDportalObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDportalObjects4[i].rotate(-(60), runtimeScene);
}
}}

}


{

gdjs.Level4Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level4Code.GDportalObjects3[i].getX() >= 500 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDportalObjects3[k] = gdjs.Level4Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level4Code.GDportalObjects3.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDportalObjects3 */
{for(var i = 0, len = gdjs.Level4Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDportalObjects3[i].rotate(60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDportalObjects3[i].flipX(true);
}
}}

}


}; //End of gdjs.Level4Code.eventsList0x7c4924
gdjs.Level4Code.eventsList0x7c4744 = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level4Code.eventsList0x7c4924(runtimeScene);} //End of subevents
}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level4Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDportalObjects3[i].setOpacity(70);
}
}}

}


{

gdjs.Level4Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level4Code.GDportalObjects3[i].getOpacity() > 95 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDportalObjects3[k] = gdjs.Level4Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level4Code.GDportalObjects3.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(0);
}}

}


{

gdjs.Level4Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level4Code.GDportalObjects3[i].getOpacity() < 65 ) {
        gdjs.Level4Code.condition0IsTrue_0.val = true;
        gdjs.Level4Code.GDportalObjects3[k] = gdjs.Level4Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level4Code.GDportalObjects3.length = k;}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(1);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level4Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDportalObjects3[i].setOpacity(gdjs.Level4Code.GDportalObjects3[i].getOpacity() + (1));
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 0;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDportalObjects2.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level4Code.GDportalObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDportalObjects2[i].setOpacity(gdjs.Level4Code.GDportalObjects2[i].getOpacity() - (1));
}
}}

}


}; //End of gdjs.Level4Code.eventsList0x7c4744
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level4Code_46GDwhitePlayerObjects3Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level4Code.GDblackPlayerObjects3, "whitePlayer": gdjs.Level4Code.GDwhitePlayerObjects3});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDportalObjects3Objects = Hashtable.newFrom({"portal": gdjs.Level4Code.GDportalObjects3});gdjs.Level4Code.eventsList0x7c5dbc = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8150948);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level4Code.eventsList0x7c5dbc
gdjs.Level4Code.eventsList0x7c5b74 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8150556);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c5dbc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level4Code.eventsList0x7c5b74
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level4Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level4Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level4Code.GDwhitePlayerObjects4});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDportalObjects4Objects = Hashtable.newFrom({"portal": gdjs.Level4Code.GDportalObjects4});gdjs.Level4Code.eventsList0x7c6b7c = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8154468);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level4Code.eventsList0x7c6b7c
gdjs.Level4Code.eventsList0x7c6934 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8154076);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDblackPlayerObjects4 */
{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c6b7c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level4Code.eventsList0x7c6934
gdjs.Level4Code.eventsList0x7c75d4 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8158164);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level4Code.eventsList0x7c75d4
gdjs.Level4Code.eventsList0x7c812c = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8160228);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level4Code.eventsList0x7c812c
gdjs.Level4Code.eventsList0x7c7da4 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8159628);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c812c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level4Code.eventsList0x7c7da4
gdjs.Level4Code.eventsList0x7c7304 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
{gdjs.Level4Code.conditionTrue_2 = gdjs.Level4Code.condition0IsTrue_1;
gdjs.Level4Code.condition0IsTrue_2.val = false;
{
gdjs.Level4Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}gdjs.Level4Code.conditionTrue_2.val = true && gdjs.Level4Code.condition0IsTrue_2.val;
}
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level4Code.conditionTrue_2 = gdjs.Level4Code.condition1IsTrue_1;
gdjs.Level4Code.condition0IsTrue_2.val = false;
gdjs.Level4Code.condition1IsTrue_2.val = false;
{
gdjs.Level4Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level4Code.condition0IsTrue_2.val ) {
{
{gdjs.Level4Code.conditionTrue_3 = gdjs.Level4Code.condition1IsTrue_1;
gdjs.Level4Code.conditionTrue_3.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}}
gdjs.Level4Code.conditionTrue_2.val = true && gdjs.Level4Code.condition0IsTrue_2.val && gdjs.Level4Code.condition1IsTrue_2.val;
}
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8157540);
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c75d4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition2IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8159084);
}
}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "noMistakeScore", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c7da4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level4Code.eventsList0x7c7304
gdjs.Level4Code.eventsList0x7c667c = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level4Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level4Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level4Code_46GDwhitePlayerObjects4Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDportalObjects4Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8153660);
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDwhitePlayerObjects4 */
{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c6934(runtimeScene);} //End of subevents
}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDflashObjects4.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level4Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level4Code.GDflashObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects4[i].setOpacity(gdjs.Level4Code.GDflashObjects4[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "endTime");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("noMistakeOriginalScore"));
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c7304(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level4Code.eventsList0x7c667c
gdjs.Level4Code.eventsList0x7c5784 = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level4Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level4Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level4Code_46GDwhitePlayerObjects3Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDportalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8150140);
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level4Code.eventsList0x7c5b74(runtimeScene);} //End of subevents
}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level4Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level4Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects3[i].setOpacity(gdjs.Level4Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Animation End"); }gdjs.Level4Code.eventsList0x7c667c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Animation End"); }
}


{



}


{



}


{



}


{



}


}; //End of gdjs.Level4Code.eventsList0x7c5784
gdjs.Level4Code.eventsList0x7cfdd4 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8192132);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level4Code.eventsList0x7cfdd4
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level4Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level4Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level4Code.GDwhitePlayerObjects4});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects4ObjectsGDgdjs_46Level4Code_46GDdeadlyPlatObjects4Objects = Hashtable.newFrom({"enemy": gdjs.Level4Code.GDenemyObjects4, "deadlyPlat": gdjs.Level4Code.GDdeadlyPlatObjects4});gdjs.Level4Code.eventsList0x7d04d4 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8193724);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{runtimeScene.getVariables().get("deathAnim").setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level4Code.eventsList0x7d04d4
gdjs.Level4Code.eventsList0x7d01f4 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8193332);
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level4Code.eventsList0x7d04d4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level4Code.eventsList0x7d01f4
gdjs.Level4Code.eventsList0x7cfbec = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level4Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects3[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("deathAnim").setNumber(0);
}
{ //Subevents
gdjs.Level4Code.eventsList0x7cfdd4(runtimeScene);} //End of subevents
}

}


{

gdjs.Level4Code.GDblackPlayerObjects3.length = 0;

gdjs.Level4Code.GDdeadlyPlatObjects3.length = 0;

gdjs.Level4Code.GDenemyObjects3.length = 0;

gdjs.Level4Code.GDwhitePlayerObjects3.length = 0;


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.GDblackPlayerObjects3_1final.length = 0;gdjs.Level4Code.GDdeadlyPlatObjects3_1final.length = 0;gdjs.Level4Code.GDenemyObjects3_1final.length = 0;gdjs.Level4Code.GDwhitePlayerObjects3_1final.length = 0;gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDdeadlyPlatObjects4.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level4Code.GDenemyObjects4.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level4Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level4Code_46GDwhitePlayerObjects4Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects4ObjectsGDgdjs_46Level4Code_46GDdeadlyPlatObjects4Objects, false, runtimeScene, false);
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level4Code.GDblackPlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDblackPlayerObjects3_1final.indexOf(gdjs.Level4Code.GDblackPlayerObjects4[j]) === -1 )
            gdjs.Level4Code.GDblackPlayerObjects3_1final.push(gdjs.Level4Code.GDblackPlayerObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level4Code.GDdeadlyPlatObjects4.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDdeadlyPlatObjects3_1final.indexOf(gdjs.Level4Code.GDdeadlyPlatObjects4[j]) === -1 )
            gdjs.Level4Code.GDdeadlyPlatObjects3_1final.push(gdjs.Level4Code.GDdeadlyPlatObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level4Code.GDenemyObjects4.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDenemyObjects3_1final.indexOf(gdjs.Level4Code.GDenemyObjects4[j]) === -1 )
            gdjs.Level4Code.GDenemyObjects3_1final.push(gdjs.Level4Code.GDenemyObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level4Code.GDwhitePlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDwhitePlayerObjects3_1final.indexOf(gdjs.Level4Code.GDwhitePlayerObjects4[j]) === -1 )
            gdjs.Level4Code.GDwhitePlayerObjects3_1final.push(gdjs.Level4Code.GDwhitePlayerObjects4[j]);
    }
}
}
{
gdjs.Level4Code.GDblackPlayerObjects3.createFrom(gdjs.Level4Code.GDblackPlayerObjects3_1final);
gdjs.Level4Code.GDdeadlyPlatObjects3.createFrom(gdjs.Level4Code.GDdeadlyPlatObjects3_1final);
gdjs.Level4Code.GDenemyObjects3.createFrom(gdjs.Level4Code.GDenemyObjects3_1final);
gdjs.Level4Code.GDwhitePlayerObjects3.createFrom(gdjs.Level4Code.GDwhitePlayerObjects3_1final);
}
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level4Code.eventsList0x7d01f4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime"));
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
gdjs.Level4Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level4Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects3[i].setOpacity(gdjs.Level4Code.GDflashObjects3[i].getOpacity() - (10));
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "deathTime");
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("deathAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "deathTime");
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level4Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level4Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDflashObjects3[i].setOpacity(gdjs.Level4Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level4Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level4Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
gdjs.Level4Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), false);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
gdjs.Level4Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.Level4Code.eventsList0x7cfbec
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level4Code.GDenemyObjects3});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDmovementRightCollideObjects3Objects = Hashtable.newFrom({"movementRightCollide": gdjs.Level4Code.GDmovementRightCollideObjects3});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level4Code.GDenemyObjects3});gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDmovementLeftCollideObjects3Objects = Hashtable.newFrom({"movementLeftCollide": gdjs.Level4Code.GDmovementLeftCollideObjects3});gdjs.Level4Code.eventsList0x7d1b44 = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 0;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level4Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDenemyObjects3[i].setX(gdjs.Level4Code.GDenemyObjects3[i].getX() + (4));
}
}}

}


{

gdjs.Level4Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level4Code.GDmovementRightCollideObjects3.createFrom(runtimeScene.getObjects("movementRightCollide"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects3Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDmovementRightCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(1);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 1;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level4Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level4Code.GDenemyObjects3[i].setX(gdjs.Level4Code.GDenemyObjects3[i].getX() - (4));
}
}}

}


{

gdjs.Level4Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level4Code.GDmovementLeftCollideObjects3.createFrom(runtimeScene.getObjects("movementLeftCollide"));

gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects3Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDmovementLeftCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(0);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDmovementLeftCollideObjects2.createFrom(runtimeScene.getObjects("movementLeftCollide"));
gdjs.Level4Code.GDmovementRightCollideObjects2.createFrom(runtimeScene.getObjects("movementRightCollide"));
{for(var i = 0, len = gdjs.Level4Code.GDmovementLeftCollideObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDmovementLeftCollideObjects2[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Level4Code.GDmovementRightCollideObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDmovementRightCollideObjects2[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Level4Code.eventsList0x7d1b44
gdjs.Level4Code.eventsList0x7d28dc = function(runtimeScene) {

{



}


}; //End of gdjs.Level4Code.eventsList0x7d28dc
gdjs.Level4Code.eventsList0x7d26cc = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.Level4Code.GDdeadlyPlatObjects2.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level4Code.GDwall1Objects2.createFrom(runtimeScene.getObjects("wall1"));
gdjs.Level4Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level4Code.GDwall1Objects2.length ;i < len;++i) {
    gdjs.Level4Code.GDwall1Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level4Code.GDwall2Objects2.length ;i < len;++i) {
    gdjs.Level4Code.GDwall2Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level4Code.GDdeadlyPlatObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDdeadlyPlatObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Level4Code.eventsList0x7d28dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level4Code.eventsList0x7d26cc
gdjs.Level4Code.eventsList0x7d2d94 = function(runtimeScene) {

{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.Level4Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level4Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
gdjs.Level4Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level4Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level4Code.GDwhitePlayerObjects3.length === 0 ) ? (( gdjs.Level4Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level4Code.GDblackPlayerObjects3[0].getPointY("")) :gdjs.Level4Code.GDwhitePlayerObjects3[0].getPointY("")), "", 0);
}}

}


{



}


}; //End of gdjs.Level4Code.eventsList0x7d2d94
gdjs.Level4Code.eventsList0x7d3974 = function(runtimeScene) {

{



}


{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition1IsTrue_0;
gdjs.Level4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8209348);
}
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


}; //End of gdjs.Level4Code.eventsList0x7d3974
gdjs.Level4Code.eventsList0x7c2e0c = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Controls"); }gdjs.Level4Code.eventsList0x7c2e84(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Portal Effects"); }gdjs.Level4Code.eventsList0x7c4744(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Portal Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Level Ending"); }gdjs.Level4Code.eventsList0x7c5784(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Level Ending"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Death"); }gdjs.Level4Code.eventsList0x7cfbec(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Death"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy Movement"); }gdjs.Level4Code.eventsList0x7d1b44(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Effects"); }gdjs.Level4Code.eventsList0x7d26cc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.Level4Code.eventsList0x7d2d94(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("External Events"); }gdjs.Level4Code.eventsList0x7d3974(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("External Events"); }
}


}; //End of gdjs.Level4Code.eventsList0x7c2e0c
gdjs.Level4Code.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Everything"); }gdjs.Level4Code.eventsList0x7c2e0c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Everything"); }
}


}; //End of gdjs.Level4Code.eventsList0xb24c0


gdjs.Level4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level4Code.GDbackgroundWallObjects1.length = 0;
gdjs.Level4Code.GDbackgroundWallObjects2.length = 0;
gdjs.Level4Code.GDbackgroundWallObjects3.length = 0;
gdjs.Level4Code.GDbackgroundWallObjects4.length = 0;
gdjs.Level4Code.GDbackgroundWallObjects5.length = 0;
gdjs.Level4Code.GDwall1Objects1.length = 0;
gdjs.Level4Code.GDwall1Objects2.length = 0;
gdjs.Level4Code.GDwall1Objects3.length = 0;
gdjs.Level4Code.GDwall1Objects4.length = 0;
gdjs.Level4Code.GDwall1Objects5.length = 0;
gdjs.Level4Code.GDwall2Objects1.length = 0;
gdjs.Level4Code.GDwall2Objects2.length = 0;
gdjs.Level4Code.GDwall2Objects3.length = 0;
gdjs.Level4Code.GDwall2Objects4.length = 0;
gdjs.Level4Code.GDwall2Objects5.length = 0;
gdjs.Level4Code.GDborderWallObjects1.length = 0;
gdjs.Level4Code.GDborderWallObjects2.length = 0;
gdjs.Level4Code.GDborderWallObjects3.length = 0;
gdjs.Level4Code.GDborderWallObjects4.length = 0;
gdjs.Level4Code.GDborderWallObjects5.length = 0;
gdjs.Level4Code.GDportalObjects1.length = 0;
gdjs.Level4Code.GDportalObjects2.length = 0;
gdjs.Level4Code.GDportalObjects3.length = 0;
gdjs.Level4Code.GDportalObjects4.length = 0;
gdjs.Level4Code.GDportalObjects5.length = 0;
gdjs.Level4Code.GDblackPlayerObjects1.length = 0;
gdjs.Level4Code.GDblackPlayerObjects2.length = 0;
gdjs.Level4Code.GDblackPlayerObjects3.length = 0;
gdjs.Level4Code.GDblackPlayerObjects4.length = 0;
gdjs.Level4Code.GDblackPlayerObjects5.length = 0;
gdjs.Level4Code.GDwhitePlayerObjects1.length = 0;
gdjs.Level4Code.GDwhitePlayerObjects2.length = 0;
gdjs.Level4Code.GDwhitePlayerObjects3.length = 0;
gdjs.Level4Code.GDwhitePlayerObjects4.length = 0;
gdjs.Level4Code.GDwhitePlayerObjects5.length = 0;
gdjs.Level4Code.GDenemyObjects1.length = 0;
gdjs.Level4Code.GDenemyObjects2.length = 0;
gdjs.Level4Code.GDenemyObjects3.length = 0;
gdjs.Level4Code.GDenemyObjects4.length = 0;
gdjs.Level4Code.GDenemyObjects5.length = 0;
gdjs.Level4Code.GDdeadlyPlatObjects1.length = 0;
gdjs.Level4Code.GDdeadlyPlatObjects2.length = 0;
gdjs.Level4Code.GDdeadlyPlatObjects3.length = 0;
gdjs.Level4Code.GDdeadlyPlatObjects4.length = 0;
gdjs.Level4Code.GDdeadlyPlatObjects5.length = 0;
gdjs.Level4Code.GDflashObjects1.length = 0;
gdjs.Level4Code.GDflashObjects2.length = 0;
gdjs.Level4Code.GDflashObjects3.length = 0;
gdjs.Level4Code.GDflashObjects4.length = 0;
gdjs.Level4Code.GDflashObjects5.length = 0;
gdjs.Level4Code.GDmovementLeftCollideObjects1.length = 0;
gdjs.Level4Code.GDmovementLeftCollideObjects2.length = 0;
gdjs.Level4Code.GDmovementLeftCollideObjects3.length = 0;
gdjs.Level4Code.GDmovementLeftCollideObjects4.length = 0;
gdjs.Level4Code.GDmovementLeftCollideObjects5.length = 0;
gdjs.Level4Code.GDmovementRightCollideObjects1.length = 0;
gdjs.Level4Code.GDmovementRightCollideObjects2.length = 0;
gdjs.Level4Code.GDmovementRightCollideObjects3.length = 0;
gdjs.Level4Code.GDmovementRightCollideObjects4.length = 0;
gdjs.Level4Code.GDmovementRightCollideObjects5.length = 0;

gdjs.Level4Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Level4Code'] = gdjs.Level4Code;
