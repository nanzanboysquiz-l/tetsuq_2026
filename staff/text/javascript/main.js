function main()
{
	setUnitLine(); ////発車標[1]?段数を設[2]?
}

//発車標[3]?段数を設[4]?
function setUnitLine() 
{
	//状態[5]?期化
	nowSta = 0;
	nowRunStatus = 0;
	
	//筐体を段数[6]?    ?
	writeUnitHTML();
	//入力部を段数[7]?[8]くる
	writeFormHTML();
	
	//[9]?[10]ォルトで[11]??タをセ[12]?[13]する
	setDefaultData();
	
	//入力を読み込む
	readStaList();
	readForm();
	updateStatus(0);
	
	//日本語と英語[14]?交互表示スター[15]?
	intervalTimeSet();
	
	//画像[16]?大きさ変更
	adjustSize();
}



//HTMLのLED部[17]??[18]? 1台[19]??[20]?[21]スプレイの表示を書き[22]?す[23]?[24]?
function writeUnitHTML()
{
	var out = "";
	out += "";
	out += "<div id='displayUnitDiv' style='position:relative; ' class='font_gothic' >";

	out += "<div id='flameDivA' style='position:absolute; cursor: move; ' onMousedown=dragOn('flameDivA') >"; //[25]?[26]体[27]?外枠DIV
	out += "      <div id='flameDiv0' style='position:absolute; background-color:#111; '>";
	out += "        <div id='flameDiv1' style='position:absolute; background-color:#000; '>";
	out += "";
	out += "";
	
	out += "        <img id='baseImg' src='img/base.png' alt='' style='position:absolute; ' />";
	out += "        <img id='carNumBaseImg' src='img/null.png' alt='' style='position:absolute; ' />";
	out += "        <img id='topMainBaseImg' src='img/null.png' alt='' style='position:absolute; ' />";
	out += "        <img id='topMainImg' src='img/null.png' alt='' style='position:absolute; ' />";
	out += "        <img id='topStaNumBaseImg' src='img/null.png' alt='' style='position:absolute; ' />";
	out += "        <img id='topStaNum1Img' src='img/null.png' alt='' style='position:absolute; ' />";
	out += "        <img id='topStaNum0Img' src='img/null.png' alt='' style='position:absolute; ' />";
	out += "        <img id='bottomMessageImg' src='img/other/last-thanks.png' alt='' style='position:absolute; z-index:2; ' />";
	
	//時刻以[28]?
	for(c=0 ; c<contentsList.length ; c++)
	{
		out += "  <img id='"+contentsList[c][0] + "Img' style='position:absolute; ' src='img/null.png' alt='' />";
	}
	//横[29]?
	for(i=0 ; i<mapStaNum+1 ; i++)
	{
		out += "        <img id='mapLineImg"+i+"' src='img/null.png' alt='' style='position:absolute; z-index:2; ' />";
	}
	//-------------路線図
	for(i=0 ; i<mapStaNum ; i++)
	{
		out += "<div id='mapStaDiv"+i+"' style='position:absolute; '>";
		//[30]?[31]
		out += "        <img id='mapStaNameImg"+i+"' src='img/null.png' alt='' style='position:absolute; ' />";
		//[32]?[33]号
		out += "        <img id='mapStaNumBaseImg"+i+"' src='img/null.png' alt='' style='position:absolute; ' />";
		out += "        <img id='mapStaNum1Img"+i+"' src='img/null.png' alt='' style='position:absolute; ' />";
		out += "        <img id='mapStaNum0Img"+i+"' src='img/null.png' alt='' style='position:absolute; ' />";
		//[34]??丸印
		out += "        <img id='mapCircleImg"+i+"' src='img/null.png' alt='' style='position:absolute; ' />";
		//乗換表示
		out += "        <img id='mapTranceferImg"+i+"' src='img/null.png' alt='' style='position:absolute; ' />";
		//乗換の縦[35]?
		out += "        <div id='mapTranceferLineADiv"+i+"' style='position:absolute; background-color:#000; z-index:1; '></div>";
		out += "        <div id='mapTranceferLineBDiv"+i+"' style='position:absolute; background-color:#000; z-index:1; '></div>";
		out += "</div>";
	}
	//[36]?間の走行中矢印[37]?[38]過のハイフン
	for(i=0 ; i<mapStaNum-1 ; i++)
	{
		out += "        <img id='mapSpanImg"+i+"' src='img/null.png' alt='' style='position:absolute; ' />";
	}
	out += "</div>";
	
	var id = "displayMainDiv";
	document.getElementById(id).innerHTML = out;
}


