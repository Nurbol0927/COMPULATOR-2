function runCode() {
    const html = document.getElementById("html").value;
    const css = "<style>" + document.getElementById("css").value + "</style>";
    const js = "<script>" + document.getElementById("js").value + "</script>";
    const iframe = document.getElementById("output").contentWindow.document;
    iframe.open();
    iframe.write(html + css + js);
    iframe.close();
}
