import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetsComponent } from './pets/pets.component';
import { AnimeComponent } from './anime/anime.component';
import { ContactComponent } from './contact/contact.component'
const routes: Routes = [
  {
    path: 'culturebooklet',
    component: UsersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'onlinedemo',
    component: PostsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'carrier',
    component: PetsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'anime',
    component: AnimeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



