import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
     HeaderComponent,
     TodoButtonDeleteAllComponent,
     TodoInputAddItemsComponent,
     TodoListComponent,
     HomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class HomeModule { }
