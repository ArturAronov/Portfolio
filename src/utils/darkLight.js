/* export const darkBG='rgb(33,37,43)';
export const lightBG='white'; */

export const changeBackGround=function(state, changeState, light, dark){
  state===dark?changeState(light):changeState(dark);
};

export const changeText=function(state, changeState, light, dark){
  state===dark?changeState(light):changeState(dark);
}

export const changeBody=function(state, changeState, light, dark){
  state===dark?changeState(light):changeState(dark);
}