//制御するフォー[39]?のHTMLを[40]?[41]?
function writeFormHTML()
{
	var out = "";
	out += "";
	
	out += "<div id='' style=''>";
	
	//[42]?[43]び定義
	out += "<table>";
	out += "<tr>";
	out += "<td>[44]?[45]び設定　<br /><div style='font-size:50%;'>[46]?    ?<br />改行区[47]?[48]で列挙<br />通過[49]??「通過」と記述</div>";
	out += "";
	out += "";
	out += "";
	out += "<br />";
	out += "</td>";
	out += "<td style='font-size:50%;'>";
	out += "対応エリア??<br />JR京都[50]?(京都?[51]大阪)<br />JR神戸[52]?(大阪?[53]姫路)<br />山陽本[54]?(姫路?[55]相[56]?)<br />赤穂[57]?(相生～播州赤[58]?)<br />大阪環状[59]?(快速停車[60]??[61]?)<br />JR東西[62]?(京橋～尼[63]?)<br />直通快[64]?(尼崎～奈良)停車[65]??[66]?<br />阪和[67]?(天王寺?[68]鳳)<br /><br />路線図表示のみ対応[69]?<br />阪和[70]?(鳳?[71]和歌山)<br />関西空港[72]?(日根野～関西空港)<br />き[73]?くに[74]?(和歌山?[75]御[76]?)<br />学研[77]?市[78]?(木津?[79]京[80]?)<br />JR宝塚線[81]?[82]知山[83]?(尼崎～福知山)<br />湖西線新快速停車[84]?(山科～敦賀)<br />琵琶湖線新快速停車[85]?(山科～米[86]?)<br /><br />";
	out += "</td>";
	out += "<td>";
	out += "<textarea id='staListTextarea' rows='15' cols='30' style='font-size:16px;' ></textarea>　";
	out += "</td>";
	out += "<td>";
	out += "<input type='button' id='readStaListButtom' value='　[87]???[88]' onclick='ReverseStaList(); readStaList(); updateStatus(0);' /> ";
	out += "<input type='button' id='readStaListButtom' value='クリア' onclick='ClearStaList();' /> ";
	out += "<input type='button' id='mainButton1' value='サンプル設[89]?' onclick='randomSetFlag = true;  setUnitLine()' /> ";
	out += "<br />";
	out += "<br />";
	out += "<input type='button' id='readStaListButtom' value='　[90]?[91]み込み[92]?[93]' onclick='readStaList(); updateStatus(0);' />";
	out += "</td>";
	
	//out += "<td style='border-left:solid 1px #666; '>";
	//out += "</td>";
	out += "</tr>";
	out += "</table>";
	out += "";
	out += "";
	out += "<hr />";
	//out += "<div id='staListDiv' style='width:400px; height:250px; border:solid 1px #999; overflow:scroll; padding:10px; '>";
	//out += "</div>";
	
	//路線記号
	out += writeContentsInputHTML("lineSymbol");
	//種別
	out += writeContentsInputHTML("type");
	//号[94]?
	out += writeContentsInputHTML("carNo");
	
	//行き[95]?
	out += "　　　";
	out += "<input type='radio' name='r0' id='radio00' onChange='readForm(); updateLED(); ' checked><label for='radio00'>行[96]?通常表示</label> ";
	out += writeContentsInputHTML("destination");
	out += "<input type='radio' name='r0' id='radio01' onChange='readForm(); updateLED(); '><label for='radio01'>行[97]?拡大表示</label> ";
	out += " <select size='1' id='bigDestinationInput' onChange='readForm(); updateLED(); '>";
	for(j=0 ; j<staNumList.length - 1 ; j++)
	{
		out += "<option value=''>"+staNumList[j][1]+"</option>";
	}
	out += "</select> ";
	out += "";
	out += "";
	out += "";
	out += "";
	out += "";
	out += "";
	
	out += "<br style='clear:both;' />";
	out += "";
	
	var id = "inputFormDiv";
	document.getElementById(id).innerHTML = out;
}

//特定[98]?セレクト[99]?[100]?[101]スHTMLを[102]?力す[103]?
function writeContentsInputHTML(object)
{
	var out = "";
	for(c=0 ; c<contentsList.length ; c++)
	{
		if(contentsList[c][0] == object)
		{
			out += " <select size='1' id='"+contentsList[c][0]+"Input' style='' onChange='readForm(); updateLED(); '>";
			dataList = contentsList[c][1];
			for(j=0 ; j<dataList.length ; j++)
			{
				out += "<option value=''>"+dataList[j][0]+"</option>";
			}
			out += "</select> ";
			return out;
		}
	}
	return out;
}


//[104]?[105]ォルトでの列車データをセ[106]?[107]する、引数numに0[108]?ったら、ランダ[109]?[110]?1[111]?2[112]?3[113]?ったら[114]?[115]ォルトデータ挿入
function setDefaultData()
{
	//========ドロ[116]??ダウンリストにランダ[117]?な値をセ[118]?[119]する
	for(c=0 ; c<contentsList.length ; c++)
	{
		var id = contentsList[c][0]+"Input";
		var randomNum = Math.floor(Math.random() * (document.getElementById(id).options.length - 1));
		document.getElementById(id).options[randomNum].selected = true;
	}
	//行[120]?拡大表示の選択状態をランダ[121]?に
	var id = "bigDestinationInput";
	var randomNum = Math.floor(Math.random() * (staNumList.length - 1));
	document.getElementById(id).options[randomNum].selected = true;
	
	//[122]?[123]び(制限あ[124]?)
	if(randomSetFlag)
	{
		var randomNum = Math.floor(Math.random() * defaultDataList.length);
		var id = "staListTextarea";
		document.getElementById(id).innerHTML = defaultDataList[randomNum][0];
		
		//右向き左向きをランダ[125]?に
		var directionRandomNum = Math.floor(Math.random() * 2);
		var id = "directionInput";
		document.getElementById(id).options[directionRandomNum].selected = true;
		
		//半[126]?の確[127]?    ?[128]びを[129]?れ替える
		if(directionRandomNum != 0)
			ReverseStaList();
		
		setSelectBox("lineSymbol",  defaultDataList[randomNum][1][directionRandomNum][0]);
		setSelectBox("type",        defaultDataList[randomNum][1][directionRandomNum][1]);
		setSelectBox("destination", defaultDataList[randomNum][1][directionRandomNum][2]);
	}
	//[130]?[131]び(制限な[132]?)
	else
	{
		var out = "";
		//ランダ[133]?で20[134]?[135]出する
		for(i=0 ; i<20 ; i++)
		{
			var randomNum = Math.floor(Math.random() * (staNumList.length - 1));
			var staName = staNumList[randomNum][1];
			out += staName + "\n";
			
			if(i<19)
				out += "通過\n";
		}
		
		var id = "staListTextarea";
		document.getElementById(id).innerHTML = out;
		
		//右向き左向きをランダ[136]?に
		var randomNum = Math.floor(Math.random() * 2);
		var id = "directionInput";
		document.getElementById(id).options[randomNum].selected = true;
		
		//半[137]?の確[138]?    ?[139]びを[140]?れ替える
		if(randomNum != 0)
			ReverseStaList();
	}
	
}

//セレクト[141]?[142]?[143]スで[144]?[145]された[146]?[147]を選択された状態にする
//id リスト名   text 選択させた[148]???    ?
function setSelectBox(listName, text)
{
	//該当するリストを探[149]?
	for(i=0 ; i<contentsList.length ;i++)
	{
		var searchList = null;
		if(contentsList[i][0] == listName)
		{
			searchList = contentsList[i][1];
			break;
		}
	}
	if(searchList == null)
		return;
	
	//リスト[150]?中から該当する文字[151]?を探[152]?
	for(i=0 ; i<searchList.length ; i++)
	{
		if(searchList[i][0] == text)
		{
			//リスト[153]?状態を更新する
			var id = listName + "Input";
			document.getElementById(id).options[i].selected = true;
			return;
		}
	}
	//見つからなかった[154]?[155]合、何もせず終[156]?    ?
	return;
}

