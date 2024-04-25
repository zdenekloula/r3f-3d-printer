import { REAL_E_MAX_SIZE, REAL_X_MAX_SIZE, REAL_Y_MAX_SIZE } from "../config";

/*
  Start Y -0.122
  End Y 0.064
*/
export function calculateVirtualPositionY(realY: number) {
  const REAL_VALUE = realY;
  const REAL_POSITION = REAL_VALUE / REAL_Y_MAX_SIZE;

  const VIRTUAL_Y_START = -0.122;
  const VIRTUAL_Y_END = 0.064;

  return VIRTUAL_Y_START + (VIRTUAL_Y_END - VIRTUAL_Y_START) * REAL_POSITION;
}

/*
  Start E 0.2109
  End E -0.0115
*/
export function calculateVirtualPositionE(realE: number) {
  const REAL_VALUE = realE;
  const REAL_POSITION = REAL_VALUE / REAL_E_MAX_SIZE;

  const VIRTUAL_E_START = 0.2109;
  const VIRTUAL_E_END = -0.0115;

  return VIRTUAL_E_START + (VIRTUAL_E_END - VIRTUAL_E_START) * REAL_POSITION;
}

/*___
  Start X -0.035
  End X 0.201
*/
export function calculateVirtualPositionX(realX: number) {
  const REAL_VALUE = realX;
  const REAL_POSITION = REAL_VALUE / REAL_X_MAX_SIZE;

  const VIRTUAL_X_START = -0.035;
  const VIRTUAL_X_END = 0.201;

  return VIRTUAL_X_START + (VIRTUAL_X_END - VIRTUAL_X_START) * REAL_POSITION;
}
