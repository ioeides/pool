 
function calc() {
  n = Number(document.getElementById("n").value)
  a = Number(document.getElementById("a").value)
  h = Number(document.getElementById("h").value)
  d = Number(document.getElementById("d").value)
  ts = Number(document.getElementById("ts").value)
  tz = Number(document.getElementById("tz").value)
  c = Number(document.getElementById("c").value)
  
  A = ( n * Math.pow(a,2) ) / ( 4 * Math.tan( Math.PI / n ))
  V =  A * h
  m = V * d
  delta_t = tz - ts
  Q = m * delta_t * c
  E = Q / 3600
  document.getElementById('Ergebnis_Fläche').innerHTML = "Fläche: " + Math.round(A * 100) / 100 + "m²";
  document.getElementById('Ergebnis_Volumen').innerHTML = "Volumen: " + Math.round(V * 100) / 100 + "m³";
  document.getElementById('Ergebnis_Masse').innerHTML = "Masse: " + Math.round(m * 100) / 100 + "kg";
  document.getElementById('Ergebnis_Energie').innerHTML = "Energie: " + Math.round(E * 100) / 100 + "kWh";
}