//[157]?[158]されたリスト[159]?中からランダ[160]?に要[161]?を選択す[162]?
function getRandomItem(chooseList, allList)
{
	var randomNum = Math.floor( Math.random() * chooseList.length);
	var ItemText = chooseList[randomNum];
	for(i=0 ; i<allList.length ; i++)
	{
		if(allList[i][0] == ItemText)
			return i;
	}
	return 0;
}



//[163]?[164]びを読み込み
function readStaList()
{
	nowSta = 0;
	nowRunStatus = 0; 
	
	//入って[165]?    ?   ?を取り[166]?[167]?
	var id = "staListTextarea";
	var inputText = document.getElementById(id).value;
	
	inputText = inputText.replace(/ヶ/g, 'ケ'); //置[168]?
	inputTextSplit = inputText.split("\n");
	
	stopStaList = []; //初期[169]?
	var staCount = 0;
	var errorMessage = "";
	for(i=0 ; i<inputTextSplit.length ; i++)
	{
		var textBuff = inputTextSplit[i];
		//空行[170]?スキ[171]??する
		if(textBuff == "")
		{
			continue;
		}
		//通過の場合[172]?スキ[173]??する
		if(textBuff == "通過")
		{
			continue;
		}
		//次の[174]??通過停車区[175]?[176]判[177]?
		if(i+1 < inputTextSplit.length && inputTextSplit[i+1] == "通過")
			var nextStopFlag = false;
		else
			var nextStopFlag = true;
		
		//存在する[178]?[179]かチェ[180]?[181]する
		var staNumBuff = "";
		for(j=0 ; j<staNumList.length ; j++)
		{
			if(textBuff == staNumList[j][1]) //[182]?[183]一致の場[184]?
			{
				/*
				//[185]?[186]号が[187]?[188]ある場合、どの[189]?[190]号なのか判定す[191]?
				//手前の[192]??[193]?[194]号頭[195]?字から判定す[196]?
				//手前[197]??定義がな[198]??[199]合、また一致する路線記号の[200]?[201]号がなかった[202]?[203]合[204]?1つ目の定義を採用する
				staNumBuff = staNumList[j][0][0]; //下[205]?処[206]?    ?[207]しなかった[208]?[209]合[210]?1つ目の定義が採用され[211]?
				if(staCount >= 1)
				{
					var beforeStaNum = stopStaList[staCount-1][0][0]; //手前[212]??[213]?[214]号
					for(k=0 ; k<staNumList[j][0].length ; k++)
					{
						if(beforeStaNum.charAt(0) == staNumList[j][0][k].charAt(0))//先[215]?[216]の記号が一致する場合、それを採用
						{
							staNumBuff = staNumList[j][0][k];
							break;
						}
					}
					
				}
				*/
				staNumBuff = staNumList[j][0];
				staNumExistBuff = staNumList[j][3]; //[217]?[218]号表示可否
				break;
			}
			for(k=0 ; k<staNumList[j][0].length ; k++)
			{
				if(textBuff == staNumList[j][0][k]) //[219]?[220]号一致の場[221]?
				{
					staNumBuff = staNumList[j][0][k];
					break;
				}
			}
		}
		//[222]?[223]が見つからなかった[224]?[225]合、エラーメ[226]?[227]ージに追[228]?
		if(staNumBuff == "")
		{
			errorMessage += (i+1)+"行目[229]?"+textBuff+"」　\n";
		}
		else
		{
			//[230]?[231]が見つかった[232]?[233]合、結果を[234]?列に格納　[235]?[236]号
			stopStaList[staCount] = [null, nextStopFlag, staNumExistBuff, staNumBuff];
			staCount++;
		}
	}
	//入力[237]?    ?2[238]?[239]満の場合、ここで終[240]?
	if(stopStaList.length < 2 )
	{
		alert("【エラー】[241]?    ?2[242]?[243]上設定してください[244]?");
		return;
	}
	
	
	//エラーの場合[245]?ここでエラーメ[246]?[247]ージ出[248]?
	if(errorMessage != "")
	{
		alert("【エラー】次の[249]?[250]また[251]?[252]?[253]号が見つかりませんでした?[254]\n"+errorMessage);
	}
	
	//[255]?[256]ある[257]?[258]号から1つ抽出する-------------
	//1[259]?[260]が[261]?[262]ある場合[263]?2[264]?[265]と比[266]?して同じのがあれ[267]?採用する
	if(stopStaList[0][3].length == 1)
		stopStaList[0][0] = stopStaList[0][3][0];
	else
	{
		//見つからなかったときに備え、保険で1つ目の値を[268]?れておく
		stopStaList[0][0] = stopStaList[0][3][0];
		
		for(i=0 ; i<stopStaList[0][3].length ; i++)
		{
			var breakFlag = false;
			for(j=0 ; j<stopStaList[1][3].length ; j++)
			{
				var staNumSymbol0 = stopStaList[0][3][i].charAt(0);
				var staNumSymbol1 = stopStaList[1][3][j].charAt(0);
				if(staNumSymbol0 == staNumSymbol1)
				{
					stopStaList[0][0] = stopStaList[0][3][i];
					breakFlag = true;
					break;
				}
			}
			if(breakFlag)
				break;
		}
	}
	
	//2[269]?[270]以降[271]?、手前[272]?[273]比[274]?しながら決定す[275]?
	for(i=0 ; i<stopStaList.length-1 ; i++)
	{
		var staNumList0 = stopStaList[i+0][3];
		var staNumList1 = stopStaList[i+1][3];
		
		//[276]?[277]号[278]?1つしかなければ、それを採用
		if(staNumList1.length == 1)
		{
			stopStaList[i+1][0] = staNumList1[0];
			continue;
		}
		
		//[279]?[280]ある場合[281]?1つ手前の[282]?[283]号とを比[284]?し、[285]?通[286]?路線記号があれ[287]?、それを採用
		//見つからなかったときに備え、保険で1つ目の値を[288]?れておく
		stopStaList[i+1][0] = stopStaList[i+1][3][0];
		
		for(j=0 ; j<stopStaList[i][3].length ; j++)
		{
			var breakFlag = false;
			for(k=0 ; k<stopStaList[i+1][3].length ; k++)
			{
				var staNumSymbol0 = stopStaList[i+0][3][j].charAt(0);
				var staNumSymbol1 = stopStaList[i+1][3][k].charAt(0);
				if(staNumSymbol0 == staNumSymbol1)
				{
					stopStaList[i+1][0] = stopStaList[i+1][3][k];
					breakFlag = true;
					break;
				}
			}
			if(breakFlag)
				break;
		}
	}
	
	/*
	//読み込み結果を書き[289]?[290]?-----------------
	var out = "";
	out += "<table border='0' cellpadding='0' cellspacing='0'>";
	var sta;
	for(sta=0 ; sta<stopStaList.length ; sta++)
	{
		//通停区[291]?[292]読み込み、文字色を決[293]?
		var color = "#000";
		
		out += "<tr style='color:"+color+"; font-size:80%; '>";
		out += "<td id='runStatusTd"+sta+"'></td>"; //状態表示用セル
		out += "<td>[";
		out += stopStaList[sta][0]; //[294]?[295]号
		out += "]&nbsp;</td>";
		out += "<td>";
		out += getStaName(stopStaList[sta][0]); //[296]?[297]
		out += "</td>";
		out += "</tr>";
	}
	out += "</table>";
	
	var id = "staListDiv";
	document.getElementById(id).innerHTML = out;
	*/
	
	/*
	//通過[298]?[299]除[300]?[301]リストを作[302]?
	stopStaList = [];
	for(i=0 ; i<inputStaList.length ; i++)
	{
		if(inputStaList[i][1]) //停車[303]??場合、詰替えを行う
		{
			//次の[304]?[305]通過かど[306]?[307]を判[308]?
			if(i+1 < inputStaList.length && !inputStaList[i+1][1])
				var next = false;
			else
				var next = true;
			
			var buff = inputStaList[i]
			buff.push(next); //次[309]??停車区[310]?[311]追[312]?
			
			stopStaList.push(buff);
		}
	}
	*/
}

