import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { HomeComponent } from './home/home.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';


const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "add-member" , component: AddMemberComponent},
  {path: "view-member" , component: ViewMemberComponent},
  {path: "member-details/:id" , component: MemberDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
