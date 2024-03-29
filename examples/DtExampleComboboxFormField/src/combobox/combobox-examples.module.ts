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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtComboboxModule } from '@dynatrace/barista-components/experimental/combobox';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtExampleComboboxFormField } from './combobox-form-field-example/combobox-form-field-example';
import { DtOptionModule } from '@dynatrace/barista-components/core';
@NgModule({
    imports: [
        DtComboboxModule,
        FormsModule,
        ReactiveFormsModule,
        DtOptionModule,
        DtFormFieldModule,
        CommonModule,
    ],
    declarations: [
        DtExampleComboboxFormField,
    ],
    exports: [DtExampleComboboxFormField]
})
export class DtComboboxExamplesModule {
}
