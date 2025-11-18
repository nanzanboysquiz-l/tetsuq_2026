var zoom = 0.25;
var cycleSum = 3; //サイクル数の合[1]?
var mapStaNum = 8; //路線図に8[2]?表示
randomSetFlag = true; //true:制限ありランダ[3]?　false:完[4]?ランダ[5]?

//路線記号　　記号、ファイル名、文字色の[6]?
lineSymbolList = [
	["A",     "symbol/A", "w"],
	["B",     "symbol/B", "w"],
	["C",     "symbol/C", "w"],
	["D",     "symbol/D", "w"],
	["E",     "symbol/E", "w"],
	["F",     "symbol/F", "w"],
	["G",     "symbol/G", "b"],
	["H",     "symbol/H", "w"],
	["I",     "symbol/I", "w"],
	["J",     "symbol/J", "w"],
	["K",     "symbol/K", "w"],
	["L",     "symbol/L", "b"],
	["O",     "symbol/O", "w"],
	["P",     "symbol/P", "w"],
	["Q",     "symbol/Q", "w"],
	["R",     "symbol/R", "b"],
	["S",     "symbol/S", "w"],
	["T",     "symbol/T", "w"],
	["U",     "symbol/U", "w"],
	["V",     "symbol/V", "w"],
	["W",     "symbol/W", "w"],
	["----",     "null"]
];

//種別
typeList = [
	["普通",     "type/local"],
	["快速",     "type/rapid"],
	["区間快速",     "type/regional-rapid"],
	["直通快速",     "type/direct-rapid"],
	["関空快速",     "type/kansai-airport-rapid"],
	["紀州路快速",     "type/kishuji-rapid"],
	["新快速",     "type/s-rapid"],
	["----",     "null"]
];

//行き[14]?
destinationList = [
	["湖西線経由敦賀",     "destination/kosei-tsuruga"],
	["京都",     "destination/kyoto"],
	["尼崎",     "destination/amagasaki"],
	["西明石",     "destination/nishi-akashi"],
	["姫路",     "destination/himeji"],
	["姫路方面 網干",     "destination/himeji-aboshi"],
	["播州赤穂",     "destination/banshu-ako"],
	["日根野?",     "destination/hineno"],
	["松井山手",     "destination/matsuiyamate"],
	["京田辺",     "destination/kyotanabe"],
	["新三田",     "destination/shin-sanda"],
	["福知山",     "destination/fukuchiyama"],
	["大阪環状線",     "destination/osaka-loop"],
	["天王寺",     "destination/tennoji"],
	["関西空港",     "destination/kansai-ap"],
	["和歌山",     "destination/wakayama"],
	["御坊",     "destination/gobo"],
	["おおさか東線経由 奈良",     "destination/osaka-higashi-nara"],
	["----",     "null"]
];

//号[21]?
carNoList = [
	["1号車?",     "carNo/1"],
	["2号車",     "carNo/2"],
	["3号車",     "carNo/3"],
	["4号車",     "carNo/4"],
	["5号車",     "carNo/5"],
	["6号車",     "carNo/6"],
	["7号車",     "carNo/7"],
	["8号車",     "carNo/8"],
	["9号車",     "carNo/9"],
	["10号車",     "carNo/10"],
	["11号車",     "carNo/11"],
	["12号車",     "carNo/12"],
	["----",     "null"]
];

//1行中のコン[34]?    ?[35]名前、リスト、位置[left, top, width, height]の[36]?
var contentsList = [
	["lineSymbol",  lineSymbolList,  [   52,  72,  168,  168] ],
	["type",        typeList,        [    0,   0, 1000,  400] ],
	["destination", destinationList, [    0,   0, 3264,  250] ],
	["carNo",       carNoList,       [ 2764,   0,  500,  500] ]
];

