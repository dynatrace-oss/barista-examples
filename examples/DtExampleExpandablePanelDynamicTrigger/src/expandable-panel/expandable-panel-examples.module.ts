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
import { DtExpandablePanelModule } from '@dynatrace/barista-components/expandable-panel';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtExampleExpandablePanelDynamicTrigger } from './expandable-panel-dynamic-trigger-example/expandable-panel-dynamic-trigger-example';
@NgModule({
    imports: [CommonModule, DtExpandablePanelModule, DtButtonModule],
    declarations: [
        DtExampleExpandablePanelDynamicTrigger,
    ],
    exports: [DtExampleExpandablePanelDynamicTrigger]
})
export class DtExpandablePanelExamplesModule {
}
