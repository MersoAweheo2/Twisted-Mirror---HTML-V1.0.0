gdjs.Level7Code = {};
gdjs.Level7Code.GDblackPlayerObjects3_1final = [];

gdjs.Level7Code.GDdeadlyPlatObjects3_1final = [];

gdjs.Level7Code.GDenemyObjects3_1final = [];

gdjs.Level7Code.GDwhitePlayerObjects3_1final = [];

gdjs.Level7Code.GDbackgroundWallObjects1= [];
gdjs.Level7Code.GDbackgroundWallObjects2= [];
gdjs.Level7Code.GDbackgroundWallObjects3= [];
gdjs.Level7Code.GDbackgroundWallObjects4= [];
gdjs.Level7Code.GDbackgroundWallObjects5= [];
gdjs.Level7Code.GDwall1Objects1= [];
gdjs.Level7Code.GDwall1Objects2= [];
gdjs.Level7Code.GDwall1Objects3= [];
gdjs.Level7Code.GDwall1Objects4= [];
gdjs.Level7Code.GDwall1Objects5= [];
gdjs.Level7Code.GDwall2Objects1= [];
gdjs.Level7Code.GDwall2Objects2= [];
gdjs.Level7Code.GDwall2Objects3= [];
gdjs.Level7Code.GDwall2Objects4= [];
gdjs.Level7Code.GDwall2Objects5= [];
gdjs.Level7Code.GDborderWallObjects1= [];
gdjs.Level7Code.GDborderWallObjects2= [];
gdjs.Level7Code.GDborderWallObjects3= [];
gdjs.Level7Code.GDborderWallObjects4= [];
gdjs.Level7Code.GDborderWallObjects5= [];
gdjs.Level7Code.GDportalObjects1= [];
gdjs.Level7Code.GDportalObjects2= [];
gdjs.Level7Code.GDportalObjects3= [];
gdjs.Level7Code.GDportalObjects4= [];
gdjs.Level7Code.GDportalObjects5= [];
gdjs.Level7Code.GDblackPlayerObjects1= [];
gdjs.Level7Code.GDblackPlayerObjects2= [];
gdjs.Level7Code.GDblackPlayerObjects3= [];
gdjs.Level7Code.GDblackPlayerObjects4= [];
gdjs.Level7Code.GDblackPlayerObjects5= [];
gdjs.Level7Code.GDwhitePlayerObjects1= [];
gdjs.Level7Code.GDwhitePlayerObjects2= [];
gdjs.Level7Code.GDwhitePlayerObjects3= [];
gdjs.Level7Code.GDwhitePlayerObjects4= [];
gdjs.Level7Code.GDwhitePlayerObjects5= [];
gdjs.Level7Code.GDenemyObjects1= [];
gdjs.Level7Code.GDenemyObjects2= [];
gdjs.Level7Code.GDenemyObjects3= [];
gdjs.Level7Code.GDenemyObjects4= [];
gdjs.Level7Code.GDenemyObjects5= [];
gdjs.Level7Code.GDdeadlyPlatObjects1= [];
gdjs.Level7Code.GDdeadlyPlatObjects2= [];
gdjs.Level7Code.GDdeadlyPlatObjects3= [];
gdjs.Level7Code.GDdeadlyPlatObjects4= [];
gdjs.Level7Code.GDdeadlyPlatObjects5= [];
gdjs.Level7Code.GDflashObjects1= [];
gdjs.Level7Code.GDflashObjects2= [];
gdjs.Level7Code.GDflashObjects3= [];
gdjs.Level7Code.GDflashObjects4= [];
gdjs.Level7Code.GDflashObjects5= [];
gdjs.Level7Code.GDmovementLeftCollideObjects1= [];
gdjs.Level7Code.GDmovementLeftCollideObjects2= [];
gdjs.Level7Code.GDmovementLeftCollideObjects3= [];
gdjs.Level7Code.GDmovementLeftCollideObjects4= [];
gdjs.Level7Code.GDmovementLeftCollideObjects5= [];
gdjs.Level7Code.GDmovementRightCollideObjects1= [];
gdjs.Level7Code.GDmovementRightCollideObjects2= [];
gdjs.Level7Code.GDmovementRightCollideObjects3= [];
gdjs.Level7Code.GDmovementRightCollideObjects4= [];
gdjs.Level7Code.GDmovementRightCollideObjects5= [];

