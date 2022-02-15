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
import { DtButtonGroupModule } from '@dynatrace/barista-components/button-group';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtExampleButtonGroupError } from './button-group-error-example/button-group-error-example';
@NgModule({
    imports: [CommonModule, DtButtonGroupModule, DtButtonModule],
    declarations: [
        DtExampleButtonGroupError,
    ],
    exports: [DtExampleButtonGroupError]
})
export class DtButtonGroupExamplesModule {
}
