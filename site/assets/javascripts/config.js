

window.onload = function () {

    window.MathJax = {
        tex: {
            inlineMath: [["\(", "\\)"]],
            inlineMath: [["\\(", "\\)"]],
            displayMath: [["\\[", "\\]"]],
            processEscapes: true,
            processEnvironments: true
        },
        options: {
            ignoreHtmlClass: ".*|",
            processHtmlClass: "arithmatex"
        }
    };
    // console.log('ooooooS')
};