/**
 * @license
 * Copyright 2021 Dynatrace LLC
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
import { FormsModule } from '@angular/forms';
import { DtSelectModule } from '@dynatrace/barista-components/select';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtCheckboxModule } from '@dynatrace/barista-components/checkbox';
import { DtExampleSelectWithIcons } from './select-with-icons-example/select-with-icons-example';
@NgModule({
    imports: [
        DtSelectModule,
        DtButtonModule,
        DtIconModule,
        DtFormFieldModule,
        CommonModule,
        FormsModule,
        DtCheckboxModule,
    ],
    declarations: [
        DtExampleSelectWithIcons,
    ],
    exports: [DtExampleSelectWithIcons]
})
export class DtExamplesSelectModule {
}