var stopStaList = []; //通過[313]?[314]除[315]?[316]リス[317]?

var inputStaList = [];

//[318]?[319]号から[320]?[321]を取[322]?
function getStaName(num)
{
	for(sta=0 ; sta<staNumList.length ; sta++)
	{
		for(i=0 ; i<staNumList[sta][0].length ; i++)
		{
			if(num == staNumList[sta][0][i])
				return staNumList[sta][1];
		}
	}
	return ""; //見つからなかった[323]?[324]合[325]?空[326]?[327]返す
}





var formInputData = new Array();
var bigDestinationFlag = false;
var bigDestination = 0;

//フォー[328]?から入力を読み込む
function readForm()
{	
	//================ドロ[329]??ダウンリストから選択状態を読み込み
	for(c=0 ; c<contentsList.length ; c++)
	{
		var id = contentsList[c][0] + "Input";
		formInputData[c] = document.getElementById(id).selectedIndex;
	}
	//右向きか左向き[330]?
	var id = "directionInput";
	direction = document.getElementById(id).selectedIndex;
	//行[331]?通常表示か拡大表示[332]?
	if(document.getElementById("radio00").checked)
		bigDestinationFlag = false;
	else
		bigDestinationFlag = true;
	//行[333]?拡大表示の選択状[334]?
	var id = "bigDestinationInput";
	bigDestinationIndex = document.getElementById(id).selectedIndex;
	
}
var direction = 0;
var directionText = ["right", "left"];



