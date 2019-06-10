gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDbackgroundObjects1= [];
gdjs.TitleScreenCode.GDbackgroundObjects2= [];
gdjs.TitleScreenCode.GDbackgroundObjects3= [];
gdjs.TitleScreenCode.GDbackgroundObjects4= [];
gdjs.TitleScreenCode.GDbackgroundObjects5= [];
gdjs.TitleScreenCode.GDlogoObjects1= [];
gdjs.TitleScreenCode.GDlogoObjects2= [];
gdjs.TitleScreenCode.GDlogoObjects3= [];
gdjs.TitleScreenCode.GDlogoObjects4= [];
gdjs.TitleScreenCode.GDlogoObjects5= [];
gdjs.TitleScreenCode.GDBeginObjects1= [];
gdjs.TitleScreenCode.GDBeginObjects2= [];
gdjs.TitleScreenCode.GDBeginObjects3= [];
gdjs.TitleScreenCode.GDBeginObjects4= [];
gdjs.TitleScreenCode.GDBeginObjects5= [];
gdjs.TitleScreenCode.GDCreditsObjects1= [];
gdjs.TitleScreenCode.GDCreditsObjects2= [];
gdjs.TitleScreenCode.GDCreditsObjects3= [];
gdjs.TitleScreenCode.GDCreditsObjects4= [];
gdjs.TitleScreenCode.GDCreditsObjects5= [];
gdjs.TitleScreenCode.GDWallObjects1= [];
gdjs.TitleScreenCode.GDWallObjects2= [];
gdjs.TitleScreenCode.GDWallObjects3= [];
gdjs.TitleScreenCode.GDWallObjects4= [];
gdjs.TitleScreenCode.GDWallObjects5= [];
gdjs.TitleScreenCode.GDnoMistakeObjects1= [];
gdjs.TitleScreenCode.GDnoMistakeObjects2= [];
gdjs.TitleScreenCode.GDnoMistakeObjects3= [];
gdjs.TitleScreenCode.GDnoMistakeObjects4= [];
gdjs.TitleScreenCode.GDnoMistakeObjects5= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects1= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects2= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects3= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects4= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects5= [];
gdjs.TitleScreenCode.GDgameversionObjects1= [];
gdjs.TitleScreenCode.GDgameversionObjects2= [];
gdjs.TitleScreenCode.GDgameversionObjects3= [];
gdjs.TitleScreenCode.GDgameversionObjects4= [];
gdjs.TitleScreenCode.GDgameversionObjects5= [];
gdjs.TitleScreenCode.GDgameidObjects1= [];
gdjs.TitleScreenCode.GDgameidObjects2= [];
gdjs.TitleScreenCode.GDgameidObjects3= [];
gdjs.TitleScreenCode.GDgameidObjects4= [];
gdjs.TitleScreenCode.GDgameidObjects5= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_0 = {val:false};
gdjs.TitleScreenCode.conditionTrue_1 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_1 = {val:false};


