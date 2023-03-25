const kirim = document.getElementById("kirim");
kirim.onclick = pesan;

function pesan(e) {
  e.preventDefault();

  // Mendapatkan semua input element dan tombol submit
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;
  const kelamin1 = document.getElementById("radio1");
  const kelamin2 = document.getElementById("radio2");
  const kota = document.getElementById("kota").value;
  const isi = document.getElementById("isi").value;
  const kerja = document.getElementById("kerja");

  // Mendapatkan nilai dari setiap input element dan menyimpannya ke dalam array
  let values = {
    Nama: nama,
    Email: email,
    NoHp: nohp,
    JK: kelamin1.checked ? kelamin1.value : kelamin2.checked ? kelamin2.value : null,
    Kota: kota,
    Pesan: isi,
    Kerja: kerja.checked ? kerja.value : null,
  };

  // Menyimpan array nilai ke dalam Session Storage
  sessionStorage.setItem("IsiPesan", JSON.stringify(values));
  alert("Pesan Terkirim");
}
