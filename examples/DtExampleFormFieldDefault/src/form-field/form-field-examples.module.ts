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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtLoadingDistractorModule } from '@dynatrace/barista-components/loading-distractor';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtExampleFormFieldDefault } from './form-field-default-example/form-field-default-example';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DtFormFieldModule,
        DtButtonModule,
        DtInputModule,
        DtIconModule,
        DtLoadingDistractorModule,
    ],
    declarations: [DtExampleFormFieldDefault],
    exports: [DtExampleFormFieldDefault],
})
export class DtFormFieldExamplesModule {
}
