/**
テキストエディタの生成(中身空)
引数１： 作成する場所のid
戻り値： Quillエディタの生成情報
*/
function QuillEditorMake(make_id) {

    var toolbarOptions; // ツールバーの機能設定
    var quill; // エディタ情報
    var themes = set_themes(); // エディタのテーマ（snow , bubble）

    // ツールバー機能の設定
    toolbarOptions = [
        //見出し
        [{
            'header': [1, 2, 3, 4, 5, 6, false]
        }],
        //フォント種類
        /*[{
            'font': []
        }],*/
        //文字寄せ
        [{
            'align': []
        }],
        //太字、斜め、アンダーバー
        ['bold', 'italic', 'underline'],
        //文字色
        [{
                'color': []
            },
            //文字背景色
            {
                'background': []
            }
        ],
        // リスト
        [{
                'list': 'ordered'
            },
            {
                'list': 'bullet'
            }
        ],
        //インデント
        [{
            'indent': '-1'
        }, {
            'indent': '+1'
        }],
        //画像挿入
        ['image'],
        //動画
        ['video'],
        //数式
        // ['formula'],
        //URLリンク
        ['link']
    ];

    //渡ってきたID名に「#」をくっつける
    make_id = '#' + make_id;

    //エディタの情報を生成
    quill = new Quill(make_id, {
        modules: {
            //ツールバーの設定
            toolbar: toolbarOptions,
        },
        placeholder: '入力してください',
        //ツールバーのあるデザイン
        theme: themes, //'snow' or 'bubble'
    });

    return quill;
}



/**
テキストエディタの生成(中身有り)
引数１： 作成する場所のid
引数２： 表示させるJSONテキスト
戻り値： Quillエディタの生成情報
*/
function QuillUpdateEditorMake(make_id, json_text) {

    var toolbarOptions // ツールバーの機能設定
    var quill // エディタ情報
    var themes = set_themes(); // エディタのテーマ（snow , bubble）

    // ツールバー機能の設定
    toolbarOptions = [
        //見出し
        [{
            'header': [1, 2, 3, 4, 5, 6, false]
        }],
        //フォント種類
        [{
            'font': []
        }],
        //文字寄せ
        [{
            'align': []
        }],
        //太字、斜め、アンダーバー
        ['bold', 'italic', 'underline'],
        //文字色
        [{
                'color': []
            },
            //文字背景色
            {
                'background': []
            }
        ],
        // リスト
        [{
                'list': 'ordered'
            },
            {
                'list': 'bullet'
            }
        ],
        //インデント
        [{
            'indent': '-1'
        }, {
            'indent': '+1'
        }],
        //画像挿入
        ['image'],
        //動画
        ['video'],
        //数式
        ['formula'],
        //URLリンク
        ['link']
    ];

    //渡ってきたID名に「#」をくっつける
    make_id = '#' + make_id;

    //エディタの情報を生成
    quill = new Quill(make_id, {
        modules: {
            //ツールバーの設定
            toolbar: toolbarOptions
        },
        placeholder: '入力してください',
        //ツールバーのあるデザイン
        theme: themes //'snow' or 'bubble'
    });

    //表示させる文章データを取得
    json_data = JSON.parse(json_text);

    //データを表示
    quill.setContents(json_data);

    // brが失われる場合の補完
    make_id = make_id + ' .ql-editor';
    var htmlstr = String($(make_id).html());
    $(make_id).html(set_quill_br(htmlstr));

    return quill;
}


/**
テキストページ生成
エディタで作ったデータを表示させる側（編集不可）の設定
引数： 作成する場所のid
引数２： 表示させるJSONテキスト
戻り値： Quillエディタの生成情報
*/
function QuillPageMake(make_id, json_text) {

    var quill; //エディタ情報
    var json_data; //エディタに表示させるデータ（json形式）

    //渡ってきたID名に「#」をくっつける
    make_id = '#' + make_id;

    //エディタの情報を生成
    quill = new Quill(make_id, {
        //ツールバー無デザイン
        theme: 'bubble'
    });
    //エディタを入力不可にする
    quill.disable();

    //表示させる文章データを取得
    json_data = JSON.parse(json_text);

    //データを表示
    quill.setContents(json_data);

    $(make_id).html = set_quill_br(String($(make_id).html));

    // brが失われる場合の補完
    var htmlstr = String($(make_id).html());
    $(make_id).html(set_quill_br(htmlstr));

    return quill;
}

// テーマ設定（PCとスマホで切り替える画面幅で判定）
function set_themes() {
    var themes;
    if (window.parent.screen.width > 800) {
        themes = "snow";
    } else {
        themes = "bubble";
    }
    return themes;
}
document.addEventListener("DOMContentLoaded", ()=> {
    quill = new Quill('#quill', {
        //ツールバーのあるデザイン
        theme: 'snow', //'snow' or 'bubble'
    });
    quill.setContents({"ops":[{"insert":"\u3088\u3046\u3053\u305d\u3000"},{"attributes":{"color":"#e60000","bold":true},"insert":"%val:usr:lastName% %val:usr:firstName%"},{"insert":" \u69d8"},{"attributes":{"align":"center","header":1},"insert":"\n"},{"insert":"\u6b8b\u308a\u30dd\u30a4\u30f3\u30c8\u3000"},{"attributes":{"color":"#e60000","bold":true},"insert":"100 "},{"insert":"\u30dd\u30a4\u30f3\u30c8"},{"attributes":{"align":"center","header":1},"insert":"\n"},{"insert":"\n"},{"attributes":{"align":"center","indent":1},"insert":"\n"},{"insert":"LINE\u914d\u4fe1\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u3064\u3044\u3066\u3054\u7d39\u4ecb"},{"attributes":{"header":2},"insert":"\n"},{"attributes":{"align":"center"},"insert":"\n"},{"attributes":{"align":"center"},"insert":{"video":"https:\/\/www.youtube.com\/embed\/zcYzMhtE0RA?showinfo=0"}},{"attributes":{"align":"center"},"insert":"\n\n"}]});
    quill.disable();
});
