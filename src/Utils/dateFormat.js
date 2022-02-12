export function formatDate() {
  let setDateFormat =
    addZero(new Date().getFullYear(), 4) +
    '-' +
    addZero(new Date().getMonth() + 2) +
    '-' +
    addZero(new Date().getDate(), 2) +
    ' ' +
    addZero(new Date().getHours(), 2) +
    ':' +
    addZero(new Date().getMinutes(), 2) +
    ':' +
    addZero(new Date().getSeconds(), 2);
  return setDateFormat;
}

function addZero(number, digits) {
  let addZero = '';
  const toStringNumber = number.toString();
  if (toStringNumber.length < digits) {
    for (let i = 0; i < digits - toStringNumber.length; i++) addZero += '0';
  }
  return addZero + number;
}
