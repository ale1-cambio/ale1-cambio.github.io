function areapargramma01() {
  let base = parseFloat($("#basepargramma01").val());
  let altezza = parseFloat($("#altezzapargramma01").val());
  let area = base * altezza;
  $("#areapargramma01").html(area);
}