//Bài tập 1: QUẢN LÝ TUYỂN SINH
function tinhTongDiem(
  diemMonThu1,
  diemMonThu2,
  diemMonThu3,
  diemCong1,
  diemCong2
) {
  var diemTong =
    diemMonThu1 + diemMonThu2 + diemMonThu3 + diemCong1 + diemCong2;
  return diemTong;
}

document.getElementById("btn-bai-1").onclick = function () {
  //output
  var ketQuaB1 = "";
  //input:
  var diemChuan = +document.getElementById("diemChuan").value;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  var diem1 = +document.getElementById("mon1").value;
  var diem2 = +document.getElementById("mon2").value;
  var diem3 = +document.getElementById("mon3").value;
  //proccess:
  var tongDiem = tinhTongDiem(diem1, diem2, diem3, khuVuc, doiTuong);
  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    ketQuaB1 = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else {
    if (khuVuc === "a" && doiTuong === "1") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 2, 2.5);
    } else if (khuVuc === "a" && doiTuong === "2") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 2, 1.5);
    } else if (khuVuc === "a" && doiTuong === "3") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 2, 1);
    } else if (khuVuc === "b" && doiTuong === "1") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 1, 2.5);
    } else if (khuVuc === "b" && doiTuong === "2") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 1, 1.5);
    } else if (khuVuc === "b" && doiTuong === "3") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 1, 1);
    } else if (khuVuc === "c" && doiTuong === "1") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 0.5, 2.5);
    } else if (khuVuc === "c" && doiTuong === "2") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 0.5, 1.5);
    } else if (khuVuc === "c" && doiTuong === "3") {
      tongDiem = tinhTongDiem(diem1, diem2, diem3, 0.5, 1);
    }
  }

  if (tongDiem < diemChuan) {
    ketQuaB1 = `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
  } else if (tongDiem >= diemChuan) {
    ketQuaB1 = `Bạn đã đậu. Tổng điểm: ${tongDiem}`;
  }
  //In ra kết quả:
  document.getElementById("ket-qua-b1").innerHTML = ketQuaB1;
};

//Bài tập 2: TÍNH TIỀN ĐIỆN

function tinhTienDien(tongSoKw) {
  var tongTienDien = 0;
  if (tongSoKw <= 50) {
    tongTienDien += 500 * tongSoKw;
  } else if (tongSoKw > 50 && tongSoKw <= 100) {
    tongTienDien += 500 * 50 + 650 * (tongSoKw - 50);
  } else if (tongSoKw > 100 && tongSoKw <= 200) {
    tongTienDien += 500 * 50 + 650 * 50 + 850 * (tongSoKw - 100);
  } else if (tongSoKw > 200 && tongSoKw <= 350) {
    tongTienDien += 500 * 50 + 650 * 50 + 850 * 100 + (tongSoKw - 200) * 1100;
  } else {
    tongTienDien +=
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (tongSoKw - 350) * 1300;
  }
  return tongTienDien;
}

document.getElementById("btnTinhTienDien").onclick = function () {
  //output:
  var ketQuaB2 = "";
  //input:
  var hoTen = document.getElementById("hoTen").value;
  var soKw = +document.getElementById("soKw").value;
  //proccess:
  var tienDien = tinhTienDien(soKw);
  ketQuaB2 = `Họ tên: ${hoTen}; Tiền điện: ${tienDien.toLocaleString()} VND`;
  //In ra kết quả:
  document.getElementById("ket-qua-b2").innerHTML = ketQuaB2;
};

//Bài 3: TÍNH THUỂ THU NHẬP CÁ NHÂN

function tinhThueThuNhapCaNhan(tongThunhap,nguoiPhuThuoc) {
  var tienThue = 0;
  tienThue = tongThunhap - 4e+6 - nguoiPhuThuoc * 16e+5;
  if (tienThue <= 60e+6){
    tienThue *= 5/100
  } else if(tienThue > 60e+6 && tienThue <= 120e+6){
    tienThue *= 10/100
  } else if(tienThue > 120e+6 && tienThue <= 210e+6){
    tienThue *= 15/100
  } else if(tienThue > 210e+6 && tienThue <= 384e+6){
    tienThue *= 20/100
  } else if(tienThue > 384e+6 && tienThue <= 624e+6){
    tienThue *= 25/100
  } else if(tienThue > 624e+6 && tienThue <= 960e+6){
    tienThue *= 30/100
  } else if(tienThue > 960e+6 ){
    tienThue *= 35/100
  }
  return tienThue;
}

document.getElementById("btnTinhTienThue").onclick = function () {
  //output:
  var ketQuaB3 = "";
  //input:
  var hoTenB3 = document.getElementById("hoTenB3").value;
  var tongThuNhapNam = +document.getElementById("tongThuNhapNam").value;
  var soNguoiPhuThuoc = +document.getElementById("soNguoiPhuThuoc").value;
  //proccess:
  var tongTienThue = tinhThueThuNhapCaNhan(tongThuNhapNam, soNguoiPhuThuoc);
  ketQuaB3 = `Họ tên: ${hoTenB3}; Tiền thuế thu nhập cá nhân: ${tongTienThue.toLocaleString()} VND`;
  //In ra kết quả:
  document.getElementById("ket-qua-b3").innerHTML = ketQuaB3;
};

//Bài 4: TÍNH TIỀN CÁP
document.getElementById("loaiKH").oninput = function (){
  var loaiKH = document.getElementById("loaiKH").value;
  switch(loaiKH){
    case "doanhNghiep":{
      var createInput = document.createElement('input');
      createInput.id = "soKetNoi"
      createInput.placeholder = "Số kết nối";
      createInput.className = "m-3 w-25 form-control"
      createInput.type = "number";
      createInput.min = 1;
      createInput.max = 50000;
      document.getElementById("content-b4").appendChild(createInput);
    };break;
  }
}

function tinhTienCap (loai,kenhCaoCap) {
  var tienCap = 0;
  switch(loai){
    case "nhaDan":{
      tienCap += 4.5 + 20.5 + kenhCaoCap*7.5
    };break;
    case "doanhNghiep":{
      var soKetNoi = +document.getElementById("soKetNoi").value;
      if(soKetNoi <= 10) {
        tienCap += 15 + 75 + kenhCaoCap*50;
      } else {
        tienCap += 15 + 75 + kenhCaoCap*50 + (soKetNoi-10)*5;
      }
    };break;
    }
return tienCap;
}

document.getElementById("btnTinhTienCap").onclick = function () {
//output:
var ketQuaB4 = "";
//input:
var loaiKH = document.getElementById("loaiKH").value;
var maKH = document.getElementById("maKH").value;
var soKenh = +document.getElementById("soKenh").value;
//proccess:
var tienCap = tinhTienCap(loaiKH,soKenh);
ketQuaB4 = `Mã khách hàng: ${maKH}; Tiền cáp: $${tienCap.toLocaleString()}`
//In ra kết quả:
document.getElementById("ket-qua-b4").innerHTML = ketQuaB4;
}