gdjs.Level7Code.conditionTrue_0 = {val:false};
gdjs.Level7Code.condition0IsTrue_0 = {val:false};
gdjs.Level7Code.condition1IsTrue_0 = {val:false};
gdjs.Level7Code.condition2IsTrue_0 = {val:false};
gdjs.Level7Code.condition3IsTrue_0 = {val:false};
gdjs.Level7Code.conditionTrue_1 = {val:false};
gdjs.Level7Code.condition0IsTrue_1 = {val:false};
gdjs.Level7Code.condition1IsTrue_1 = {val:false};
gdjs.Level7Code.condition2IsTrue_1 = {val:false};
gdjs.Level7Code.condition3IsTrue_1 = {val:false};
gdjs.Level7Code.conditionTrue_2 = {val:false};
gdjs.Level7Code.condition0IsTrue_2 = {val:false};
gdjs.Level7Code.condition1IsTrue_2 = {val:false};
gdjs.Level7Code.condition2IsTrue_2 = {val:false};
gdjs.Level7Code.condition3IsTrue_2 = {val:false};
gdjs.Level7Code.conditionTrue_3 = {val:false};
gdjs.Level7Code.condition0IsTrue_3 = {val:false};
gdjs.Level7Code.condition1IsTrue_3 = {val:false};
gdjs.Level7Code.condition2IsTrue_3 = {val:false};
gdjs.Level7Code.condition3IsTrue_3 = {val:false};


gdjs.Level7Code.eventsList0x80b3b4 = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
gdjs.Level7Code.condition2IsTrue_1.val = false;
{
gdjs.Level7Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level7Code.condition2IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
gdjs.Level7Code.condition2IsTrue_1.val = false;
{
gdjs.Level7Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level7Code.condition2IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
gdjs.Level7Code.condition2IsTrue_1.val = false;
{
gdjs.Level7Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level7Code.condition2IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level7Code.eventsList0x80b3b4
gdjs.Level7Code.eventsList0x80c284 = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects3[i].setX(970 - (( gdjs.Level7Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level7Code.GDblackPlayerObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects3[i].setY((( gdjs.Level7Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level7Code.GDblackPlayerObjects3[0].getPointY("")));
}
}}

}


{



}


{



}


}; //End of gdjs.Level7Code.eventsList0x80c284
gdjs.Level7Code.eventsList0x80b304 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Main Movement"); }gdjs.Level7Code.eventsList0x80b3b4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Main Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("White Player Movement"); }gdjs.Level7Code.eventsList0x80c284(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("White Player Movement"); }
}


}; //End of gdjs.Level7Code.eventsList0x80b304
gdjs.Level7Code.eventsList0x80cda4 = function(runtimeScene) {

{

gdjs.Level7Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level7Code.GDportalObjects4.length;i<l;++i) {
    if ( gdjs.Level7Code.GDportalObjects4[i].getX() <= 400 ) {
        gdjs.Level7Code.condition0IsTrue_0.val = true;
        gdjs.Level7Code.GDportalObjects4[k] = gdjs.Level7Code.GDportalObjects4[i];
        ++k;
    }
}
gdjs.Level7Code.GDportalObjects4.length = k;}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDportalObjects4 */
{for(var i = 0, len = gdjs.Level7Code.GDportalObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDportalObjects4[i].rotate(-(60), runtimeScene);
}
}}

}


