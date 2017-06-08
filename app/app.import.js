var NOW = new Date();
var TIMEKEY = ("" + NOW.getFullYear() + (NOW.getMonth() + 1) + NOW.getDate() + NOW.getHours() + NOW.getMinutes() + NOW.getSeconds());
var VERSION = ("?ver=" + TIMEKEY);

var ApplicationScript = function () {
    var self = this;

    // タイムスタンプ
    self.timeKey = TIMEKEY;
    self.version = VERSION;

    // CSS読み込み
    self.importCss = function (list) {
        var head = document.getElementsByTagName("head");

        if (head.length == 0) return;
        head = head[0];

        for (var i = 0; i < list.length; i++) {
            var linkNode = document.createElement("link");
            linkNode.rel = "stylesheet";
            linkNode.type = "text/css";
            linkNode.href = list[i] + VERSION;

            head.appendChild(linkNode);
        }
    }
    // JS読み込み
    self.importJs = function (list) {
        for (var i = 0; i < list.length; i++) {
            document.write('<script src="' + list[i] + VERSION + '"></script>');
        }
    }

    return self;
}();

(function () {
    var cssList = [
        "css/fullcalendar.css",
        "css/calendar.css",
    ];
    var jsList = [
        "js/moment.min.js",
        "js/jquery.min.js",
        "js/fullcalendar.js",
        "js/ja.js",
        "js/calendar.js",
    ];

    ApplicationScript.importCss(cssList);
    ApplicationScript.importJs(jsList);
})();
