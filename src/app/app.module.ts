import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DirectComponent } from './direct/direct.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorysComponent } from './storysList/storysList.component';
import { PostsComponent } from './posts/posts.component';
import { PublishComponent } from './publish/publish.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { StoryComponent } from './story/story.component';

export const rotas: Routes = [
  {path: '', component: LoginComponent, title: 'Instagram - Login'},
  {path: 'home', component: HomeComponent, title: 'Instagram - Home'},
  {path: 'direct/inbox', component: DirectComponent, title: 'Instagram - Direct'},
  {path: 'explore', component: ExploreComponent, title: 'Instagram - Explore'},
  {path: 'vitucelio', component: ProfileComponent, title: 'Instagram - Profile'},
  {path: 'activity', component: NotificationsComponent, title: 'Instagram - Activity'},
  {path: 'stories/vitorcelio', component: StoryComponent, title: 'Instagram - Story'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DirectComponent,
    ExploreComponent,
    ProfileComponent,
    StorysComponent,
    PostsComponent,
    PublishComponent,
    NotificationsComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
