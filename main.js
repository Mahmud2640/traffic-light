function move() {
  var signal = document.getElementById("signal").value;

  if (signal == "red") {
    document.getElementById("view").innerHTML =
      "এখন যাওয়া যাবে না তাইলে বিপদ আছে";
  } else if (signal == "green") {
    document.getElementById("view").innerHTML = "এখন যাওয়া উচিত তাড়াতাড়ি যাও";
  } else if (signal == "yellow") {
    document.getElementById("view").innerHTML = "এখন থেমে থাকো একটু পর যাও";
  } else {
    document.getElementById("view").innerHTML = "দোড় দেও ";
  }
}
