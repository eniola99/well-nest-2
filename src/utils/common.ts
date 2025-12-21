import validator from "validator";

// export const validateText = (text, fieldName) => {
//   if (validator.isEmpty(text.toString())) {
//     return `${fieldName || ""} is required`;
//   }
//   return null;
// };

export const validateText = (text: string, fieldName: string) => {
  if (validator.isEmpty(text.toString())) {
    return `${fieldName} is required`;
  }

  return undefined;
};

export const validateArrayFields = (value: string[], fieldName: string) => {
  if (value.length === 0) {
    return `${fieldName} is required`;
  }

  return undefined;
};

export const validateEmail = (email: string) => {
  if (validator.isEmpty(email)) {
    return "Email is Required";
  }
  if (!validator.isEmail(email)) {
    return "Email is invalid";
  }
  return undefined;
};

export const validateBoolean = (value: boolean, fieldName: string) => {
  if (value === undefined) return `${fieldName} is required`;
};

export const truncateLong = (text: string) =>
  text && text.length > 50 ? `${text.substring(0, 20)}...` : text;

export const truncateTooLong = (text: string) =>
  text && text.length > 300 ? `${text.substring(0, 250)}...` : text;
