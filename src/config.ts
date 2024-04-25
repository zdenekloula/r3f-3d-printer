export const REAL_Y_MAX_SIZE = 208;
export const REAL_E_MAX_SIZE = 210;
export const REAL_X_MAX_SIZE = 250;
export const BASE_ORANGE_HSL = [16, 95, 49];
export const BASE_DARKEN_ITENSITY = 40;

// 1 layer every 600 points. This makes the animation less smoother but the whole visualization doesn't take that much time. However as this can differ from gcode to gcode, this should be a parameter that can be set by the user and ideally calculated based on the gcode data via percentage of the total points.
// Also having less points is much more pefromant.
export const LAYER_DENSITY = 600;
