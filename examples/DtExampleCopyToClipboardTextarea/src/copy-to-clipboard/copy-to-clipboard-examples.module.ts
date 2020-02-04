/**
 * @license
 * Copyright 2020 Dynatrace LLC
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
import { DtCopyToClipboardModule } from '@dynatrace/barista-components/copy-to-clipboard';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtAlertModule } from '@dynatrace/barista-components/alert';
import { DtContextDialogModule } from '@dynatrace/barista-components/context-dialog';
import { DtThemingModule } from '@dynatrace/barista-components/theming';
import { DtExampleCopyToClipboardTextarea } from './copy-to-clipboard-textarea-example/copy-to-clipboard-textarea-example';
@NgModule({
    imports: [
        CommonModule,
        DtCopyToClipboardModule,
        DtInputModule,
        DtAlertModule,
        DtContextDialogModule,
        DtThemingModule,
    ],
    declarations: [DtExampleCopyToClipboardTextarea],
    exports: [DtExampleCopyToClipboardTextarea],
})
export class DtCopyToClipboardExamplesModule {
}
