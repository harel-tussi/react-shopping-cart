export const ADD_ITEM = item => {
  return { type: "ADD_ITEM", payload: item };
};

export const SUBTRACT_ITEM = sku => {
  return { type: "SUBTRACT_ITEM", payload: sku };
};

export const DELETE_ITEM = item => {
  return { type: "DELETE_ITEM", payload: item };
};
