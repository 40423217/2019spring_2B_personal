var tipuesearch = {"pages": [{'title': '期末報告總攬', 'text': '本期末報告總結於於期中操作之V-rep BubbleRob Tutorial 以及本學期 Football table 專案。透過上述兩專案的執行過程中，利用協同及可攜工具進行機械設計，如：Onshape、Github、Ungit、小組 CMSfly等工具。 \n 不需要個別對協同工具去做介紹，說明該項工具在此專案操作的問題，或是延伸的理解。 \n \n /** \n Onshape： 行專案協同繪圖，可有效地取代複雜且難取得的坊間繪圖軟體。在學期間專案並沒有受制於保密或專利等約束，遂在雲端免費且開源的平台上，可有效的且有彈性的操作，不須存檔且隨時隨地即可檢視、編輯(此為網際網路穩定區域)，另立分支邀請夥伴，匯入、匯出等等，甚至可以自行為需要功能進行補充。 僅管免費註冊帳好本身並未受到個人化的保護，擁有連結或是透過 public chnnal 找到專案的使用者，也只能進行檢視，無法參與編輯。 \n **/ \n \n Github 和 Ungit： \n \n 專案一：Football table \n 專案二：Routh sweeping robot 由 BubbleRob Tutorial 自行延伸 \n 各組員必須在 W17 上課之前完成期末報告簡報影片上傳與連結, 並放入本網站之"專案口頭簡報"頁面. \n 各組必須在 W17 上課之前完成分組期末報告 pdf 檔案, 上傳至各分組的倉儲中, 並將連結提供至本網站之"專案報告書"頁面. \n 期末報告期間每週對各成員之評分依據下列要項: \n \n 各組員在各分組網站中所呈現之任務執行內容, 並拍攝操作影音 mp4, 將影片標題署名"國立虎尾科技大學-機械設計工程系-協同產品設計實習 B - 學號及影片主題" 後上傳, 並將影片嵌入本網站各章節頁面中. \n 每組將提供組長本網站倉儲協同管理權, 專門處理各組員在各分支或 master 分支中的 pull requests, 各組員必須透過以 bg1, bg2 .... 命名之分支對本倉儲改版, 確定內容無誤後, 再設法由組長處理各 pull requests 之內容合併, Github Pages 將設為與 master 分支對應, 各組員之評分將依據各 pull requests 中所列出之學號與內容判定. \n 請各組員勿將影片檔、圖片檔案或各式檔案送至本倉儲, 影片檔案請上傳至 Youtube, 圖片檔案請送至各組倉儲網站, 各式檔案則請送至各組員 Google Drive 區, 並以嵌入 (iframe), 將影片放入本網站, 其餘圖片或檔案則透過 img 或 a 標註放入各相關頁面. \n \n 2b 分組倉儲 \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g1 \xa0 ( 2bg1 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g2 \xa0 ( 2bg2 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g3_1 \xa0( 2bg3 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g4 \xa0 ( 2bg4 ) \n https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g5 \xa0( 2bg5 ) \n \n', 'tags': '', 'url': '期末報告總攬.html'}, {'title': '執行規劃', 'text': "按照工業設計中的描述性設計流程，在街道專案的第一步先來定義這是是否為定義完善的問題。檢視整體手足球的專案需求，為一定義不完善的問題，一來規格不明確，二來雖有指定軟體或建議工具，單騎使用的方法以及呈現的展演未被宣告，遂為一定義不完善問題。 \n 概略的規格及參考專利在： Table Foosball 動態系統模擬專案 \n Step1：Rough Modeling 針對功能性和需要的輪廓進行概略性的建模 \n \n 建置必要的模型，如球檯、球員、球桿、球(可由V-rep進行直接新增)。 \n 過去學習歷程養成的壞習慣，導致一開始盲目地對著規格定義不明確的工程圖套描，沒有進一步的思考究竟現階段出現模型的目的。在該階段之所以需要模型，源自因為需要可以進行模擬控制的實體，遂模型本身並非主體，而是要能夠搭配V-rep進行物件環境碰撞、程式控制等模擬。 \n 按照課程所提供不完整的規格工程圖建模完成之物件，一來會發現其本身提供的史寸步完善，二來再匯入V-rep 進行模擬後尤其進入 Object Proterties 下的 Body is Dynamic 時，物間開始就其體積對應的重量，在環境產身對應的物理量並且和他物件產生碰撞(含接觸)時，軟體的附載會急遽增加。原因來自於 V-rep和所接觸的 CAE 軟體，物件匯入的方式類似，透過將物件進行網格切割並且，對每個網格進行有限元素等參數計算，行而可在環境中獲得對應條件的狀態。 \n 此種方式會受到模型特徵影響甚遽，物件本身過於複雜之外行如圓角、曲面或甚至是段距離內的特徵扭曲，都可能造成網格切割不完整甚至是轉換成 STL 時形成破面件(壁厚等於 0 的物件)。因此針對不同條件及想要獲得的不同結果，在進行類同於有限元素分析或是鋼體運動模擬等作業時，會針對物件功能對應條件行模型簡化。 \n 詳細建模過程可參考下一張連結： \n 國立虎尾科技大學_機械設計工程系_40423217_Football_Table_Onshape_module_Fall \n Onshape_針對模擬簡化後的模型 \n \n Step2：Object 物件關係 \n \n 簡化後的模型已經建立完成並且匯入 V-rep ，即進入第二階段物件關系。 \n 根據 BubbleRob_Tutorial 的操作過程熟悉 V-rep 物件關聯性之於物件本身的控制關係，以及其對於體積以及重量，關係於彼此物件連結的問定性及可靠性。 \n 針對 V-rep Football table 在放置球員時，當同一桿件玉放置多個球員時，起初物件較小遂不明顯，物件勳可以穩定的置於桿件上。但隨著接後的模擬針對簡化後的模型做些調整，除外型曲面的擊球面被修正，因為有機會在擊球時和傾斜的球檯面，受力形成運動死點而將球咬住；再者大小本身也增加了些，目的是除了在程式端增加擊球力道外，亦可透過球員本身的長度產生力矩上的助力。 \n Onshape_Football_table_V9 \xa0修正前 \n Onshape_Football_table_B2_V13 \xa0修正後 \n 綜合上述兩部分修正，已較前一版本球員要來的大。在放置於求桿上時，出現了問題。球桿的體積對應其重量在模擬環境中，無法撐起所放置的球員數量。透過觀察亦可發現當放置的球員樹為奇數時，中間的球員為支撐的支點，而兩側的球員亦是和球桿呈現組立(接觸)關係，再者以中間球員為支點呈槓桿關係。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_增加球員&PID運動控制調整_2019-0606-1135 \n 參見應連結 04：00 段落敘述錯誤，支點球員質量必須大於其餘兩側球員質量，且其落差必須接近2^8倍(一側為2^8倍，另一次即為(2^-1)^8倍)。 \n \n Step3：Body is dynamic 運動控制 \n \n 物件關係建構完成後，如何透過程式控制物件行對應需求的控制即反映。 \n 透過條件判斷搭配鍵盤控制。 \n 原先參照的球員左右移動為速度控制，其所控制方式為速度疊加 \n if (auxiliaryData[1]==2009) then right_left_velocity=dVel2/0.0025 \n if (auxiliaryData[1]==2010) then right_left_velocity=-dVel2/0.0025 \n 即隨觸鍵次數對速度做累進，剎車亦然(其實沒所謂的剎車 ，僅是以反方向做速度遞減，若要停止遞進需觸及空白鍵停止一切運動狀態)，儘管在其後亦有條件宣告速度上限，但是在對於球員操作上仍然不夠直觀，之餘操作者可以控制球員停滯的區間不夠安定。遂採用位置不盡方式取代速度遞進控制，鎖住之於個點位置移動的快慢，操作者若需要更加得快速到達預想的位置 ，則可以透過觸鍵頻率的增減決定。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_Football_table_P0_R2_V5_2019-0604-1725(音量調整) \n 造因於球員本身的碰撞設定和球檯重疊，遂球員移動若未設定邊界，其在接觸球檯時會產生 V-rep 物理引擎運算碰撞造成的物件不穩定性，因此設定超出移動邊界時回到遽距離球檯壁面仍可以保持 0.05m 的間隙。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V5_運動控制修正_2019-0605-0002(音量調整) \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_2019-0606-1630 \n 完整程式參見個人倉儲\xa0 issues 。 \n function sysCall_init()  forward_back_player= sim.getObjectHandle('Revolute_joint_A') -- forward_back_player= sim.getObjectHandle('Revolute_joint0') -- forward_back_player= sim.getObjectHandle('Revolute_joint1') \n right_left_handle= sim.getObjectHandle('Prismatic_joint_A') --MaxVel=20 --MaxAng=40  MaxPos=0.170  -- right_left_velocity=0  right_left_position=0  -- forward_back_velocity=0  forward_back_position=0 -- up_down_velocity=0  dVel1=5;  dVel2=10;  dp=1;  sim.setJointTargetPosition(forward_back_player,forward_back_position) -- sim.setJointTargetVelocity(forward_back_player,forward_back_velocity) -- sim.setJointTargetVelocity(up_down_handle,up_down_velocity)  sim.setJointTargetPosition(right_left_handle,right_left_position) -- sim.setJointTargetVelocity(right_left_handle,right_left_velocity) end \n function sysCall_actuation()  message,auxiliaryData=sim.getSimulatorMessage()  while message~=-1 do  if (message==sim.message_keypress) then  if (auxiliaryData[1]==32) then --According to ASCII Table key[32] is space key. Press space key stop all actions. -- right key  right_left_position=0  -- right_left_velocity=0  forward_back_position=0 -- forward_back_velocity=0  sim.setJointForce(forward_back_player, 0) -- sim.setJointForce(up_down_handle, 0)  sim.setJointForce(right_left_handle, 0)  break  else  sim.setJointForce(forward_back_player, 1000000) --The force of hit the ball.  sim.setJointForce(right_left_handle, 1)  end \n if (auxiliaryData[1]==2007) then -- up key  forward_back_position=7  -- forward_back_velocity=dVel1*10 -- up_down_velocity=dVel1*10  --right_left_velocity=right_left_velocity+dVel1*1.3  end \n if (auxiliaryData[1]==2008) then -- down key  forward_back_position=-7  -- forward_back_velocity=-dVel1*10 -- up_down_velocity=-dVel1*10  --right_left_velocity=right_left_velocity-dVel1*1.3  end \n  if (auxiliaryData[1]==2009) then -- left key  right_left_position=right_left_position+dp*0.02  -- right_left_velocity=dVel2/0.0025  --up_down_velocity=up_down_velocity+dVel2/0.5  end \n if (auxiliaryData[1]==2010) then -- right key  right_left_position=right_left_position+dp*-.02  -- right_left_velocity=-dVel2/0.0025  --up_down_velocity=up_down_velocity-dVel2/0.5  end \n end  message,auxiliaryData=sim.getSimulatorMessage()  end \n if right_left_position>MaxPos then  right_left_position=0.165  end  if right_left_position<-MaxPos then  right_left_position=-0.165  end   -- if right_left_velocity>MaxVel then -- right_left_velocity=-5 -- end -- if right_left_velocity<-MaxVel then -- right_left_velocity=5 -- end -- if up_down_velocity>MaxVel then -- up_down_velocity=-50 -- end -- if up_down_velocity<-MaxVel then -- up_down_velocity=50 -- end  sim.setJointTargetPosition(right_left_handle,right_left_position)  -- sim.setJointTargetVelocity(right_left_handle,right_left_velocity)  sim.setJointTargetPosition(forward_back_player,forward_back_position) -- sim.setJointTargetVelocity(forward_back_player,forward_back_velocity) -- sim.setJointTargetVelocity(up_down_handle,up_down_velocity) end \n \n", 'tags': '', 'url': '執行規劃.html'}, {'title': '手足球系統模擬', 'text': '專案成果摘要 \n 專案執行動機 \n 相關文獻探討 \n 專案執行成員 \n 執行使用套件 \n 專案執行過程規劃 \n 專案執行內容 \n 專案結論 \n', 'tags': '', 'url': '手足球系統模擬.html'}, {'title': '設計與繪圖', 'text': '按照工業設計中的描述性設計流程，在接到專案的第一步先來定義這是是否為定義完善的問題。 \n Step1：問題 \n \n 檢視整體手足球的專案需求，為一定義不完善的問題，一來規格不明確，二來雖有指定軟體或建議工具，單騎使用的方法以及呈現的展演未被宣告，遂為一定義不完善問題。 \n 瞭解為定義不完善問題後列出需求，以及待釐清項目： \n 手足球功能？ \n 操作者該控制的方式以及項目？ \n 球檯、球員和球的關係？ \n 如何給球以及接球(只離開球檯後)？ \n 虛擬環境中如何模擬？ \n \n Step2：說明問題 \n 手足球的功能？ \n 透過固定在球桿上的球員進行擊球，將球擊入對手球洞即可得分，多為偶數玩家參與。球桿控制權為交錯但不干涉，隨著靠近球洞單一球桿上球員數逐漸遞減。最後守門員留有一員及對手兩員。 \n 操作者能控制的項目？ \n 操作者主要藉由「旋轉」或「直進」球桿，以達控制固定在上的球員，進行擊球及控球更甚者等待等動作。 \n 球檯、球員和球的關係？ \n 球員被固定於球桿上，而球桿本身可以在球檯上所定位的孔洞中進行直進以及旋轉。球桿運動過程中球員本身特徵輪廓等，不能和球檯面或是彼此(因為交錯控制權遂若有干涉為對手球員)進行運動干涉。球僅能在球檯所圍出的場域進行碰撞、直進，且僅能由雙方球門離開。 \n 如何給球以及接球(只離開球檯後)？ \n 球僅能在球檯所圍出的場域進行碰撞、直進，且僅能由雙方球門離開。遂球門後必須有裝置進行捕捉，而送球需再求球檯中間，若為同一顆球(或同一批次)則必須要有送球(含接球)等機構建置。 \n 虛擬環境中如何模擬？ \n Step1：Rough Modeling 針對功能性和需要的輪廓進行概略性的建模 Step2：Object 物件關係 Step3：Body is dynamic 運動控制 \n Step3：分解成單元 \n Step4：資訊蒐集 \n Step5：分析資訊 \n Step6：創建 \n Step7：材料與科技 \n Step8：實驗 \n Step9：模型(樣品) \n Step10：設計成品 \n Step11：解決問題的想法 \n', 'tags': '', 'url': '設計與繪圖.html'}, {'title': '零組件尺寸分析', 'text': '手足球系統的零組件尺寸分析 (可行性分析) \n 概略的規格及參考專利在： Table Foosball 動態系統模擬專案 \n Step1：Rough Modeling 針對功能性和需要的輪廓進行概略性的建模 \n \n 建置必要的模型，如球檯、球員、球桿、球(可由V-rep進行直接新增)。 \n 過去學習歷程養成的壞習慣，導致一開始盲目地對著規格定義不明確的工程圖套描，沒有進一步的思考究竟現階段出現模型的目的。在該階段之所以需要模型，源自因為需要可以進行模擬控制的實體，遂模型本身並非主體，而是要能夠搭配V-rep進行物件環境碰撞、程式控制等模擬。 \n 按照課程所提供不完整的規格工程圖建模完成之物件，一來會發現其本身提供的史寸步完善，二來再匯入V-rep 進行模擬後尤其進入 Object Proterties 下的 Body is Dynamic 時，物間開始就其體積對應的重量，在環境產身對應的物理量並且和他物件產生碰撞(含接觸)時，軟體的附載會急遽增加。原因來自於 V-rep和所接觸的 CAE 軟體，物件匯入的方式類似，透過將物件進行網格切割並且，對每個網格進行有限元素等參數計算，行而可在環境中獲得對應條件的狀態。 \n 此種方式會受到模型特徵影響甚遽，物件本身過於複雜之外行如圓角、曲面或甚至是段距離內的特徵扭曲，都可能造成網格切割不完整甚至是轉換成 STL 時形成破面件(壁厚等於 0 的物件)。因此針對不同條件及想要獲得的不同結果，在進行類同於有限元素分析或是鋼體運動模擬等作業時，會針對物件功能對應條件行模型簡化。 \n 詳細建模過程可參考下一張連結： \n 國立虎尾科技大學_機械設計工程系_40423217_Football_Table_Onshape_module_Fall \n Onshape_針對模擬簡化後的模型 \n \n Step2：Object 物件關係 \n \n 簡化後的模型已經建立完成並且匯入 V-rep ，即進入第二階段物件關系。 \n 根據 BubbleRob_Tutorial 的操作過程熟悉 V-rep 物件關聯性之於物件本身的控制關係，以及其對於體積以及重量，關係於彼此物件連結的問定性及可靠性。 \n 針對 V-rep Football table 在放置球員時，當同一桿件玉放置多個球員時，起初物件較小遂不明顯，物件勳可以穩定的置於桿件上。但隨著接後的模擬針對簡化後的模型做些調整，除外型曲面的擊球面被修正，因為有機會在擊球時和傾斜的球檯面，受力形成運動死點而將球咬住；再者大小本身也增加了些，目的是除了在程式端增加擊球力道外，亦可透過球員本身的長度產生力矩上的助力。 \n Onshape_Football_table_V9 \xa0修正前 \n Onshape_Football_table_B2_V13 \xa0修正後 \n 綜合上述兩部分修正，已較前一版本球員要來的大。在放置於求桿上時，出現了問題。球桿的體積對應其重量在模擬環境中，無法撐起所放置的球員數量。透過觀察亦可發現當放置的球員樹為奇數時，中間的球員為支撐的支點，而兩側的球員亦是和球桿呈現組立(接觸)關係，再者以中間球員為支點呈槓桿關係。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_增加球員&PID運動控制調整_2019-0606-1135 \n 參見應連結 04：00 段落敘述錯誤，支點球員質量必須大於其餘兩側球員質量，且其落差必須接近2^8倍(一側為2^8倍，另一次即為(2^-1)^8倍)。 \n \n', 'tags': '', 'url': '零組件尺寸分析.html'}, {'title': '參數設計與繪圖', 'text': '手足球系統的零組件參數設計與繪圖 (零組件初步設計繪圖) \n 本章節延續前章節  Step2：Object 物件關系 \n Onshape_Football_table_V13 \xa0 \n \n 總體物件除了可以透過上述連結進入 Onshape 進行檢視以外，亦可由下方的側視圖了解，整體球檯在本次專案的設計規格以及其特徵。 \n 可以發現球檯本面，主體特徵是中間較高向兩側逐漸遞減高度的傾斜面，在最後一球感的下方為最低點，並在由該位置向後為傾高度。注藥布地可以參見文章最後連結，造因於當初進行物件組立完成後考量擊球問題，在尚未有完整的收球、送球機構時，為讓靜止的球可以有動能，並且讓球員可以有向的操作「接戰」動作，歲設計傾斜球檯面，以未能轉換成動能的方式行有效的擊球動作測試。 \n (如圖元所示球檯下極限至上極限為100mm) \n \n Onshape_Football_table_V6 \xa0 \n \n 第一版本正是匯入 V-rep 進行測試。 總體物件除了可以透過上述連結進入 Onshape 進行檢視以外，亦可由下方的側視圖了解，整體球檯在本次專案的設計規格以及其特徵。 \n 和最終版本最大特徵不同在於，其傾些面的方向是由中間最低點向兩側延伸，以及吊籃式的球桿位置，再者還包含球員擊球面的曲面特徵等。目的主要為第一階段的測試程式做驗證，其目的是確保運動狀態對應的程式運作正常，以及對應宣告的修正。 \n 其後測試過程中，除增加了球檯及球桿的總寬，目的為增加單一球桿的球員數量。在測試過程中逐一針對問題做物件特徵修正。其一為球員擊球面為曲面，使其在擊球過程有機會力量會通過球體形心(含質心)，其構成運動狀態的死點，遂在其後修正為憑質的倒角；其二為吊籃式的球桿位置，因吊籃式球桿位置在執行鏡射或是陣列時，其相對於直接在球檯面上建立位置顯得多餘，因此後續改版後除去； 再者大小本身也增加了些，目的是除了在程式端增加擊球力道外，亦可透過球員本身的長度產生力矩上的助力。 \n \n (該物件規格在左側特徵樹下的 Variable，或是直接點及圖原本身，即會在右下角顯示規格) \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-REP_Football_table_P0_R1_V2_test_2019-0524-1536 \xa0 \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V_rep_Football_player_P0_R2_V2_2019-0530-2234 \xa0 \n \n \n', 'tags': '', 'url': '參數設計與繪圖.html'}, {'title': 'B2 修正', 'text': 'Onshape_Football_table_B2 \xa0 \n 在B2版本所行之修正，其目的為有效在V-rep物理引擎進行模擬。 \n \n 造因於前版本物件在進行建模時，所考量的因素並未包含V-rep物理引擎模擬之特性，遂在以前版本為基礎進行特徵修正後，造成模擬上物理性質的干涉以、碰撞以及乘載問題等。 \n 較前一版本要大的球員。在放置於求桿上時，出現了問題。球桿的體積對應其重量在模擬環境中，無法撐起所放置的球員數量。遂透過對球桿兩側增加質量塊，間接地調整 球桿體積，已使得在和球員本身的體積倍數差距直接性的放大，同時亦對球員及球桿間的質量做修正。 \n 在放置多個球員時，當球桿本身在 V-rep 物理引擎中無法乘載球員時，會發現(尤其奇數特別明顯)球員在穿透傾倒時有其規則，位有意虛擬的支點進行對應物理量的港桿縮放。以奇數為例：若所有球員皆不進行重量修正(同重量)，至於桿件上時會出現無法乘載物件且彼此穿透的傾倒現象。其傾倒方式會以中間球員為支點對一方向做傾倒，而兩側的球員，彼此之於中間球員重量倍數為 2^8 倍。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_增加球員&PID運動控制調整_2019-0606-1135 \xa0 \n 透過觀察亦可發現當放置的球員樹為奇數時，中間的球員為支撐的支點，而兩側的球員亦是和球桿呈現組立(接觸)關係，再者以中間球員為支點呈槓桿關係。 \n \n', 'tags': '', 'url': 'B2 修正.html'}, {'title': 'B3 修正', 'text': '', 'tags': '', 'url': 'B3 修正.html'}, {'title': '細部設計與 BOM', 'text': '手足球零件格式說明 \n 手足球零件格式說明 \n 零件 BOM \n 手足球零組件材料表 (含零組件下載連結) \n 零件尺寸圖 \n 零件尺寸圖 \n 零件部分組裝圖 \n 零件部分組裝圖 \n 3D 零組件爆炸圖 \n 3D 零組件爆炸圖 \n', 'tags': '', 'url': '細部設計與 BOM.html'}, {'title': 'V-rep 動態模擬', 'text': '國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_2019-0606-1630 \xa0 \n \n \n', 'tags': '', 'url': 'V-rep 動態模擬.html'}, {'title': '送球機構設計與模擬', 'text': '\n \n', 'tags': '', 'url': '送球機構設計與模擬.html'}, {'title': '系統功能展示', 'text': '手足球模擬系統功能展示 (模擬展示與說明影片) \n 透過條件判斷搭配鍵盤控制。 \n 原先參照的球員左右移動為速度控制，其所控制方式為速度疊加(段落程式如下) \n \n up_down_velocity=up_down_velocity+dVel1*10 \n up_down_velocity=up_down_velocity-dVel1*10 \n 即隨觸鍵次數對速度做累進，剎車亦然(其實沒所謂的剎車，僅是以反方向做速度遞減，若要停止遞進需觸及空白鍵停止一切運動狀態)，儘管在其後亦有條件宣告速度上限，但是在對於球員操作上仍然不夠直觀。在於及球有效角度的限制，其餘行程其實不必要，再加上模擬顯示對應視覺暫留，使用者無法判斷及球方向為何。遂修正由位置進行擊球控制。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V_rep_Football_player_P0_R2_V1_2019-0530-2117 \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V_rep_Football_player_P0_R2_V2_2019-0530-2234 \n \n \n 原先參照的球員左右移動為速度控制，其所控制方式為速度疊加(段落程式如下) \n \n if (auxiliaryData[1]==2009) then right_left_velocity=right_left_velocity+dVel2/0.0025 \n if (auxiliaryData[1]==2010) then right_left_velocity=right_left_velocity-dVel2/0.0025 \n 即隨觸鍵次數對速度做累進，剎車亦然(其實沒所謂的剎車，僅是以反方向做速度遞減，若要停止遞進需觸及空白鍵停止一切運動狀態)，儘管在其後亦有條件宣告速度上限，但是在對於球員操作上仍然不夠直觀，之於操作者可以控制球員停滯的區間不夠安定。遂採用位置不盡方式取代速度遞進控制，鎖住之於個點位置移動的快慢，操作者若需要更加得快速到達預想的位置，則可以透過觸鍵頻率的增減決定。 \n if (auxiliaryData[1]==2009) then right_left_position=right_left_position+dp*0.02 \n if (auxiliaryData[1]==2010) then right_left_position=right_left_position+dp*-0.02 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_Football_table_P0_R2_V5_2019-0604-1725(音量調整) \n \n 造因於球員本身的碰撞設定和球檯重疊，遂球員移動若未設定邊界，其在接觸球檯時會產生 V-rep 物理引擎運算碰撞造成的物件不穩定性，因此設定超出移動邊界時回到遽距離球檯壁面仍可以保持 0.05m 的間隙。 \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V5_運動控制修正_2019-0605-0002(音量調整) \n \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_V-rep_V-rep_Football_table_P0_R2_V6_2019-0606-1630 \n \n \n 完整程式參見個人倉儲  issues 。 \n', 'tags': '', 'url': '系統功能展示.html'}, {'title': '結案報告', 'text': '', 'tags': '', 'url': '結案報告.html'}, {'title': '專案口頭簡報', 'text': '各組利用倉儲中的 Reveal.js 進行結案簡報 (結案口頭簡報) \n', 'tags': '', 'url': '專案口頭簡報.html'}, {'title': '專案報告書', 'text': '各組完成 html 與 pdf 格式之手足球專案結案報告 (文字結案報告書)', 'tags': '', 'url': '專案報告書.html'}]};