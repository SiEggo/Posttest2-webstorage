// let data = sessionStorage.getItem("IsiPesan");
// data = JSON.parse(data);

// let nama = document.getElementById("Nama");
// let email = document.getElementById("Email");
// let nohp = document.getElementById("Nohp");
// let jk = document.getElementById("JK");
// let kota = document.getElementById("Kota");
// let isi = document.getElementById("Isi");
// let kerja = document.getElementById("Kerja");

// nama.value = data.nama;
// email.value = data.email;
// nohp.value = data.nohp;
// jk.value = data.jk;
// kota.value = data.kota;
// isi.value = data.isi;
// kerja.value = data.kerja;

const myArrayFromStorage = JSON.parse(sessionStorage.getItem("IsiPesan"));

const namaInput = document.getElementById("Nama");
namaInput.setAttribute("value", myArrayFromStorage.Nama);
const emailInput = document.getElementById("Email");
emailInput.setAttribute("value", myArrayFromStorage.Email);
const nohpInput = document.getElementById("Nohp");
nohpInput.setAttribute("value", myArrayFromStorage.NoHp);
const jkInput = document.getElementById("JK");
jkInput.setAttribute("value", myArrayFromStorage.JK);
const kotaInput = document.getElementById("Kota");
kotaInput.setAttribute("value", myArrayFromStorage.Kota);
const Pesan = document.getElementById("Pesan");
Pesan.innerHTML = myArrayFromStorage.Pesan;
const kerjaInput = document.getElementById("Kerja");
kerjaInput.setAttribute("value", myArrayFromStorage.Kerja);