//　　　　　　　　　id, left, top, width, height の[37]?
var imgData = [
	["flameDiv0",           0,    0, 3364, 2548],
	["flameDiv1",          50,   50, 3264, 2448],
	["baseImg",             0,    0, 3264, 2448],
	["carNumBaseImg",    2764,    0,  500,  500],
	["topMainBaseImg",      0,  300, 3264,  514],
	["topMainImg",          0,  300, 3264,  514],
	["topStaNumBaseImg",  924,  408,  306,  306],
	["topStaNum1Img",     975,  565,  115,  125],
	["topStaNum0Img",    1070,  565,  115,  125],
	["bottomMessageImg",    0,  814, 3264, 1634],
	//[38]?[39]
	["mapStaNameImg0",       0, 0,  740,  786],
	["mapStaNameImg1",       0, 0,  740,  786],
	["mapStaNameImg2",       0, 0,  740,  786],
	["mapStaNameImg3",       0, 0,  740,  786],
	["mapStaNameImg4",       0, 0,  740,  786],
	["mapStaNameImg5",       0, 0,  740,  786],
	["mapStaNameImg6",       0, 0,  740,  786],
	["mapStaNameImg7",       0, 0,  740,  786],
	//[40]?[41]号
	["mapStaNumBaseImg0",       276, 668,  187,   75],
	["mapStaNumBaseImg1",       276, 668,  187,   75],
	["mapStaNumBaseImg2",       276, 668,  187,   75],
	["mapStaNumBaseImg3",       276, 668,  187,   75],
	["mapStaNumBaseImg4",       276, 668,  187,   75],
	["mapStaNumBaseImg5",       276, 668,  187,   75],
	["mapStaNumBaseImg6",       276, 668,  187,   75],
	["mapStaNumBaseImg7",       276, 668,  187,   75],
	
	["mapStaNum1Img0",       352, 675,  50,   62],
	["mapStaNum1Img1",       352, 675,  50,   62],
	["mapStaNum1Img2",       352, 675,  50,   62],
	["mapStaNum1Img3",       352, 675,  50,   62],
	["mapStaNum1Img4",       352, 675,  50,   62],
	["mapStaNum1Img5",       352, 675,  50,   62],
	["mapStaNum1Img6",       352, 675,  50,   62],
	["mapStaNum1Img7",       352, 675,  50,   62],

	["mapStaNum0Img0",       395, 675,  50,   62],
	["mapStaNum0Img1",       395, 675,  50,   62],
	["mapStaNum0Img2",       395, 675,  50,   62],
	["mapStaNum0Img3",       395, 675,  50,   62],
	["mapStaNum0Img4",       395, 675,  50,   62],
	["mapStaNum0Img5",       395, 675,  50,   62],
	["mapStaNum0Img6",       395, 675,  50,   62],
	["mapStaNum0Img7",       395, 675,  50,   62],
	//[42]??丸印
	["mapCircleImg0",     275, 804,  190,  190],
	["mapCircleImg1",     275, 804,  190,  190],
	["mapCircleImg2",     275, 804,  190,  190],
	["mapCircleImg3",     275, 804,  190,  190],
	["mapCircleImg4",     275, 804,  190,  190],
	["mapCircleImg5",     275, 804,  190,  190],
	["mapCircleImg6",     275, 804,  190,  190],
	["mapCircleImg7",     275, 804,  190,  190],
	//乗換の縦[43]?
	["mapTranceferLineADiv0",     356, 743,  28,  43],
	["mapTranceferLineADiv1",     356, 743,  28,  43],
	["mapTranceferLineADiv2",     356, 743,  28,  43],
	["mapTranceferLineADiv3",     356, 743,  28,  43],
	["mapTranceferLineADiv4",     356, 743,  28,  43],
	["mapTranceferLineADiv5",     356, 743,  28,  43],
	["mapTranceferLineADiv6",     356, 743,  28,  43],
	["mapTranceferLineADiv7",     356, 743,  28,  43],
	["mapTranceferLineBDiv0",     356, 1055,  28,  68],
	["mapTranceferLineBDiv1",     356, 1055,  28,  68],
	["mapTranceferLineBDiv2",     356, 1055,  28,  68],
	["mapTranceferLineBDiv3",     356, 1055,  28,  68],
	["mapTranceferLineBDiv4",     356, 1055,  28,  68],
	["mapTranceferLineBDiv5",     356, 1055,  28,  68],
	["mapTranceferLineBDiv6",     356, 1055,  28,  68],
	["mapTranceferLineBDiv7",     356, 1055,  28,  68],
	//乗換
	["mapTranceferImg0",     185, 1055,  370,  579],
	["mapTranceferImg1",     185, 1055,  370,  579],
	["mapTranceferImg2",     185, 1055,  370,  579],
	["mapTranceferImg3",     185, 1055,  370,  579],
	["mapTranceferImg4",     185, 1055,  370,  579],
	["mapTranceferImg5",     185, 1055,  370,  579],
	["mapTranceferImg6",     185, 1055,  370,  579],
	["mapTranceferImg7",     185, 1055,  370,  579]
];