gdjs.TitleScreenCode.eventsList0x70dbcc = function(runtimeScene) {

{

gdjs.TitleScreenCode.GDBeginObjects3.createFrom(runtimeScene.getObjects("Begin"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDBeginObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDBeginObjects3[i].getY() < 240 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDBeginObjects3[k] = gdjs.TitleScreenCode.GDBeginObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDBeginObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingBegin").setNumber(1);
}}

}


{

gdjs.TitleScreenCode.GDBeginObjects3.createFrom(runtimeScene.getObjects("Begin"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDBeginObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDBeginObjects3[i].getY() > 260 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDBeginObjects3[k] = gdjs.TitleScreenCode.GDBeginObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDBeginObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingBegin").setNumber(0);
}}

}


{

gdjs.TitleScreenCode.GDCreditsObjects3.createFrom(runtimeScene.getObjects("Credits"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDCreditsObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() < 230 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDCreditsObjects3[k] = gdjs.TitleScreenCode.GDCreditsObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDCreditsObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingCredits").setNumber(0);
}}

}


{

gdjs.TitleScreenCode.GDCreditsObjects3.createFrom(runtimeScene.getObjects("Credits"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDCreditsObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() > 250 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDCreditsObjects3[k] = gdjs.TitleScreenCode.GDCreditsObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDCreditsObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingCredits").setNumber(1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingBegin")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDBeginObjects3.createFrom(runtimeScene.getObjects("Begin"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDBeginObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBeginObjects3[i].setY(gdjs.TitleScreenCode.GDBeginObjects3[i].getY() - (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingBegin")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDBeginObjects3.createFrom(runtimeScene.getObjects("Begin"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDBeginObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBeginObjects3[i].setY(gdjs.TitleScreenCode.GDBeginObjects3[i].getY() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingCredits")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDCreditsObjects3.createFrom(runtimeScene.getObjects("Credits"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsObjects3[i].setY(gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingCredits")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDCreditsObjects3.createFrom(runtimeScene.getObjects("Credits"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsObjects3[i].setY(gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() - (0.25));
}
}}

}


{

gdjs.TitleScreenCode.GDnoMistakeObjects3.createFrom(runtimeScene.getObjects("noMistake"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDnoMistakeObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() > 350 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDnoMistakeObjects3[k] = gdjs.TitleScreenCode.GDnoMistakeObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDnoMistakeObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake").setNumber(0);
}}

}


{

gdjs.TitleScreenCode.GDnoMistakeObjects3.createFrom(runtimeScene.getObjects("noMistake"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDnoMistakeObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() < 320 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDnoMistakeObjects3[k] = gdjs.TitleScreenCode.GDnoMistakeObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDnoMistakeObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake").setNumber(1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingMistake")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDnoMistakeObjects3.createFrom(runtimeScene.getObjects("noMistake"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects3[i].setX(gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingMistake")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDnoMistakeObjects2.createFrom(runtimeScene.getObjects("noMistake"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects2[i].setX(gdjs.TitleScreenCode.GDnoMistakeObjects2[i].getX() - (0.25));
}
}}

}


}; //End of gdjs.TitleScreenCode.eventsList0x70dbcc
gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDBeginObjects3Objects = Hashtable.newFrom({"Begin": gdjs.TitleScreenCode.GDBeginObjects3});gdjs.TitleScreenCode.eventsList0x70f38c = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7403612);
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 1, true, 100, 1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition1IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7404276);
}
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)), false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) + 1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition1IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7405364);
}
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


}; //End of gdjs.TitleScreenCode.eventsList0x70f38c
gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDnoMistakeObjects3Objects = Hashtable.newFrom({"noMistake": gdjs.TitleScreenCode.GDnoMistakeObjects3});gdjs.TitleScreenCode.eventsList0x71020c = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7407492);
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 1, true, 100, 1);
}}

}


}; //End of gdjs.TitleScreenCode.eventsList0x71020c
gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDCreditsObjects2Objects = Hashtable.newFrom({"Credits": gdjs.TitleScreenCode.GDCreditsObjects2});gdjs.TitleScreenCode.eventsList0x70f2bc = function(runtimeScene) {

{

gdjs.TitleScreenCode.GDBeginObjects3.createFrom(runtimeScene.getObjects("Begin"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDBeginObjects3Objects, runtimeScene, true, false);
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getVariables().get("cred").setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "LevelLoad", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.TitleScreenCode.eventsList0x70f38c(runtimeScene);} //End of subevents
}

}


{

gdjs.TitleScreenCode.GDnoMistakeObjects3.createFrom(runtimeScene.getObjects("noMistake"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDnoMistakeObjects3Objects, runtimeScene, true, false);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}
{ //Subevents
gdjs.TitleScreenCode.eventsList0x71020c(runtimeScene);} //End of subevents
}

}


