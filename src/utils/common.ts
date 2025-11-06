// import validator from "validator";

// export const validateText = (text, fieldName) => {
//   if (validator.isEmpty(text.toString())) {
//     return `${fieldName || ""} is required`;
//   }
//   return null;
// };

export const validateText = (text: string, fieldName: string) => {
  if (text.length < 1) {
    return `${fieldName || ""} is required`;
  }
  return null;
};

export const truncateLong = (text: string) =>
  text && text.length > 50 ? `${text.substring(0, 20)}...` : text;
