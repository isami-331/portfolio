// スクロール時にヘッダーの状態を切り替える
window.addEventListener("scroll", function() {
    var header = document.querySelector(".site-header");
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
 // HTMLから氏名とふりがなの<input>要素を取得
 const nameInput = document.getElementById("name");
 const nameKanaInput = document.getElementById("name_kana");

 // エラーメッセージを表示する<span>要素を取得
 const nameError = document.getElementById("nameError");
 const nameKanaError = document.getElementById("nameKanaError");

 // 送信ボタンを取得
 const submitButton = document.querySelector(".submit");

 // 入力フォームの内容が変更されたときに呼び出される関数
 function validateForm() {
     // 氏名とふりがなの値を取得
     const nameValue = nameInput.value;
     const nameKanaValue = nameKanaInput.value;

     // 氏名が空白の場合、エラーメッセージを表示
     if (nameValue.trim() === "") {
         nameError.style.display = "block";
     } else {
         nameError.style.display = "none"; // エラーメッセージを非表示
     }

     // ふりがなが空白の場合、エラーメッセージを表示
     if (nameKanaValue.trim() === "") {
         nameKanaError.style.display = "block";
     } else {
         nameKanaError.style.display = "none"; // エラーメッセージを非表示
     }

     // どちらも入力されている場合、送信ボタンを有効化しボタンの色を変更
     if (nameValue.trim() !== "" && nameKanaValue.trim() !== "") {
         submitButton.disabled = false;
         submitButton.style.backgroundColor = "#2778be"; // ボタンの色を変更
     } else {
         submitButton.disabled = true;
         submitButton.style.backgroundColor = "#b3b3b3"; // ボタンの色を変更
     }
 }

 // 入力フォームの内容が変更されたときにvalidateForm関数を呼び出す
 nameInput.addEventListener("input", validateForm);
 nameKanaInput.addEventListener("input", validateForm);

 // ページ読み込み時にも一度validateForm関数を呼び出して初期状態を設定
 validateForm();
 window.addEventListener("scroll", function() {
    var icons = document.querySelectorAll(".nav__item a .icon"); // すべてのアイコン要素を取得

    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];

        if (window.scrollY > 0) {
            icon.style.height = "0px"; // スクロールされたらアイコンのheightを0にする
        } else {
            icon.style.height = "50px"; // スクロールがトップに戻ったらheightを元に戻す（例: 40px）
        }
    }
});

// ロゴ要素を取得
const logoImage = document.getElementById("logo-image");
const logoLink = document.getElementById("logo-link");

let isAnimationStopped = false; // アニメーションの状態を管理

// ロゴクリック時の処理
logoLink.addEventListener("click", function(event) {
    event.preventDefault(); // リンクのデフォルト動作を無効化
    
    if (isAnimationStopped) {
        logoImage.style.animation = ""; // アニメーションをリセット
    } else {
        logoImage.style.animation = "none"; // アニメーションを停止
    }

    isAnimationStopped = !isAnimationStopped; // アニメーションの状態を反転
});

   // JavaScriptコード
   let isFront = true;

   function flipCard(card) {
       const front = card.querySelector('.front');
       const back = card.querySelector('.back');

       if (isFront) {
           front.style.display = 'none';
           back.style.display = 'block';
       } else {
           front.style.display = 'block';
           back.style.display = 'none';
       }

       isFront = !isFront;
   }