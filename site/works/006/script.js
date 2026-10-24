const jobs={
office:{name:"一般事務",male:34,female:27,category:"事務・管理"},accounting:{name:"経理",male:39,female:33,category:"事務・管理"},hr:{name:"人事",male:42,female:35,category:"事務・管理"},manager:{name:"管理職",male:55,female:43,category:"事務・管理"},secretary:{name:"秘書",male:36,female:29,category:"事務・管理"},
it_engineer:{name:"ITエンジニア",male:45,female:38,category:"IT・技術"},system_engineer:{name:"システムエンジニア",male:47,female:39,category:"IT・技術"},programmer:{name:"プログラマー",male:43,female:36,category:"IT・技術"},web_designer:{name:"Webデザイナー",male:38,female:32,category:"IT・技術"},data_scientist:{name:"データサイエンティスト",male:52,female:44,category:"IT・技術"},researcher:{name:"研究者",male:46,female:39,category:"IT・技術"},architect:{name:"建築士",male:44,female:36,category:"IT・技術"},
doctor:{name:"医師",male:95,female:82,category:"医療・福祉"},dentist:{name:"歯科医師",male:78,female:64,category:"医療・福祉"},pharmacist:{name:"薬剤師",male:47,female:40,category:"医療・福祉"},nurse:{name:"看護師",male:34,female:29,category:"医療・福祉"},radiologist:{name:"診療放射線技師",male:40,female:35,category:"医療・福祉"},clinical_technologist:{name:"臨床検査技師",male:39,female:34,category:"医療・福祉"},physical_therapist:{name:"理学療法士",male:35,female:32,category:"医療・福祉"},care_worker:{name:"介護職",male:30,female:28,category:"医療・福祉"},social_worker:{name:"社会福祉士",male:33,female:30,category:"医療・福祉"},nursery_teacher:{name:"保育士",male:29,female:27,category:"医療・福祉"},
teacher:{name:"学校教員",male:44,female:41,category:"教育・公務"},private_high_teacher:{name:"私立高校教員",male:43,female:38,category:"教育・公務"},private_junior_teacher:{name:"私立中学校教員",male:42,female:37,category:"教育・公務"},private_elementary_teacher:{name:"私立小学校教員",male:41,female:36,category:"教育・公務"},private_university_teacher:{name:"私立大学教員",male:58,female:49,category:"教育・公務"},private_school_staff:{name:"私立学校事務職員",male:35,female:30,category:"教育・公務"},university_teacher:{name:"大学教員",male:55,female:47,category:"教育・公務"},public:{name:"国家・地方公務員",male:40,female:36,category:"教育・公務"},police:{name:"警察官",male:44,female:40,category:"教育・公務"},firefighter:{name:"消防士",male:43,female:39,category:"教育・公務"},librarian:{name:"司書",male:32,female:30,category:"教育・公務"},court_judge:{name:"裁判官",male:75,female:70,category:"教育・公務"},prosecutor:{name:"検察官",male:68,female:62,category:"教育・公務"},diplomat:{name:"外交官",male:52,female:46,category:"教育・公務"},jsdf:{name:"自衛官",male:39,female:34,category:"教育・公務"},jsdf_ground:{name:"陸上自衛官",male:39,female:34,category:"教育・公務"},jsdf_maritime:{name:"海上自衛官",male:40,female:35,category:"教育・公務"},jsdf_air:{name:"航空自衛官",male:40,female:35,category:"教育・公務"},
sales:{name:"営業職",male:43,female:34,category:"営業・金融・法律"},banker:{name:"銀行員",male:45,female:36,category:"営業・金融・法律"},insurance:{name:"保険営業",male:42,female:34,category:"営業・金融・法律"},financial:{name:"金融専門職",male:55,female:44,category:"営業・金融・法律"},lawyer:{name:"弁護士",male:72,female:58,category:"営業・金融・法律"},accountant_cert:{name:"公認会計士",male:68,female:55,category:"営業・金融・法律"},tax_accountant:{name:"税理士",male:56,female:46,category:"営業・金融・法律"},
chef:{name:"調理師",male:33,female:27,category:"サービス・販売"},hotel:{name:"ホテル従業員",male:32,female:28,category:"サービス・販売"},sales_clerk:{name:"販売員",male:30,female:26,category:"サービス・販売"},convenience:{name:"コンビニ店員",male:24,female:23,category:"サービス・販売"},beautician:{name:"美容師",male:29,female:27,category:"サービス・販売"},driver:{name:"自動車運転手",male:35,female:29,category:"サービス・販売"},railway:{name:"鉄道職員",male:42,female:36,category:"サービス・販売"},
factory:{name:"製造業",male:38,female:30,category:"製造・建設"},electrician:{name:"電気工事士",male:40,female:32,category:"製造・建設"},construction:{name:"建設作業員",male:37,female:29,category:"製造・建設"},mechanic:{name:"自動車整備士",male:36,female:30,category:"製造・建設"},machine:{name:"機械技術者",male:44,female:35,category:"製造・建設"},
journalist:{name:"記者",male:41,female:34,category:"メディア・クリエイティブ"},writer:{name:"ライター",male:34,female:29,category:"メディア・クリエイティブ"},designer:{name:"グラフィックデザイナー",male:35,female:30,category:"メディア・クリエイティブ"},photographer:{name:"カメラマン",male:36,female:30,category:"メディア・クリエイティブ"},video:{name:"映像制作",male:38,female:32,category:"メディア・クリエイティブ"},
ai_engineer:{name:"AIエンジニア",male:55,female:45,category:"新しい・デジタル職"},ai_governance:{name:"AIガバナンス担当",male:52,female:44,category:"新しい・デジタル職"},ai_ethics:{name:"AI倫理担当",male:50,female:43,category:"新しい・デジタル職"},data_annotator:{name:"データアノテーター",male:30,female:27,category:"新しい・デジタル職"},ai_work_architect:{name:"AIワークアーキテクト",male:55,female:46,category:"新しい・デジタル職"},ai_steward:{name:"AIスチュワード",male:50,female:43,category:"新しい・デジタル職"},cybersecurity:{name:"サイバーセキュリティ担当",male:50,female:42,category:"新しい・デジタル職"},ux_ui:{name:"UI・UXデザイナー",male:42,female:36,category:"新しい・デジタル職"},fintech:{name:"フィンテックエンジニア",male:55,female:45,category:"新しい・デジタル職"},renewable:{name:"再生可能エネルギーエンジニア",male:48,female:40,category:"新しい・デジタル職"},
athlete:{name:"スポーツ選手",male:35,female:30,category:"収入変動が大きい職業"},esports:{name:"プロゲーマー",male:30,female:25,category:"収入変動が大きい職業"},manga_artist:{name:"漫画家",male:28,female:24,category:"収入変動が大きい職業"},voice_actor:{name:"声優",male:25,female:23,category:"収入変動が大きい職業"},actor:{name:"俳優",male:32,female:28,category:"収入変動が大きい職業"},musician:{name:"ミュージシャン",male:31,female:27,category:"収入変動が大きい職業"},freelancer:{name:"フリーランス",male:30,female:27,category:"収入変動が大きい職業"},artist:{name:"芸術家・イラストレーター",male:26,female:23,category:"収入変動が大きい職業"},youtuber:{name:"動画クリエイター（YouTuber）",male:35,female:30,category:"収入変動が大きい職業"},streamer:{name:"ライブ配信者",male:32,female:28,category:"収入変動が大きい職業"}
};

