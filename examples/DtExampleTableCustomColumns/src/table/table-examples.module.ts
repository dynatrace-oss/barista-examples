/**
 * @license
 * Copyright 2022 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtTableModule } from '@dynatrace/barista-components/table';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtIndicatorModule } from '@dynatrace/barista-components/indicator';
import { DtPaginationModule } from '@dynatrace/barista-components/pagination';
import { DtShowMoreModule } from '@dynatrace/barista-components/show-more';
import { DtEmptyStateModule } from '@dynatrace/barista-components/empty-state';
import { DtInfoGroupModule } from '@dynatrace/barista-components/info-group';
import { DtLoadingDistractorModule } from '@dynatrace/barista-components/loading-distractor';
import { DtKeyValueListModule } from '@dynatrace/barista-components/key-value-list';
import { DtFormattersModule } from '@dynatrace/barista-components/formatters';
import { DtContainerBreakpointObserverModule } from '@dynatrace/barista-components/container-breakpoint-observer';
import { DtHighlightModule } from '@dynatrace/barista-components/highlight';
import { DtContextDialogModule } from '@dynatrace/barista-components/context-dialog';
import { DtExampleTableCustomColumns } from './table-custom-columns-example/table-custom-columns-example';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        FormsModule,
        DtKeyValueListModule,
        DtTableModule,
        DtButtonModule,
        DtIndicatorModule,
        DtPaginationModule,
        DtShowMoreModule,
        DtEmptyStateModule,
        DtInfoGroupModule,
        DtLoadingDistractorModule,
        DtFormattersModule,
        DtContainerBreakpointObserverModule,
        DtHighlightModule,
        DtContextDialogModule,
    ],
    declarations: [
        DtExampleTableCustomColumns,
    ],
    exports: [DtExampleTableCustomColumns]
})
export class DtExamplesTableModule {
}
