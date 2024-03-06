// expUtils.js
export function expLevel(exp) {
  if (exp >= 0 && exp < 20) {
    return "0";
  } else if (exp >= 20 && exp < 100) {
    return "1";
  } else if (exp >= 100 && exp < 500) {
    return "2";
  } else if (exp >= 500 && exp < 1000) {
    return "3";
  } else if (exp >= 1000 && exp < 2000) {
    return "4";
  } else if (exp >= 2000 && exp < 5000) {
    return "5";
  } else if (exp >= 5000 && exp < 9000) {
    return "6";
  } else if (exp >= 9000 && exp < 15000) {
    return "7";
  } else if (exp >= 15000 && exp < 25000) {
    return "8";
  } else if (exp >= 25000 && exp < 50000) {
    return "9";
  } else if (exp >= 50000) {
    return "10";
  }
}