{

gdjs.Level7Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level7Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level7Code.GDportalObjects3[i].getX() >= 500 ) {
        gdjs.Level7Code.condition0IsTrue_0.val = true;
        gdjs.Level7Code.GDportalObjects3[k] = gdjs.Level7Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level7Code.GDportalObjects3.length = k;}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDportalObjects3 */
{for(var i = 0, len = gdjs.Level7Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDportalObjects3[i].rotate(60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level7Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDportalObjects3[i].flipX(true);
}
}}

}


}; //End of gdjs.Level7Code.eventsList0x80cda4
gdjs.Level7Code.eventsList0x80cbc4 = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level7Code.eventsList0x80cda4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level7Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDportalObjects3[i].setOpacity(70);
}
}}

}


{

gdjs.Level7Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level7Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level7Code.GDportalObjects3[i].getOpacity() > 95 ) {
        gdjs.Level7Code.condition0IsTrue_0.val = true;
        gdjs.Level7Code.GDportalObjects3[k] = gdjs.Level7Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level7Code.GDportalObjects3.length = k;}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(0);
}}

}


{

gdjs.Level7Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level7Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level7Code.GDportalObjects3[i].getOpacity() < 65 ) {
        gdjs.Level7Code.condition0IsTrue_0.val = true;
        gdjs.Level7Code.GDportalObjects3[k] = gdjs.Level7Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level7Code.GDportalObjects3.length = k;}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(1);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 1;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level7Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDportalObjects3[i].setOpacity(gdjs.Level7Code.GDportalObjects3[i].getOpacity() + (1));
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 0;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDportalObjects2.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level7Code.GDportalObjects2.length ;i < len;++i) {
    gdjs.Level7Code.GDportalObjects2[i].setOpacity(gdjs.Level7Code.GDportalObjects2[i].getOpacity() - (1));
}
}}

}


}; //End of gdjs.Level7Code.eventsList0x80cbc4
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level7Code_46GDwhitePlayerObjects3Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level7Code.GDblackPlayerObjects3, "whitePlayer": gdjs.Level7Code.GDwhitePlayerObjects3});gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDportalObjects3Objects = Hashtable.newFrom({"portal": gdjs.Level7Code.GDportalObjects3});gdjs.Level7Code.eventsList0x80e23c = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8447012);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level7Code.eventsList0x80e23c
gdjs.Level7Code.eventsList0x80dff4 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8446620);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level7Code.eventsList0x80e23c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level7Code.eventsList0x80dff4
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level7Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level7Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level7Code.GDwhitePlayerObjects4});gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDportalObjects4Objects = Hashtable.newFrom({"portal": gdjs.Level7Code.GDportalObjects4});gdjs.Level7Code.eventsList0x80effc = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8450532);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level7Code.eventsList0x80effc
gdjs.Level7Code.eventsList0x80edb4 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8450140);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDblackPlayerObjects4 */
{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level7Code.eventsList0x80effc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level7Code.eventsList0x80edb4
gdjs.Level7Code.eventsList0x80fa54 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8454228);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level7Code.eventsList0x80fa54
gdjs.Level7Code.eventsList0x8105ac = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8456292);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level7Code.eventsList0x8105ac
gdjs.Level7Code.eventsList0x810224 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8455692);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level7Code.eventsList0x8105ac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level7Code.eventsList0x810224
gdjs.Level7Code.eventsList0x80f784 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
{
{gdjs.Level7Code.conditionTrue_2 = gdjs.Level7Code.condition0IsTrue_1;
gdjs.Level7Code.condition0IsTrue_2.val = false;
{
gdjs.Level7Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}gdjs.Level7Code.conditionTrue_2.val = true && gdjs.Level7Code.condition0IsTrue_2.val;
}
if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level7Code.conditionTrue_2 = gdjs.Level7Code.condition1IsTrue_1;
gdjs.Level7Code.condition0IsTrue_2.val = false;
gdjs.Level7Code.condition1IsTrue_2.val = false;
{
gdjs.Level7Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level7Code.condition0IsTrue_2.val ) {
{
{gdjs.Level7Code.conditionTrue_3 = gdjs.Level7Code.condition1IsTrue_1;
gdjs.Level7Code.conditionTrue_3.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}}
gdjs.Level7Code.conditionTrue_2.val = true && gdjs.Level7Code.condition0IsTrue_2.val && gdjs.Level7Code.condition1IsTrue_2.val;
}
if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition1IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8453604);
}
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level7Code.eventsList0x80fa54(runtimeScene);} //End of subevents
}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
gdjs.Level7Code.condition2IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition1IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}if ( gdjs.Level7Code.condition1IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition2IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8455148);
}
}}
}
if (gdjs.Level7Code.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "noMistakeScore", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Level7Code.eventsList0x810224(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level7Code.eventsList0x80f784
gdjs.Level7Code.eventsList0x80eafc = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level7Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level7Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level7Code_46GDwhitePlayerObjects4Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDportalObjects4Objects, false, runtimeScene, false);
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition1IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8449724);
}
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDwhitePlayerObjects4 */
{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level7Code.eventsList0x80edb4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDflashObjects4.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level7Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level7Code.GDflashObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDflashObjects4[i].setOpacity(gdjs.Level7Code.GDflashObjects4[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "endTime");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("noMistakeOriginalScore"));
}
{ //Subevents
gdjs.Level7Code.eventsList0x80f784(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level7Code.eventsList0x80eafc
gdjs.Level7Code.eventsList0x80dc04 = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level7Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level7Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level7Code_46GDwhitePlayerObjects3Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDportalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition1IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8446204);
}
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level7Code.eventsList0x80dff4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level7Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level7Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDflashObjects3[i].setOpacity(gdjs.Level7Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Animation End"); }gdjs.Level7Code.eventsList0x80eafc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Animation End"); }
}