//LEDの画像を変更する
var typeUpdateLEDCount = 0;
var destinationUpdateLEDCount = 0;
var cycle = 0;
function updateLED()
{
	cycle = updateLEDCount % cycleSum;
	
	nonHira = [0, 0, 2, 3, 4]; //漢字[335]?ひらがなが[336]?通画像[337]?パターン nonHira[cycle]
	jpEn = [0, 0, 1, 1, 1]; //路線図用画像[338]?パターン jpEn[cycle]
	
	//次の[339]?[340]終着かど[341]?[342]判別
	if(stopStaList.length - 2 == nowSta && nowRunStatus == 1)
		var nextFinal = true;
	else if(stopStaList.length - 2 == nowSta && nowRunStatus == 2)
		var nextFinal = true;
	else if(stopStaList.length - 1 == nowSta && nowRunStatus == 0)
		var nextFinal = true;
	else
		var nextFinal = false;
	
	//================画像を変更する   停車[343]?[344]のリスト　stopStaList
	for(c=0 ; c<contentsList.length ; c++)
	{
		var index = formInputData[c];
		var listData = contentsList[c][1];
		
		//路線記号は[345]?-cycle」つけな[346]?[347]路線記号以外[348]?つける
		if(contentsList[c][0] == "lineSymbol" || contentsList[c][0] == "carNo")
			var src = "img/" + listData[index][1] + ".png";
		else if(contentsList[c][0] == "type" || contentsList[c][0] == "destination") //種別と行き先[349]?ひらがなな[350]?
			var src = "img/" + listData[index][1] + "-" + nonHira[cycle] + ".png";
		else
			var src = "img/" + listData[index][1] + "-" + cycle + ".png";
		
		//行[351]?拡大表示中の場合、行[352]?は表示しな[353]?
		if(bigDestinationFlag && contentsList[c][0] == "destination")
			var src = "img/null.png";
		
		//次の[354]?[355]終着[356]??場合、号車番号以外[357]?表示しな[358]?
		if(nextFinal && contentsList[c][0] != "carNo")
			var src = "img/null.png";
		
		var id = contentsList[c][0] + "Img";
		document.getElementById(id).src = src;
	}
	//号数のベ[359]?ス画[360]?
	var id = "carNumBaseImg";
	document.getElementById(id).src = "img/carNo/base-" + nonHira[cycle] + ".png";
	
	//表示する[361]?-----------
	//行[362]?拡大表示中の場合、その行[363]?を表示する
	if(bigDestinationFlag)
	{
		var dispSta = staNumList[bigDestinationIndex][0][0]; //自[364]?[365]表示
		staNumExist = false; //[366]?[367]号の有無
	}
	//それ以外[368]?場合、次の[369]?[370]表示する
	else if(nowRunStatus == 0)
	{
		var dispSta = stopStaList[nowSta][0]; //自[371]?[372]表示
		staNumExist = stopStaList[nowSta][2]; //[373]?[374]号の有無
	}
	else
	{
		var dispSta = stopStaList[nowSta+1][0]; //次の[375]?[376]表示
		staNumExist = stopStaList[nowSta+1][2]; //[377]?[378]号の有無
	}
	
	
	
	
	
	//上[379]?のメイン表示-------------
	if(bigDestinationFlag)
	{
		//行[380]?拡大表示中の場合、「ゆき」「for[381]?
		var src = "img/topMain/base-destination-" + nonHira[cycle] + ".png";
	}
	else if(stopStaList.length - 2 == nowSta && nowRunStatus == 1)
	{
		//つぎ[382]?終点、Next Terminal
		if(cycle == 0 || cycle == 1)
			var src = "img/topMain/base-final1-0.png";
		if(cycle == 2)
			var src = "img/topMain/base-final1-2.png";
	}
	else if(stopStaList.length - 2 == nowSta && nowRunStatus == 2)
	{
		//まもなく終点、Next Terminal
		if(cycle == 0 || cycle == 1)
			var src = "img/topMain/base-final2-0.png";
		if(cycle == 2)
			var src = "img/topMain/base-final1-2.png"; //2-2の代わりに1-2
	}
	else if(stopStaList.length - 1 == nowSta && nowRunStatus == 0)
	{
		//終点、Terminal
		if(cycle == 0 || cycle == 1)
			var src = "img/topMain/base-final0-0.png";
		if(cycle == 2)
			var src = "img/topMain/base-final0-2.png";
	}
	else
		var src = "img/topMain/base"+nowRunStatus+"-" + nonHira[cycle] + ".png";
	
	var id = "topMainBaseImg";
	document.getElementById(id).src = src;
	
	
	
	
	var id = "topMainImg";
	document.getElementById(id).src = "img/topMain/"+getFirstStaNum(dispSta)+"-" + cycle + ".png";
	if(staNumExist && !bigDestinationFlag)
	{
		//[383]?[384]号ベ[385]?ス
		var dispStaSymbol = dispSta.charAt(0);
		var id = "topStaNumBaseImg";
		document.getElementById(id).src = "img/staNum/"+dispStaSymbol+".png";
		//[386]?[387]号の[388]?字色判[389]?
		var staNumColor = getStaNumColor(dispStaSymbol);
		//[390]?[391]号 Wき[392]?くに線以外[393]?表示する
		if(dispStaSymbol == "W")
		{
			var id = "topStaNum1Img";
			document.getElementById(id).src = "img/null.png";
			var id = "topStaNum0Img";
			document.getElementById(id).src = "img/null.png";
		}
		else
		{
			var dispStaNum = dispSta.slice(1); //先[394]?[395]1[396]?字を取り除[397]?
			var id = "topStaNum1Img";
			document.getElementById(id).src = "img/num-"+staNumColor+"/" + digitDivision(dispStaNum,   10, 0) + ".png";
			var id = "topStaNum0Img";
			document.getElementById(id).src = "img/num-"+staNumColor+"/" + digitDivision(dispStaNum,   1, 0) + ".png";
		}
	}
	else
	{
		//[398]?[399]号なし[400]?[401]?[402]また[403]?行[404]?拡大表示中の場合[405]?表示しな[406]?
		//[407]?[408]号ベ[409]?ス
		var id = "topStaNumBaseImg";
		document.getElementById(id).src = "img/null.png";
		//[410]?[411]号
		var id = "topStaNum1Img";
		document.getElementById(id).src = "img/null.png";
		var id = "topStaNum0Img";
		document.getElementById(id).src = "img/null.png";
	}
	
	
	//-------------路線図
	//停車[412]?[413]8[414]?[415]での場合、[416]?[417]?[418]右詰めで表示する   2  2-8 = -6
	//停車[419]?[420]9[421]?[422]上で、[423]?[424]?[425]降[426]?[427]?    ?7[428]?[429]上ある[430]?[431]合、[432]?[433]?[434]?7[435]?
	//停車[436]?[437]9[438]?[439]上で、[440]?[441]?[442]降[443]?[444]?    ?7[445]?[446]満の場合、終点側から数えた8[447]??を表示する
	if(stopStaList.length <= mapStaNum)
		var mapStart = stopStaList.length - mapStaNum;
	else if(stopStaList.length - nowSta >= mapStaNum)
		var mapStart = nowSta;
	else
		var mapStart = stopStaList.length - mapStaNum;
	
	for(i=0 ; i<mapStaNum ; i++)
	{
		//起点に達して[448]?    ??[449]合スキ[450]??
		if(mapStart+i < 0)
		{
			continue;
		}
		
		//------------------[451]?[452]
		var staNumBuff = stopStaList[mapStart+i][0];
		staNumBuff = getFirstStaNum(staNumBuff); //尼崎A49,H49,G49のような場合で、H49が[453]?力された場[454]?A49に変換する
		var src = "img/mapSta/"+staNumBuff+"-"+jpEn[cycle]+".png";
		var id = "mapStaNameImg"+i;
		document.getElementById(id).src = src;
		
		//そ[455]?[456]?[457]通り過ぎたかど[458]?[459]の判定　通り過ぎた[460]?[461]合[462]?灰色表示
		if(mapStart+i >= nowSta && nowRunStatus == 0) //停車中の場合、イコールも含める
		{
			var passFlag = false;
			var opacity = 1.0; //[463]?[464]の[465]?字色は黒色
			var srcAdd = "";
		}
		else if(mapStart+i > nowSta && nowRunStatus > 0) //走行中の場合、イコール含めな[466]?
		{
			var passFlag = false;
			var opacity = 1.0; //[467]?[468]の[469]?字色は黒色
			var srcAdd = "";
		}
		else
		{
			var passFlag = true;
			var opacity = 0.5; //[470]?[471]の[472]?字色は灰色
			var srcAdd = "-gray"; //[473]?[474]号を[475]?色にする
		}
		
		//[476]?[477]の透過[478]?
		var id = "mapStaNameImg"+i;
		document.getElementById(id).style.opacity = opacity;
		
		//[479]?[480]号の有無
		var staNumSymbol = stopStaList[mapStart+i][0].charAt(0);
		staNumExist = stopStaList[mapStart+i][2];
		if(staNumExist)
		{
			//[481]?[482]号
			var src = "img/mapSta/"+staNumSymbol+""+srcAdd+".png";
			var id = "mapStaNumBaseImg"+i;
			document.getElementById(id).src = src;
			//[483]?[484]号の[485]?字色判[486]?
			var staNumColor = getStaNumColor(staNumSymbol);
			//既に通り過ぎた[487]??場合[488]?無条件で白[489]?字とする
			if(passFlag)
				var staNumColor = "w";
			
			//[490]?[491]号
			var staNumBuff = stopStaList[mapStart+i][0].slice(1); //先[492]?[493]1[494]?字を取り除[495]?
			var id = "mapStaNum1Img"+i;
			document.getElementById(id).src = "img/num-"+staNumColor+"/" + digitDivision(staNumBuff,   10, 0) + ".png";
			var id = "mapStaNum0Img"+i;
			document.getElementById(id).src = "img/num-"+staNumColor+"/" + digitDivision(staNumBuff,   1, 0) + ".png";
		}
		else
		{
			//[496]?[497]号なし[498]?[499]?[500]は[501]?[502]号を表示しな[503]?
			var id = "mapStaNumBaseImg"+i;
			document.getElementById(id).src = "img/null.png";
			var id = "mapStaNum1Img"+i;
			document.getElementById(id).src = "img/null.png";
			var id = "mapStaNum0Img"+i;
			document.getElementById(id).src = "img/null.png";
		}
		
		//[504]??丸印
		//停車中の場合、赤色
		//通り過ぎた[505]??場合、[506]?色
		//それ以外[507]?白丸
		if(mapStart+i == nowSta && nowRunStatus == 0)
			var src = "img/map/circle-1.png";
		else if(mapStart+i <= nowSta)
			var src = "img/map/circle-2.png";
		else
			var src = "img/map/circle-0.png";
		
		 //丸印
		var id = "mapCircleImg"+i;
		document.getElementById(id).src = src;

		
		
		//前[508]?   ?[509]?[510]での横[511]?------------------------
		//自[512]??ラインカラーに合わせる
		var src = "img/map/middle-"+staNumSymbol+".png";
		var id = "mapLineImg"+i;
		document.getElementById(id).src = src;
		
		//自[513]?[514]次[515]??右矢印[516]?[517]過のハイフン
		if(i < mapStaNum-1) //最後[518]?[519]??処[520]?[521]しな[522]?
		{
			//走行中の場合、矢印
			if(mapStart+i == nowSta && (nowRunStatus == 1 || nowRunStatus == 2) )
				var src = "img/map/span-"+directionText[direction]+".png";
			//ま[523]?通過して[524]?    ?[525]間かつ自[526]?[527]次[528]?[529]通過の場合、ハイフン
			else if(!stopStaList[mapStart+i][1] && mapStart+i >= nowSta)
				var src = "img/map/span-pass.png";
			else
				var src = "img/null.png";
			
			var id = "mapSpanImg"+i;
			document.getElementById(id).src = src;
		}
	}
	
	
	
	for(i=0 ; i<mapStaNum ; i++)
	{
		//乗換の縦棒、乗換表示
		if(mapStart+i < 0
			|| mapStart+i < nowSta && nowRunStatus == 0
			|| mapStart+i <= nowSta && nowRunStatus == 1
			|| mapStart+i <= nowSta && nowRunStatus == 2 )
		{
			//起点に達して[530]?    ??[531]合、また[532]?通り過ぎた[533]?[534]合[535]?    ?
			var zIndex = -1;
			var src = "img/null.png";
		}
		else if(getTrancefarFlag(stopStaList[mapStart+i][0]))
		{
			var zIndex = 1;
			var staNumBuff = stopStaList[mapStart+i][0];
			var src = "img/transfer/"+staNumBuff+"-"+jpEn[cycle]+".jpg";
		}
		else
		{
			var zIndex = -1;
			var src = "img/null.png";
		}
		var id = "mapTranceferLineADiv"+i;
		document.getElementById(id).style.zIndex = zIndex;
		var id = "mapTranceferLineBDiv"+i;
		document.getElementById(id).style.zIndex = zIndex;
		var id = "mapTranceferImg"+i;
		document.getElementById(id).src = src;
	}

	
	//横棒[536]?最後[537]?とんがった部[538]?
	//次の[539]??ラインカラーが読み取れる[540]?[541]合[542]?次の[543]??ラインカラー[544]?
	//読み取れな[545]??[546]合[547]?最後[548]?[549]??ラインカラーに合わせる
	if(mapStart+mapStaNum < stopStaList.length)
		var staNumSymbol = stopStaList[mapStart+mapStaNum][0].charAt(0);
	
	//表示する停車[550]?    ?8[551]?[552]上ある[553]?[554]合[555]?、常に8番目の[556]?
	//8[557]?[558]満の場合[559]?一番右端の[560]??ところを矢印にする
	//if(stopStaList.length >= mapStaNum)
	//	var arrowPosi = mapStaNum;
	//else
		var arrowPosi = mapStaNum; //最後[561]?尖った矢印は[562]?[563]最後に来[564]?
	
	var src = "img/map/"+directionText[direction]+"-"+staNumSymbol+".png";
	var id = "mapLineImg"+arrowPosi;
	document.getElementById(id).src = src;
	
	//------------------表示するか隠すかの設定　表示しな[565]?[566]間[567]?パ[568]?[569]??[570]?[571]?
	for(i=0 ; i<mapStaNum ; i++)
	{
		if(mapStart+i < 0)
			var zIndex = -1;//起点に達して[572]?    ??[573]合隠[574]?
		else
			var zIndex = 1;//通常表示
		var id = "mapStaNameImg"+i; //[575]?[576]
		document.getElementById(id).style.zIndex = zIndex;
		var id = "mapStaNumBaseImg"+i; //[577]?[578]号
		document.getElementById(id).style.zIndex = zIndex;
		var id = "mapStaNum1Img"+i; //[579]?[580]号
		document.getElementById(id).style.zIndex = zIndex;
		var id = "mapStaNum0Img"+i; //[581]?[582]号
		document.getElementById(id).style.zIndex = zIndex;
		var id = "mapCircleImg"+i; //丸印
		document.getElementById(id).style.zIndex = zIndex;
		//var id = "mapTranceferLineADiv"+i; //乗換の縦[583]?
		//document.getElementById(id).style.zIndex = zIndex;
		//var id = "mapTranceferLineBDiv"+i; //乗換の縦[584]?
		//document.getElementById(id).style.zIndex = zIndex;
		//var id = "mapTranceferImg"+i; //乗換案[585]?
		//document.getElementById(id).style.zIndex = zIndex;
		
		//[586]?間の記号は、末端のみ処[587]?省略
		if(i == mapStaNum-1)
			continue;
		var id = "mapSpanImg"+i; //[588]?間の記号
		document.getElementById(id).style.zIndex = zIndex;
	}

	
	//横棒[589]?表示可否設[590]?
	for(i=0 ; i<mapStaNum+1 ; i++)
	{
		if(mapStart+i < 0)
			var zIndex = -1;//起点に達して[591]?    ??[592]合隠[593]?
		else
			var zIndex = 1;//表示する
		var id = "mapLineImg"+i; //横[594]?
		document.getElementById(id).style.zIndex = zIndex;
	}
	
	//終着[595]?[596]到着した場合、終着[597]?[598]の表示を[599]?[600]?
	if(stopStaList.length - 1 == nowSta)
		var src = "img/other/last-thanks.png";
	else
		var src = "img/null.png";
	var id = "bottomMessageImg";
	document.getElementById(id).src = src;

}

