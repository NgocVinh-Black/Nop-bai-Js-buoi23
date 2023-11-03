function NhanVien() {
  this.tknv = "";
  this.txtname = "";
  this.email = "";
  this.password = "";
  this.datepicker = "";
  this.luongCB = "";
  this.chucvu = "";
  this.gioLam = "";
  this.tingTongLuong = function () {
    var tongLuong = 0;
    switch (this.chucvu) {
      case "Sếp": {
        tongLuong = this.luongCB * 1 * 3;
        return tongLuong;
      }
      case "Trưởng phòng": {
        tongLuong = this.luongCB * 1 * 2;
        return tongLuong;
      }
      default: {
        tongLuong = this.luongCB * 1;
        return tongLuong;
      }
    }
  };
  this.tinhXepLoai = function () {
    var xepLoai = "";
    if (this.gioLam >= 192) {
      xepLoai = "Nhân viên xuất sắc";
      return xepLoai;
    } else if (this.gioLam >= 176) {
      xepLoai = "Nhân viên giỏi";
      return xepLoai;
    } else if (this.gioLam >= 160) {
      xepLoai = "Nhân viên khá";
      return xepLoai;
    } else {
      xepLoai = "Nhân viên trung bình";
      return xepLoai;
    }
  };
}
