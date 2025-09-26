// JavaScript学習用サンプルコード

console.log("JavaScript学習開始！");

// 基本的な変数の宣言
let message = "こんにちは、JavaScript!";
const PI = 3.14159;
var oldStyle = "古いスタイルの変数宣言";

// 関数の例
function greet(name) {
    return `こんにちは、${name}さん！`;
}

// アロー関数の例
const add = (a, b) => a + b;

// サンプル実行関数
function runExample() {
    const output = document.getElementById('output');

    const results = [
        `メッセージ: ${message}`,
        `円周率: ${PI}`,
        `関数実行: ${greet("太郎")}`,
        `計算結果: 5 + 3 = ${add(5, 3)}`,
        `現在時刻: ${new Date().toLocaleString()}`
    ];

    output.innerHTML = results.map(result => `<p>${result}</p>`).join('');

    // コンソールにも出力
    results.forEach(result => console.log(result));
}