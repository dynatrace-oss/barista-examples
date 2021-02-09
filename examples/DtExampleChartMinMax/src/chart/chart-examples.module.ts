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
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtButtonGroupModule } from '@dynatrace/barista-components/button-group';
import { DtChartModule } from '@dynatrace/barista-components/chart';
import { DtKeyValueListModule } from '@dynatrace/barista-components/key-value-list';
import { DtChartExampleDataService } from './chart-example-data.service';
import { DtExampleChartMinMax } from './chart-min-max-example/chart-min-max-example';
@NgModule({
    imports: [
        CommonModule,
        DtChartModule,
        DtKeyValueListModule,
        DtButtonModule,
        DtButtonGroupModule,
    ],
    declarations: [
        DtExampleChartMinMax,
    ],
    providers: [DtChartExampleDataService],
    exports: [DtExampleChartMinMax]
})
export class DtChartExamplesModule {
}