//尼崎A49,H49,G49のような場合で、H49が[601]?力された場[602]?A49に変換する
function getFirstStaNum(staNum)
{
	var i, j;
	for(i=0 ; i<staNumList.length ; i++)
	{
		for(j=0 ; j<staNumList[i][0].length ; j++)
		{
			if(staNum == staNumList[i][0][j])
			{
				return staNumList[i][0][0]; //先[603]?[604]の[605]?[606]号を返す
			}
		}
	}
	return ""; //見つからなかった[607]?   ?
}

//[608]?[609]号から乗換の有無を検索する
function getTrancefarFlag(staNum)
{
	var i, j;
	for(i=0 ; i<staNumList.length ; i++)
	{
		for(j=0 ; j<staNumList[i][0].length ; j++)
		{
			if(staNum == staNumList[i][0][j])
			{
				return staNumList[i][2];
			}
		}
	}
	return false; //見つからなかった[610]?   ?
}


//言語表示[611]?[612]替え間隔[613]?設[614]?
var updateLEDCount = 0;
function intervalTimeSet()
{
	//表示更新
	updateLED();
	
	//次の更新設[615]?
	var nextTime = document.getElementById("intervalInput0").value;
	
	nextTime = inputTextNumCheck(nextTime, 1); //入力された値のチェ[616]?[617]
	nextTime *= 1000;
	
	clearTimeout(LEDUpdateTimeout);
	LEDUpdateTimeout = setTimeout("updateLEDCount++; intervalTimeSet();", nextTime);
}
var LEDUpdateTimeout;