const nationalAverage=31;
const regions={
hokkaido:{name:"北海道",average:430,gap:90},aomori:{name:"青森県",average:390,gap:80},iwate:{name:"岩手県",average:400,gap:85},miyagi:{name:"宮城県",average:450,gap:95},akita:{name:"秋田県",average:395,gap:82},yamagata:{name:"山形県",average:405,gap:84},fukushima:{name:"福島県",average:420,gap:88},ibaraki:{name:"茨城県",average:450,gap:98},tochigi:{name:"栃木県",average:455,gap:100},gunma:{name:"群馬県",average:445,gap:97},saitama:{name:"埼玉県",average:500,gap:110},chiba:{name:"千葉県",average:495,gap:108},tokyo:{name:"東京都",average:550,gap:140},kanagawa:{name:"神奈川県",average:530,gap:130},niigata:{name:"新潟県",average:420,gap:90},toyama:{name:"富山県",average:430,gap:92},ishikawa:{name:"石川県",average:440,gap:94},fukui:{name:"福井県",average:435,gap:93},yamanashi:{name:"山梨県",average:425,gap:91},nagano:{name:"長野県",average:440,gap:94},gifu:{name:"岐阜県",average:435,gap:95},shizuoka:{name:"静岡県",average:470,gap:102},aichi:{name:"愛知県",average:500,gap:115},mie:{name:"三重県",average:450,gap:99},shiga:{name:"滋賀県",average:455,gap:101},kyoto:{name:"京都府",average:460,gap:105},osaka:{name:"大阪府",average:480,gap:120},hyogo:{name:"兵庫県",average:460,gap:110},nara:{name:"奈良県",average:435,gap:98},wakayama:{name:"和歌山県",average:425,gap:94},tottori:{name:"鳥取県",average:390,gap:82},shimane:{name:"島根県",average:395,gap:83},okayama:{name:"岡山県",average:430,gap:92},hiroshima:{name:"広島県",average:450,gap:98},yamaguchi:{name:"山口県",average:420,gap:90},tokushima:{name:"徳島県",average:410,gap:88},kagawa:{name:"香川県",average:415,gap:89},ehime:{name:"愛媛県",average:405,gap:87},kochi:{name:"高知県",average:390,gap:82},fukuoka:{name:"福岡県",average:450,gap:100},saga:{name:"佐賀県",average:395,gap:84},nagasaki:{name:"長崎県",average:400,gap:86},kumamoto:{name:"熊本県",average:410,gap:88},oita:{name:"大分県",average:405,gap:87},miyazaki:{name:"宮崎県",average:390,gap:83},kagoshima:{name:"鹿児島県",average:395,gap:85},okinawa:{name:"沖縄県",average:380,gap:80}
};

