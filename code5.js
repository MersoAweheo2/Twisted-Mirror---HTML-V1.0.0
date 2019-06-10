gdjs.Level1Code = {};
gdjs.Level1Code.GDblackPlayerObjects3_1final = [];

gdjs.Level1Code.GDenemyObjects3_1final = [];

gdjs.Level1Code.GDwhitePlayerObjects3_1final = [];

gdjs.Level1Code.GDbackgroundWallObjects1= [];
gdjs.Level1Code.GDbackgroundWallObjects2= [];
gdjs.Level1Code.GDbackgroundWallObjects3= [];
gdjs.Level1Code.GDbackgroundWallObjects4= [];
gdjs.Level1Code.GDbackgroundWallObjects5= [];
gdjs.Level1Code.GDwall1Objects1= [];
gdjs.Level1Code.GDwall1Objects2= [];
gdjs.Level1Code.GDwall1Objects3= [];
gdjs.Level1Code.GDwall1Objects4= [];
gdjs.Level1Code.GDwall1Objects5= [];
gdjs.Level1Code.GDwall2Objects1= [];
gdjs.Level1Code.GDwall2Objects2= [];
gdjs.Level1Code.GDwall2Objects3= [];
gdjs.Level1Code.GDwall2Objects4= [];
gdjs.Level1Code.GDwall2Objects5= [];
gdjs.Level1Code.GDborderWallObjects1= [];
gdjs.Level1Code.GDborderWallObjects2= [];
gdjs.Level1Code.GDborderWallObjects3= [];
gdjs.Level1Code.GDborderWallObjects4= [];
gdjs.Level1Code.GDborderWallObjects5= [];
gdjs.Level1Code.GDportalObjects1= [];
gdjs.Level1Code.GDportalObjects2= [];
gdjs.Level1Code.GDportalObjects3= [];
gdjs.Level1Code.GDportalObjects4= [];
gdjs.Level1Code.GDportalObjects5= [];
gdjs.Level1Code.GDblackPlayerObjects1= [];
gdjs.Level1Code.GDblackPlayerObjects2= [];
gdjs.Level1Code.GDblackPlayerObjects3= [];
gdjs.Level1Code.GDblackPlayerObjects4= [];
gdjs.Level1Code.GDblackPlayerObjects5= [];
gdjs.Level1Code.GDwhitePlayerObjects1= [];
gdjs.Level1Code.GDwhitePlayerObjects2= [];
gdjs.Level1Code.GDwhitePlayerObjects3= [];
gdjs.Level1Code.GDwhitePlayerObjects4= [];
gdjs.Level1Code.GDwhitePlayerObjects5= [];
gdjs.Level1Code.GDenemyObjects1= [];
gdjs.Level1Code.GDenemyObjects2= [];
gdjs.Level1Code.GDenemyObjects3= [];
gdjs.Level1Code.GDenemyObjects4= [];
gdjs.Level1Code.GDenemyObjects5= [];
gdjs.Level1Code.GDflashObjects1= [];
gdjs.Level1Code.GDflashObjects2= [];
gdjs.Level1Code.GDflashObjects3= [];
gdjs.Level1Code.GDflashObjects4= [];
gdjs.Level1Code.GDflashObjects5= [];
gdjs.Level1Code.GDmovementLeftCollideObjects1= [];
gdjs.Level1Code.GDmovementLeftCollideObjects2= [];
gdjs.Level1Code.GDmovementLeftCollideObjects3= [];
gdjs.Level1Code.GDmovementLeftCollideObjects4= [];
gdjs.Level1Code.GDmovementLeftCollideObjects5= [];
gdjs.Level1Code.GDmovementRightCollideObjects1= [];
gdjs.Level1Code.GDmovementRightCollideObjects2= [];
gdjs.Level1Code.GDmovementRightCollideObjects3= [];
gdjs.Level1Code.GDmovementRightCollideObjects4= [];
gdjs.Level1Code.GDmovementRightCollideObjects5= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};
gdjs.Level1Code.conditionTrue_2 = {val:false};
gdjs.Level1Code.condition0IsTrue_2 = {val:false};
gdjs.Level1Code.condition1IsTrue_2 = {val:false};
gdjs.Level1Code.condition2IsTrue_2 = {val:false};
gdjs.Level1Code.condition3IsTrue_2 = {val:false};
gdjs.Level1Code.conditionTrue_3 = {val:false};
gdjs.Level1Code.condition0IsTrue_3 = {val:false};
gdjs.Level1Code.condition1IsTrue_3 = {val:false};
gdjs.Level1Code.condition2IsTrue_3 = {val:false};
gdjs.Level1Code.condition3IsTrue_3 = {val:false};


