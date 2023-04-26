import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminoperationComponent } from './admin/adminoperation/adminoperation.component';
import { AllNftsComponent } from './admin/all-nfts/all-nfts.component';
import { IsssueNftComponent } from './admin/isssue-nft/isssue-nft.component';
import { SingleNftComponent } from './admin/single-nft/single-nft.component';
import { AuthGuard } from './auth/auth.guard';
import { ExternalOperationComponent } from './external/external-operation/external-operation.component';
import { ValidateNftComponent } from './external/validate-nft/validate-nft.component';
import { HomeComponent } from './home/home.component';
import { UserNftComponent } from './user/user-nft/user-nft.component';
import { UserOperationComponent } from './user/user-operation/user-operation.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:"admin", children:[
    {path:'adminoperation', component:AdminoperationComponent, canActivate:[AuthGuard]},
    {path:'issueNft', component:IsssueNftComponent,canActivate:[AuthGuard]},
    {path:'allNft', component:AllNftsComponent, canActivate:[AuthGuard]},
    {path:"singleNft/:nftOwner", component:SingleNftComponent, canActivate:[AuthGuard]}
  ]},
  {path:"user", children:[
    {path:"userOperation",component:UserOperationComponent, canActivate:[AuthGuard]},
    {path:"userNft", component:UserNftComponent, canActivate:[AuthGuard]},
  ]},
  {path:'external', children:[
    {path:"externalOperation", component:ExternalOperationComponent ,canActivate:[AuthGuard]},
    {path:"validateNft", component:ValidateNftComponent ,canActivate:[AuthGuard]}
  ]},
  {path:'**', redirectTo:'/home', pathMatch:'full'},
  {path:'', redirectTo:'/home', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
