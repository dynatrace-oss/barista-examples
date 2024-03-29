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
import { DtProgressCircleModule } from '@dynatrace/barista-components/progress-circle';
import { CommonModule } from '@angular/common';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtButtonGroupModule } from '@dynatrace/barista-components/button-group';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtExampleProgressCircleChange } from './progress-circle-change-example/progress-circle-change-example';
@NgModule({
    imports: [
        CommonModule,
        DtButtonModule,
        DtProgressCircleModule,
        DtButtonGroupModule,
        DtIconModule,
    ],
    declarations: [
        DtExampleProgressCircleChange,
    ],
    exports: [DtExampleProgressCircleChange]
})
export class DtProgressCircleExamplesModule {
}