gdjs.Level1Code.eventsList0x77518c = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects4[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects4[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects4[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x77518c
gdjs.Level1Code.eventsList0x77605c = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects3[i].setX(970 - (( gdjs.Level1Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level1Code.GDblackPlayerObjects3[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects3[i].setY((( gdjs.Level1Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level1Code.GDblackPlayerObjects3[0].getPointY("")));
}
}}

}


{



}


{



}


}; //End of gdjs.Level1Code.eventsList0x77605c
gdjs.Level1Code.eventsList0x7750dc = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Main Movement"); }gdjs.Level1Code.eventsList0x77518c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Main Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("White Player Movement"); }gdjs.Level1Code.eventsList0x77605c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("White Player Movement"); }
}


}; //End of gdjs.Level1Code.eventsList0x7750dc
gdjs.Level1Code.eventsList0x776b7c = function(runtimeScene) {

{

gdjs.Level1Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDportalObjects4.length;i<l;++i) {
    if ( gdjs.Level1Code.GDportalObjects4[i].getX() <= 400 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDportalObjects4[k] = gdjs.Level1Code.GDportalObjects4[i];
        ++k;
    }
}
gdjs.Level1Code.GDportalObjects4.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDportalObjects4 */
{for(var i = 0, len = gdjs.Level1Code.GDportalObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects4[i].rotate(-(60), runtimeScene);
}
}}

}


{

gdjs.Level1Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level1Code.GDportalObjects3[i].getX() >= 500 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDportalObjects3[k] = gdjs.Level1Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level1Code.GDportalObjects3.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDportalObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects3[i].rotate(60, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects3[i].flipX(true);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x776b7c
gdjs.Level1Code.eventsList0x77699c = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0x776b7c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level1Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects3[i].setOpacity(70);
}
}}

}


{

gdjs.Level1Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level1Code.GDportalObjects3[i].getOpacity() > 95 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDportalObjects3[k] = gdjs.Level1Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level1Code.GDportalObjects3.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(0);
}}

}