//画像[618]?大きさ変更
function adjustSize()
{
	if(zoom < 0.005)
		zoom = 0.005;
		
	////////筐体関[619]?
	var id = "displayUnitDiv";
	//document.getElementById(id).style.left = zoom*10 + "px";
	//document.getElementById(id).style.top = zoom*10 + "px";
	//document.getElementById(id).style.width = zoom*3600 + "px";
	document.getElementById(id).style.height = zoom*2700 + "px";
	
	////////筐体関[620]?
	var id = "flameDivA";
	document.getElementById(id).style.left  = zoom * 50 + "px";
	document.getElementById(id).style.top   = zoom * 5 + "px";
	document.getElementById(id).style.width = zoom * 3650 + "px";
	//document.getElementById(id).style.height = zoom*1250 + "px";
	
	//外枠、筐体[621]?DIV、[622]?・・
	for(c = 0 ; c < imgData.length ; c++)
	{
		var id = imgData[c][0];
		document.getElementById(id).style.left   = zoom * imgData[c][1] + "px";
		document.getElementById(id).style.top    = zoom * imgData[c][2] + "px";
		document.getElementById(id).style.width  = zoom * imgData[c][3] + "px";
		document.getElementById(id).style.height = zoom * imgData[c][4] + "px";
	}
	
	//右向きか左向きかによって位置が変わるもの
	for(c = 0 ; c < imgDataMirror.length ; c++)
	{
		var id = imgDataMirror[c][0];
		document.getElementById(id).style.left   = zoom * imgDataMirror[c][1][direction] + "px";
		document.getElementById(id).style.top    = zoom * imgDataMirror[c][2] + "px";
		document.getElementById(id).style.width  = zoom * imgDataMirror[c][3] + "px";
		document.getElementById(id).style.height = zoom * imgDataMirror[c][4] + "px";
	}
	
	//路線記号、種別、行き先[623]?・・
	for(lineContents = 0 ; lineContents < contentsList.length ; lineContents++)
	{
		var id =contentsList[lineContents][0] + "Img";
		document.getElementById(id).style.left   = zoom * contentsList[lineContents][2][0] + "px";
		document.getElementById(id).style.top    = zoom * contentsList[lineContents][2][1] + "px";
		document.getElementById(id).style.width  = zoom * contentsList[lineContents][2][2] + "px";
		document.getElementById(id).style.height = zoom * contentsList[lineContents][2][3] + "px";
	}
}

