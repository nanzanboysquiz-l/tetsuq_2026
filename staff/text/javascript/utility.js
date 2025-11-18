//OS・ブラウザを判別する
/*
 * if.useragent.js v0.1
 * info: http://company.miyanavi.net/archives/808
 * auther: miyanavi
 * licence: MIT
 *
 */
function judgeUA()
{
	uaName = 'unknown';
	userAgent = window.navigator.userAgent.toLowerCase();
	appVersion = window.navigator.appVersion.toLowerCase();
	
	if (userAgent.indexOf('msie') != -1) {
		uaName = 'ie';
		if (appVersion.indexOf('msie 6.') != -1) {
			uaName = 'ie6';
		} else if (appVersion.indexOf('msie 7.') != -1) {
			uaName = 'ie7';
		} else if (appVersion.indexOf('msie 8.') != -1) {
			uaName = 'ie8';
		} else if (appVersion.indexOf('msie 9.') != -1) {
			uaName = 'ie9';
		} else if (appVersion.indexOf('msie 10.') != -1) {
			uaName = 'ie10';
		}
	} else if (userAgent.indexOf('chrome') != -1) {
		uaName = 'chrome';
	} else if (userAgent.indexOf('ipad') != -1) {
		uaName = 'ipad';
	} else if (userAgent.indexOf('ipod') != -1) {
		uaName = 'ipod';
	} else if (userAgent.indexOf('iphone') != -1) {
		uaName = 'iphone';
		//var ios = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		//uaName = [parseInt(ios[1], 10), parseInt(ios[2], 10), parseInt(ios[3] || 0, 10)];
	} else if (userAgent.indexOf('safari') != -1) {
		uaName = 'safari';
	} else if (userAgent.indexOf('gecko') != -1) {
		uaName = 'gecko';
	} else if (userAgent.indexOf('opera') != -1) {
		uaName = 'opera';
	} else if (userAgent.indexOf('android') != -1) {
		uaName = 'android';
	} else if (userAgent.indexOf('mobile') != -1) {
		uaName = 'mobile';
	};
	
	///// OSの判[1]?
	//  http://www9.plala.or.jp/oyoyon/html/script/platform.html
	//os;
	var ua = navigator.userAgent;
	if (ua.match(/Win(dows )?NT 6\.2/)) {
		os = "Windows 8";				// Windows 8 の処[2]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?NT 6\.1/)) {
		os = "Windows 7";				// Windows 7 の処[3]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?NT 6\.0/)) {
		os = "Windows Vista";				// Windows Vista の処[4]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?NT 5\.2/)) {
		os = "Windows Server 2003";			// Windows Server 2003 の処[5]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
		os = "Windows XP";				// Windows XP の処[6]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows)? (9x 4\.90|ME)/)) {
		os = "Windows ME";				// Windows ME の処[7]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?(NT 5\.0|2000)/)) {
		os = "Windows 2000";				// Windows 2000 の処[8]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?98/)) {
		os = "Windows 98";				// Windows 98 の処[9]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?NT( 4\.0)?/)) {
		os = "Windows NT";				// Windows NT の処[10]?
		os = "Windows"
	}
	else if (ua.match(/Win(dows )?95/)) {
		os = "Windows 95";				// Windows 95 の処[11]?
		os = "Windows"
	}
	else if (ua.match(/Mac|PPC/)) {
		os = "Mac OS";					// Macintosh の処[12]?
	}
	else if (ua.match(/Linux/)) {
		os = "Linux";					// Linux の処[13]?
	}
	else if (ua.match(/^.*\s([A-Za-z]+BSD)/)) {
		os = RegExp.$1;					// BSD 系の処[14]?
	}
	else if (ua.match(/SunOS/)) {
		os = "Solaris";					// Solaris の処[15]?
	}
	else {
		os = "N/A";					// 上記以[16]? OS の処[17]?
	}
	
	//========位置調整
	//環[18]?[19]よってフォント[20]?縦位置を設定　24ドッ[21]?
	if(os == "Windows")
		fontTop[24] = 4; //Windows
	else if(uaName == "gecko")
		fontTop[24] = -2; //MacのFirefox
	else if(uaName == "iphone")
		fontTop[24] = -6; //iPhone
	else
		fontTop[24] = -5; //Macのchrome
	
	//環[22]?[23]よってフォント[24]?縦位置を設定　16ドッ[25]?
	if(os == "Windows")
		fontTop[16] = 0; //Windows
	else if(uaName == "gecko")
		fontTop[16] = 0; //MacのFirefox
	else if(uaName == "iphone")
		fontTop[16] = -5; //iPhone
	else
		fontTop[16] = -4; //Macのchrome
}
var fontTop = new Array();
fontTop[16] = 0;
fontTop[24] = 0;

