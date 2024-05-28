---
sidebar_position: 7
---

# X への予約投稿の自動登録

**概要:** X では、予約ポストができます。予約ポストとは、事前にポストを作成しておき設定した日時になると X で自動公開されます。

Loong（ロン）では、予約ポストをブラウザの自動操縦によって行います。そのために、予約ポストに公開日時を設定します。

## 予約ポストの時刻設定するポストを選択

<div style={{ textAlign: 'center' }}>
  <img src={require('@site/docs/basics/img/ch06_01.jpg').default} alt="予約時刻一括設定のためポストを選択" className="center" />
</div>

公開時刻を設定するポストを選択します。選択は、ポストの左側チェックボックスを ON にします。

ポストを選択すると、一括操作ボタンが有効になります。

「予約時刻をセット」ボタンをクリックします。

## 公開日時の設定

<div style={{ textAlign: 'center' }}>
  <img src={require('@site/docs/basics/img/ch06_04.jpg').default} alt="Topic 07 Image" className="center" />
</div>

「予約時刻をセット」ボタンをクリックすると、公開日時設定用のフォームを表示します。

**設定項目**

- 開始日
- 終了日
- 開始時刻
- 終了時刻
- 間隔（分、または、時）

以上をセットし「作成」ボタンをクリックすると選択したポストに公開日時が設定されます。

<div class="warning">
  <h4>注意</h4>
  <p>予約投稿ですので、過去の日時は設定できません。また、十分な余裕をもった設定にしてください。</p>
  <p>Xの仕様上18ヶ月先以上は設定できません。</p>
</div>

## 公開時刻設定方法

<div style={{ textAlign: 'center' }}>
  <img src={require('@site/docs/basics/img/ch05_01.jpg').default} alt="Topic 08 Image" className="center" />
</div>

公開時刻は、以下のように決められます。

1.  最初のポストに開始日の開始時刻をセット
2.  セットした日時に設定された間隔を追加し、次のポストの公開日時とする。
3.  公開日時が終了時刻前であれば、その公開日時をセット
4.  公開日時が終了時刻を過ぎていた場合には、翌日の開始時刻をセット
5.  ただし、終了日を過ぎていた場合には終了
6.  上記を繰り返す

さきほどの設定では、

1 つめのポスト - 6 月 2 日 3:00AM（開始日、開始時刻）
　 2 つめのポスト - 6 月 2 日 4:00AM (前回の公開日時に、1 時間の間隔を追加、終了時刻内）
　 3 つめのポスト - 6 月 3 日 3:00AM (前回の公開日時に 1 時間を追加したが終了時刻を過ぎていたため翌日の開始時刻）
　 4 つめのポスト - 6 月 3 日 4:00AM (前回の公開日時に、1 時間の間隔を追加、終了時刻内）

と、つづきます。

すべてのポストへ設定が完了するか、終了日が来るかで設定終了します。

## 公開日時が設定

<div style={{ textAlign: 'center' }}>
  <img src={require('@site/docs/basics/img/ch06_05.jpg').default} alt="Topic 08 Image" className="center" />
</div>

予約時刻が設定されました。