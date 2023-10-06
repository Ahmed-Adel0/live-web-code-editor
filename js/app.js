window.addEventListener("load", () => {
  const htmlCode = localStorage.getItem("htmlCode") || "<div>\n\n</div>";
  const cssCode = localStorage.getItem("cssCode") || "<style>\n\n</style>";
  const jsCode = localStorage.getItem("jsCode") || "<script>\n\n</script>";
  const frame =
    document.getElementById("preview-window").contentWindow.document;

  document.getElementById("htmlCode").value = htmlCode;
  document.getElementById("cssCode").value = cssCode;
  document.getElementById("jsCode").value = jsCode;

  updatePreview(frame, htmlCode, cssCode, jsCode);
});

function showPreview(editorId) {
  const htmlCode = document.getElementById("htmlCode").value;
  const cssCode = document.getElementById("cssCode").value;
  const jsCode = document.getElementById("jsCode").value;
  const frame =
    document.getElementById("preview-window").contentWindow.document;

  const code = document.getElementById(editorId).value; // input value
  localStorage.setItem(editorId, code); // add value to local Storage

  updatePreview(frame, htmlCode, cssCode, jsCode);
}

function updatePreview(frame, htmlCode, cssCode, jsCode) {
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  const elements = ["html", "css", "js", "result"];
  elements.forEach((element) => {
    document.getElementById(element).style.display = "none";
  });
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    const elements = ["html", "css", "js", "result"];
    elements.forEach((element) => {
      document.getElementById(element).style.display = "block";
    });
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
