//check bỏ trống
function checkEmptyValue(value, idSpan) {
  if (value == "") {
    document.getElementById(idSpan).innerHTML = "Vui lòng không bỏ trống";
    return false;
  } else {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  }
}
//check độ dài tài khoản
function checkMinMaxTK(value, idSpan, min, max) {
  var regexTK = /^[0-9]*$/; //Chỉ bao gồm số và không có khoảng trống (không có chữ)
  regexTK.test(value);
  if (regexTK.test(value) && value.length >= min && value.length <= max) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      idSpan
    ).innerHTML = `Nhập lại dữ liệu hoặc nhập tối thiểu ${min} và tối đa ${max}`;
    return false;
  }
}
//check tên
function checkName(value, idSpan) {
  var regexName = /^[a-zA-Z ]+$/; //Chỉ bao gồm chữ hoa, chữ thường và khoảng trống (không có số)
  regexName.test(value);
  if (regexName.test(value)) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML =
      "Định dạng tên không chính xác";
    return false;
  }
}
//check email
function checkEmailValue(value, idSpan) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //Kiểm tra định dạng email
  regexEmail.test(value);
  if (regexEmail.test(value)) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML =
      "Định dạng email không chính xác";
    return false;
  }
}
//check mật khẩu
function checkPass(value, idSpan){
  var regexPass = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;; //Chứa ít nhất 1 số, 1 chữ hoa, 1 kí tự đặt biệt
  regexPass.test(value);
  if (regexPass.test(value)) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      idSpan
    ).innerHTML = `Nhập lại dữ liệu hoặc nhập tối thiểu 6 và tối đa 10 (chứa ít nhất 1 số, 1 chữ hoa và 1 kí tự đặt biệt)`;
    return false;
  }
}
//check ngày làm
function checkDay(value, idSpan){
  var regexDay = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; //Định dạng mm/dd/yyyy
  regexDay.test(value);
  if (regexDay.test(value)) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML =
      "Định dạng ngày không chính xác";
    return false;
  }
}
//check lương cơ bản
function checkBasicSalary(value, idSpan){
  var galary = document.getElementById('luongCB').value * 1;
  if (galary >= 1000000 && galary <= 20000000) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML =
      "Nhập lại dữ liệu tối thiểu 1.000.000 và tối đa 20.000.000";
    return false;
  }
}
//check giờ làm
function checkWorkTime(value, idSpan){
  var workTime = document.getElementById('gioLam').value * 1;
  if (workTime >= 80 && workTime <= 200) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).innerHTML =
      "Nhập lại dữ liệu tối thiểu 80 và tối đa 200";
    return false;
  }
}