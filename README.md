# TitechSwimTeam

東工大水泳部のHPの原案です。

----
## 更新

更新する際に変更するのは以下です。

* index.htmlの.news内の</table>直前に挿入。試合日程とか部活の用事とか。
```html
<table>
   ...
   <!-- 以下が追記する内容 -->
   <tr>
      <td>日付</td>
      <td>お知らせ内容</td>
   </tr>
</table>
```
* about.htmlの記事の中の部員の人数の変更
* result.htmlの競泳記録のform>select内に新年度を追加。selectedを新年度のものに。
```html
<select size="1" name="year">
   ...
   <option value="去年度">去年度</option>
   <option value="新年度" selected>新年度</option>
</select>
```
* result.htmlに新年度のtableタグを、最後の</table>直後に挿入。showクラスを付け替える。
```html
<table class="swim-record 新年度 show">
   <tr>
      <th>新年度競技結果</th>
   </tr>
   <tr>
      <td><a href="./record.html#新年度大会名">試合名</a></td>
   </tr>
   ...
</table>
```
* member.htmlの.members内の部員の学年の変更、新入生の追加。`<li><a href="#tamaki-asahi">玉城旭</a></li>`のaタグの#以降とaタグの中身は対応させてください。
* member.htmlの.member内の<div class="memvber">直後の引退した4年生の記事の削除。対応する</div>直前に新入生の記事の挿入。
```html
<div class="member">
   ...
   <!-- 以下が削除・追加する内容のフォーマット -->
   <h3 class="name" id="aタグの#以降と同じ値">名前</h3>
   <!-- 玉城旭の例では<h3 class="name" id="tamaki-asahi">玉城旭</h3> -->   
   <div class="flex-box-member2">
      <img src="表示する画像のURL" alt="" width="200" height="200">
      <table>
         <tr>
           <th>所属</th>
           <td></td>
         </tr>
         <tr>
           <th>出身高校</th>
           <td></td>
         </tr>
         <tr>
           <th>S1</th>
           <td>得意種目</td>
         </tr>
         <tr>
           <th>Pos.</th>
           <td>水球のポジション。スタメンだけでもいいかも</td>
         </tr>
         <tr>
           <th>一言</th>
           <td>本人に聞いてください</td>
         </tr>
      </table>
   </div>
   ...
</div>
```
* record.htmlの</tbody>直前に以下を追加
```html
<tbody>
   ...
   <!-- 個人種目のフォーマット -->
   <tr class="年度試合名 名前のローマ字表記 種目 長水路短水路">
      <!--
            年度試合名は2019rikousenのように続けて書いてください
            試合名は以下に従うこと。
            春季　　　: shunki
            理工選　　: rikousen
            東部　　　: toubu
            夏季　　　: kaki
            シード校　: seed
            関カレ　　: kankare
            ウィンター: winter
            冬季　　　: touki

            名前のローマ字表記はmember.htmlで#以降と同じにしてください

            種目は50Frのように書いてください。
            種目はFr(自由形),Ba(背泳ぎ),Br(平泳ぎ),Fly(バタフライ),IM(個人メドレー),FR(フリーリレー),MR(メドレーリレー)のいずれか

            長水路ならlong、短水路ならshortとしてください
      -->

      <td>姓</td>
      <td>名</td>
      <td>種目</td>
      <td>タイム</td>
      <td>長水路短水路</td>
      <td>試合名</td>
      <td>開催年</td>
      <td>会場</td>
   </tr>
   <!-- 開催名、会場はすでに公開されているHPを参考にしてください -->
   <!-- リレー種目のフォーマット -->
   <tr class="年度試合名 長水路短水路">
      <td>第一泳者の姓</td>
      <td>名</td>
      <td rowspan="4">種目</td>
      <td rowspan="4">タイム</td>
      <td rowspan="4">長水路短水路</td>
      <td rowspan="4">試合名</td>
      <td rowspan="4">開催年</td>
      <td rowspan="4">会場</td>
   </tr>
   <tr class="年度試合名(上と同じ)">
      <td>第二泳者の姓</td>
      <td>名</td>
   </tr>
   <tr class="年度試合名(上と同じ)">
      <td>第三泳者の姓</td>
      <td>名</td>
   </tr>
   <tr class="年度試合名(上と同じ)">
      <td>第四泳者の姓</td>
      <td>名</td>
   </tr>
   ...
</tbody>
```
