import { Component, OnInit } from '@angular/core';

// const todos = [
//   {
//     id: 1,
//     title: '吃饭',
//     done: true,
//   },
//   {
//     id: 2,
//     title: '睡觉',
//     done: true,
//   },
//   {
//     id: 3,
//     title: '打游戏',
//     done: false,
//   },
// ];

@Component({
  selector: 'app-todomvc',
  templateUrl: './todomvc.component.html',
  styleUrls: ['./todomvc.component.scss']
})

export class TodomvcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.hashchangeHandler();

    //这里要bind  不然this 是指 window
    window.onhashchange = this.hashchangeHandler.bind(this);

  }


  //当 angular 组件数据发生变化时， 这个钩子函数会被触发
  ngDoCheck(){
    
    console.log("ngDoCheck");

    window.localStorage.setItem('todos', JSON.stringify(this.todos));//本地持久化
  }



  //刷新保持
  hashchangeHandler() {

    //当用户点击了锚点的时候，我们需要获取当前锚点的标示，
    //然后动态的将根组件的 visibility 更新
    const hash = window.location.hash.substr(1)

    switch (hash) {
      case '/': this.visibility = 'all'; break;
      case '/active': this.visibility = 'active'; break;
      case '/completed': this.visibility = 'completed'; break;

    }


  }


  //定义数据表
  public todos: {
    id: number,
    title: string,
    done: boolean
  }[] = JSON.parse(window.localStorage.getItem('todos') || '[]');  //从持久化中    如果取不到 则 返回空

  //当前正在编辑
  public currentEditing: {
    id: number,
    title: string,
    done: boolean
  } = null;

  // //过滤
  // public filterTodos:{
  //   id: number,
  //   title: string,
  //   done: boolean
  // }[]

  //可见性
  public visibility: string = 'all';


  get filterTodos() {
    if (this.visibility === 'all') {
      return this.todos;
    } else if (this.visibility === 'active') {
      return this.todos.filter(t => !t.done);
    } else if (this.visibility === 'completed') {
      return this.todos.filter(t => t.done);
    }
  }

  addTodo(e): void {
    const titleText = e.target.value;

    console.log(e.keyCode)
    console.log("addTodo()")
    console.log(e)
    console.log(e.target.value)

    if (!titleText.length) {
      return;
    }

    this.todos.push({
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1, //最后一项ID + 1
      title: titleText,
      done: false
    });

    console.log(this.todos);

    e.target.value = '';//清除文本框
  }


  get toggleAll() {
    return this.todos.every(t => t.done);
  }


  set toggleAll(val) {
    this.todos.forEach(t => t.done = val)
  }


  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo),1);
  }


  editing(todo) {
    this.currentEditing = todo;
    console.log(todo)
    //console.log("test")
  }


  test() {
    console.log("Test")
  }


  //保存编辑
  saveEdit(todo, event) {
    todo.title = event.target.value;
    this.currentEditing = null;
  }


  //取消编辑
  handleEditKeyDown(event) {
    const { keyCode, target } = event;
    if (keyCode == 27) {//esc键
      target.value = this.currentEditing.title;
      this.currentEditing = null;
    }
  }


  get remaningCount() {
    return this.todos.filter(t => !t.done).length;
  }

  //清除所有已完成任务项
  clearAllDone() {
    this.todos = this.todos.filter(t => !t.done);
  }
}


