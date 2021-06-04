function areacubo01() {
  let lato = parseFloat($("#latocubo01").val());
  let areacubo01 = 6 * (lato ** 2);
  $("#areacubo01").html(areacubo01);
}

function areatri01() {
  let base = parseFloat($("#basetri01").val());
  let altezza = parseFloat($("#altezzatri01").val());
  let areatri01 = (base * altezza) / 2;
  $("#areatri01").html(areatri01);
}

function areaquad01() {
  let lato = parseFloat($("#latoquad01").val());
  let areaquad01 = lato ** 2;
  $("#areaquad01").html(areaquad01);
}

function areapargramma01() {
  let base = parseFloat($("#basepargramma01").val());
  let altezza = parseFloat($("#altezzapargramma01").val());
  let areapargramma01 = base * altezza;
  $("#areapargramma01").html(areapargramma01);
}

function arearombo01() {
  let dmagg = parseFloat($("#diagmaggrombo01").val());
  let dmin = parseFloat($("#diagminrombo01").val());
  let arearombo01 = (dmagg * dmin) / 2;
  $("#arearombo01").html(arearombo01);
}

function areatrap01() {
  let bmagg = parseFloat($("#basemaggtrap01").val());
  let bmin = parseFloat($("#basemintrap01").val());
  let h = parseFloat($("#htrap01").val());
  let areatrap01 = ((bmagg + bmin) * h) / 2;
  $("#areatrap01").html(areatrap01);
}

function areatrap02() {
  let bmagg = Number($("#basemaggtrap02").val());
  let bmin = Number($("#basemintrap02").val());
  let h = Number($("#htrap02").val());
  let areatrap02 = ((bmagg + bmin) * h) / 2;
  $("#areatrap02").html(areatrap02);
}

function areatrap02() {
  let bmagg = Number($("#basemaggtrap03").val());
  let bmin = Number($("#basemintrap03").val());
  let h = Number($("#htrap03").val());
  let areatrap03 = ((bmagg + bmin) * h) / 2;
  $("#areatrap03").html(areatrap03);
}

function areacerchio01() {
  let r = Number($("#raggiocerchio01").val());
  let areacerchio01 = Math.round(Math.PI * (r ** 2));
  $("#areacerchio01").html(areacerchio01);
}