{

gdjs.Level1Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDportalObjects3.length;i<l;++i) {
    if ( gdjs.Level1Code.GDportalObjects3[i].getOpacity() < 65 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDportalObjects3[k] = gdjs.Level1Code.GDportalObjects3[i];
        ++k;
    }
}
gdjs.Level1Code.GDportalObjects3.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("opacityPortal").setNumber(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level1Code.GDportalObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects3[i].setOpacity(gdjs.Level1Code.GDportalObjects3[i].getOpacity() + (1));
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("opacityPortal")) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDportalObjects2.createFrom(runtimeScene.getObjects("portal"));
{for(var i = 0, len = gdjs.Level1Code.GDportalObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects2[i].setOpacity(gdjs.Level1Code.GDportalObjects2[i].getOpacity() - (1));
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x77699c
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level1Code_46GDwhitePlayerObjects3Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level1Code.GDblackPlayerObjects3, "whitePlayer": gdjs.Level1Code.GDwhitePlayerObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects3Objects = Hashtable.newFrom({"portal": gdjs.Level1Code.GDportalObjects3});gdjs.Level1Code.eventsList0x778014 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7832060);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level1Code.eventsList0x778014
gdjs.Level1Code.eventsList0x777dcc = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7831668);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x778014(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x777dcc
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level1Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level1Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level1Code.GDwhitePlayerObjects4});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects4Objects = Hashtable.newFrom({"portal": gdjs.Level1Code.GDportalObjects4});gdjs.Level1Code.eventsList0x778dd4 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7835580);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "endTime");
}{runtimeScene.getVariables().get("endAnim").setNumber(1);
}}

}


}; //End of gdjs.Level1Code.eventsList0x778dd4
gdjs.Level1Code.eventsList0x778b8c = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7835188);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDblackPlayerObjects4 */
{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x778dd4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x778b8c
gdjs.Level1Code.eventsList0x77982c = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7839276);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level1Code.eventsList0x77982c
gdjs.Level1Code.eventsList0x77a384 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7841340);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


}; //End of gdjs.Level1Code.eventsList0x77a384
gdjs.Level1Code.eventsList0x779ffc = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7840740);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level1Code.eventsList0x77a384(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x779ffc
gdjs.Level1Code.eventsList0x77955c = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
{gdjs.Level1Code.conditionTrue_2 = gdjs.Level1Code.condition0IsTrue_1;
gdjs.Level1Code.condition0IsTrue_2.val = false;
{
gdjs.Level1Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}gdjs.Level1Code.conditionTrue_2.val = true && gdjs.Level1Code.condition0IsTrue_2.val;
}
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
{gdjs.Level1Code.conditionTrue_2 = gdjs.Level1Code.condition1IsTrue_1;
gdjs.Level1Code.condition0IsTrue_2.val = false;
gdjs.Level1Code.condition1IsTrue_2.val = false;
{
gdjs.Level1Code.condition0IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level1Code.condition0IsTrue_2.val ) {
{
{gdjs.Level1Code.conditionTrue_3 = gdjs.Level1Code.condition1IsTrue_1;
gdjs.Level1Code.conditionTrue_3.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}}
gdjs.Level1Code.conditionTrue_2.val = true && gdjs.Level1Code.condition0IsTrue_2.val && gdjs.Level1Code.condition1IsTrue_2.val;
}
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7838652);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Level1Code.eventsList0x77982c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("noMistakeOriginalScore")));
}
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition2IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7840196);
}
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "noMistakeScore", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Level1Code.eventsList0x779ffc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x77955c
gdjs.Level1Code.eventsList0x7788d4 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level1Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDportalObjects4.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level1Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level1Code_46GDwhitePlayerObjects4Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects4Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7834772);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDwhitePlayerObjects4 */
{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x778b8c(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDflashObjects4.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level1Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects4[i].setOpacity(gdjs.Level1Code.GDflashObjects4[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects4.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "endTime");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("noMistakeOriginalScore"));
}
{ //Subevents
gdjs.Level1Code.eventsList0x77955c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x7788d4
gdjs.Level1Code.eventsList0x7779dc = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "endTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "endTime");
}}

}


{

gdjs.Level1Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDportalObjects3.createFrom(runtimeScene.getObjects("portal"));
gdjs.Level1Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDblackPlayerObjects3ObjectsGDgdjs_46Level1Code_46GDwhitePlayerObjects3Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7831252);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x777dcc(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("endAnim")) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level1Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects3[i].setOpacity(gdjs.Level1Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Animation End"); }gdjs.Level1Code.eventsList0x7788d4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Animation End"); }
}


{



}


{



}


{



}


{



}


}; //End of gdjs.Level1Code.eventsList0x7779dc
gdjs.Level1Code.eventsList0x78202c = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7873244);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level1Code.eventsList0x78202c
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level1Code_46GDwhitePlayerObjects4Objects = Hashtable.newFrom({"blackPlayer": gdjs.Level1Code.GDblackPlayerObjects4, "whitePlayer": gdjs.Level1Code.GDwhitePlayerObjects4});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects4Objects = Hashtable.newFrom({"enemy": gdjs.Level1Code.GDenemyObjects4});gdjs.Level1Code.eventsList0x78272c = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7874836);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{runtimeScene.getVariables().get("deathAnim").setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "deathTime");
}}

}


}; //End of gdjs.Level1Code.eventsList0x78272c
gdjs.Level1Code.eventsList0x78244c = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7874444);
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDblackPlayerObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x78272c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x78244c
gdjs.Level1Code.eventsList0x781e44 = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects3[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("deathAnim").setNumber(0);
}
{ //Subevents
gdjs.Level1Code.eventsList0x78202c(runtimeScene);} //End of subevents
}

}


