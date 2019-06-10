gdjs.PauseScreenCode = {};
gdjs.PauseScreenCode.GDresumeObjects2_1final = [];

gdjs.PauseScreenCode.GDbackgroundObjects1= [];
gdjs.PauseScreenCode.GDbackgroundObjects2= [];
gdjs.PauseScreenCode.GDbackgroundObjects3= [];
gdjs.PauseScreenCode.GDresumeObjects1= [];
gdjs.PauseScreenCode.GDresumeObjects2= [];
gdjs.PauseScreenCode.GDresumeObjects3= [];
gdjs.PauseScreenCode.GDlevelObjects1= [];
gdjs.PauseScreenCode.GDlevelObjects2= [];
gdjs.PauseScreenCode.GDlevelObjects3= [];
gdjs.PauseScreenCode.GDmenuObjects1= [];
gdjs.PauseScreenCode.GDmenuObjects2= [];
gdjs.PauseScreenCode.GDmenuObjects3= [];
gdjs.PauseScreenCode.GDPause1Objects1= [];
gdjs.PauseScreenCode.GDPause1Objects2= [];
gdjs.PauseScreenCode.GDPause1Objects3= [];
gdjs.PauseScreenCode.GDPause2Objects1= [];
gdjs.PauseScreenCode.GDPause2Objects2= [];
gdjs.PauseScreenCode.GDPause2Objects3= [];
gdjs.PauseScreenCode.GDflashObjects1= [];
gdjs.PauseScreenCode.GDflashObjects2= [];
gdjs.PauseScreenCode.GDflashObjects3= [];
gdjs.PauseScreenCode.GDTextEntryObjects1= [];
gdjs.PauseScreenCode.GDTextEntryObjects2= [];
gdjs.PauseScreenCode.GDTextEntryObjects3= [];

gdjs.PauseScreenCode.conditionTrue_0 = {val:false};
gdjs.PauseScreenCode.condition0IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition1IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition2IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition3IsTrue_0 = {val:false};
gdjs.PauseScreenCode.condition4IsTrue_0 = {val:false};
gdjs.PauseScreenCode.conditionTrue_1 = {val:false};
gdjs.PauseScreenCode.condition0IsTrue_1 = {val:false};
gdjs.PauseScreenCode.condition1IsTrue_1 = {val:false};
gdjs.PauseScreenCode.condition2IsTrue_1 = {val:false};
gdjs.PauseScreenCode.condition3IsTrue_1 = {val:false};
gdjs.PauseScreenCode.condition4IsTrue_1 = {val:false};
gdjs.PauseScreenCode.conditionTrue_2 = {val:false};
gdjs.PauseScreenCode.condition0IsTrue_2 = {val:false};
gdjs.PauseScreenCode.condition1IsTrue_2 = {val:false};
gdjs.PauseScreenCode.condition2IsTrue_2 = {val:false};
gdjs.PauseScreenCode.condition3IsTrue_2 = {val:false};
gdjs.PauseScreenCode.condition4IsTrue_2 = {val:false};


gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDresumeObjects3Objects = Hashtable.newFrom({"resume": gdjs.PauseScreenCode.GDresumeObjects3});gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDlevelObjects2Objects = Hashtable.newFrom({"level": gdjs.PauseScreenCode.GDlevelObjects2});gdjs.PauseScreenCode.eventsList0x72835c = function(runtimeScene) {

{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7505868);
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("levelSelect")), false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("levelSelect")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("levelSelect")));
}}

}


}; //End of gdjs.PauseScreenCode.eventsList0x72835c
gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDlevelObjects2Objects = Hashtable.newFrom({"level": gdjs.PauseScreenCode.GDlevelObjects2});gdjs.PauseScreenCode.eventsList0x728b04 = function(runtimeScene) {

{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7507564);
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


}; //End of gdjs.PauseScreenCode.eventsList0x728b04
gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDlevelObjects2Objects = Hashtable.newFrom({"level": gdjs.PauseScreenCode.GDlevelObjects2});gdjs.PauseScreenCode.eventsList0x72914c = function(runtimeScene) {

{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7509420);
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("levelSelect")), false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("levelSelect")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("levelSelect")));
}}

}


}; //End of gdjs.PauseScreenCode.eventsList0x72914c
gdjs.PauseScreenCode.eventsList0x729bbc = function(runtimeScene) {

{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7511788);
}
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseScreenCode.GDTextEntryObjects2 */
{runtimeScene.getVariables().get("textEntry").setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + (( gdjs.PauseScreenCode.GDTextEntryObjects2.length === 0 ) ? "" :gdjs.PauseScreenCode.GDTextEntryObjects2[0].getString()), false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


}; //End of gdjs.PauseScreenCode.eventsList0x729bbc
gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDmenuObjects2Objects = Hashtable.newFrom({"menu": gdjs.PauseScreenCode.GDmenuObjects2});gdjs.PauseScreenCode.eventsList0x727b44 = function(runtimeScene) {

{



}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.PauseScreenCode.GDresumeObjects2.length = 0;


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition0IsTrue_0;
gdjs.PauseScreenCode.GDresumeObjects2_1final.length = 0;gdjs.PauseScreenCode.condition0IsTrue_1.val = false;
gdjs.PauseScreenCode.condition1IsTrue_1.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
if( gdjs.PauseScreenCode.condition0IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.PauseScreenCode.GDresumeObjects3.createFrom(runtimeScene.getObjects("resume"));
{gdjs.PauseScreenCode.conditionTrue_2 = gdjs.PauseScreenCode.condition1IsTrue_1;
gdjs.PauseScreenCode.condition0IsTrue_2.val = false;
gdjs.PauseScreenCode.condition1IsTrue_2.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition0IsTrue_2.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDresumeObjects3Objects, runtimeScene, true, false);
}}
gdjs.PauseScreenCode.conditionTrue_2.val = true && gdjs.PauseScreenCode.condition0IsTrue_2.val && gdjs.PauseScreenCode.condition1IsTrue_2.val;
}
if( gdjs.PauseScreenCode.condition1IsTrue_1.val ) {
    gdjs.PauseScreenCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.PauseScreenCode.GDresumeObjects3.length;j<jLen;++j) {
        if ( gdjs.PauseScreenCode.GDresumeObjects2_1final.indexOf(gdjs.PauseScreenCode.GDresumeObjects3[j]) === -1 )
            gdjs.PauseScreenCode.GDresumeObjects2_1final.push(gdjs.PauseScreenCode.GDresumeObjects3[j]);
    }
}
}
{
gdjs.PauseScreenCode.GDresumeObjects2.createFrom(gdjs.PauseScreenCode.GDresumeObjects2_1final);
}
}
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition1IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7503524);
}
}}
if (gdjs.PauseScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
gdjs.PauseScreenCode.GDPause2Objects2.createFrom(runtimeScene.getObjects("Pause2"));
gdjs.PauseScreenCode.GDlevelObjects2.createFrom(runtimeScene.getObjects("level"));
{for(var i = 0, len = gdjs.PauseScreenCode.GDPause2Objects2.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDPause2Objects2[i].setString("Press Resume to continue with" + gdjs.evtTools.string.newLine() + "the level you were playing." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Press Restart to change the" + gdjs.evtTools.string.newLine() + "current level to the first.");
}
}{for(var i = 0, len = gdjs.PauseScreenCode.GDlevelObjects2.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDlevelObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.PauseScreenCode.GDlevelObjects2.createFrom(runtimeScene.getObjects("level"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
gdjs.PauseScreenCode.condition2IsTrue_0.val = false;
gdjs.PauseScreenCode.condition3IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDlevelObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition1IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.PauseScreenCode.condition2IsTrue_0.val ) {
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition3IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7505316);
}
}}
}
}
if (gdjs.PauseScreenCode.condition3IsTrue_0.val) {
{}
{ //Subevents
gdjs.PauseScreenCode.eventsList0x72835c(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseScreenCode.GDlevelObjects2.createFrom(runtimeScene.getObjects("level"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
gdjs.PauseScreenCode.condition2IsTrue_0.val = false;
gdjs.PauseScreenCode.condition3IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDlevelObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition1IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
}if ( gdjs.PauseScreenCode.condition2IsTrue_0.val ) {
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition3IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7507300);
}
}}
}
}
if (gdjs.PauseScreenCode.condition3IsTrue_0.val) {

{ //Subevents
gdjs.PauseScreenCode.eventsList0x728b04(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseScreenCode.GDlevelObjects2.createFrom(runtimeScene.getObjects("level"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
gdjs.PauseScreenCode.condition2IsTrue_0.val = false;
gdjs.PauseScreenCode.condition3IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDlevelObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition1IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 2;
}if ( gdjs.PauseScreenCode.condition2IsTrue_0.val ) {
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition3IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7508868);
}
}}
}
}
if (gdjs.PauseScreenCode.condition3IsTrue_0.val) {
gdjs.PauseScreenCode.GDTextEntryObjects2.createFrom(runtimeScene.getObjects("TextEntry"));
{runtimeScene.getVariables().get("textEntry").setNumber(1);
}{for(var i = 0, len = gdjs.PauseScreenCode.GDTextEntryObjects2.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDTextEntryObjects2[i].activate(true);
}
}
{ //Subevents
gdjs.PauseScreenCode.eventsList0x72914c(runtimeScene);} //End of subevents
}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("textEntry")) == 1;
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
gdjs.PauseScreenCode.GDPause1Objects2.createFrom(runtimeScene.getObjects("Pause1"));
gdjs.PauseScreenCode.GDPause2Objects2.createFrom(runtimeScene.getObjects("Pause2"));
gdjs.PauseScreenCode.GDTextEntryObjects2.createFrom(runtimeScene.getObjects("TextEntry"));
{for(var i = 0, len = gdjs.PauseScreenCode.GDPause2Objects2.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDPause2Objects2[i].setString("Type the level number.");
}
}{for(var i = 0, len = gdjs.PauseScreenCode.GDPause1Objects2.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDPause1Objects2[i].setString((( gdjs.PauseScreenCode.GDTextEntryObjects2.length === 0 ) ? "" :gdjs.PauseScreenCode.GDTextEntryObjects2[0].getString()));
}
}}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
gdjs.PauseScreenCode.condition2IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("textEntry")) == 1;
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if ( gdjs.PauseScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition2IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7511340);
}
}}
}
if (gdjs.PauseScreenCode.condition2IsTrue_0.val) {
gdjs.PauseScreenCode.GDTextEntryObjects2.createFrom(runtimeScene.getObjects("TextEntry"));
{for(var i = 0, len = gdjs.PauseScreenCode.GDTextEntryObjects2.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDTextEntryObjects2[i].activate(false);
}
}
{ //Subevents
gdjs.PauseScreenCode.eventsList0x729bbc(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseScreenCode.GDmenuObjects2.createFrom(runtimeScene.getObjects("menu"));

gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
gdjs.PauseScreenCode.condition1IsTrue_0.val = false;
gdjs.PauseScreenCode.condition2IsTrue_0.val = false;
gdjs.PauseScreenCode.condition3IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseScreenCode.mapOfGDgdjs_46PauseScreenCode_46GDmenuObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PauseScreenCode.condition0IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PauseScreenCode.condition1IsTrue_0.val ) {
{
gdjs.PauseScreenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("cred")) == 0;
}if ( gdjs.PauseScreenCode.condition2IsTrue_0.val ) {
{
{gdjs.PauseScreenCode.conditionTrue_1 = gdjs.PauseScreenCode.condition3IsTrue_0;
gdjs.PauseScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7513300);
}
}}
}
}
if (gdjs.PauseScreenCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
gdjs.PauseScreenCode.GDlevelObjects2.createFrom(runtimeScene.getObjects("level"));
{for(var i = 0, len = gdjs.PauseScreenCode.GDlevelObjects2.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDlevelObjects2[i].hide();
}
}}

}