//右向きか左向きかによって位置が変わるもの
var imgDataMirror = [
	//[44]?[45]・[46]?[47]号・丸印・乗換縦棒セ[48]?[49]
	["mapStaDiv0",       [-33+370*0, -33+370*7], 814,  740,  786],
	["mapStaDiv1",       [-33+370*1, -33+370*6], 814,  740,  786],
	["mapStaDiv2",       [-33+370*2, -33+370*5], 814,  740,  786],
	["mapStaDiv3",       [-33+370*3, -33+370*4], 814,  740,  786],
	["mapStaDiv4",       [-33+370*4, -33+370*3], 814,  740,  786],
	["mapStaDiv5",       [-33+370*5, -33+370*2], 814,  740,  786],
	["mapStaDiv6",       [-33+370*6, -33+370*1], 814,  740,  786],
	["mapStaDiv7",       [-33+370*7, -33+370*0], 814,  740,  786],
	//路線図横[50]?
	["mapLineImg0",      [         0, 337+370*7], 1600,  337,  269],
	["mapLineImg1",      [ 337+370*0, 337+370*6], 1600,  370,  269],
	["mapLineImg2",      [ 337+370*1, 337+370*5], 1600,  370,  269],
	["mapLineImg3",      [ 337+370*2, 337+370*4], 1600,  370,  269],
	["mapLineImg4",      [ 337+370*3, 337+370*3], 1600,  370,  269],
	["mapLineImg5",      [ 337+370*4, 337+370*2], 1600,  370,  269],
	["mapLineImg6",      [ 337+370*5, 337+370*1], 1600,  370,  269],
	["mapLineImg7",      [ 337+370*6, 337+370*0], 1600,  370,  269],
	["mapLineImg8",      [ 337+370*7,         0], 1600,  337,  269],
	//[51]?間の記号
	["mapSpanImg0",      [ 337+370*0, 337+370*6], 1600,  370,  269],
	["mapSpanImg1",      [ 337+370*1, 337+370*5], 1600,  370,  269],
	["mapSpanImg2",      [ 337+370*2, 337+370*4], 1600,  370,  269],
	["mapSpanImg3",      [ 337+370*3, 337+370*3], 1600,  370,  269],
	["mapSpanImg4",      [ 337+370*4, 337+370*2], 1600,  370,  269],
	["mapSpanImg5",      [ 337+370*5, 337+370*1], 1600,  370,  269],
	["mapSpanImg6",      [ 337+370*6, 337+370*0], 1600,  370,  269]
];


