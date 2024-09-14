let jumlahkartu = 5;
let kartuPertama = 0;
let kartuKedua = 0;

function buatAngka() {
  let angkaBerurut = [];
  for (let i = 1; i <= jumlahkartu; i++) {
    angkaBerurut.push(i, i);
  }

  return angkaBerurut;
}

function acakAngak(angkaBerurut) {
  let angkaAcak = angkaBerurut.sort(function () {
    return Math.random() - 0.5;
  });

  return angkaAcak;
}

function persiapkanKartu(angkaAcak) {
  let str = "";
  angkaAcak.forEach(function (i) {
    str += `<div class="kartu" nilai="${i}">
                <div class="belakang">${i}</div>
                <div class="depan">gameQu</div>
            </div>`;
  });

  $('#game').append(str);
}

function pengendali(){
    $('.kartu').on('click', function(){
        $(this).addClass('buka');

        if (kartuPertama == 0) {
            kartuPertama = $(this).attr('nilai');
        } else {
            kartuKedua = $(this).attr('nilai');

            if (kartuPertama == kartuKedua) {
                $('.buka').addClass('betul');
                $('.betul').removeClass('buka');
                kartuPertama = 0;
                kartuKedua = 0;
            } else {
                kartuPertama = 0;
                kartuKedua = 0;
                $(this).one('transitionend', function(){
                    $('.kartu').removeClass('buka')
                })
            }
        }
    });
}

$(document).ready(function () {
  let angkaBerurut = buatAngka();
  let angkaAcak = acakAngak(angkaBerurut);
  persiapkanKartu(angkaAcak);
  pengendali();
});
