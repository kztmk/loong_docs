---
sidebar_position: 5
---

# X アカウント画面

**概要:** X のアカウント一覧画面です。複数の X アカウントが登録できます。制限は PC の処理能力によります。

- X のアカウント情報
- X へのログイン時のクッキー情報
- 投稿ポスト

これらすべては PC 内部に保存されます。JSON 形式のテキストファイルですので、読み込み、書込みの時間、ファイルの破損の可能性など PC の性能に依存します。

表示、保存に時間がかかるようでしたら PC を分けるなどを検討してください。

## X アカウント作成・編集・削除

<div style={{ textAlign: 'center' }}>
  <img
    src={require('@site/docs/basics/img/ch02_03.jpg').default}
    alt="Topic 03 Image"
    className="center"
  />
</div>

「X アカウント一覧」画面では、X アカウントの作成、編集、保存ができます。また、作成した X アカウントはメイン画面に表示されます。

X アカウントを新規作成するには、「新規 X アカウント追加」ボタンをクリックします。

## X アカウント新規追加・更新

<div style={{ textAlign: 'center' }}>
  <img
    src={require('@site/docs/basics/img/ch02_04.jpg').default}
    alt="Topic 04 Image"
    className="center"
  />
</div>

新規追加、または、一覧の編集ボタンをクリックすると「X アカウント新規追加・更新」フォームを表示します。

- アカウント名はログイン時に使用する場合もありますので、「@」から始まる X の ID を入力します。
- 表示名は、ご自分でアカウントの区別の付くものにしてください。
- ログイン方法は、アカウント作成に使用された方法を選択してください。
- パスワードは、それぞれのログインに使用するパスワードを入力します。
- 備考はメモに使用してください。
- ハッシュタグは、アカウントで良く使われるハッシュタグを登録しておけば、ポスト作成時に簡単に追加できます。

## X アカウントの保存

<div style={{ textAlign: 'center' }}>
  <img
    src={require('@site/docs/basics/img/ch02_05.jpg').default}
    alt="Topic 05 Image"
    className="center"
  />
</div>

すべての内容を入力後、「保存」ボタンをクリックします。

## アカウント一覧

<div style={{ textAlign: 'center' }}>
  <img
    src={require('@site/docs/basics/img/ch02_06.jpg').default}
    alt="Topic 06 Image"
    className="center"
  />
</div>

登録したアカウントが一覧に追加されます。

- 一番左の編集ボタンで編集フォームを表示します。
- 2 番目のゴミ箱ボタンで登録アカウントを削除します。
- 3 番目のログインボタンでブラウザを開き、自動ログインします。
