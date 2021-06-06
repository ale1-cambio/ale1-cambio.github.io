function areacubo01() {
  let lato = Number($("#latocubo01").val());
  let areacubo01 = 6 * (lato ** 2);
  $("#areacubo01").html(areacubo01);
}

function areatri01() {
  let base = Number($("#basetri01").val());
  let altezza = Number($("#altezzatri01").val());
  let areatri01 = (base * altezza) / 2;
  $("#areatri01").html(areatri01);
}

function areaquad01() {
  let lato = Number($("#latoquad01").val());
  let areaquad01 = lato ** 2;
  $("#areaquad01").html(areaquad01);
}

function areapargramma01() {
  let base = Number($("#basepargramma01").val());
  let altezza = Number($("#altezzapargramma01").val());
  let areapargramma01 = base * altezza;
  $("#areapargramma01").html(areapargramma01);
}

function arearombo01() {
  let dmagg = Number($("#diagmaggrombo01").val());
  let dmin = Number($("#diagminrombo01").val());
  let arearombo01 = (dmagg * dmin) / 2;
  $("#arearombo01").html(arearombo01);
}

function areatrap01() {
  let bmagg = Number($("#basemaggtrap01").val());
  let bmin = Number($("#basemintrap01").val());
  let h = Number($("#htrap01").val());
  let areatrap01 = ((bmagg + bmin) * h) / 2;
  $("#areatrap01").html(areatrap01);
};

function areatrap02() {
  let bmagg = Number($("#basemaggtrap02").val());
  let bmin = Number($("#basemintrap02").val());
  let h = Number($("#htrap02").val());
  let areatrap02 = ((bmagg + bmin) * h) / 2;
  $("#areatrap02").html(areatrap02);
};

function areatrap03() {
  let bmagg = Number($("#basemaggtrap03").val());
  let bmin = Number($("#basemintrap03").val());
  let h = Number($("#htrap03").val());
  let areatrap03 = ((bmagg + bmin) * h) / 2;
  $("#areatrap03").html(areatrap03);
};

function areacerchio01() {
  let r = Number($("#raggiocerchio01").val());
  let areacerchio01 = Math.round(Math.PI * (r ** 2));
  $("#areacerchio01").html(areacerchio01);
};

function volumecilindro01() {
  let r = Number($("#raggiocilindro01").val());
  let h = Number($("#hcilindro01").val());
  let volumecilindro01 = Math.round(Math.PI * (r ** 2) * h);
  $("#volumecilindro01").html(volumecilindro01);
};

function volumepiramideretta01() {
  let area = Number($("#areabasepiramideretta01").val());
  let h = Number($("#hpiramideretta01").val());
  let volumepiramideretta01 = (1 / 3) * area * h;
  $("#volumepiramideretta01").html(volumepiramideretta01);
};

function volumecono01() {
  let r = Number($("#raggiocono01").val());
  let h = Number($("#hcono01").val());
  let volumecono01 = 1 / 3 * Math.PI * r ** 2 * h;
  $("#volumecono01").html(volumecono01);
};

function volumetcono01() {
  let r1 = Number($(`#rmintcono01`).val());
  let r2 = Number($(`#rmaggtcono01`).val());
  let h = Number($(`#htcono01`).val());
  let volumetcono01 = 1 / 3 * Math.PI * h * (r1 ** 2 + r2 ** 2 + r1 * r2);
  $(`#volumetcono01`).html(volumetcono01);
};

function volumeparallrett01() {
  let sbase = Number($(`#sbaseparallrett01`).val());
  let h = Number($(`#hparallrett01`).val());
  let volumeparallrett01 = sbase * h;
  $(`#volumeparallrett01`).html(volumeparallrett01);
};