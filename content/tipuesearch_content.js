var tipuesearch = {"pages": [{'title': '期末報告總攬', 'text': '本期末報告總結於於期中操作之V-rep BubbleRob Tutorial 以及本學期 Football table 專案。透過上述兩專案的執行過程中，利用協同及可攜工具進行機械設計，如：Onshape、Github、Ungit、小組 CMSfly等工具。 \n V-rep 進行運動模擬，在其建構的物理引擎環境裡，對物件的動態鋼體機構模擬。本學期所進行的操作過程中，之於理解範圍所能調整的物件條件，仍然處於半猜測的推敲對應其環境的運動狀態，儘管是對物件的體積、重量和物件特徵進行斟酌，當中的修正大部分並非對應其在實際環境狀態中的設計，而是針對其在 V-rep物理引擎中的客製。 \n 遂當中可行在實際作棟的部分，為控制物件的程式。整體而言操作的物理特性模擬是充滿問題的，一來是關於軟體操作半學期下來仍然不熟悉；二則是關於所能直觀控制的條件太少，以及其在逐步的設定對物理性質、材料、物件狀態等等細分的諸多，無法逐一設定。 \n Onshape 進行協同繪圖。利用其軟體特性，使得在操作該軟體時不被場域裝置的限制，可在有網際網路的地方繪圖(這也許是他唯一的限制)，和駔大型專案時可以即時的分享連結，進行雙向對單一專案(物件)的溝通，使過往僅能透過截圖、畫面分享等單向作法對遠距離進行合作，算是另一種打破距離限制的協同工具。 \n 其特性在於可以有效且明確(圖像化)的呈現版本歷程資訊，可以有效地在合作過程中檢視，亦可在設計方向出錯當下及時止血或是回到當前進行切換分之。目前可所接觸的 git 工具最大的不同在於無法進行 pull request，遂專案分支就目前的 Onshape 版本只會越切越多的分支，屆時像是倒著長出的樹根。 \n', 'tags': '', 'url': '期末報告總攬.html'}, {'title': '執行規劃', 'text': '按照工業設計中的描述性設計流程，在街道專案的第一步先來定義這是是否為定義完善的問題。檢視整體手足球的專案需求，為一定義不完善的問題，一來規格不明確，二來雖有指定軟體或建議工具，單騎使用的方法以及呈現的展演未被宣告，遂為一定義不完善問題。 \n 概略的規格及參考專利在： Table Foosball 動態系統模擬專案 \n Step1：問題 \n \n 檢視整體手足球的專案需求，為一定義不完善的問題，一來規格不明確，二來雖有指定軟體或建議工具，單騎使用的方法以及呈現的展演未被宣告，遂為一定義不完善問題。 \n 瞭解為定義不完善問題後列出需求，以及待釐清項目： \n 手足球功能？ \n 操作者該控制的方式以及項目？ \n 球檯、球員和球的關係？ \n 如何給球以及接球(只離開球檯後)？ \n 虛擬環境中如何模擬？ \n \n Step2：說明問題 \n 手足球的功能？ \n 透過固定在球桿上的球員進行擊球，將球擊入對手球洞即可得分，多為偶數玩家參與。球桿控制權為交錯但不干涉，隨著靠近球洞單一球桿上球員數逐漸遞減。最後守門員留有一員及對手兩員。 \n 操作者能控制的項目？ \n 操作者主要藉由「旋轉」或「直進」球桿，以達控制固定在上的球員，進行擊球及控球更甚者等待等動作。 \n 球檯、球員和球的關係？ \n 球員被固定於球桿上，而球桿本身可以在球檯上所定位的孔洞中進行直進以及旋轉。球桿運動過程中球員本身特徵輪廓等，不能和球檯面或是彼此(因為交錯控制權遂若有干涉為對手球員)進行運動干涉。球僅能在球檯所圍出的場域進行碰撞、直進，且僅能由雙方球門離開。 \n 如何給球以及接球(只離開球檯後)？ \n 球僅能在球檯所圍出的場域進行碰撞、直進，且僅能由雙方球門離開。遂球門後必須有裝置進行捕捉，而送球需再求球檯中間，若為同一顆球(或同一批次)則必須要有送球(含接球)等機構建置。 \n 虛擬環境中如何模擬？ \n Step1：Rough Modeling 針對功能性和需要的輪廓進行概略性的建模 Step2：Object 物件關係 Step3：Body is dynamic 運動控制 \n Step3：分解成單元 \n Step1：Onshape 操作。應該是最快也最容易上手的部分，其所對應的教學影音很好懂也很多Workshop可以參考，遂要繪製手足球的各物件相對 V-rep 容易。 \n Step2：V-rep BubbleRob Tutorial 了解 V-rep 物理引擎的簡單物件設定 \n \n 以下步驟略，之於本專案的性質及其專注的重點，並未包含實體化以及差異性設計，遂以下步驟略。 \n Step4：資訊蒐集 \n Step5：分析資訊 \n Step6：創建 \n Step7：材料與科技 \n Step8：實驗 \n Step9：模型(樣品) \n Step10：設計成品 \n Step11：解決問題的想法 \n \n', 'tags': '', 'url': '執行規劃.html'}, {'title': '手足球系統模擬', 'text': '專案成果摘要 \n 專案執行動機 \n 相關文獻探討 \n 專案執行成員 \n 執行使用套件 \n 專案執行過程規劃 \n 專案執行內容 \n 專案結論', 'tags': '', 'url': '手足球系統模擬.html'}, {'title': '設計與繪圖', 'text': '按照工業設計中的描述性設計流程，在接到專案的第一步先來定義這是是否為定義完善的問題。 \n Step1：問題 \n \n 檢視整體手足球的專案需求，為一定義不完善的問題，一來規格不明確，二來雖有指定軟體或建議工具，單騎使用的方法以及呈現的展演未被宣告，遂為一定義不完善問題。 \n 瞭解為定義不完善問題後列出需求，以及待釐清項目： \n 手足球功能？ \n 操作者該控制的方式以及項目？ \n 球檯、球員和球的關係？ \n 如何給球以及接球(只離開球檯後)？ \n 虛擬環境中如何模擬？ \n \n Step2：說明問題 \n 手足球的功能？ \n 透過固定在球桿上的球員進行擊球，將球擊入對手球洞即可得分，多為偶數玩家參與。球桿控制權為交錯但不干涉，隨著靠近球洞單一球桿上球員數逐漸遞減。最後守門員留有一員及對手兩員。 \n 操作者能控制的項目？ \n 操作者主要藉由「旋轉」或「直進」球桿，以達控制固定在上的球員，進行擊球及控球更甚者等待等動作。 \n 球檯、球員和球的關係？ \n 球員被固定於球桿上，而球桿本身可以在球檯上所定位的孔洞中進行直進以及旋轉。球桿運動過程中球員本身特徵輪廓等，不能和球檯面或是彼此(因為交錯控制權遂若有干涉為對手球員)進行運動干涉。球僅能在球檯所圍出的場域進行碰撞、直進，且僅能由雙方球門離開。 \n 如何給球以及接球(只離開球檯後)？ \n 球僅能在球檯所圍出的場域進行碰撞、直進，且僅能由雙方球門離開。遂球門後必須有裝置進行捕捉，而送球需再求球檯中間，若為同一顆球(或同一批次)則必須要有送球(含接球)等機構建置。 \n 虛擬環境中如何模擬？ \n Step1：Rough Modeling 針對功能性和需要的輪廓進行概略性的建模 Step2：Object 物件關係 Step3：Body is dynamic 運動控制 \n Step3：分解成單元 \n Step4：資訊蒐集 \n Step5：分析資訊 \n Step6：創建 \n Step7：材料與科技 \n Step8：實驗 \n Step9：模型(樣品) \n Step10：設計成品 \n Step11：解決問題的想法 \n', 'tags': '', 'url': '設計與繪圖.html'}, {'title': '零組件尺寸分析', 'text': '手足球系統的零組件尺寸分析 (可行性分析) \n 概略的規格及參考專利在： Table Foosball 動態系統模擬專案 \n Step1：Rough Modeling 針對功能性和需要的輪廓進行概略性的建模 \n \n 建置必要的模型，如球檯、球員、球桿、球(可由V-rep進行直接新增)。 \n 過去學習歷程養成的壞習慣，導致一開始盲目地對著規格定義不明確的工程圖套描，沒有進一步的思考究竟現階段出現模型的目的。在該階段之所以需要模型，源自因為需要可以進行模擬控制的實體，遂模型本身並非主體，而是要能夠搭配V-rep進行物件環境碰撞、程式控制等模擬。 \n 按照課程所提供不完整的規格工程圖建模完成之物件，一來會發現其本身提供的史寸步完善，二來再匯入V-rep 進行模擬後尤其進入 Object Proterties 下的 Body is Dynamic 時，物間開始就其體積對應的重量，在環境產身對應的物理量並且和他物件產生碰撞(含接觸)時，軟體的附載會急遽增加。原因來自於 V-rep和所接觸的 CAE 軟體，物件匯入的方式類似，透過將物件進行網格切割並且，對每個網格進行有限元素等參數計算，行而可在環境中獲得對應條件的狀態。 \n 此種方式會受到模型特徵影響甚遽，物件本身過於複雜之外行如圓角、曲面或甚至是段距離內的特徵扭曲，都可能造成網格切割不完整甚至是轉換成 STL 時形成破面件(壁厚等於 0 的物件)。因此針對不同條件及想要獲得的不同結果，在進行類同於有限元素分析或是鋼體運動模擬等作業時，會針對物件功能對應條件行模型簡化。 \n 詳細建模過程可參考下一張連結： \n 國立虎尾科技大學_機械設計工程系_40423217_Football_Table_Onshape_module_Fall \n \n Onshape_針對模擬簡化後的模型 \n \n Step2：Object 物件關係 \n \n 簡化後的模型已經建立完成並且匯入 V-rep ，即進入第二階段物件關系。 \n 根據 BubbleRob_Tutorial 的操作過程熟悉 V-rep 物件關聯性之於物件本身的控制關係，以及其對於體積以及重量，關係於彼此物件連結的問定性及可靠性。 \n 針對 V-rep Football table 在放置球員時，當同一桿件玉放置多個球員時，起初物件較小遂不明顯，物件勳可以穩定的置於桿件上。但隨著接後的模擬針對簡化後的模型做些調整，除外型曲面的擊球面被修正，因為有機會在擊球時和傾斜的球檯面，受力形成運動死點而將球咬住；再者大小本身也增加了些，目的是除了在程式端增加擊球力道外，亦可透過球員本身的長度產生力矩上的助力。 \n Onshape_Football_table_V9 \xa0修正前 \n Onshape_Football_table_B2_V13 \xa0修正後 \n 綜合上述兩部分修正，已較前一版本球員要來的大。在放置於求桿上時，出現了問題。球桿的體積對應其重量在模擬環境中，無法撐起所放置的球員數量。透過觀察亦可發現當放置的球員樹為奇數時，中間的球員為支撐的支點，而兩側的球員亦是和球桿呈現組立(接觸)關係，再者以中間球員為支點呈槓桿關係。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_增加球員&PID運動控制調整_2019-0606-1135 \n \n 參見應連結 04：00 段落敘述錯誤，支點球員質量必須大於其餘兩側球員質量，且其落差必須接近2^8倍(一側為2^8倍，另一次即為(2^-1)^8倍)。 \n \n', 'tags': '', 'url': '零組件尺寸分析.html'}, {'title': '參數設計與繪圖', 'text': '手足球系統的零組件參數設計與繪圖 (零組件初步設計繪圖) \n 本章節延續前章節  Step2：Object 物件關系 \n Onshape_Football_table_V13 \xa0 \n \n 總體物件除了可以透過上述連結進入 Onshape 進行檢視以外，亦可由下方的側視圖了解，整體球檯在本次專案的設計規格以及其特徵。 \n 可以發現球檯本面，主體特徵是中間較高向兩側逐漸遞減高度的傾斜面，在最後一球感的下方為最低點，並在由該位置向後為傾高度。注藥布地可以參見文章最後連結，造因於當初進行物件組立完成後考量擊球問題，在尚未有完整的收球、送球機構時，為讓靜止的球可以有動能，並且讓球員可以有向的操作「接戰」動作，歲設計傾斜球檯面，以未能轉換成動能的方式行有效的擊球動作測試。 \n (如圖元所示球檯下極限至上極限為100mm) \n \n Onshape_Football_table_V6 \xa0 \n \n 第一版本正是匯入 V-rep 進行測試。 總體物件除了可以透過上述連結進入 Onshape 進行檢視以外，亦可由下方的側視圖了解，整體球檯在本次專案的設計規格以及其特徵。 \n 和最終版本最大特徵不同在於，其傾些面的方向是由中間最低點向兩側延伸，以及吊籃式的球桿位置，再者還包含球員擊球面的曲面特徵等。目的主要為第一階段的測試程式做驗證，其目的是確保運動狀態對應的程式運作正常，以及對應宣告的修正。 \n 其後測試過程中，除增加了球檯及球桿的總寬，目的為增加單一球桿的球員數量。在測試過程中逐一針對問題做物件特徵修正。其一為球員擊球面為曲面，使其在擊球過程有機會力量會通過球體形心(含質心)，其構成運動狀態的死點，遂在其後修正為憑質的倒角；其二為吊籃式的球桿位置，因吊籃式球桿位置在執行鏡射或是陣列時，其相對於直接在球檯面上建立位置顯得多餘，因此後續改版後除去； 再者大小本身也增加了些，目的是除了在程式端增加擊球力道外，亦可透過球員本身的長度產生力矩上的助力。 \n \n (該物件規格在左側特徵樹下的 Variable，或是直接點及圖原本身，即會在右下角顯示規格) \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-REP_Football_table_P0_R1_V2_test_2019-0524-1536 \xa0 \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V_rep_Football_player_P0_R2_V2_2019-0530-2234 \xa0 \n \n \n', 'tags': '', 'url': '參數設計與繪圖.html'}, {'title': 'B2 修正', 'text': 'Onshape_Football_table_B2 \xa0 \n 在B2版本所行之修正，其目的為有效在V-rep物理引擎進行模擬 \n \n 造因於前版本物件在進行建模時，所考量的因素並未包含V-rep物理引擎模擬之特性，遂在以前版本為基礎進行特徵修正後，造成模擬上物理性質的干涉以、碰撞以及乘載問題等。 \n 較前一版本要大的球員。在放置於求桿上時，出現了問題。球桿的體積對應其重量在模擬環境中，無法撐起所放置的球員數量。遂透過對球桿兩側增加質量塊，間接地調整 球桿體積，已使得在和球員本身的體積倍數差距直接性的放大，同時亦對球員及球桿間的質量做修正。 \n 在放置多個球員時，當球桿本身在 V-rep 物理引擎中無法乘載球員時，會發現(尤其奇數特別明顯)球員在穿透傾倒時有其規則，位有意虛擬的支點進行對應物理量的港桿縮放。以奇數為例：若所有球員皆不進行重量修正(同重量)，至於桿件上時會出現無法乘載物件且彼此穿透的傾倒現象。其傾倒方式會以中間球員為支點對一方向做傾倒，而兩側的球員，彼此之於中間球員重量倍數為 2^8 倍。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_增加球員&PID運動控制調整_2019-0606-1135 \xa0 \n 透過觀察亦可發現當放置的球員樹為奇數時，中間的球員為支撐的支點，而兩側的球員亦是和球桿呈現組立(接觸)關係，再者以中間球員為支點呈槓桿關係。 \n \n 橫向位置步進 PID 控制 \n \n PID 控制器， 由比例單元（P）、積分 單元（I）和微分 單元（D）組成。 取代前一版本以速度進行控制，修正部分包含了擊球的角度以及球員在橫向移動的位置控制。 \n 前版本的速度控制，是以對單一方向做速度遞進，利用條件判斷到一上限後會計入一定值，若欲進行反向控制時，在程式條件判斷上必須行逐一速度遞減，直至速度歸零後即對反向進行移動，而鍵盤控制對應虛擬環境的顯示，會因為其物件當下的相對應運動關係如：擊球等動作，產生遲滯，遂無法即時的透過觀察物件運動狀態曉得其速度，亦無法曉得其控制方向；再者擊球的方向，會因為速度逐一遞進對應顯示會產生視覺暫留，對其在控球、等甚至於擊球產生更多的判斷不確定性。 以至於無法準確的控制球員停滯的定點甚至於區間，以及擊球的方向。 \n 透過約約束擊球角度，以及宣告一次橫向步進單位，降低控制的難易度以及增加判斷的直覺性。 \n PID 控制調整，根據控制無人載具的經驗，對應機體運動狀態的修正，針對 P (比例單元)的比例進行放大 D (微分單元)次之，硬體在對應參數條件下行的運動狀態，在步階輸入的靈敏度會增加，再者接近到所對應的步階量，其所進行的微分控制(直觀的觀察為剎車)靈敏度次之，而其對應位置的精度為 I (積分單元)控制，則會因為並未跟著其他單元進行放大對應的靈敏度會下降。以致可以快速的移動到該位置的信賴區間，但是無法定位準確。 \n PID 控制器的調整，會根據運動環境以及機構硬體的物理狀態等條件做影響，遂並未有恆常的參數值適性所有機構或是裝置。僅能針對個別控制器及對應的機構做性能需求的參數調整。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V5_運動控制修正_2019-0605-0002(音量調整) \xa0 \n \n \n \n', 'tags': '', 'url': 'B2 修正.html'}, {'title': 'B3 修正', 'text': 'B3 版本的修正項目，主要針對關於球員控制的配置，奇數桿件及偶數桿件分別由不同的玩家進行控制；以及對應球檯周邊的軌道、送球機構的物件配置。 \n Onshape_Football_table_B3_V6 \xa0 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_V-rep_40423217_Football_P2_R2_B3_V2_2019-0613-1730 \xa0 \n \n \n 最終送球機構並沒有在 V-rep 的機構模擬中順利運作，原因為之於 V-rep 物理引擎之設定條件掌握技術的相當的粗糙，而且和以往接觸到的剛體運動模擬軟體之設定邏輯不太一樣，或是說必須由使用者逐一調整的項目之多。以至於僅能單就體積、重量級相對運動關係(joint)去做設變。 \n', 'tags': '', 'url': 'B3 修正.html'}, {'title': '細部設計與 BOM', 'text': '手足球零件格式說明 \n 手足球零件格式說明 \n 零件 BOM \n 手足球零組件材料表 (含零組件下載連結) \n 零件尺寸圖 \n 零件尺寸圖 \n 零件部分組裝圖 \n 零件部分組裝圖 \n 3D 零組件爆炸圖 \n 3D 零組件爆炸圖 \n', 'tags': '', 'url': '細部設計與 BOM.html'}, {'title': 'V-rep 動態模擬', 'text': '國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_2019-0606-1630 \xa0 \n \n \n', 'tags': '', 'url': 'V-rep 動態模擬.html'}, {'title': '送球機構設計與模擬', 'text': 'V1 RobotiQ Gripper \n Onshape_UR_Two_finger_gripper \xa0 \n \n \n 該檔案附件在 Onshape 對應連結之下名稱為「Two_finger_Gripper_dynamic_simply.slvs」 \n \n 本項利用 UR 手臂搭配 RobotiQ 夾爪對球進行夾持，目前處於 V-rep 嘗試模擬階段尚未完成夾具的動態模擬。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_Gripper_2019-0611-2100 \n \n V2 滑塊控制控制機構，將橫向平面移動轉為垂直運動 \n \n Onshape_Football_table_B3_V7 \xa0 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_V-rep_40423217_Football_P2_R2_B3_V2_2019-0613-1730 \n \n \n \n \n', 'tags': '', 'url': '送球機構設計與模擬.html'}, {'title': '系統功能展示', 'text': '手足球模擬系統功能展示 (模擬展示與說明影片) \n 透過條件判斷搭配鍵盤控制。 \n 原先參照的球員左右移動為速度控制，其所控制方式為速度疊加(段落程式如下) \n \n up_down_velocity=up_down_velocity+dVel1*10 \n up_down_velocity=up_down_velocity-dVel1*10 \n 即隨觸鍵次數對速度做累進，剎車亦然(其實沒所謂的剎車，僅是以反方向做速度遞減，若要停止遞進需觸及空白鍵停止一切運動狀態)，儘管在其後亦有條件宣告速度上限，但是在對於球員操作上仍然不夠直觀。在於及球有效角度的限制，其餘行程其實不必要，再加上模擬顯示對應視覺暫留，使用者無法判斷及球方向為何。遂修正由位置進行擊球控制。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V_rep_Football_player_P0_R2_V1_2019-0530-2117 \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V_rep_Football_player_P0_R2_V2_2019-0530-2234 \n \n \n 原先參照的球員左右移動為速度控制，其所控制方式為速度疊加(段落程式如下) \n \n if (auxiliaryData[1]==2009) then right_left_velocity=right_left_velocity+dVel2/0.0025 \n if (auxiliaryData[1]==2010) then right_left_velocity=right_left_velocity-dVel2/0.0025 \n 即隨觸鍵次數對速度做累進，剎車亦然(其實沒所謂的剎車，僅是以反方向做速度遞減，若要停止遞進需觸及空白鍵停止一切運動狀態)，儘管在其後亦有條件宣告速度上限，但是在對於球員操作上仍然不夠直觀，之於操作者可以控制球員停滯的區間不夠安定。遂採用位置不盡方式取代速度遞進控制，鎖住之於個點位置移動的快慢，操作者若需要更加得快速到達預想的位置，則可以透過觸鍵頻率的增減決定。 \n if (auxiliaryData[1]==2009) then right_left_position=right_left_position+dp*0.02 \n if (auxiliaryData[1]==2010) then right_left_position=right_left_position+dp*-0.02 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_Football_table_P0_R2_V5_2019-0604-1725(音量調整) \n \n 造因於球員本身的碰撞設定和球檯重疊，遂球員移動若未設定邊界，其在接觸球檯時會產生 V-rep 物理引擎運算碰撞造成的物件不穩定性，因此設定超出移動邊界時回到遽距離球檯壁面仍可以保持 0.05m 的間隙。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V5_運動控制修正_2019-0605-0002(音量調整) \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_2019-0606-1630 \n \n \n 完整程式參見個人倉儲  issues 。 \n', 'tags': '', 'url': '系統功能展示.html'}, {'title': '結案報告', 'text': '國立虎尾科技大學 - 機械設計工程系 - 協同產品設計實習期末報告 - 40423217 - 阮奕誠 \xa0 \n', 'tags': '', 'url': '結案報告.html'}, {'title': '專案口頭簡報', 'text': '各組利用倉儲中的 Reveal.js 進行結案簡報 (結案口頭簡報) \n', 'tags': '', 'url': '專案口頭簡報.html'}, {'title': '專案報告書', 'text': '各組完成 html 與 pdf 格式之手足球專案結案報告 (文字結案報告書)', 'tags': '', 'url': '專案報告書.html'}]};