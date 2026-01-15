var now = new Date(),
time = {
    h: now.getHours(),
    m: now.getMinutes()
},
input = {};

var flapImage = ["destination.png", "type.png", "extra.png"];
imgObj = [];
for (var i in flapImage) {
    imgObj[i] = new Image();
    imgObj[i].src = flapImage[i];
}

var ua = {
    webkit: !document.uniqueID && !window.opera && !window.sidebar && !window.orientation && window.localStorage,
    firefox: !!window.sidebar,
    opera: !!window.opera,
    ie: !!document.uniqueID,
    ltIE8: typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined"
}
var prefix = "";
if (ua.webkit) {
    prefix = "-webkit-";
} else if (ua.firefox) {
    prefix = "-moz-";
} else if (ua.opera) {
    prefix = "-o-";
} else if (ua.ie && !ltIE8) {
    prefix = "-ms-";
}

var init = time.h * 100 + time.m;
var setnum = [0, 0, 0, 0, 0];

function hoge(s) {
    s = String(s);
    var zero = [];
    if (s.length < 4) {
        for (i = 0; i < (4 - s.length); i++) {
            zero.push(0);
        }
    }
    return zero.concat(s.split(""));
}

var train = [
    [0, 15], [0, 16], [0, 17], [0, 9], [0, 14], [0, 12], [0, 13], [0, 0], [0, 20], [0, 26], [0, 18],
    [6, 15], [6, 19], [6, 13], [6, 21], [6, 0], [6, 17], [6, 2], [6, 20],
    [4, 17], [4, 2], [4, 20], [4, 14],
    [5, 14],
    [7, 15], [7, 10], [7, 11], [7, 19],
    [8, 15], [8, 10], [8, 11], [8, 19], [8, 3], [8, 22], [8, 12], [8, 13], [8, 21], [8, 0], [8, 8], [8, 17], [8, 2], [8, 20], [8, 9], [8, 25], [8, 24], [8, 4], [8, 5], [8, 6], [8, 23], [8, 7], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
    [-1, 105], [-1, 106], [-1, 107], [-1, 108], [-1, 104], [-1, 100], [-1, 101], [-1, 102], [-1, -1], [-1, -1], [-1, 103],
    [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]
];

var type = ["特急", "急行", "準急", "普通", "快速急行", "区間快速", "急行", "準急", "普通"];
var destination = ["松阪", "沼垂", "五十鈴川", "塩浜", "西日野", "内部", "平田町", "湯の山温泉", "明星", "賢島", "富吉", "桑名", "白子", "津新町", "大阪上本町", "名古屋", "大阪難波", "宇治山田", "山陽姫路", "四日市", "鳥羽", "中川", "白塚", "伊勢若松", "名張", "東青山", "京都"];
var extra = ["団体", "貸切", "荷物", "鮮魚", "試運転", "通過", "回送", "当駅止め", "臨時", "Webkit"];

