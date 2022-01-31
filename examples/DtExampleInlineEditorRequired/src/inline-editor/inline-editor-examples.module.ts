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
import { DtInlineEditorModule } from '@dynatrace/barista-components/inline-editor';
import { DtExampleInlineEditorRequired } from './inline-editor-required-example/inline-editor-required-example';
@NgModule({
    imports: [
        CommonModule,
        DtInlineEditorModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DtExampleInlineEditorRequired,
    ],
    exports: [DtExampleInlineEditorRequired]
})
export class DtInlineEditorExamplesModule {
}