var fontTopAdjustment = 0;




//4桁までの数を桁ごとに[26]?[27]して返す
//numは数、digitには1[28]?10[29]?100[30]?1000、nullTextは先[31]?[32]の桁がゼロの場合[33]?対処
function digitDivision(num, digit, nullText)
{
	//数値じゃな[34]??   ?
	//if(num.match(/[^0-9]+/))
	//return "null";
	
	//空[35]??場[36]?
	if(num == "")
		return 10;
	
	//マイナスの場合、ゼロにする
	if(num < 0)
		num = 0;
	
	//桁に[37]?[38]
	var num3 = Math.floor(num % 10000 / 1000)
	var num2 = Math.floor(num % 1000 / 100)
	var num1 = Math.floor(num % 100 / 10)
	var num0 = num % 10;
	
	//返す値
	if(digit==1)	out = num0;
	if(digit==10)	out = num1;
	if(digit==100)	out = num2;
	if(digit==1000)	out = num3;
	
	//ゼロの場合、かつ、左側に桁がなにもな[39]??[40]合、空[41]?[42]
	if(out == 0)
	{
		if(digit==1000)
			out = nullText;
		if(digit==100 && num3 == 0)
			out = nullText;
		if(digit==10  && num3 == 0 && num2 == 0)
			out = nullText;
		if(digit==1   && num3 == 0 && num2 == 0 && num1 == 0)
			out = nullText;
	}
	return out;
}

//バイト数を求め[43]?
function getByte(text)
{
	count = 0;
	for (i=0; i<text.length; i++)
	{
		n = escape(text.charAt(i));
		if (n.length < 4) count++; else count+=2;
	}
	return count;
}

//[44]?[45]スト[46]?[47]?[48]スに入力されたも[49]?が数値かど[50]?[51]チェ[52]?[53]する
//引数?[54]チェ[55]?[56]する値、例外[57]?場合[58]?戻り値
function inputTextNumCheck(value, exception)
{
	//0未満が[59]?ったら、無限大に
	if(value < 0)
		value = exception;
	//数字以外が入ったら、無限大に
	if ( isNaN( parseInt( value ) ) )
		value = exception;
	
	return value;
}

//全角文字数のみをカウントす[60]?
function getFullCharaLength(str)
{
	var count = 0;
	len = 0;
	str = escape(str);
	for (i=0;i<str.length;i++,len++) {
		if (str.charAt(i) == "%") {
			if (str.charAt(++i) == "u") {
				i += 3;
				count++;
				len++;
			}
			i++;
		}
	}
	return count;
}

//ログ出[61]?
function log(text)
{
	id = "log";
	document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + "<br />"+text;
}


// ドラ[62]?グして画像を移動す[63]?
x = 100; // マウスと画像[64]?縦方向[65]?距離
y = 100; // マウスと画像[66]?横方向[67]?距離
flag = false;
window.document.onmousemove = dragImg;
window.document.onmouseup   = dragOff;
function dragOn(n) {
	imgName = n;
	//y = event.y;
	//x = event.x;
	y = event.y - 1 * document.getElementById(imgName).style.top.replace( "px" , "" );
	x = event.x - 1 * document.getElementById(imgName).style.left.replace( "px" , "" );
	flag = true;  
}
function dragOff() {
	flag = false;
}
function dragImg() {
	if(!flag) return;
	//document.images[imgName].style.top  = event.y - y;
	//document.images[imgName].style.left = event.x - x;
	document.getElementById(imgName).style.top  = event.y - y + "px";
	document.getElementById(imgName).style.left = event.x - x + "px";
	return false;
}