const $=id=>document.getElementById(id);
let salaryChart=null,futureChart=null;
function num(id){const v=Number($(id).value); return Number.isFinite(v)&&v>=0?v:0;}
function ageValue(){return Math.min(Math.max(Math.floor(num("age")),15),100);}
function currentValues(){
  const j=jobs[$("job").value];
  const monthly=Math.min(num("income"),500);
  const bonusMonths=num("bonusMonths");
  const annualBase=monthly*12;
  const bonus=monthly*bonusMonths;
  const annual=annualBase+bonus;
  const daysPerMonth=20;
  const hoursPerDay=8;
  const daily=monthly/daysPerMonth;
  const hourly=(daily/hoursPerDay)*10000;
  const years=Math.max(0,65-ageValue());
  const annualYen=annual*10000;
  const lifetimeYen=annualYen*years;
  return {j,monthly,bonusMonths,annualBase,bonus,annual,daily,hourly,years,annualYen,lifetimeYen};
}

function analyze(){
  const v=currentValues();
  const r=regions[$("region").value];
  const genderAvg=$("gender").value==="male"?v.j.male:v.j.female;
  const occupationalDiff=v.monthly-genderAvg;
  const nationalDiff=v.monthly-nationalAverage;
  const genderGap=v.j.male-v.j.female;
  const gapPct=v.j.male?genderGap/v.j.male*100:0;

  $("incomeResult").innerHTML=`<b>${v.j.name}</b>（${v.j.category}）<br>
  年齢：${ageValue()}歳　｜　性別：${$("gender").value==="male"?"男性":"女性"}<br>
  都道府県：${r.name}<br>
  あなたの月収：${v.monthly.toFixed(1)}万円<br>
  年間ボーナス：${v.bonusMonths===0?"なし":v.bonusMonths+"か月分（"+v.bonus.toFixed(1)+"万円）"}<br>
  ${r.name}の平均年収（仮データ）：${r.average}万円<br>
  ${r.name}の男女差（仮データ）：${r.gap}万円`;

  const lifetimeLabel=v.lifetimeYen>=100000000
    ? `${(v.lifetimeYen/100000000).toFixed(2)}億円`
    : `${Math.round(v.lifetimeYen/10000).toLocaleString("ja-JP")}万円`;
  $("incomeBreakdownResult").innerHTML=`<div>時収<strong>${Math.round(v.hourly).toLocaleString("ja-JP")}円</strong></div><div>日収<strong>${Math.round(v.daily*10000).toLocaleString("ja-JP")}円</strong></div><div>月収<strong>${v.monthly.toFixed(1)}万円</strong></div><div>年収<strong>${v.annual.toFixed(1)}万円</strong></div><div>生涯年収<strong>${lifetimeLabel}</strong><small>（${v.years}年間）</small></div>`;

  $("incomeAssumptionNote").textContent=`計算上の仮定：1か月＝20日、1日＝8時間。生涯年収は「現在の年収（ボーナス込み）×（65－現在年齢）」で計算しています。例えば17歳なら48年間分です。税金・昇給・退職金・失業期間などは含みません。すべて動作確認用の仮データです。`;

  drawSalary(v,r);
  drawFuture(v.monthly);
  updateLiving();
}

