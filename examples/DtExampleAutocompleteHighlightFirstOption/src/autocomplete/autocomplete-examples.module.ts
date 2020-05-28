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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DtAutocompleteModule } from '@dynatrace/barista-components/autocomplete';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtExampleAutocompleteHighlightFirstOption } from './autocomplete-highlight-first-option-example/autocomplete-highlight-first-option-example';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DtAutocompleteModule,
        DtInputModule,
        DtFormFieldModule,
    ],
    declarations: [
        DtExampleAutocompleteHighlightFirstOption,
    ],
    exports: [DtExampleAutocompleteHighlightFirstOption]
})
export class DtAutocompleteExamplesModule {
}
