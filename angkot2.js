var jmlangkot = 10;
var angkotberoperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotberoperasi) {
    console.log('angkotNo. ' + noAngkot + ' beroperasi dengan baik.');

    noAngkot++;
}
for ( noAngkot = angkotberoperasi + 1; noAngkot  <= jmlangkot; noAngkot++ ) {
    console.log('Angkot no. ' + noAngkot +' sedang tidak beroperasi.');
}