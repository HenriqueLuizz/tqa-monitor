import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TestManagerComponent } from './test-manager/test-manager.component';
import { QueryAnalyzerComponent } from './query-analyzer/query-analyzer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SourceDetailComponent } from './source-detail/source-detail.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-detail', component: ProjectDetailComponent },
  { path: 'source-detail', component: SourceDetailComponent },
  { path: 'query-detail', component: QueryDetailComponent },
  { path: 'query-analyzer', component: QueryAnalyzerComponent },
  { path: 'test-manager', component: TestManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
