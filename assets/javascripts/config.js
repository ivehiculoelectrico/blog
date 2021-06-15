

onload = function () {

    document.getElementsByClassName('md-source__icon md-icon')[0].style.visibility = 'hidden';
    document.getElementsByClassName('md-footer-meta md-typeset')[0].style.visibility = 'hidden';


    window.MathJax = {
        tex: {
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
    console.log('ooooooS')
};