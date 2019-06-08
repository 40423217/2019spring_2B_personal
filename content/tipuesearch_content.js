var tipuesearch = {"pages": [{'title': '期末報告總攬', 'text': '本期末報告總結於於期中操作之V-rep BubbleRob Tutorial 以及本學期 Football table 專案。透過上述兩專案的執行過程中，利用協同及可攜工具進行機械設計，如：Onshape、Github、Ungit、小組 CMSfly等工具。 \n 不需要個別對協同工具去做介紹，說明該項工具在此專案操作的問題，或是延伸的理解。 \n \n /** \n Onshape： 行專案協同繪圖，可有效地取代複雜且難取得的坊間繪圖軟體。在學期間專案並沒有受制於保密或專利等約束，遂在雲端免費且開源的平台上，可有效的且有彈性的操作，不須存檔且隨時隨地即可檢視、編輯(此為網際網路穩定區域)，另立分支邀請夥伴，匯入、匯出等等，甚至可以自行為需要功能進行補充。 僅管免費註冊帳好本身並未受到個人化的保護，擁有連結或是透過 public chnnal 找到專案的使用者，也只能進行檢視，無法參與編輯。 \n **/ \n \n Github 和 Ungit： \n \n 專案一：Football table \n 專案二：Routh sweeping robot 由 BubbleRob Tutorial 自行延伸 \n 各組員必須在 W17 上課之前完成期末報告簡報影片上傳與連結, 並放入本網站之"專案口頭簡報"頁面. \n 各組必須在 W17 上課之前完成分組期末報告 pdf 檔案, 上傳至各分組的倉儲中, 並將連結提供至本網站之"專案報告書"頁面. \n 期末報告期間每週對各成員之評分依據下列要項: \n \n 各組員在各分組網站中所呈現之任務執行內容, 並拍攝操作影音 mp4, 將影片標題署名"國立虎尾科技大學-機械設計工程系-協同產品設計實習 B - 學號及影片主題" 後上傳, 並將影片嵌入本網站各章節頁面中. \n 每組將提供組長本網站倉儲協同管理權, 專門處理各組員在各分支或 master 分支中的 pull requests, 各組員必須透過以 bg1, bg2 .... 命名之分支對本倉儲改版, 確定內容無誤後, 再設法由組長處理各 pull requests 之內容合併, Github Pages 將設為與 master 分支對應, 各組員之評分將依據各 pull requests 中所列出之學號與內容判定. \n 請各組員勿將影片檔、圖片檔案或各式檔案送至本倉儲, 影片檔案請上傳至 Youtube, 圖片檔案請送至各組倉儲網站, 各式檔案則請送至各組員 Google Drive 區, 並以嵌入 (iframe), 將影片放入本網站, 其餘圖片或檔案則透過 img 或 a 標註放入各相關頁面. \n \n 2b 分組倉儲 \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g1 \xa0 ( 2bg1 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g2 \xa0 ( 2bg2 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g3_1 \xa0( 2bg3 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g4 \xa0 ( 2bg4 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g5 \xa0( 2bg5 ) \n', 'tags': '', 'url': '期末報告總攬.html'}, {'title': '執行規劃', 'text': '按照工業設計中的描述性設計流程，在街道專案的第一步先來定義這是是否為定義完善的問題。檢視整體手足球的專案需求，為一定義不完善的問題，一來規格不明確，二來雖有指定軟體或建議工具，單騎使用的方法以及呈現的展演未被宣告，遂為一定義不完善問題。 \n 概略的規格及參考專利在： Table Foosball 動態系統模擬專案 \n Step1：Rough Modeling 針對功能性和需要的輪廓進行概略性的建模 \n \n 建置必要的模型，如球檯、球員、球桿、球(可由V-rep進行直接新增)。 \n 過去學習歷程養成的壞習慣，導致一開始盲目地對著規格定義不明確的工程圖套描，沒有進一步的思考究竟現階段出現模型的目的。在該階段之所以需要模型，源自因為需要可以進行模擬控制的實體，遂模型本身並非主體，而是要能夠搭配V-rep進行物件環境碰撞、程式控制等模擬。 \n 按照課程所提供不完整的規格工程圖建模完成之物件，一來會發現其本身提供的史寸步完善，二來再匯入V-rep 進行模擬後尤其進入 Object Proterties 下的 Body is Dynamic 時，物間開始就其體積對應的重量，在環境產身對應的物理量並且和他物件產生碰撞(含接觸)時，軟體的附載會急遽增加。原因來自於 V-rep和所接觸的 CAE 軟體，物件匯入的方式類似，透過將物件進行網格切割並且，對每個網格進行有限元素等參數計算，行而可在環境中獲得對應條件的狀態。 \n 此種方式會受到模型特徵影響甚遽，物件本身過於複雜之外行如圓角、曲面或甚至是段距離內的特徵扭曲，都可能造成網格切割不完整甚至是轉換成 STL 時形成破面件(壁厚等於 0 的物件)。因此針對不同條件及想要獲得的不同結果，在進行類同於有限元素分析或是鋼體運動模擬等作業時，會針對物件功能對應條件行模型簡化。 \n 詳細建模過程可參考下一張連結： \n 國立虎尾科技大學_機械設計工程系_40423217_Football_Table_Onshape_module_Fall \n Onshape_針對模擬簡化後的模型 \n \n', 'tags': '', 'url': '執行規劃.html'}, {'title': '手足球系統模擬', 'text': '專案成果摘要 \n 專案執行動機 \n 相關文獻探討 \n 專案執行成員 \n 執行使用套件 \n 專案執行過程規劃 \n 專案執行內容 \n 專案結論 \n', 'tags': '', 'url': '手足球系統模擬.html'}, {'title': '設計與繪圖', 'text': '', 'tags': '', 'url': '設計與繪圖.html'}, {'title': '零組件尺寸分析', 'text': '手足球系統的零組件尺寸分析 (可行性分析) \n', 'tags': '', 'url': '零組件尺寸分析.html'}, {'title': '參數設計與繪圖', 'text': '手足球系統的零組件參數設計與繪圖 (零組件初步設計繪圖) \n Onshape 零組件連結 \n', 'tags': '', 'url': '參數設計與繪圖.html'}, {'title': '細部設計與 BOM', 'text': '手足球零件格式說明 \n 手足球零件格式說明 \n 零件 BOM \n 手足球零組件材料表 (含零組件下載連結) \n 零件尺寸圖 \n 零件尺寸圖 \n 零件部分組裝圖 \n 零件部分組裝圖 \n 3D 零組件爆炸圖 \n 3D 零組件爆炸圖 \n', 'tags': '', 'url': '細部設計與 BOM.html'}, {'title': 'V-rep 動態模擬', 'text': '\n', 'tags': '', 'url': 'V-rep 動態模擬.html'}, {'title': '送球機構設計與模擬', 'text': '\n \n', 'tags': '', 'url': '送球機構設計與模擬.html'}, {'title': '系統功能展示', 'text': '手足球模擬系統功能展示 (模擬展示與說明影片) \n \n', 'tags': '', 'url': '系統功能展示.html'}, {'title': '結案報告', 'text': '', 'tags': '', 'url': '結案報告.html'}, {'title': '專案口頭簡報', 'text': '各組利用倉儲中的 Reveal.js 進行結案簡報 (結案口頭簡報) \n', 'tags': '', 'url': '專案口頭簡報.html'}, {'title': '專案報告書', 'text': '各組完成 html 與 pdf 格式之手足球專案結案報告 (文字結案報告書)', 'tags': '', 'url': '專案報告書.html'}]};