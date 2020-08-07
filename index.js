const app = new Vue({
    el: '#app',
    data: {
        //エラーメッセージの表示
        errmsg: false,
        //エラー入力欄の内容
        inputText: '',
        //完了/未完了
        isDone: false,
        items: [
            {
                title: 'example task1',
                id: 1,
                isDone: false
            }, {
                title: 'example task2',
                id: 2,
                isDone: true
            }
        ]
    },
    methods: {
        //タスク追加
        addtask: function () {
            if(!this.inputText){
                return this.errmsg = true
            }
            this.items.push({
                title: this.inputText,
                isDone: false,
            });
            this.errmsg = false
            this.inputText=""
        },
        //テキスト入力欄のクリア
        clear: function () {
            this.inputText = ""
        },
        //完了済みタスクをまとめて破棄
        trashtask: function(){
            this.items = this.items.filter(function (item){
                return item.isDone === false;
            });
        },
        //ゴミ箱アイコン押下で対象タスクを一つずつ破棄
        deletetask: function(index){
            this.items.splice(index,1)
        }
    }
})
