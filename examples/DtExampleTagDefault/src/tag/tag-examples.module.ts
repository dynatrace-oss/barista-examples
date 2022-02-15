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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtTagModule } from '@dynatrace/barista-components/tag';
import { DtExampleTagDefault } from './tag-default-example/tag-default-example';
import { DtInputModule } from '@dynatrace/barista-components/input';
@NgModule({
    imports: [
        DtTagModule,
        DtButtonModule,
        CommonModule,
        DtFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        DtInputModule,
    ],
    declarations: [
        DtExampleTagDefault,
    ],
    exports: [DtExampleTagDefault]
})
export class DtExamplesTagModule {
}
