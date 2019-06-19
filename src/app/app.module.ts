import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ThfModule } from '@totvs/thf-ui';
import { ThfCodeEditorModule } from '@totvs/thf-code-editor';

import { HomeComponent } from './home/home.component';
import { ListQueryComponent } from './common/list-query/list-query.component';
import { ChartQueryComponent } from './common/chart-query/chart-query.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';
import { TestManagerComponent } from './test-manager/test-manager.component';
import { QueryAnalyzerComponent } from './query-analyzer/query-analyzer.component';
import { TestQueryComponent } from './common/test-query/test-query.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SourceComponent } from './source/source.component';
import { SourceDetailComponent } from './source-detail/source-detail.component';
import { QueriesComponent } from './queries/queries.component';
import { RatingComponent } from './common/rating/rating.component';
import { WidgetHeaderComponent } from './common/widget-header/widget-header.component';
import { ExecplanComponent } from './common/execplan/execplan.component';
import { ResultDbComponent } from './common/result-db/result-db.component';
import { ResultAdvplComponent } from './common/result-advpl/result-advpl.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListQueryComponent,
    ChartQueryComponent,
    QueryDetailComponent,
    TestManagerComponent,
    QueryAnalyzerComponent,
    TestQueryComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    SourceComponent,
    SourceDetailComponent,
    QueriesComponent,
    RatingComponent,
    WidgetHeaderComponent,
    ExecplanComponent,
    ResultDbComponent,
    ResultAdvplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ThfModule,
    ThfCodeEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
