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
import { DtContextDialogModule } from '@dynatrace/barista-components/context-dialog';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtThemingModule } from '@dynatrace/barista-components/theming';
import { DtExampleContextDialogInteractive } from './context-dialog-interactive-example/context-dialog-interactive-example';
@NgModule({
    imports: [
        CommonModule,
        DtContextDialogModule,
        DtButtonModule,
        DtCardModule,
        DtIconModule,
        DtThemingModule,
    ],
    declarations: [
        DtExampleContextDialogInteractive,
    ],
    exports: [DtExampleContextDialogInteractive]
})
export class DtContextDialogExamplesModule {
}
