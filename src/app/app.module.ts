import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SocketService } from './core/services/socket.service';
import * as fromRoot from './core/store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutes, StoreModule.forRoot(fromRoot.reducers)],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
