const a = [
    { question: "なぜ山に登るのかと聞かれ、そこに山があるからと答えた、アメリカの有名な登山家の名前は何でしょう。", answer: "ジョージ・マロリー" },
    { question: "正式名称を「特に水鳥の生息地として国際的に重要な湿地に関する条約」という、湿地の保存に関する国際条約は何でしょう。", answer: "ラムサール条約" },
    { question: "日本一高い山は富士山ですが、世界一高い山は何でしょう。", answer: "エベレスト" },
    { question: "英語で「えくぼ」という意味がある、ゴルフボールの表面の「くぼみ」の名前は何でしょう。", answer: "ディンプル" },
    { question: "全国チェーン店の「ASBee（アスビー）「SHOE-PLAZA（シュープラザ）」「ABCマート」といえば、どんなファッションアイテムを販売している店舗でしょう。", answer: "靴" },
    { question: "英語で「罪の箱」という意味がある。ラグビーにおいて、反則を犯した選手に10分間の退場を命じるルールは何でしょう。", answer: "シン・ビン" },
    { question: "ファンタジー小説「ホビットの冒険」や「指輪物語」の作者は誰でしょう。", answer: "J.R.R.トールキン" },
    { question: "ドイツのイェッセルによって作曲された、「キューピー３分間クッキング」のテーマとしてもおなじみの曲は何でしょう。", answer: "おもちゃの兵隊のマーチ" },
    { question: "「デリンジャー現象」にその名を残すジョン・ハワード・デリンジャーは、どこの国の物理学者でしょう。", answer: "アメリカ合衆国" },
    { question: "こしあんを入れた饅頭も販売されている、山芋と米粉と砂糖を練って蒸した、鹿児島県の銘菓は何でしょう。", answer: "軽羹（かるかん）" },
    { question: "買った株が値下がりしたときに買い増しすることで、平均所得単価を下げる投資の方法を何というでしょう。", answer: "難平買い" },
    { question: "我が子との別れを腸がちぎれるほど悲しんだことから、故事成語「断腸の思い」の由来となった動物の名前は何でしょう。", answer: "猿" },
    { question: "塩基性炭酸銅を主成分とする、銅の表面にみられる緑色の錆を何というでしょう。", answer: "緑青" },
    { question: "特にポロシャツが有名な、ワニをモチーフにしたロゴで知られるフランスのブランドは何でしょう。", answer: "ラコステ" },
    { question: "ハンガリーの首都・ブダペストを、西側のブダ地区と東側のペスト地区に分けている川は何でしょう。", answer: "ドナウ川" },
    { question: "おさびし山のふもとにある谷に住んでいる、トーベヤンソンの小説に登場する妖精は何でしょう。", answer: "ムーミン" },
    { question: "その風貌から「だるま宰相」と呼ばれた、日銀総裁や総理大臣を歴任するも二・二六事件で暗殺された政治家は誰でしょう。", answer: "高橋是清" },
    { question: "歌手の「カウンターテナー」といえば、男性、女性、のどちらでしょう。", answer: "男性" },
    { question: "景気の低迷に伴って生じる就職難の時期のことを、地球の気候が寒冷化した事態に例えて何というでしょう。", answer: "氷河期" },
    { question: "材料の入った容器ごと熱湯に入れ、お茶の熱で間接的に加熱する調理法を漢字２文字で何というでしょう。", answer: "湯煎" },
    { question: "世界にある大陸の中で唯一、一か国のみが所有しているのはどこでしょう。", answer: "オーストラリア大陸" },
    { question: "オリンピックにおけるシンクロナイズドスイミングにチーム種目で、１チームを構成する人数は何人でしょう。", answer: "８人" },
    { question: "大阪を舞台とした「プリンセストヨトミ」や、奈良を舞台とした、「鹿男あおによし」で知られる、関西出身の小説かは誰でしょう。", answer: "万城目学" },
    { question: "かつて魚は眠らないと考えられていたことから作られた、眠りを戒めるためにお寺で使われる仏具は何でしょう。", answer: "木魚" },
    { question: "1649年に清教徒革命によって処刑された、イングランド国王は誰でしょう。", answer: "チャールズ一世" },
    { question: "石基と斑晶からなる斑状組織を持つことが特徴な、火成岩の中でもマグマが地表付近で急速に冷えてできたものを何というでしょう。", answer: "火山岩" },
    { question: "1928年から47年まで自らミッキーマウスの初代声優を務めた、ミッキーマウスの生みの親といば誰でしょう。", answer: "ウォルト・ディズニー" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },
    { question: "細川・斯波・畠山の三家が交代で就いた、室町幕府において政務の最高責任者として将軍を補佐した役職は何でしょう。", answer: "管領" },
    { question: "アウクスブルクなどを経由して、ヴュルツブルクとフュッセンを結ぶ、観光地として有名なドイツの街道は何でしょう。", answer: "ロマンチック街道" },
    { question: "太陽が天球上に描く軌道は黄道ですが、月が天球上に描く軌道は何というでしょう。", answer: "白道" },
    { question: "「一枚のうろこ」を意味する言葉で、才能のほんの一端を表に出すことを「これを見せる」というのは何でしょう。", answer: "片鱗" },
    { question: "「マリー」「トトリ」「エスカ＆ロジー」などの作品がある、現在はコーエーテクモゲームスが発売するゲームシリーズは何でしょう。", answer: "アトリエシリーズ" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },



    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },
    { question: "日本の国の蝶・オオムラサキは何科のチョウでしょう。", answer: "タテハチョウ科" },

];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const element = document.getElementById("element");
const sound = document.getElementById("sound");
function ring() {
    document.getElementById("sound").play();
}
function ring1() {
    document.getElementById("sound1").play();
}
all.textContent = "all question: " + a.length;


let random = Math.floor(Math.random() * 　a.length);
let qes = a[random].question;
let ans = a[random].answer;
let chars = qes.split("");

let count = 0;
let timeoutid = null;
let isRunning = false;
let index;

function tick() {
    question.textContent += chars[index];
    if (index < chars.length - 1) {
        timeoutid = setTimeout(tick, 130);
    } else {
        count = 2;
        element.textContent = "答え"
    }
    index++;
}

element.addEventListener("click", function () {
    count++;
    if (count === 1) {
        index = 0;
        tick();
        ring();
    } else if (count === 2) {
        ring1();
        clearTimeout(timeoutid);
        element.textContent = "答え"
    } else if (count === 3) {
        answer.textContent = "A. " + ans;
        element.textContent = "次へ"
        //qanswer.textContent = qes.substring(timeoutid);
        qanswer.textContent = qes.substring(index);
    } else if (count === 4) {
        element.textContent = "問題"
        question.textContent = ""
        qanswer.textContent = ""
        answer.textContent = ""
        random = Math.floor(Math.random() * 　a.length);
        qes = a[random].question;
        ans = a[random].answer;
        chars = qes.split("");
        count = 0;
    }
});
