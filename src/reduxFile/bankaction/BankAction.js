export let withdrawvalue = "withdraw";
export let depositvalue = "deposit";

export let withdraw = (value) => {
  return {
    type: withdrawvalue,
    payload: value,
  };
};
export let deposit = (value) => {
  return {
    type: depositvalue,
    payload: value,
  };
};
