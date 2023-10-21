import { atom } from "recoil";

/* ログイン画面、新規登録画面 */

/* エラーメッセージの状態を保持するためのもの
文字列型かnullを持つことができます。エラーメッセージがある場合、その内容が保持され、エラーがない場合はnullとして保持
*/
export const errorMessageState = atom<string | null>({
    key: "errorMessageState",
    default: null,
});

/* ユーザーが入力するメールアドレスの状態を保持するためのもの*/
export const emailState =atom<string>({
    key:"emailState",
    default: "",
});

/* ユーザーが入力するパスワードの状態を保持するためのもの */
export const passwordState = atom<string>({
    key:"passwordState",
    default: "",
});

/* ユーザーが入力するユーザー名の状態を保持するためのもの */
export const usernameState =atom<string>({
    key:"usernameState",
    default: "",
});

/*ユーザーが入力する確認用パスワードの状態を保持するためのもの  */
export const confirmPasswordState =atom<string>({
    key:"confirmPasswordState",
    default: "",
});

/* Todo一覧 */
export type Todo = {
    id:string;
    title:string;
    content: string;
    status: 'Completed' | 'Uncompleted';
};

/* Todo型に基づいており、この型にはid, title, content, およびstatusというプロパティがあります。
Todoのアイテムをアプリケーション全体で追跡するために使用されます。例えば、新しいTodoを追加したり、既存のTodoを削除したり、Todoのステータスを変更したりする際に、この状態が更新されます。
*/
export const todoListState = atom<Todo[]>({
    key:"todoListState",
    default:[],
});

/* Todoのタイトルや内容を入力する際のテキストフィールドの値を格納するために使用される
ユーザーがテキストフィールドに何かを入力するたびに、この状態は更新されます。そして、この状態は、新しいTodoを追加する際や既存のTodoを編集する際にその入力値を取得するために使用される
*/
export const inputState = atom<string>({
    key:"inputState",
    default:""
});

/* ボタンを押下したら初期値を定義 */
export const initialInputState = {
    title:"",
    content:"",
    status:"Uncompleted" as "Completed" | "Uncompleted"
};

export const inputValue =atom({
    key:"inputState",
    default:initialInputState
})
/* Todo作成 */

export const todoFormState =atom({
    key:"todoFormState",
    default: {
        title:"",
        content:"",
        status: "Uncompleted" as "Completed" | "Uncompleted"
    },
});

export const currentTodoState =atom<Todo | null>({
    key:"currentTodoState",
    default:null
});

/* 編集中のTodoの状態 */

export const editingTodoState  = atom<Todo | null>({
    key:"editTodoState",
    default:null
});




