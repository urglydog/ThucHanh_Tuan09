$(document).ready(function () {
    let ma, ngaykhoihanh, giatour;

    $("#txtName").blur(function (e) {
        e.preventDefault();
        ma = $("#txtName").val();
        let mau = /^[A-Z]{3}-[A-Z]{3}-0[1-9]|1[0-2]-[0-9]{4}$/;
        if (ma == "") {
            $("#loiTen").html("Mã tour không được rỗng");
            $("#txtName").focus();
        } else if (!mau.test(ma)) {
            $("#loiTen").text("Mã tour phải đúng định dạng");
            $("#txtName").focus();
        } else {
            $("#loiTen").html("*");
        }
    });



    $("#txtDate").blur(function (e) {
        e.preventDefault();
        ngaykhoihanh = new Date($("#txtDate").val());
        let ngayhientai = new Date();
        let ngay = ngaykhoihanh.getTime() - ngayhientai.getTime();
        ngay = Math.floor(ngay / (1000 * 24 * 3600));
        if (ngay != 30) {
            $("#loiNgaySinh").html("Ngày khởi hành phải sau ngày hiện tại 30 ngày");
        } else {
            $("#loiNgaySinh").html("*");
        }
    });
    $("#txtGia").blur(function (e) {
        e.preventDefault();
        giatour = parseFloat($("#txtGia").val());
        if (isNaN(giatour)) {
            $("#loiGia").html("Không được để trống");
            $("#txtGia").focus();
        } else if (giatour <= 0) {
            $("#loiGia").html("Giá phải > 0");
            $("#txtGia").focus();
        } else {
            $("#loiGia").html("*");
        }

    });
    let i = 1;
    $("#luu").click(function (e) {
        e.preventDefault();
        let hanhtrinh = $("#txtPhone").val();
        let thoigian = $("#txtAdd").val();
        let ngay = ngaykhoihanh.getDate();
        let thang = ngaykhoihanh.getMonth() + 1;
        let nam = ngaykhoihanh.getFullYear();
        let ntn = nam + "-" + thang + "-" + ngay;
        var input = $("#avatar")[0];

        if (input.files && input.files.length > 0) {
            var fileName = input.files[0].name;
        }
        let newrow = "<tr> <td>" + (i++) + "</td> <td>" + ma + "</td> <td>" + hanhtrinh + "</td> <td>" + ntn + "</td> <td>" + thoigian + "</td> <td>" + giatour + "</td> <td>" + fileName + "</td>   </tr>";
        $("#table").append(newrow);
    });
});