function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}};
function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n).length && 0 !== n || function() {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 100) // thời gian độ trễ
    }
};
function t() {
    try {
        function t(n) {
            1 === ("" + n / n).length && 0 !== n || function() {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 100) // thời gian độ trễ
    }
};
