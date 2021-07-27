export const toggleColors=function(state, changeState, light, dark){
  state===dark?changeState(light):changeState(dark);
};

export const toggleIcons=function(state, changeState, flex, none){
  state===flex?changeState(none):changeState(flex);
};