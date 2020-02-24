//根模块 根ngModule


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { TodomvcComponent } from './todomvc/todomvc.component';

//引入双向绑定 ngModle
import {FormsModule} from '@Angular/forms';


@NgModule({
  //组件模块资源：组件/指令/服务
  declarations: [
    AppComponent,
    HeadComponent,
    ToolbarUserComponent,
    TodomvcComponent
  ],
  imports: [//依赖模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,//引入双向绑定 ngModle
  ],
  providers: [],
  bootstrap: [AppComponent]//指定启动模块
})
export class AppModule { }
