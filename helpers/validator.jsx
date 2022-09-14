import { errorMsg } from './alerts';

//Expresiones regulares:
const REGEX = {
  regexName: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
  regexLastName: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
  regexEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  regexPhone: /^\d{7,14}$/, // 7 a 14 numeros.
  regexSalary: /^\d{4,12}$/, //6 a 10 números
};

//Función que valida los inputs:
export const validator = (state) => {
  let flag = false;
  //Desestructuro los campos del state:
  const { name, lastName, email, phone, salary } = state;

  //Validación:
  if ((!name, !lastName, !email || !phone || !salary)) {
    errorMsg('error', 'All fields are required');
  }else{
    if (!REGEX.regexName.test(name)) {
      errorMsg('error', 'Invalid name');
    } else if (!REGEX.regexLastName.test(lastName)) {
      errorMsg('error', 'Invalid last name');
    } else if (!REGEX.regexEmail.test(email)) {
      errorMsg('error', 'Invalid email');
    } else if (!REGEX.regexPhone.test(parseInt(phone))) {
      errorMsg('error', 'Invalid phone number');
    } else if (!REGEX.regexSalary.test(parseInt(salary))) {
      errorMsg('error', 'Invalid salary');
    } else {
      flag = true;
    }
  }

  
  return flag;
};
