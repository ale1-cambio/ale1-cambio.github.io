function areacubo01() {
  let lato = parseFloat($("#latocubo01").val());
  let area = 6 * (lato ** 2);
  $("#areacubo01").html(area);
}