//[52]?[53]ォルト[54]?[55]?[56]び定義
//defaultStaList = "○京橋\n○大阪城北詰\n×大阪天満宮\n×北新地\n○新福島\n○海老江\n○御幣島\n○加島\n○尼崎\n×立花\n○甲子園口\n○西宮\n×さくら夙川\n○芦屋\n×甲南山手\n×摂津本山\n○住吉\n×六甲道\n×摩耶\n×灘\n○三ノ宮";
//defaultStaList = "○京橋\n○放出\n×[58]?[59]寺\n○王寺\n○奈良";
//defaultStaList = "○住道\n○京橋\n○大阪城北詰\n×大阪天満宮\n○北新地\n○新福島\n○海老江\n○御幣島\n○加島\n○尼崎\n×立花\n○甲子園口";
var defaultDataList = [];
defaultDataList.push([
	"姫路\n通過\n加古川\n通過\n西明石\n明石\n通過\n神戸\n通過\n三ノ宮\n通過\n芦屋\n通過\n尼崎\n通過\n大阪\n新大阪\n通過\n高槻\n通過\n京都\n山科\n大津京\n通過\n比叡山坂本\n通過\n[61]?[62]\n通過\n近江舞子\n北小松\n近江高島\n安曇川\n新旭\n近江今津\n近江中庄\nマキノ\n永原\n近江塩津\n新疋田\n敦賀\n",
	[["B","新快速","湖西線経由敦賀"], ["A","新快速","姫路"]]
]);
defaultDataList.push([
	"尼崎\n加島\n御幣島\n海老江\n新福島\n北新地\n大阪天満宮\n大阪城北詰\n京橋\n通過\n放出\n通過\n久宝寺\n通過\n王寺\n法隆寺\n大和小泉\n郡山\n奈良\n",
	[["A","直通快速","おおさか東線経由 奈良"], ["A","直通快速","尼崎"]]
]);
defaultDataList.push([
	"播州赤[72]?\n坂越\n西相生\n相生\n竜野\n網干\nはりま勝原\n英賀保\n姫路\n通過\n[73]?古川\n通過\n西明石\n明石\n通過\n神戸\n通過\n三ノ宮\n通過\n芦屋\n通過\n尼崎\n通過\n大阪\n新大阪\n通過\n高槻\n通過\n京都\n山科\n大津\n通過\n石山\n通過\n南草津\n草津\n通過\n守山\n野洲\n通過\n近江[74]?幡\n通過\n能登川\n通過\n彦根\n米原\n",
	[["A","新快[75]?","京都"], ["A","新快[76]?","播州赤[77]?"]]
]);
defaultDataList.push([
	"姫路\n東姫路\n御着\nひめじ別所\n曽根\n宝殿\n[78]?古川\n東[79]?古川\n土山\n魚住\n大[80]?[81]\n西明石\n明石\n通過\n舞子\n垂水\n通過\n須磨\n通過\n兵庫\n神戸\n[82]?町\n三ノ宮\n通過\n六甲道\n住吉\n通過\n芦屋\n通過\n西宮\n通過\n尼崎\n通過\n大阪\n新大阪\n通過\n茨木\n通過\n高槻\n島本\n山崎\n長岡京\n向日町\n桂川\n西大路\n京都\n",
	[["A","快[83]?","京都"], ["A","快[84]?","姫路"]]
]);
defaultDataList.push([
	"西明石\n明石\n朝霧\n舞子\n垂水\n塩屋\n須磨\n須磨海浜[85]?園\n鷹取\n新長田\n兵庫\n神戸\n[86]?町\n三ノ宮\n灘\n摩耶\n六甲道\n住吉\n摂津本山\n甲南山手\n芦屋\nさくら夙川\n西宮\n甲子園口\n立花\n尼崎\n塚本\n大阪\n新大阪\n東淀川\n吹田\n岸辺\n[87]?[88]丘\n茨木\nJR総持寺\n摂津富田\n高槻\n島本\n山崎\n長岡京\n向日町\n桂川\n西大路\n京都\n",
	[["A","普[89]?","京都"], ["A","普[90]?","西明石"]]
]);
defaultDataList.push([
	"天王寺\n新今宮\n通過\n大正\n弁天町\n西九条\n通過\n福島\n大阪\n天満\n桜ノ宮\n京橋\n大阪城[91]?園\n森ノ宮\n玉[92]?\n鶴橋\n[93]?[94]\n寺田町\n天王寺\n通過\n堺[95]?\n三国ケ丘\n通過\n鳳\n通過\n和泉府中\n通過\n東岸和田\n通過\n熊取\n日根野\nりんくうタウン\n関西空港\n",
	[["S","関空快[96]?","関西空港"], ["S","関空快[97]?","大阪環状[98]?"]]
]);
defaultDataList.push([
	"天王寺\n新今宮\n通過\n大正\n弁天町\n西九条\n通過\n福島\n大阪\n天満\n桜ノ宮\n京橋\n大阪城[99]?園\n森ノ宮\n玉[100]?\n鶴橋\n[101]?[102]\n寺田町\n天王寺\n通過\n堺[103]?\n三国ケ丘\n通過\n鳳\n通過\n和泉府中\n通過\n東岸和田\n通過\n熊取\n日根野\n長滝\n新家\n和泉[104]?[105]川\n和泉鳥取\n山中渓\n紀伊\n六十谷\n紀伊中ノ島\n和歌山\n",
	[["R","紀州路快[106]?","和歌山"], ["R","紀州路快[107]?","大阪環状[108]?"]]
]);
defaultDataList.push([
	"西明石\n明石\n朝霧\n舞子\n垂水\n塩屋\n須磨\n須磨海浜[109]?園\n鷹取\n新長田\n兵庫\n神戸\n[110]?町\n三ノ宮\n灘\n摩耶\n六甲道\n住吉\n摂津本山\n甲南山手\n芦屋\nさくら夙川\n西宮\n甲子園口\n立花\n尼崎\n[111]?島\n御幣島\n海老江\n新福島\n北新地\n大阪天満宮\n大阪城北詰\n京橋\n鴫野\n放出\n徳庵\n鴻[112]?新田\n住道\n野崎\n四條畷\n忍ヶ丘\n寝屋川[113]?園\n星田\n河[114]?磐船\n津田\n藤阪\n長尾\n松井山手\n",
	[["H","普[115]?","松井山[116]?"], ["A","普[117]?","西明石"]]
]);
defaultDataList.push([
	"天王寺\n美[118]?園\n南田辺\n鶴ケ丘\n長[119]?\n我孫子町\n杉本町\n[120]?[121]\n堺[122]?\n三国ケ丘\n百舌鳥\n上野芝\n津[123]?[124]\n鳳\n富木\n北信太\n信太山\n和泉府中\n[125]?[126]田\n下松\n東岸和田\n東貝塚\n和泉橋本\n東佐野\n熊取\n日根野\n長滝\n新家\n和泉[127]?[128]川\n和泉鳥取\n山中渓\n紀伊\n六十谷\n紀伊中ノ島\n和歌山\n",
	[["R","普[129]?","日根[130]?"], ["R","普[131]?","大阪環状[132]?"]]
]);
defaultDataList.push([
	"和歌山\n宮前\n紀三井寺\n黒江\n海南\n冷水浦\n[133]?茂[134]?\n下津\n初島\n箕島\n紀伊宮原\n藤並\n湯[135]?\n[136]?[137]ビーチ\n紀伊由良\n紀伊[138]?原\n御坊\n",
	[["W","普[139]?","御[140]?"], ["W","普[141]?","和歌山"]]
]);
defaultDataList.push([
	"木津\n西木津\n祝園\n下狛\nJR三山木\n同志社前\n京田辺\n大住\n松井山手\n長尾\n通過\n河[142]?磐船\n星田\n通過\n四條畷\n通過\n住道\n通過\n放出\n通過\n京橋\n大阪城北詰\n大阪天満宮\n北新地\n新福島\n海老江\n御幣島\n[143]?島\n尼崎\n塚口\n猪名寺\n伊丹\n北伊丹\n川西[144]?田\n中山寺\n宝塚\n生瀬\n西宮名塩\n武田尾\n道[145]?[146]\n三田\n新三田\n",
	[["G","普[147]?","新三田"], ["H","普[148]?","木津"]]
]);
defaultDataList.push([
	"大阪\n通過\n尼崎\n通過\n伊丹\n通過\n川西[149]?田\n中山寺\n宝塚\n通過\n西宮名塩\n通過\n三田\n新三田\n[150]?[151]\n相野\n藍本\n草野\n古[152]?\n南矢代\n[153]?山口\n丹波大山\n下滝\n谷川\n柏原\n石生\n黒井\n市島\n丹波竹田\n福知山",
	[["G","丹波路快[154]?","福知山"], ["G","丹波路快[155]?","大阪"]]
]);
	//""



