document.getElementById('calc').onclick = function() {
    var crystals = Number(document.getElementById('crystalTotal').value);
    var tenTix = Number(document.getElementById('tenTixTotal').value);
    var oneTix = Number(document.getElementById('oneTixTotal').value);
    var spark = Number(Math.trunc(crystals / 300) + (tenTix * 10) + oneTix); //math.trunc takes whole number value and ignores decimals
    document.getElementById('sparkTotal').innerHTML = spark;}

  document.getElementById('reset').onclick = function() {
      document.getElementById('crystalTotal').value = "";
      document.getElementById('tenTixTotal').value = "";
      document.getElementById('oneTixTotal').value = "";
      document.getElementById('sparkTotal').innerHTML = "";
  }