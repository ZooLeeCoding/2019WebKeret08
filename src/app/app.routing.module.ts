import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthServiceService } from './auth-service.service';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'main', component: MainComponent, 
        canActivate: [AuthServiceService]},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}