{


gdjs.PauseScreenCode.condition0IsTrue_0.val = false;
{
gdjs.PauseScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.PauseScreenCode.condition0IsTrue_0.val) {
gdjs.PauseScreenCode.GDlevelObjects1.createFrom(runtimeScene.getObjects("level"));
{for(var i = 0, len = gdjs.PauseScreenCode.GDlevelObjects1.length ;i < len;++i) {
    gdjs.PauseScreenCode.GDlevelObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.PauseScreenCode.eventsList0x727b44
gdjs.PauseScreenCode.eventsList0xb24c0 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Main Scripts"); }gdjs.PauseScreenCode.eventsList0x727b44(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Main Scripts"); }
}


{



}


}; //End of gdjs.PauseScreenCode.eventsList0xb24c0


gdjs.PauseScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseScreenCode.GDbackgroundObjects1.length = 0;
gdjs.PauseScreenCode.GDbackgroundObjects2.length = 0;
gdjs.PauseScreenCode.GDbackgroundObjects3.length = 0;
gdjs.PauseScreenCode.GDresumeObjects1.length = 0;
gdjs.PauseScreenCode.GDresumeObjects2.length = 0;
gdjs.PauseScreenCode.GDresumeObjects3.length = 0;
gdjs.PauseScreenCode.GDlevelObjects1.length = 0;
gdjs.PauseScreenCode.GDlevelObjects2.length = 0;
gdjs.PauseScreenCode.GDlevelObjects3.length = 0;
gdjs.PauseScreenCode.GDmenuObjects1.length = 0;
gdjs.PauseScreenCode.GDmenuObjects2.length = 0;
gdjs.PauseScreenCode.GDmenuObjects3.length = 0;
gdjs.PauseScreenCode.GDPause1Objects1.length = 0;
gdjs.PauseScreenCode.GDPause1Objects2.length = 0;
gdjs.PauseScreenCode.GDPause1Objects3.length = 0;
gdjs.PauseScreenCode.GDPause2Objects1.length = 0;
gdjs.PauseScreenCode.GDPause2Objects2.length = 0;
gdjs.PauseScreenCode.GDPause2Objects3.length = 0;
gdjs.PauseScreenCode.GDflashObjects1.length = 0;
gdjs.PauseScreenCode.GDflashObjects2.length = 0;
gdjs.PauseScreenCode.GDflashObjects3.length = 0;
gdjs.PauseScreenCode.GDTextEntryObjects1.length = 0;
gdjs.PauseScreenCode.GDTextEntryObjects2.length = 0;
gdjs.PauseScreenCode.GDTextEntryObjects3.length = 0;

gdjs.PauseScreenCode.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['PauseScreenCode'] = gdjs.PauseScreenCode;
