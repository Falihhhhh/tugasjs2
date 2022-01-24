var binatang = prompt('silahkan pilih nomer berikut \n1.panda \n2.koala \n3.jerapah \n4.ikan \n5.harimau')
switch (binatang) {
    case "1":
        alert ('Anda memlih panda');
        break;
    case "2":
        alert ('Anda memilih koala');
        break;
    case "3":
        alert ('Anda memilih jerapah');
        break;
    case "4":
        alert ('Anda memilih ikan');
        break;
    case "5":
        alert ('Anda memilih harimau');
        break;

    default:
        alert('Hewan yang anda pilih tidak ada')
        break;
}