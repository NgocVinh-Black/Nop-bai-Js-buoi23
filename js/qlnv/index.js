//Lấy dữ liệu từ người dùng
var arrIdInput = [
  "tknv",
  "txtname",
  "email",
  "password",
  "datepicker",
  "luongCB",
  "chucvu",
  "gioLam",
];
var arrIdSpan = [
  "tbTKNV",
  "tbTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCB",
  "tbChucVu",
  "tbGiolam",
];
var arrNhanVien = [];
function valueUser() {
  var nhanVien = new NhanVien();
  var isValid = true;
  for (var i = 0; i < arrIdInput.length; i++) {
    var valueInput = document.getElementById(arrIdInput[i]).value;
    if (arrIdInput[i] == "tknv") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkMinMaxTK(valueInput, arrIdSpan[i], 4, 6);
    } else if (arrIdInput[i] == "txtname") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkName(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "email") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkEmailValue(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "password") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkPass(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "datepicker") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkDay(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "luongCB") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkBasicSalary(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "gioLam") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkWorkTime(valueInput, arrIdSpan[i]);
    } else {
      isValid &= checkEmptyValue(valueInput, arrIdSpan[i]);
    }
    nhanVien[arrIdInput[i]] = valueInput;
  }
  if (isValid) {
    return nhanVien;
  }
}
// thêm User
function addUser() {
  var nhanVien = valueUser();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    saveLocalStore("arrNhanVien", arrNhanVien);
    renderDisplay();
    document.getElementById("formQLNV").reset();
  }
}

document.getElementById("btnThemNV").onclick = addUser;

// hiển thị dữ liệu lên giao diện
function renderDisplay(arr) {
  if (arr == undefined) {
    arr = arrNhanVien;
  }
  var content = "";
  for (var z = 0; z < arr.length; z++) {
    var nhanVienCP = new NhanVien();
    var valueNhanVien = arr[z];
    Object.assign(nhanVienCP, valueNhanVien);
    content += `
    <tr>
        <td>${nhanVienCP.tknv}</td>
        <td>${nhanVienCP.txtname}</td>
        <td>${nhanVienCP.email}</td>
        <td>${nhanVienCP.datepicker}</td>
        <td>${nhanVienCP.chucvu}</td>
        <td>${nhanVienCP.tingTongLuong()}</td>
        <td>${nhanVienCP.tinhXepLoai()}</td>
        <td>
        <button onclick="deleteUser('${
          nhanVienCP.tknv
        }')" id="txtXoa" style="background-color: black;color: white;padding: 5px;border-radius: 5px;">Xóa</button>
        <button onclick="getInfoUser('${
          nhanVienCP.tknv
        }')" data-toggle="modal" data-target="#myModal" id="txtSua" style="background-color: red;color: white;padding: 5px;border-radius: 5px;">Sửa</button>
        </td>
    </tr>
    `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

// xóa dữ liệu
function deleteUser(taiKhoan) {
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    if (nhanVien.tknv == taiKhoan) {
      index = i;
    }
  }
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    saveLocalStore("arrNhanVien", arrNhanVien);
    renderDisplay();
  }
}

// lưu dữ liệu xuống localStore
function saveLocalStore(key, value) {
  var valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}

function getLocalStore(key) {
  var arrLocal = JSON.parse(localStorage.getItem(key));
  if (arrLocal) {
    arrNhanVien = arrLocal;
    renderDisplay();
  }
}
getLocalStore("arrNhanVien");

// lấy dữ liệu người dùng mới để sửa
function getInfoUser(taiKhoan) {
  var nhanVien = {};
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == taiKhoan) {
      nhanVien = arrNhanVien[i];
    }
  }
  for (var z = 0; z < arrIdInput.length; z++) {
    document.getElementById(arrIdInput[z]).value = nhanVien[arrIdInput[z]];
    if (arrIdInput[z] == "tknv") {
      document.getElementById(arrIdInput[z]).readOnly = true;
    }
  }
}

// sửa User
function editValueUser() {
  var nhanVien = valueUser();
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (nhanVien.tknv == arrNhanVien[i].tknv) {
      index = i;
    }
  }
  document.getElementById("tknv").readOnly = false;
  arrNhanVien[index] = nhanVien;
  saveLocalStore("arrNhanVien", arrNhanVien);
  renderDisplay();
  document.getElementById("formQLNV").reset();
}

document.getElementById("btnCapNhat").onclick = editValueUser;

// tìm User
function searchInfoUser(event) {
  document.getElementById("btnTimNV").onclick = function () {
    var keyward = event.target.value;
    var arrFilter = [];
    for (var i = 0; i < arrNhanVien.length; i++) {
      var nhanVienXL = new NhanVien();
      Object.assign(nhanVienXL, arrNhanVien[i]);
      var searchNV = nhanVienXL.tinhXepLoai();
      if (searchNV.includes(keyward)) {
        arrFilter.push(arrNhanVien[i]);
      }
    }
    renderDisplay(arrFilter);
  };
}
// filter
