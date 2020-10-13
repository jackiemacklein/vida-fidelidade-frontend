import { parseISO, format } from "date-fns";
import pt from "date-fns/locale/pt-BR";

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

export function getDate(date, formatDate) {
  if (date) {
    return format(parseISO(date), formatDate, { locale: pt });
  } else {
    return "";
  }
}

export function getDate2(date, formatDate) {
  if (date) {
    return format(date, formatDate, { locale: pt });
  } else {
    return "";
  }
}

export function maskMultPhones(value) {
  let phones = "";
  let values = value.replace(";", ",");
  values = values.split(",");

  if (values.length > 0) {
    values.map(item => {
      if (item.replace(/[^0-9]/g, "")) {
        phones = `${phones} ${maskTelephone89Digitos(item.replace(/[^0-9]/g, ""))}`;
      }
    });
  }

  console.log(phones.trim());

  return phones.trim();
}

export function maskTelephone89Digitos(value) {
  var telephone = value;
  var novo = telephone.replace(/[^0-9]/g, "");

  if (novo.substr(0, 1) === "0") {
    novo = novo.substr(1);
  }

  if (novo.length >= 10) {
    if (novo.length >= 11) {
      novo = "(" + novo.substr(0, 2) + ") " + novo.substr(2, 1) + " " + novo.substr(3, 4) + "-" + novo.substr(7, 4);
      return novo;
    } else {
      novo = "(" + novo.substr(0, 2) + ") " + novo.substr(2, 4) + "-" + novo.substr(6, 4);
      return novo;
    }
  } else {
    return novo;
  }
}

export function maskCurrencyReal(value, onLoad = false) {
  var v;

  if (isInt(value) || isFloat(value)) {
    v = value; //.toString().replace(/\D/g, "");
    v = v.toFixed(2) + "";
  } else {
    v = value.toString().replace(/\D/g, "");
    v = (v / 100).toFixed(2) + "";
  }

  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

  return v;
}

export function maskCurrencyRealtoCalc(value) {
  return parseFloat((maskCurrencyReal(value).toString().replace(/\D/g, "") / 100).toFixed(2));
}

export function realToFloat(value) {
  return parseFloat(value.toString().replace(".", "").replace(",", "."));
}

export function replaceAllSpecialChars(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/([^\w]+|\s+)/g, "-")
    .replace(/\-\-+/g, "-")
    .replace(/(^-+|-+$)/, "");
}

export function filterString(text, term) {
  return replaceAllSpecialChars(text.toString()).includes(replaceAllSpecialChars(term.toString()));
}

export function getTypeByName(name) {
  if (name) {
    const ext = name.toString().split(".")[name.toString().split(".").length - 1];
    return ext;
  }

  return "";
}

export function getUserAgent() {
  var nav = navigator.userAgent.toLowerCase();
  if (nav.indexOf("msie") != -1) {
    return "msie";
  } else if (nav.indexOf("opera") != -1) {
    return "opera";
  } else if (nav.indexOf("mozilla") != -1) {
    if (nav.indexOf("firefox") != -1) {
      return "firefox";
    } else if (nav.indexOf("firefox") != -1) {
      return "mozilla";
    } else if (nav.indexOf("chrome") != -1) {
      return "chrome";
    }
  } else {
    return "";
  }
}

export function activeUrl(to, history) {
  return history.location.pathname.indexOf(to) >= 0;
}

export function confirmExit(force = false, condition) {
  window.onbeforeunload = () => {
    if (force === true && condition) {
      return "Deseja realmente sair desta página?";
    }
  };
}

export function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  ); // fragment locator
  return !!pattern.test(str);
}

export function parseInteger(field) {
  var number = field;
  return number.replace(/[^0-9]/g, "");
}

export function maskCpfCnpj(target) {
  target = clearMask(target);

  if (target.length <= 11) {
    return maskCpf(target);
  } else {
    return maskCnpj(target.substr(0, 14));
  }
}

function clearMask(target) {
  return target.replace(/(\.|\/|\-)/g, "");
}
function maskCpf(value) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}
function maskCnpj(value) {
  return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
}

export function maskCep(value) {
  var formated;
  var cep = value;
  var novo = cep.replace(/[^0-9]/g, "");

  if (novo.length >= 8) {
    novo = novo.substr(0, 5) + "-" + novo.substr(5, 3);
    return novo;
  } else {
    return novo;
  }
}

export function maskInteger(value) {
  return value.toLocaleString("pt-br", { minimumFractionDigits: 0 });
}

export function maskReal(value) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: "currency", currency: "BRL" });
}

export function useQuery(search) {
  return new URLSearchParams(search);
}

export function array_position_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      //arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

export function stripAccents(text) {
  if (text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return "";
}

export const handlePaginateChange = (path, pageNumber, history) => {
  history.push(`${path}${pageNumber}${history.location.search}`);
};

export function handleGetPaginate(path, pageNumber) {
  return `${path}${pageNumber}`;
}
export const handleAnchor = to => {
  if (typeof global.window !== "undefined") {
    if (global.window.document.querySelector(`#${to}`)) {
      const offset = global.window.document.querySelector(`#${to}`).offsetTop;
      window.scrollTo({ top: offset - 76, left: 0, behavior: "smooth" });
    }
  }
};
