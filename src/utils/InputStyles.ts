// get input style based on validity
export const getInputStyle = (value: String, isValid: boolean) => {
  let style = "";
  if (value.length === 0) {
    style = "border-color-[#BDBDBD] text-[#828282]";
  } else {
    if (isValid) {
      style = "border-green-600 text-green-600";
    } else {
      style = "border-red-600 text-red-600";
    }
  }
  console.log("Input Style", style);
  return style;
};
