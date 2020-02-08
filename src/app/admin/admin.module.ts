import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AdminRoutingModule } from './admin-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, AdminRoutingModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule]
})
export class AdminModule {}