function drawSalary(v,r){
  if(salaryChart) salaryChart.destroy();
  salaryChart=new Chart($("salaryChart"),{type:"bar",data:{labels:[`${v.j.name} 男性平均`,`${v.j.name} 女性平均`,`全国平均`,`あなた`,`選択地域 年収換算`],datasets:[{label:"月収・年収比較の目安",data:[v.j.male,v.j.female,nationalAverage,v.monthly,r.average/12]}]},options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}});
}

function drawFuture(monthly){
  if(futureChart) futureChart.destroy();
  const a=ageValue();
  const labels=Array.from({length:6},(_,i)=>i===0?`現在（${a}歳）`:`${i}年後（${a+i}歳）`);
  const mine=labels.map((_,i)=>Number((monthly*Math.pow(1.01,i)).toFixed(1)));
  const avg=labels.map((_,i)=>Number((nationalAverage*Math.pow(1.02,i)).toFixed(1)));
  futureChart=new Chart($("futureChart"),{type:"line",data:{labels,datasets:[{label:"あなた",data:mine,tension:.25},{label:"全国平均（仮データ）",data:$("futureSwitch").checked?avg:[avg[0],null,null,null,null,null],tension:.25}]},options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}});
}

function updateLiving(){
  const total=["rent","food","utility","phone","transport","other"].reduce((s,id)=>s+num(id),0);
  $("expenses").textContent=total.toFixed(1)+"万円";
  $("balance").textContent=(num("income")-total).toFixed(1)+"万円";
}

$("analyzeBtn").addEventListener("click",analyze);
["gender","age","job","region","income","bonusMonths"].forEach(id=>$(id).addEventListener("change",analyze));
$("income").addEventListener("input",updateLiving);
$("age").addEventListener("input",analyze);
$("futureSwitch").addEventListener("change",()=>drawFuture(num("income")));
$("livingSwitch").addEventListener("change",()=>{$("livingPanel").hidden=!$("livingSwitch").checked;if($("livingSwitch").checked)updateLiving();});
["rent","food","utility","phone","transport","other"].forEach(id=>$(id).addEventListener("input",updateLiving));
analyze();