{



}


{



}


{



}


{



}


}; //End of gdjs.Level7Code.eventsList0x80dc04
gdjs.Level7Code.eventsList0x818254 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8488196);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level7Code.eventsList0x818254
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level7Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level7Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level7Code.GDwhitePlayerObjects4});gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects4ObjectsGDgdjs_46Level7Code_46GDdeadlyPlatObjects4Objects = Hashtable.newFrom({"enemy": gdjs.Level7Code.GDenemyObjects4, "deadlyPlat": gdjs.Level7Code.GDdeadlyPlatObjects4});gdjs.Level7Code.eventsList0x818954 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8489788);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{runtimeScene.getVariables().get("deathAnim").setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level7Code.eventsList0x818954
gdjs.Level7Code.eventsList0x818674 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8489396);
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level7Code.eventsList0x818954(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level7Code.eventsList0x818674
gdjs.Level7Code.eventsList0x81806c = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level7Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDflashObjects3[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("deathAnim").setNumber(0);
}
{ //Subevents
gdjs.Level7Code.eventsList0x818254(runtimeScene);} //End of subevents
}

}


{

gdjs.Level7Code.GDblackPlayerObjects3.length = 0;

gdjs.Level7Code.GDdeadlyPlatObjects3.length = 0;

gdjs.Level7Code.GDenemyObjects3.length = 0;

gdjs.Level7Code.GDwhitePlayerObjects3.length = 0;


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.GDblackPlayerObjects3_1final.length = 0;gdjs.Level7Code.GDdeadlyPlatObjects3_1final.length = 0;gdjs.Level7Code.GDenemyObjects3_1final.length = 0;gdjs.Level7Code.GDwhitePlayerObjects3_1final.length = 0;gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
{
gdjs.Level7Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDdeadlyPlatObjects4.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level7Code.GDenemyObjects4.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level7Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
gdjs.Level7Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level7Code_46GDwhitePlayerObjects4Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects4ObjectsGDgdjs_46Level7Code_46GDdeadlyPlatObjects4Objects, false, runtimeScene, false);
if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level7Code.GDblackPlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level7Code.GDblackPlayerObjects3_1final.indexOf(gdjs.Level7Code.GDblackPlayerObjects4[j]) === -1 )
            gdjs.Level7Code.GDblackPlayerObjects3_1final.push(gdjs.Level7Code.GDblackPlayerObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level7Code.GDdeadlyPlatObjects4.length;j<jLen;++j) {
        if ( gdjs.Level7Code.GDdeadlyPlatObjects3_1final.indexOf(gdjs.Level7Code.GDdeadlyPlatObjects4[j]) === -1 )
            gdjs.Level7Code.GDdeadlyPlatObjects3_1final.push(gdjs.Level7Code.GDdeadlyPlatObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level7Code.GDenemyObjects4.length;j<jLen;++j) {
        if ( gdjs.Level7Code.GDenemyObjects3_1final.indexOf(gdjs.Level7Code.GDenemyObjects4[j]) === -1 )
            gdjs.Level7Code.GDenemyObjects3_1final.push(gdjs.Level7Code.GDenemyObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level7Code.GDwhitePlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level7Code.GDwhitePlayerObjects3_1final.indexOf(gdjs.Level7Code.GDwhitePlayerObjects4[j]) === -1 )
            gdjs.Level7Code.GDwhitePlayerObjects3_1final.push(gdjs.Level7Code.GDwhitePlayerObjects4[j]);
    }
}
}
{
gdjs.Level7Code.GDblackPlayerObjects3.createFrom(gdjs.Level7Code.GDblackPlayerObjects3_1final);
gdjs.Level7Code.GDdeadlyPlatObjects3.createFrom(gdjs.Level7Code.GDdeadlyPlatObjects3_1final);
gdjs.Level7Code.GDenemyObjects3.createFrom(gdjs.Level7Code.GDenemyObjects3_1final);
gdjs.Level7Code.GDwhitePlayerObjects3.createFrom(gdjs.Level7Code.GDwhitePlayerObjects3_1final);
}
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level7Code.eventsList0x818674(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime"));
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
gdjs.Level7Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
gdjs.Level7Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level7Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDflashObjects3[i].setOpacity(gdjs.Level7Code.GDflashObjects3[i].getOpacity() - (10));
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "deathTime");
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
gdjs.Level7Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("deathAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "deathTime");
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level7Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level7Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDflashObjects3[i].setOpacity(gdjs.Level7Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level7Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level7Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
gdjs.Level7Code.condition2IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
gdjs.Level7Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Level7Code.condition1IsTrue_0.val ) {
{
gdjs.Level7Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level7Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), false);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
gdjs.Level7Code.condition2IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
gdjs.Level7Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level7Code.condition1IsTrue_0.val ) {
{
gdjs.Level7Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level7Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.Level7Code.eventsList0x81806c
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level7Code.GDenemyObjects3});gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDmovementRightCollideObjects3Objects = Hashtable.newFrom({"movementRightCollide": gdjs.Level7Code.GDmovementRightCollideObjects3});gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level7Code.GDenemyObjects3});gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDmovementLeftCollideObjects3Objects = Hashtable.newFrom({"movementLeftCollide": gdjs.Level7Code.GDmovementLeftCollideObjects3});gdjs.Level7Code.eventsList0x819fc4 = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 0;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level7Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDenemyObjects3[i].setX(gdjs.Level7Code.GDenemyObjects3[i].getX() + (4));
}
}}

}