{

gdjs.Level1Code.GDblackPlayerObjects3.length = 0;

gdjs.Level1Code.GDenemyObjects3.length = 0;

gdjs.Level1Code.GDwhitePlayerObjects3.length = 0;


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.GDblackPlayerObjects3_1final.length = 0;gdjs.Level1Code.GDenemyObjects3_1final.length = 0;gdjs.Level1Code.GDwhitePlayerObjects3_1final.length = 0;gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.GDblackPlayerObjects4.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDenemyObjects4.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level1Code.GDwhitePlayerObjects4.createFrom(runtimeScene.getObjects("whitePlayer"));
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDblackPlayerObjects4ObjectsGDgdjs_46Level1Code_46GDwhitePlayerObjects4Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects4Objects, false, runtimeScene, false);
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level1Code.GDblackPlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDblackPlayerObjects3_1final.indexOf(gdjs.Level1Code.GDblackPlayerObjects4[j]) === -1 )
            gdjs.Level1Code.GDblackPlayerObjects3_1final.push(gdjs.Level1Code.GDblackPlayerObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level1Code.GDenemyObjects4.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDenemyObjects3_1final.indexOf(gdjs.Level1Code.GDenemyObjects4[j]) === -1 )
            gdjs.Level1Code.GDenemyObjects3_1final.push(gdjs.Level1Code.GDenemyObjects4[j]);
    }
    for(var j = 0, jLen = gdjs.Level1Code.GDwhitePlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDwhitePlayerObjects3_1final.indexOf(gdjs.Level1Code.GDwhitePlayerObjects4[j]) === -1 )
            gdjs.Level1Code.GDwhitePlayerObjects3_1final.push(gdjs.Level1Code.GDwhitePlayerObjects4[j]);
    }
}
}
{
gdjs.Level1Code.GDblackPlayerObjects3.createFrom(gdjs.Level1Code.GDblackPlayerObjects3_1final);
gdjs.Level1Code.GDenemyObjects3.createFrom(gdjs.Level1Code.GDenemyObjects3_1final);
gdjs.Level1Code.GDwhitePlayerObjects3.createFrom(gdjs.Level1Code.GDwhitePlayerObjects3_1final);
}
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDwhitePlayerObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x78244c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime"));
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects3[i].setOpacity(gdjs.Level1Code.GDflashObjects3[i].getOpacity() - (10));
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "deathTime");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 0;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("deathAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "deathTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "deathTime");
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDflashObjects3.createFrom(runtimeScene.getObjects("flash"));
gdjs.Level1Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{for(var i = 0, len = gdjs.Level1Code.GDflashObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDflashObjects3[i].setOpacity(gdjs.Level1Code.GDflashObjects3[i].getOpacity() + (10));
}
}{for(var i = 0, len = gdjs.Level1Code.GDblackPlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDblackPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDwhitePlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDwhitePlayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), false);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("deathAnim")) == 1;
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
gdjs.Level1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "deathTime");
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


}; //End of gdjs.Level1Code.eventsList0x781e44
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level1Code.GDenemyObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDmovementRightCollideObjects3Objects = Hashtable.newFrom({"movementRightCollide": gdjs.Level1Code.GDmovementRightCollideObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects3Objects = Hashtable.newFrom({"enemy": gdjs.Level1Code.GDenemyObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDmovementLeftCollideObjects3Objects = Hashtable.newFrom({"movementLeftCollide": gdjs.Level1Code.GDmovementLeftCollideObjects3});gdjs.Level1Code.eventsList0x783d9c = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level1Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDenemyObjects3[i].setX(gdjs.Level1Code.GDenemyObjects3[i].getX() + (4));
}
}}

}