//[624]?材集に全てのパ[625]?[626]?[627]表示する
function readAllPartsImg()
{
	var langText = ["ja", "en"];

	var out = "";
	out += "";
	out += "<div>";
	//out += "<div style='background-color:#000'>";

	//路線記号
	for(i=0 ; i<lineSymbolList.length ; i++)
	{
		out += "<img src='img/"+lineSymbolList[i][1]+".png' alt='' height='30' style='background-color:#000' /> ";
	}
	out += "<br /> ";
	
	//種別
	for(i=0 ; i<typeList.length ; i++)
	{
		out += "<img src='img/"+typeList[i][1]+"-0.png' alt='' height='60' style='background-color:#000' /> ";
		out += "<img src='img/"+typeList[i][1]+"-2.png' alt='' height='60' style='background-color:#000' /> ";
	}
	out += "<br /> ";
	//行き[628]?
	for(i=0 ; i<destinationList.length ; i++)
	{
		out += "<img src='img/"+destinationList[i][1]+"-0.png' alt='' height='25' style='background-color:#000' /> ";
		out += "<img src='img/"+destinationList[i][1]+"-2.png' alt='' height='25' style='background-color:#000' /> ";
	}
	out += "<br /> ";
	//号[629]?
	for(i=0 ; i<carNoList.length ; i++)
	{
		out += "<img src='img/"+carNoList[i][1]+".png' alt='' height='60' style='background-color:#000' /> ";
	}
	out += "<br /> ";
	
	//[630]?[631]
	for(i=0 ; i<staNumList.length ; i++)
	{
		out += "<img src='img/mapSta/"+staNumList[i][0][0]+"-0.png' alt='' height='80' style='background-color:#fff' /> ";
		out += "<img src='img/mapSta/"+staNumList[i][0][0]+"-1.png' alt='' height='80' style='background-color:#fff' /> ";
		out += "<img src='img/mapSta/"+staNumList[i][0][0]+"-2.png' alt='' height='80' style='background-color:#fff' /> ";
	}
	out += "<br /> ";
	//[632]?[633]
	for(i=0 ; i<staNumList.length ; i++)
	{
		out += "<img src='img/topMain/"+staNumList[i][0][0]+"-0.png' alt='' height='30' style='background-color:#000' /> ";
		out += "<img src='img/topMain/"+staNumList[i][0][0]+"-1.png' alt='' height='30' style='background-color:#000' /> ";
		out += "<img src='img/topMain/"+staNumList[i][0][0]+"-2.png' alt='' height='30' style='background-color:#000' /> ";
	}
	out += "<br /> ";
	
	
	//数[634]?
	for(i=0 ; i<10 ; i++)
	{
		out += "<img src='img/num-w/"+i+".png' alt='' height='80' style='background-color:#000' /> ";
	}
	//out += "<img src='img/unit-flame.png' alt='' width='500' style='background-color:#fff' />";
	out += "<br />";

	document.getElementById("partsListDiv").innerHTML = out;
}


//列車状態更新
var nowSta = 0; //在線中の[635]?
var nowRunStatus = 0; //走行状態　0:停車中　1:発車　2:次[636]?[637]着[638]?
function updateStatus(add)
{
	//行[639]?拡大表示中の場合[640]?強制[641]?[642]もとに戻[643]?
	document.getElementById("radio00").checked = true;
	readForm();
	
	nowRunStatus += add;
	if(nowRunStatus >= 3)
	{
		nowSta++; //次[644]?[645]到着
		nowRunStatus -= 3;
	}
	else if(nowRunStatus < 0)
	{
		nowSta--; //前[646]?[647]行中に戻[648]?
		nowRunStatus += 3;
	}
	
	//始発[649]?より前の状態に遷移して[650]?    ?[651]チェ[652]?[653]
	if(nowSta < 0)
	{
		//alert("始発[654]?[655]車中より前[656]?状態に遷移できません[657]?");
		nowSta = 0;
		nowRunStatus = 0;
	}
	
	//終着[658]?より次の状態に遷移して[659]?    ?[660]チェ[661]?[662]
	if(nowSta > stopStaList.length-1 || nowSta == stopStaList.length-1 && (nowRunStatus == 1 || nowRunStatus == 2))
	{
		//alert("終着[663]?[664]着より次の状態に遷移できません[665]?");
		nowSta = stopStaList.length-1;
		nowRunStatus = 0;
	}
	
	/*
	//画面上[666]?[667]?一覧表示を更新
	for(sta=0 ; sta<inputStaList.length ; sta++)
	{
		var id = "runStatusTd" + sta;
		document.getElementById(id).innerHTML = "　　　　　　"; //一旦全て初期[668]?
		document.getElementById(id).style.backgroundColor = "#fff"; //一旦全て初期[669]?
	}
	if(nowRunStatus == 0)
		var nowStaBuff = nowSta;
	else
		var nowStaBuff = nowSta + 1;
	
	var textList = ["▼ただ[670]?[671]", "▼つぎ[672]?", "▼まもな[673]?"];
	
	var id = "runStatusTd" + nowStaBuff;
	document.getElementById(id).innerHTML = textList[nowRunStatus];
		document.getElementById(id).style.backgroundColor = "#fcc";
	*/
	
	//表示状態を日本語に戻[674]?
	updateLEDCount = 0;
	intervalTimeSet();
}

//入力されて[675]?    ?[676]リストを[677]???[678]する
function ReverseStaList()
{
	//入って[679]?    ?   ?を取り[680]?[681]?
	var id = "staListTextarea";
	var inputText = document.getElementById(id).value;
	
	inputTextSplit = inputText.split("\n");
	
	//末尾が空の場合、末尾の要[682]?を取り除[683]?
	if(inputTextSplit[inputTextSplit.length-1] == "")
		inputTextSplit.pop()
	
	var out = "";
	for(i=inputTextSplit.length-1 ; 0<=i ; i--)
	{
		out += inputTextSplit[i]+"\n";
	}
	
	var id = "staListTextarea";
	document.getElementById(id).value = out;
}

//入力されて[684]?    ?[685]リストをクリアする
function ClearStaList()
{
	var id = "staListTextarea";
	document.getElementById(id).value = "";
}

//路線記号から[686]?字色を取[687]?
function getStaNumColor(text)
{
	var i;
	for(i=0 ; i<lineSymbolList.length ; i++)
	{
		if(lineSymbolList[i][0] == text)
			return lineSymbolList[i][2];
	}
	return "w"; //見つからな[688]?[689]き[690]?白で返す
}

//停車[691]??入力サンプルを[692]?[693]?
function writeStopStaSampleDiv()
{
	var out = "";
	out += "";
	out += "";
	for(i=0 ; i<defaultDataList.length ; i++)
	{
		out += "<textarea id='staListTextarea' rows='8' cols='20' style='font-size:14px;' >"+defaultDataList[i][0]+"</textarea> ";
	}
	out += "";
	out += "";

	var id = "stopStaSampleDiv";
	document.getElementById(id).innerHTML = out;
}