{

gdjs.Level7Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level7Code.GDmovementRightCollideObjects3.createFrom(runtimeScene.getObjects("movementRightCollide"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects3Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDmovementRightCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(1);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 1;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level7Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level7Code.GDenemyObjects3[i].setX(gdjs.Level7Code.GDenemyObjects3[i].getX() - (4));
}
}}

}


{

gdjs.Level7Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level7Code.GDmovementLeftCollideObjects3.createFrom(runtimeScene.getObjects("movementLeftCollide"));

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects3Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDmovementLeftCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(0);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDmovementLeftCollideObjects2.createFrom(runtimeScene.getObjects("movementLeftCollide"));
gdjs.Level7Code.GDmovementRightCollideObjects2.createFrom(runtimeScene.getObjects("movementRightCollide"));
{for(var i = 0, len = gdjs.Level7Code.GDmovementLeftCollideObjects2.length ;i < len;++i) {
    gdjs.Level7Code.GDmovementLeftCollideObjects2[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Level7Code.GDmovementRightCollideObjects2.length ;i < len;++i) {
    gdjs.Level7Code.GDmovementRightCollideObjects2[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Level7Code.eventsList0x819fc4
gdjs.Level7Code.eventsList0x81ad5c = function(runtimeScene) {

{



}


}; //End of gdjs.Level7Code.eventsList0x81ad5c
gdjs.Level7Code.eventsList0x81ab4c = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.Level7Code.GDdeadlyPlatObjects2.createFrom(runtimeScene.getObjects("deadlyPlat"));
gdjs.Level7Code.GDwall1Objects2.createFrom(runtimeScene.getObjects("wall1"));
gdjs.Level7Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level7Code.GDwall1Objects2.length ;i < len;++i) {
    gdjs.Level7Code.GDwall1Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level7Code.GDwall2Objects2.length ;i < len;++i) {
    gdjs.Level7Code.GDwall2Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level7Code.GDdeadlyPlatObjects2.length ;i < len;++i) {
    gdjs.Level7Code.GDdeadlyPlatObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Level7Code.eventsList0x81ad5c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level7Code.eventsList0x81ab4c
gdjs.Level7Code.eventsList0x81b214 = function(runtimeScene) {

{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition1IsTrue_0;
gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
gdjs.Level7Code.condition2IsTrue_1.val = false;
{
gdjs.Level7Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level7Code.condition2IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition1IsTrue_0;
gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
gdjs.Level7Code.condition2IsTrue_1.val = false;
{
gdjs.Level7Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level7Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level7Code.condition2IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
gdjs.Level7Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level7Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level7Code.GDwhitePlayerObjects3.length === 0 ) ? (( gdjs.Level7Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level7Code.GDblackPlayerObjects3[0].getPointY("")) :gdjs.Level7Code.GDwhitePlayerObjects3[0].getPointY("")), "", 0);
}}

}


{



}


}; //End of gdjs.Level7Code.eventsList0x81b214
gdjs.Level7Code.eventsList0x81bdf4 = function(runtimeScene) {

{



}


{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition1IsTrue_0;
gdjs.Level7Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8505412);
}
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


}; //End of gdjs.Level7Code.eventsList0x81bdf4
gdjs.Level7Code.eventsList0x80b28c = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Controls"); }gdjs.Level7Code.eventsList0x80b304(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Portal Effects"); }gdjs.Level7Code.eventsList0x80cbc4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Portal Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Level Ending"); }gdjs.Level7Code.eventsList0x80dc04(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Level Ending"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Death"); }gdjs.Level7Code.eventsList0x81806c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Death"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy Movement"); }gdjs.Level7Code.eventsList0x819fc4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Effects"); }gdjs.Level7Code.eventsList0x81ab4c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.Level7Code.eventsList0x81b214(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("External Events"); }gdjs.Level7Code.eventsList0x81bdf4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("External Events"); }
}


}; //End of gdjs.Level7Code.eventsList0x80b28c
gdjs.Level7Code.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Everything"); }gdjs.Level7Code.eventsList0x80b28c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Everything"); }
}


}; //End of gdjs.Level7Code.eventsList0xb24c0