//[156]?[157]定義
//	[[[158]?[159]号], [160]?[161], 乗換案[162]?表示の有無, [163]?[164]号の有無],

staNumList = [
//----------大阪環状[165]?----------
	[["O01", "R20"], "天王寺", true, true],
	[["O02"], "寺田町", false, true],
	[["O03"], "[166]?[167]", false, true],
	[["O04"], "鶴[168]?", true, true],
	[["O05"], "玉[169]?", true, true],
	[["O06"], "森ノ宮", true, true],
	[["O07"], "大阪城[170]?[171]?", false, true],
	[["O08", "H41"], "京[172]?", true, true],
	[["O09"], "桜ノ宮", false, true],
	[["O10"], "天満", true, true],
	[["A47", "G47", "O11"], "大阪", true, true],
	[["O12"], "福島", false, true],
	//[["O13"], "", false, true],
	[["O14"], "西九条", true, true],
	[["O15"], "弁天町", true, true],
	[["O16"], "大正", true, true],
	//[["O17"], "", false, true],
	//[["O18"], "", false, true],
	[["O19"], "新今宮", true, true],
	
//----------湖西[173]?----------
	[["B11"], "永[174]?", false, true],
	[["B12"], "マキ[175]?", false, true],
	[["B13"], "近江中[176]?", false, true],
	[["B14"], "近江今津", false, true],
	[["B15"], "新旭", false, true],
	[["B16"], "安曇[177]?", false, true],
	[["B17"], "近江高島", false, true],
	[["B18"], "北小松", false, true],
	[["B19"], "近江[178]?[179]?", false, true],
	//[["B20"], "比良", false, true],
	//[["B21"], "志賀", false, true],
	//[["B22"], "蓬莱", false, true],
	//[["B23"], "和邇", false, true],
	//[["B24"], "小野", false, true],
	[["B25"], "[180]?[181]", false, true],
	//[["B26"], "おごと温[182]?", false, true],
	[["B27"], "比叡山坂本", false, true],
	//[["B28"], "唐[183]?", false, true],
	[["B29"], "大津京", false, true],

//----------北陸[184]?----------
	[["A01"], "敦賀", true, true],
	[["A02"], "新疋田", false, true],
	[["A03","B10"], "近江塩津", true, true],
	//[["A04"], "余呉", false, true],
	//[["A05"], "木ノ本", false, true],
	//[["A06"], "高月", false, true],
	//[["A07"], "河[185]?", false, true],
	//[["A08"], "虎姫", false, true],
	//[["A09"], "長[186]?", false, true],
	//[["A10"], "田[187]?", false, true],
	//[["A11"], "坂田", false, true],
//----------琵琶湖[188]?----------
	[["A12"], "米[189]?", true, true],
	[["A13"], "彦根", true, true],
	//[["A14"], "南彦根", false, true],
	//[["A15"], "河瀬", false, true],
	//[["A16"], "稲[190]?", false, true],
	[["A17"], "能登[191]?", false, true],
	//[["A18"], "安土", false, true],
	[["A19"], "近江[192]?幡", true, true],
	//[["A20"], "[193]?[194]?", false, true],
	[["A21"], "野洲", false, true],
	[["A22"], "守山", false, true],
	//[["A23"], "栗東", false, true],
	[["A24"], "草津", true, true],
	[["A25"], "南草津", false, true],
	//[["A26"], "瀬田", false, true],
	[["A27"], "石山", true, true],
	//[["A28"], "膳所", false, true],
	[["A29"], "大津", false, true],
	[["A30","B30"], "山[195]?", true, true],
//----------JR京都[196]?----------
	[["A31","D01"], "京都", true, true],
	[["A32"], "西大路", false, true],
	[["A33"], "桂[197]?", false, true],
	[["A34"], "向日町", false, true],
	[["A35"], "長岡京", false, true],
	[["A36"], "山[198]?", false, true],
	[["A37"], "島本", false, true],
	[["A38"], "高槻", false, true],
	[["A39"], "摂津富田", false, true],
	[["A40"], "JR総持寺", false, true],
	[["A41"], "茨木", false, true],
	[["A42"], "[199]?    ?", false, true],
	[["A43"], "岸辺", false, true],
	[["A44"], "吹田", false, true],
	[["A45"], "東淀[200]?", false, true],
	[["A46"], "新大阪", true, true],
	//[["A47", "G47", "O11"], "大阪", true, true],
	
//----------JR神戸[201]?----------
	[["A48"], "塚本", false, true],
	[["A49","H49","G49"], "尼[202]?", true, true],
	[["A50"], "立花", false, true],
	[["A51"], "甲子園口", false, true],
	[["A52"], "西宮", false, true],
	[["A53"], "さくら夙[203]?", false, true],
	[["A54"], "芦[204]?", false, true],
	[["A55"], "甲南山[205]?", false, true],
	[["A56"], "摂津本山", false, true],
	[["A57"], "住吉", true, true],
	[["A58"], "六甲[206]?", false, true],
	[["A59"], "摩耶", false, true],
	[["A60"], "[207]?", false, true],
	[["A61"], "三ノ宮", true, true],
	[["A62"], "[208]?町", false, true],
	[["A63"], "神戸", true, true],
	[["A64"], "兵庫", true, true],
	[["A65"], "新長田", true, true],
	[["A66"], "鷹[209]?", false, true],
	[["A67"], "須磨海浜[210]?[211]?", false, true],
	[["A68"], "須磨", false, true],
	[["A69"], "塩[212]?", false, true],
	[["A70"], "垂水", false, true],
	[["A71"], "舞[213]?", false, true],
	[["A72"], "朝霧", false, true],
	[["A73"], "明石", true, true],
	[["A74"], "西明石", true, true],
	[["A75"], "大[214]?[215]?", false, true],
	[["A76"], "魚[216]?", false, true],
	[["A77"], "土山", false, true],
	[["A78"], "東[217]?古[218]?", false, true],
	[["A79"], "[219]?古[220]?", true, true],
	[["A80"], "宝殿", false, true],
	[["A81"], "曽根", false, true],
	[["A82"], "ひめじ別所", false, true],
	[["A83"], "御着", false, true],
	[["A84"], "東姫路", false, true],
	[["A85"], "姫路", true, true],
	[["A86"], "英賀[221]?", false, false],
	[["A87"], "はりま勝原", false, false],
	[["A88"], "網干", false, false],
	[["A89"], "竜野", false, false],
	[["A90"], "相[222]?", true, false],
	//[["A91"], "有年", false, false],
	//[["A92"], "上郡", false, false],
	[["A93"], "西相[223]?", false, false],
	[["A94"], "坂[224]?", false, false],
	[["A95"], "播州赤[225]?", false, false],
	
//----------学研[226]?市[227]?----------
	[["H18"], "木津", true, true],
	[["H19"], "西木津", false, true],
	[["H20"], "祝園", true, true],
	[["H21"], "下狛", false, true],
	[["H22"], "JR三山木", false, true],
	[["H23"], "同志社[228]?", false, true],
	[["H24"], "京田辺", true, true],
	[["H25"], "大[229]?", false, true],
	[["H26"], "松井山[230]?", false, true],
	[["H27"], "長尾", false, true],
	[["H28"], "藤阪", false, true],
	[["H29"], "津田", false, true],
	[["H30"], "河[231]?磐船", true, true],
	[["H31"], "星田", false, true],
	[["H32"], "寝屋川[232]?[233]?", false, true],
	[["H33"], "忍ケ[234]?", false, true],
	[["H34"], "四條畷", false, true],
	[["H35"], "野[235]?", false, true],
	[["H36"], "住道", false, true],
	[["H37"], "鴻[236]?新田", false, true],
	[["H38"], "徳庵", false, true],
	[["H39", "F08"], "放出", true, true],
	[["H40"], "鴫[237]?", true, true],
//----------JR東西[238]?----------
	//H41京[239]?
	[["H42"], "大阪城北詰", false, true],
	[["H43"], "大阪天満宮", true, true],
	[["H44"], "北新地", true, true],
	[["H45"], "新福島", true, true],
	[["H46"], "海老[240]?", true, true],
	[["H47"], "御幣島", false, true],
	[["H48"], "[241]?島", false, true],
	//[["A49","H49","G49"], "尼[242]?", true, true],

//----------JR宝塚線[243]?福知山[244]?----------
	[["G50"], "塚口", false, true],
	[["G51"], "猪名寺", false, true],
	[["G52"], "伊丹", false, true],
	[["G53"], "北伊丹", false, true],
	[["G54"], "川西[245]?田", true, true],
	[["G55"], "中山寺", false, true],
	[["G56"], "宝[246]?", true, true],
	[["G57"], "生瀬", false, true],
	[["G58"], "西宮名塩", false, true],
	[["G59"], "武田尾", false, true],
	[["G60"], "道[247]?[248]", false, true],
	[["G61"], "三田", true, true],
	[["G62"], "新三田", false, true],
	[["G63"], "[249]?[250]", false, true],
	[["G64"], "相[251]?", false, true],
	[["G65"], "藍本", false, true],
	[["G66"], "草野", false, true],
	[["G67"], "古[252]?", false, true],
	[["G68"], "南矢代", false, true],
	[["G69"], "[253]?山口", false, true],
	[["G70"], "丹波大山", false, false],
	[["G71"], "下[254]?", false, false],
	[["G72"], "谷[255]?", true, false],
	[["G73"], "柏原", false, false],
	[["G74"], "石[256]?", false, false],
	[["G75"], "黒[257]?", false, false],
	[["G76"], "市島", false, false],
	[["G77"], "丹波竹田", false, false],
	[["G78"], "福知山", true, false],

//----------おおさか東線[258]?大和路[259]?----------
	[["Q36"], "奈良", true, true],
	[["Q34"], "郡山", false, true],
	[["Q33"], "大和小[260]?", false, true],
	[["Q32"], "法隆寺", false, true],
	[["Q31"], "王寺", true, true],
	[["Q24", "F15"], "[261]?[262]寺", true, true],

//----------阪和[263]?----------
	//[["R20"], "天王寺", false, true],
	[["R21"], "美[264]?[265]?", false, true],
	[["R22"], "南田辺", false, true],
	[["R23"], "鶴ケ[266]?", false, true],
	[["R24"], "長[267]?", false, true],
	[["R25"], "我孫子町", false, true],
	[["R26"], "杉本町", false, true],
	[["R27"], "[268]?[269]?", false, true],
	[["R28"], "堺[270]?", false, true],
	[["R29"], "三国ケ[271]?", true, true],
	[["R30"], "百舌鳥", false, true],
	[["R31"], "上野[272]?", false, true],
	[["R32"], "津[273]?[274]", false, true],
	[["R33"], "鳳", true, true],
	[["R34"], "富木", false, true],
	[["R35"], "北信太", false, true],
	[["R36"], "信太山", false, true],
	[["R37"], "和泉府中", false, true],
	[["R38"], "[275]?[276]田", false, true],
	[["R39"], "下松", false, true],
	[["R40"], "東岸和田", false, true],
	[["R41"], "東貝[277]?", false, true],
	[["R42"], "和泉橋本", false, true],
	[["R43"], "東佐野", false, true],
	[["R44"], "熊取", false, true],
	[["R45", "S45"], "日根[278]?", true, true],
	[["R46"], "長[279]?", false, true],
	[["R47"], "新家", false, true],
	[["R48"], "和泉[280]?   ?", false, true],
	[["R49"], "和泉鳥[281]?", false, true],
	[["R50"], "山中[282]?", false, true],
	[["R51"], "紀[283]?", false, true],
	[["R52"], "六十谷", false, true],
	[["R53"], "紀伊中ノ島", false, true],
	[["R54", "W01"], "和歌山", true, true],

	[["S46"], "りんくうタウン", true, true],
	[["S47"], "関西空港", false, true],
	
	[["W02"], "宮[284]?", false, false],
	[["W03"], "紀三井寺", false, false],
	[["W04"], "黒[285]?", false, false],
	[["W05"], "海[286]?", false, false],
	[["W06"], "冷水浦", false, false],
	[["W07"], "[287]?茂[288]?", false, false],
	[["W08"], "下津", false, false],
	[["W09"], "初島", false, false],
	[["W10"], "箕島", false, false],
	[["W11"], "紀伊宮[289]?", false, false],
	[["W12"], "藤並", false, false],
	[["W13"], "湯[290]?", false, false],
	[["W14"], "[291]?[292]ビー[293]?", false, false],
	[["W15"], "紀伊由良", false, false],
	[["W16"], "紀伊[294]?[295]?", false, false],
	[["W17"], "御[296]?", true, false],


	/*
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	[[""], "", false, true],
	*/
	[[""], "dummy"]
];







