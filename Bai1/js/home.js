$(document).ready(function () {
    let ten, sdt, tuoi,ntn,khoahoc;

    $("#txtName").blur(function (e) {
        e.preventDefault();
       ten = $("#txtName").val();
        let mau = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/;
        if(ten==""){
            $("#loiTen").html("Họ tên không được rỗng");
            $("#txtName").focus();
        }else if(!mau.test(ten)){
            $("#loiTen").text("Tên phải bắt đầu bằng chữ hoa");
            $("#txtName").focus();
        }else{
            $("#loiTen").html("");
        }
    });

    $("#txtPhone").blur(function (e) { 
        e.preventDefault();
        sdt = $("#txtPhone").val();
        let mau = /^[0-9]{9}$/;
        if(sdt==""){
            $("#loiSDT").html("SDTkhông được rỗng");
            $("#txtPhone").focus();
        }else if(!mau.test(sdt)){
            $("#loiSDT").text("SDT phải có 9 chữ số");
            $("#txtPhone").focus();
        }else{
            $("#loiSDT").html("");
        }
    });

    $("#txtDate").blur(function (e) { 
        e.preventDefault();
         ntn = $("#txtDate").val();
        ntn  = new Date(ntn);
        let today = new Date();
        tuoi = today.getFullYear()-ntn.getFullYear();
        if(tuoi <15 || tuoi >18){
            $("#loiNgaySinh").html("Tuổi phải >=15 và <=18");
            $("#txtDate").focus();
        }else{
            $("#loiNgaySinh").html("");
        }
    });
    $("#khoa").change(function (e) { 
        e.preventDefault();
        khoahoc = $("option:selected").text();
        let tuan = $(this).val();
        if(tuan==2){
            $("#txtHocPhi").val("5 000 000 vnd");
        }else if(tuan==4){
            $("#txtHocPhi").val("8 000 000 vnd");
        }else{
            $("#txtHocPhi").val("9 000 000 vnd");
        }
    });
let i =1;
    $("#luu").click(function (e) { 
        e.preventDefault();
        let diachi = $("#txtAdd").val();
        let hocphi = $("#txtHocPhi").val();
        let ngay = ntn.getDate();
        let thang = ntn.getMonth() + 1;
        let nam = ntn.getFullYear();
        let ngaythangnam = ngay + "/" + thang + "/" + nam;
        
        let newrow = "<tr> <td>"+(i++)+"</td> <td>"+ten+"</td> <td></td> <td>"+sdt+"</td> <td>"+ngaythangnam+"</td> <td>"+diachi+"</td> <td>"+khoahoc+"</td> <td>"+hocphi+"</td>  </tr>";
        $("#table").append(newrow);
    });
});