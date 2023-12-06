import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ParametresComponent } from './pages/parametres/parametres.component';
import { GestionProfilsComponent } from './pages/gestion-profils/gestion-profils.component';

const routes: Routes = [
  {path:'',component: AdminComponent, children:[
      {path:'param',component: ParametresComponent},
      {path:'',component: GestionProfilsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
