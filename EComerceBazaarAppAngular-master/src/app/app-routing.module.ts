import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsComponent } from './components/logins/logins.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { RegistersComponent } from './components/registers/registers.component';

const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "login", component: LoginsComponent },
  { path: "register", component: RegistersComponent  },
  { path: "profile", component: ProfilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
