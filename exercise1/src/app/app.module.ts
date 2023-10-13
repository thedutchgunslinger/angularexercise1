import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductenComponent } from './components/producten/producten.component';
import { ProductComponent } from './components/product/product.component';
import { HelloPipePipe } from './pipes/hello-pipe.pipe';
import { AmountPipe } from './pipes/amount.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { Page2Component } from './components/page2/page2.component';
import { NavComponent } from './components/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductenComponent },
  { path: 'page2', component: Page2Component },
  { path: 'shopping-cart', component: ShoppingCartComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductenComponent,
    ProductComponent,
    HelloPipePipe,
    AmountPipe,
    HighlightDirective,
    ZoomDirective,
    Page2Component,
    NavComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