gdjs.Level7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level7Code.GDbackgroundWallObjects1.length = 0;
gdjs.Level7Code.GDbackgroundWallObjects2.length = 0;
gdjs.Level7Code.GDbackgroundWallObjects3.length = 0;
gdjs.Level7Code.GDbackgroundWallObjects4.length = 0;
gdjs.Level7Code.GDbackgroundWallObjects5.length = 0;
gdjs.Level7Code.GDwall1Objects1.length = 0;
gdjs.Level7Code.GDwall1Objects2.length = 0;
gdjs.Level7Code.GDwall1Objects3.length = 0;
gdjs.Level7Code.GDwall1Objects4.length = 0;
gdjs.Level7Code.GDwall1Objects5.length = 0;
gdjs.Level7Code.GDwall2Objects1.length = 0;
gdjs.Level7Code.GDwall2Objects2.length = 0;
gdjs.Level7Code.GDwall2Objects3.length = 0;
gdjs.Level7Code.GDwall2Objects4.length = 0;
gdjs.Level7Code.GDwall2Objects5.length = 0;
gdjs.Level7Code.GDborderWallObjects1.length = 0;
gdjs.Level7Code.GDborderWallObjects2.length = 0;
gdjs.Level7Code.GDborderWallObjects3.length = 0;
gdjs.Level7Code.GDborderWallObjects4.length = 0;
gdjs.Level7Code.GDborderWallObjects5.length = 0;
gdjs.Level7Code.GDportalObjects1.length = 0;
gdjs.Level7Code.GDportalObjects2.length = 0;
gdjs.Level7Code.GDportalObjects3.length = 0;
gdjs.Level7Code.GDportalObjects4.length = 0;
gdjs.Level7Code.GDportalObjects5.length = 0;
gdjs.Level7Code.GDblackPlayerObjects1.length = 0;
gdjs.Level7Code.GDblackPlayerObjects2.length = 0;
gdjs.Level7Code.GDblackPlayerObjects3.length = 0;
gdjs.Level7Code.GDblackPlayerObjects4.length = 0;
gdjs.Level7Code.GDblackPlayerObjects5.length = 0;
gdjs.Level7Code.GDwhitePlayerObjects1.length = 0;
gdjs.Level7Code.GDwhitePlayerObjects2.length = 0;
gdjs.Level7Code.GDwhitePlayerObjects3.length = 0;
gdjs.Level7Code.GDwhitePlayerObjects4.length = 0;
gdjs.Level7Code.GDwhitePlayerObjects5.length = 0;
gdjs.Level7Code.GDenemyObjects1.length = 0;
gdjs.Level7Code.GDenemyObjects2.length = 0;
gdjs.Level7Code.GDenemyObjects3.length = 0;
gdjs.Level7Code.GDenemyObjects4.length = 0;
gdjs.Level7Code.GDenemyObjects5.length = 0;
gdjs.Level7Code.GDdeadlyPlatObjects1.length = 0;
gdjs.Level7Code.GDdeadlyPlatObjects2.length = 0;
gdjs.Level7Code.GDdeadlyPlatObjects3.length = 0;
gdjs.Level7Code.GDdeadlyPlatObjects4.length = 0;
gdjs.Level7Code.GDdeadlyPlatObjects5.length = 0;
gdjs.Level7Code.GDflashObjects1.length = 0;
gdjs.Level7Code.GDflashObjects2.length = 0;
gdjs.Level7Code.GDflashObjects3.length = 0;
gdjs.Level7Code.GDflashObjects4.length = 0;
gdjs.Level7Code.GDflashObjects5.length = 0;
gdjs.Level7Code.GDmovementLeftCollideObjects1.length = 0;
gdjs.Level7Code.GDmovementLeftCollideObjects2.length = 0;
gdjs.Level7Code.GDmovementLeftCollideObjects3.length = 0;
gdjs.Level7Code.GDmovementLeftCollideObjects4.length = 0;
gdjs.Level7Code.GDmovementLeftCollideObjects5.length = 0;
gdjs.Level7Code.GDmovementRightCollideObjects1.length = 0;
gdjs.Level7Code.GDmovementRightCollideObjects2.length = 0;
gdjs.Level7Code.GDmovementRightCollideObjects3.length = 0;
gdjs.Level7Code.GDmovementRightCollideObjects4.length = 0;
gdjs.Level7Code.GDmovementRightCollideObjects5.length = 0;

gdjs.Level7Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Level7Code'] = gdjs.Level7Code;