{

gdjs.Level1Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level1Code.GDmovementRightCollideObjects3.createFrom(runtimeScene.getObjects("movementRightCollide"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects3Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDmovementRightCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movementEnemy")) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
{for(var i = 0, len = gdjs.Level1Code.GDenemyObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDenemyObjects3[i].setX(gdjs.Level1Code.GDenemyObjects3[i].getX() - (4));
}
}}

}


{

gdjs.Level1Code.GDenemyObjects3.createFrom(runtimeScene.getObjects("enemy"));
gdjs.Level1Code.GDmovementLeftCollideObjects3.createFrom(runtimeScene.getObjects("movementLeftCollide"));

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDenemyObjects3Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDmovementLeftCollideObjects3Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movementEnemy").setNumber(0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDmovementLeftCollideObjects2.createFrom(runtimeScene.getObjects("movementLeftCollide"));
gdjs.Level1Code.GDmovementRightCollideObjects2.createFrom(runtimeScene.getObjects("movementRightCollide"));
{for(var i = 0, len = gdjs.Level1Code.GDmovementLeftCollideObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDmovementLeftCollideObjects2[i].setOpacity(0);
}
for(var i = 0, len = gdjs.Level1Code.GDmovementRightCollideObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDmovementRightCollideObjects2[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Level1Code.eventsList0x783d9c
gdjs.Level1Code.eventsList0x784b34 = function(runtimeScene) {

{



}


}; //End of gdjs.Level1Code.eventsList0x784b34
gdjs.Level1Code.eventsList0x784924 = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDwall1Objects2.createFrom(runtimeScene.getObjects("wall1"));
gdjs.Level1Code.GDwall2Objects2.createFrom(runtimeScene.getObjects("wall2"));
{for(var i = 0, len = gdjs.Level1Code.GDwall1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDwall1Objects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.Level1Code.GDwall2Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDwall2Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Level1Code.eventsList0x784b34(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Level1Code.eventsList0x784924
gdjs.Level1Code.eventsList0x784fec = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.Level1Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level1Code.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDblackPlayerObjects3.createFrom(runtimeScene.getObjects("blackPlayer"));
gdjs.Level1Code.GDwhitePlayerObjects3.createFrom(runtimeScene.getObjects("whitePlayer"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level1Code.GDwhitePlayerObjects3.length === 0 ) ? (( gdjs.Level1Code.GDblackPlayerObjects3.length === 0 ) ? 0 :gdjs.Level1Code.GDblackPlayerObjects3[0].getPointY("")) :gdjs.Level1Code.GDwhitePlayerObjects3[0].getPointY("")), "", 0);
}}

}


{



}


}; //End of gdjs.Level1Code.eventsList0x784fec
gdjs.Level1Code.eventsList0x785bcc = function(runtimeScene) {

{



}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7890460);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PauseScreen");
}}

}


}; //End of gdjs.Level1Code.eventsList0x785bcc
gdjs.Level1Code.eventsList0x775064 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Controls"); }gdjs.Level1Code.eventsList0x7750dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Controls"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Portal Effects"); }gdjs.Level1Code.eventsList0x77699c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Portal Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Level Ending"); }gdjs.Level1Code.eventsList0x7779dc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Level Ending"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Death"); }gdjs.Level1Code.eventsList0x781e44(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Death"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Enemy Movement"); }gdjs.Level1Code.eventsList0x783d9c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Enemy Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Wall Effects"); }gdjs.Level1Code.eventsList0x784924(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Wall Effects"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Camera"); }gdjs.Level1Code.eventsList0x784fec(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Camera"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("External Events"); }gdjs.Level1Code.eventsList0x785bcc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("External Events"); }
}


}; //End of gdjs.Level1Code.eventsList0x775064
gdjs.Level1Code.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Everything"); }gdjs.Level1Code.eventsList0x775064(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Everything"); }
}


}; //End of gdjs.Level1Code.eventsList0xb24c0


gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDbackgroundWallObjects1.length = 0;
gdjs.Level1Code.GDbackgroundWallObjects2.length = 0;
gdjs.Level1Code.GDbackgroundWallObjects3.length = 0;
gdjs.Level1Code.GDbackgroundWallObjects4.length = 0;
gdjs.Level1Code.GDbackgroundWallObjects5.length = 0;
gdjs.Level1Code.GDwall1Objects1.length = 0;
gdjs.Level1Code.GDwall1Objects2.length = 0;
gdjs.Level1Code.GDwall1Objects3.length = 0;
gdjs.Level1Code.GDwall1Objects4.length = 0;
gdjs.Level1Code.GDwall1Objects5.length = 0;
gdjs.Level1Code.GDwall2Objects1.length = 0;
gdjs.Level1Code.GDwall2Objects2.length = 0;
gdjs.Level1Code.GDwall2Objects3.length = 0;
gdjs.Level1Code.GDwall2Objects4.length = 0;
gdjs.Level1Code.GDwall2Objects5.length = 0;
gdjs.Level1Code.GDborderWallObjects1.length = 0;
gdjs.Level1Code.GDborderWallObjects2.length = 0;
gdjs.Level1Code.GDborderWallObjects3.length = 0;
gdjs.Level1Code.GDborderWallObjects4.length = 0;
gdjs.Level1Code.GDborderWallObjects5.length = 0;
gdjs.Level1Code.GDportalObjects1.length = 0;
gdjs.Level1Code.GDportalObjects2.length = 0;
gdjs.Level1Code.GDportalObjects3.length = 0;
gdjs.Level1Code.GDportalObjects4.length = 0;
gdjs.Level1Code.GDportalObjects5.length = 0;
gdjs.Level1Code.GDblackPlayerObjects1.length = 0;
gdjs.Level1Code.GDblackPlayerObjects2.length = 0;
gdjs.Level1Code.GDblackPlayerObjects3.length = 0;
gdjs.Level1Code.GDblackPlayerObjects4.length = 0;
gdjs.Level1Code.GDblackPlayerObjects5.length = 0;
gdjs.Level1Code.GDwhitePlayerObjects1.length = 0;
gdjs.Level1Code.GDwhitePlayerObjects2.length = 0;
gdjs.Level1Code.GDwhitePlayerObjects3.length = 0;
gdjs.Level1Code.GDwhitePlayerObjects4.length = 0;
gdjs.Level1Code.GDwhitePlayerObjects5.length = 0;
gdjs.Level1Code.GDenemyObjects1.length = 0;
gdjs.Level1Code.GDenemyObjects2.length = 0;
gdjs.Level1Code.GDenemyObjects3.length = 0;
gdjs.Level1Code.GDenemyObjects4.length = 0;
gdjs.Level1Code.GDenemyObjects5.length = 0;
gdjs.Level1Code.GDflashObjects1.length = 0;
gdjs.Level1Code.GDflashObjects2.length = 0;
gdjs.Level1Code.GDflashObjects3.length = 0;
gdjs.Level1Code.GDflashObjects4.length = 0;
gdjs.Level1Code.GDflashObjects5.length = 0;
gdjs.Level1Code.GDmovementLeftCollideObjects1.length = 0;
gdjs.Level1Code.GDmovementLeftCollideObjects2.length = 0;
gdjs.Level1Code.GDmovementLeftCollideObjects3.length = 0;
gdjs.Level1Code.GDmovementLeftCollideObjects4.length = 0;
gdjs.Level1Code.GDmovementLeftCollideObjects5.length = 0;
gdjs.Level1Code.GDmovementRightCollideObjects1.length = 0;
gdjs.Level1Code.GDmovementRightCollideObjects2.length = 0;
gdjs.Level1Code.GDmovementRightCollideObjects3.length = 0;
gdjs.Level1Code.GDmovementRightCollideObjects4.length = 0;
gdjs.Level1Code.GDmovementRightCollideObjects5.length = 0;

gdjs.Level1Code.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['Level1Code'] = gdjs.Level1Code;
