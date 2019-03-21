import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchResultComponent } from './search/search-result.component';
import { PaletteModule, ConditionalShowModule, MarkdownModule,
  LabelSubstitutorModule, PipesModule, CaseReferencePipe, DialogsModule, CaseHeaderModule,
  ActivityModule, EventTriggerModule } from '@hmcts/ccd-case-ui-toolkit';
import { RouterModule } from '@angular/router';
import { EventTriggerHeaderComponent } from './header/event-trigger-header.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    PaletteModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    EventTriggerModule,
    LabelSubstitutorModule,
    ConditionalShowModule,
    MarkdownModule,
    PipesModule,
    DialogsModule,
    CaseHeaderModule,
    ActivityModule,
  ],
  declarations: [
    SearchResultComponent,
    EventTriggerHeaderComponent
  ],
  exports: [
    SearchResultComponent,
    EventTriggerModule,
    EventTriggerHeaderComponent,
    CaseReferencePipe,
  ]
})
export class SharedModule {}
