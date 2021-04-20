function areatri01() {
  let base = parseFloat($("#basetri01").val());
  let altezza = parseFloat($("#altezzatri01").val());
  let areatri01 = (base * altezza) / 2;
  $("#areatri01").html(areatri01);
}