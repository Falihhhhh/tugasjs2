alert("selamat datang..");
var lagi = true;

while (lagi === true) {
  var nama = prompt("masukan nama:");
  var kelas = prompt('masukan kelas:')
  alert(`halo nama saya ${nama} \nkelas saya ${kelas}`);

  lagi = confirm(`coba lagi?`);
}
alert(`terima kasih..`);
