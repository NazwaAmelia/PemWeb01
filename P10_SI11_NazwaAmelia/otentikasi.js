function kirim() {
    let inp_name = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");

    if (inp_name == "admin" && inp_pass == "nazwa"){
        form.setAttribute("action", "dashboar.html")
        alert ("Login berhasil");
    }else{
        alert("Login gagal");
    }
}