'use strict';

{
   const addTaskTrigger = document.getElementById('addBtn');
   const addTaskTarget = document.getElementById('addTaskTarget');
   const input = document.getElementById('input');
   let idNum = 0;

   //追加ボタンクリック時の詳細な挙動
   let tasks = [];
   const addTask = () => {
      let task = {
         id: idNum,
         comment: input.value,
         condition_a: '作業中',
         condition_b: '削除',
      };

      tasks.push(task);

      displayTasks();

      console.log(tasks); //¥結果確認用
   };

   //tasks配列の中身を取り出し、表示させる方法がわかりません
   const displayTasks = () => {
      const tr = document.createElement('tr');
      const idTd = document.createElement('td');
      const commentTd = document.createElement('td');
      const conditionTd_a = document.createElement('td');
      const conditionTd_b = document.createElement('td');

      // conditionTd_a / _b　にclassを付与
      conditionTd_a.className = 'btn';
      conditionTd_b.className = 'btn';

      addTaskTarget.appendChild(tr);
      tr.appendChild(idTd); // 1つめ
      idTd.textContent = tasks[0].id;
      tr.appendChild(commentTd); // 2つ目
      commentTd.textContent = tasks[0].comment; // タスク入力値
      tr.appendChild(conditionTd_a); // 3つ目
      conditionTd_a.textContent = tasks[0].condition_a;
      tr.appendChild(conditionTd_b); // 4つ目
      conditionTd_b.textContent = tasks[0].condition_b;

      //-削除機能
      const removeTask = (conditionTd_b) => {
         const targetTask = conditionTd_b.closest('tr'); //¥　closest
         addTaskTarget.removeChild(targetTask);
         // targetTask.remove(); //別のremove方法
      };

      //削除ボタンクリック時の動作
      conditionTd_b.addEventListener('click', () => {
         removeTask(conditionTd_b);
         idNum--;
      });

      //-状態ボタンのテキスト変更機能
      const changeState = (conditionTd_a) => {
         if (conditionTd_a.textContent !== "完了") {
            conditionTd_a.textContent = "完了";
         } else {
            // conditionTd_a.textContent = tasks[0].condition_a;
            conditionTd_a.textContent = "作業中";
         }
      };

      //状態ボタンクリック時の動作
      conditionTd_a.addEventListener('click', () => {
         changeState(conditionTd_a);
      });

      tasks = [];
   };

   //追加ボタンクリック時にaddTask()を走らせる
   addTaskTrigger.addEventListener('click', () => {
      addTask();
      input.value = '';
      idNum++;
   });
}