$(function () {

    $("#board > div > div")
        .append("<div><span data-max=20 data-flap=30><span data-num=" + hoge(init)[0] + " /></span><span /><span><span data-num=" + hoge(init)[0] + " /></span></div>")
        .append("<div><span data-max=20 data-flap=30><span data-num=" + hoge(init)[1] + " /></span><span /><span><span data-num=" + hoge(init)[1] + " /></span></div>")
        .append("<div><span data-max=20 data-flap=30><span data-num=" + hoge(init)[2] + " /></span><span /><span><span data-num=" + hoge(init)[2] + " /></span></div>")
        .append("<div><span data-max=20 data-flap=30><span data-num=" + hoge(init)[3] + " /></span><span /><span><span data-num=" + hoge(init)[3] + " /></span></div>");

    $("#board > div > div").append("<div class=train><span data-max=" + train.length + " data-flap=30><span data-num=0 /></span><span /><span><span data-num=0 /></span></div>");

    $("#board > div > div").append("<div class=colon>");

    var work = 0;
    var moveNum = new Array(5);
    var _history = [0];
    var flap = [0, 0, 0, 0, 0];

    $("#board > div > div").on("click", ":first-child > [data-num]", function (e) {
        if (work)
            return false;
        var r = $(this).parent().parent().index();
        var n = Number($(this).attr("data-num"));
        var l = $(this).parent().attr("data-max") - 1;
        var m = n < l ? n + 1 : 0;

        if (e.pageX) setnum[r] = m;

        if (setnum[r] != n) {
            if (r == 4) {
                if (train[m][0] >= 0) {
                    var m_p = [train[m][0] * -102, train[m][1] * -102];
                    $("<span data-num=" + m + ">").css({
                        zIndex: 9,
                        backgroundPosition: "0 " + m_p[0] + "px, 234px " + m_p[1] + "px, -9999px 0px"
                    }).appendTo("#board > div > div > :eq(" + r + ") > :first-child");
                    $("<span data-num=" + m + " class=bottom>").css({
                        zIndex: 11,
                        backgroundPosition: "0 " + (m_p[0] - 50) + "px, 234px " + (m_p[1] - 50) + "px, -9999px 0px"
                    }).appendTo("#board > div > div > :eq(" + r + ") > :last-child");
                } else {
                    var m_p = (train[m][1] - 100) * -102;
                    $("<span data-num=" + m + ">").css({
                        zIndex: 9,
                        backgroundPosition: "-9999px -9999px, -9999px -9999px, 0 " + m_p + "px"
                    }).appendTo("#board > div > div > :eq(" + r + ") > :first-child");

                    $("<span data-num=" + m + " class=bottom>").css({
                        zIndex: 9,
                        backgroundPosition: "-9999px -9999px, -9999px -9999px, 0 " + (m_p - 50) + "px"
                    }).appendTo("#board > div > div > :eq(" + r + ") > :last-child");
                }
            } else {
                $("#board > div > div > :eq(" + r + ") > :first-child").append("<span data-num=" + m + " style=z-index:9>");
                $("#board > div > div > :eq(" + r + ") > :last-child").append("<span data-num=" + m + " style=z-index:11 class=bottom>");
            }
            $(this).animate({ borderSpacing: 1 }, {
                easing: "linear",
                duration: 80,
                step: function (s) {
                    var h = 1 - Math.round(s * 100) / 100;
                    $(this).css("margin-top", 25 * (1 - h))
                        .css("margin-bottom", -25 * (1 - h))
                        .css(prefix + "transform", "scale(1, " + h + ")");
                },
                complete: function () {
                    $(this).next().css("z-index", 10);
                    $(this).parent().next().next().children().eq(1).animate({ borderSpacing: 1 }, {
                        easing: "linear",
                        duration: 50,
                        step: function (s) {
                            var h = Math.round(s * 100) / 100;
                            $(this).css("margin-top", -25 * (1 - h));
                            $(this).css("margin-bottom", -25 * h);
                            $(this).css(prefix + "transform", "scale(1, " + h + ")");
                        },
                        complete: function () {
                            _history.push(r);
                            $(this).parent().children().eq(0).remove();
                            $(this).prev().css("z-index", 9);
                            if (setnum[r] != m) {
                                flap[r] = 1;
                                $("#board > div > div > :eq(" + r + ") > :first-child > :first-child").click();
                            } else {
                                flap[r] = 0;
                                if ($.inArray(1, flap) == -1) {
                                    _history = [0];
                                    flap = [0, 0, 0, 0, 0];
                                    work = 0;
                                }
                            }
                        }
                    });
                    $(this).remove();
                }
            });
        }
    });

    $("nav").prepend("<div><select name=h /><span>時</span><select name=m /><span>分</span><select name=t /></div>")
    for (i = 0; i < 24; i++) {
        $("select[name=h]").append("<option value=" + i + ">" + i + "</option>");
    }
    for (i = 0; i < 60; i++) {
        $("select[name=m]").append("<option value=" + i + ">" + i + "</option>");
        if (i == time.m) {
            $("select[name=m] > :last-child").attr("selected");
        }
    }
    for (i = 0; i < train.length; i++) {
        if (train[i] != null) {
            if (train[i][0] == -1) {
                if (train[i][1] != -1) {
                    $("select[name=t]").append("<option value=" + i + " data-type=" + extra[train[i][1] - 100] + ">" + extra[train[i][1] - 100] + "</option>");
                }
            } else {
                $("select[name=t]").append("<option value=" + i + " data-type=" + destination[train[i][1]] + ">" + type[train[i][0]] + " " + destination[train[i][1]] + "</option>");
            }
        }
    }

    $("[name=change]").click(function () {
        input = {
            h: Number($("select[name=h]").val()),
            m: Number($("select[name=m]").val()),
            t: Number($("select[name=t]").val())
        }
        setnum = hoge(input.h * 100 + input.m);
        setnum.push(input.t);
        $("#board > div > div > div > :first-child > :first-child").click();
        return false;
    });

    $("select").each(function (i) {
        $(this).after("<span class=select data-value=" + $(this).children("option").eq(0).val() + " data-select-id=" + i + "><span><span>" + $(this).children("option").eq(0).text().replace(/(.*?) /, "<span data-class=0>$1</span> ") + "</span></span><ul /></span>")
            .next().css({
                width: $(this).width() + 22
            }).children("ul").css({
                width: $(this).width() + 22
            });

        $(this).children("option").each(function () {
            var class_ = train[$(this).val()][0];
            $(this).clone().replaceWith("<li data-value=" + $(this).val() + ">" + $(this).text().replace(/(.*?) /, "<span data-class=" + class_ + ">$1</span> ") + "</li>").appendTo("[data-select-id=" + i + "] > ul");
        });
    });

    $(".select > ul > li").click(function () {
        $(".select > ul > li").removeClass("selected");
        $(this).addClass("selected").parent().prev().children("span").hide().html($(this).html()).fadeIn(100).parent().parent().prev().val($(this).attr("data-value") || 0);
    });

    $("[name=cover]").change(function (e) {
        if (!!$(this).attr("checked"))
            $("#board > div").removeClass("nude");
        else
            $("#board > div").addClass("nude");
    });

    $(".select").click(function (e) {
        e.stopPropagation();
        var itemHeight = parseInt($(this).children("ul").children("li").css("line-height"));
        $(this).children("ul").toggle(0, function () {
            if ($(this).is(":visible")) {
                $(this).scrollTop(($(this).children(".selected").index() + 1) * itemHeight - itemHeight);
            }
        });
    });

    $(document).click(function () {
        $(".select > ul").hide();
    });

});
