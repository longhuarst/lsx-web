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

// import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { UserloginComponent } from './userlogin/userlogin.component';
registerLocaleData(zh);


@NgModule({
  //组件模块资源：组件/指令/服务
  declarations: [
    AppComponent,
    HeadComponent,
    ToolbarUserComponent,
    TodomvcComponent,
    UserloginComponent
  ],
  imports: [//依赖模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,//引入双向绑定 ngModle
    // HttpClientModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
  ],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]//指定启动模块
})
export class AppModule { }