{

gdjs.TitleScreenCode.GDCreditsObjects2.createFrom(runtimeScene.getObjects("Credits"));

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDCreditsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("cred").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CreditScreen", false);
}}

}


}; //End of gdjs.TitleScreenCode.eventsList0x70f2bc
gdjs.TitleScreenCode.eventsList0x7116a4 = function(runtimeScene) {

{



}


}; //End of gdjs.TitleScreenCode.eventsList0x7116a4
gdjs.TitleScreenCode.eventsList0x710c8c = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
gdjs.TitleScreenCode.GDgameidObjects3.createFrom(runtimeScene.getObjects("gameid"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDgameidObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDgameidObjects3[i].setString("HTML Version");
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
gdjs.TitleScreenCode.GDgameidObjects3.createFrom(runtimeScene.getObjects("gameid"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDgameidObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDgameidObjects3[i].setString("Windows Version");
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("cred")) == 0;
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu.wav", 1, true, 100, 1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDbackgroundObjects3.createFrom(runtimeScene.getObjects("background"));
{for(var i = 0, len = gdjs.TitleScreenCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDbackgroundObjects3[i].rotate(20, runtimeScene);
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.TitleScreenCode.GDmistakeScoreObjects2.createFrom(runtimeScene.getObjects("mistakeScore"));
{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("mistakeTemp"));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("mistakeTemp")));
}{for(var i = 0, len = gdjs.TitleScreenCode.GDmistakeScoreObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDmistakeScoreObjects2[i].setString("NO MISTAKES HIGH SCORE: LEVEL " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}
{ //Subevents
gdjs.TitleScreenCode.eventsList0x7116a4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.TitleScreenCode.eventsList0x710c8c
gdjs.TitleScreenCode.eventsList0x70db54 = function(runtimeScene) {

{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Button Movement"); }gdjs.TitleScreenCode.eventsList0x70dbcc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Button Movement"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Buttons"); }gdjs.TitleScreenCode.eventsList0x70f2bc(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Buttons"); }
}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Other"); }gdjs.TitleScreenCode.eventsList0x710c8c(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Other"); }
}


{



}


}; //End of gdjs.TitleScreenCode.eventsList0x70db54
gdjs.TitleScreenCode.eventsList0xb24c0 = function(runtimeScene) {

{



}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Everything"); }gdjs.TitleScreenCode.eventsList0x70db54(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Everything"); }
}


}; //End of gdjs.TitleScreenCode.eventsList0xb24c0


gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDbackgroundObjects1.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects2.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects3.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects4.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects5.length = 0;
gdjs.TitleScreenCode.GDlogoObjects1.length = 0;
gdjs.TitleScreenCode.GDlogoObjects2.length = 0;
gdjs.TitleScreenCode.GDlogoObjects3.length = 0;
gdjs.TitleScreenCode.GDlogoObjects4.length = 0;
gdjs.TitleScreenCode.GDlogoObjects5.length = 0;
gdjs.TitleScreenCode.GDBeginObjects1.length = 0;
gdjs.TitleScreenCode.GDBeginObjects2.length = 0;
gdjs.TitleScreenCode.GDBeginObjects3.length = 0;
gdjs.TitleScreenCode.GDBeginObjects4.length = 0;
gdjs.TitleScreenCode.GDBeginObjects5.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects3.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects4.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects5.length = 0;
gdjs.TitleScreenCode.GDWallObjects1.length = 0;
gdjs.TitleScreenCode.GDWallObjects2.length = 0;
gdjs.TitleScreenCode.GDWallObjects3.length = 0;
gdjs.TitleScreenCode.GDWallObjects4.length = 0;
gdjs.TitleScreenCode.GDWallObjects5.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects1.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects2.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects3.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects4.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects5.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects1.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects2.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects3.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects4.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects5.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects1.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects2.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects3.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects4.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects5.length = 0;
gdjs.TitleScreenCode.GDgameidObjects1.length = 0;
gdjs.TitleScreenCode.GDgameidObjects2.length = 0;
gdjs.TitleScreenCode.GDgameidObjects3.length = 0;
gdjs.TitleScreenCode.GDgameidObjects4.length = 0;
gdjs.TitleScreenCode.GDgameidObjects5.length = 0;

gdjs.TitleScreenCode.eventsList0xb24c0(runtimeScene);
return;

}
gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
