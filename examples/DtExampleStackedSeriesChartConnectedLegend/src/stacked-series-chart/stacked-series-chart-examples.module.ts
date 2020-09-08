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
import { DtFormattersModule } from '@dynatrace/barista-components/formatters';
import { DtLegendModule } from '@dynatrace/barista-components/legend';
import { DtStackedSeriesChartModule } from '@dynatrace/barista-components/stacked-series-chart';
import { DtExampleStackedSeriesChartConnectedLegend } from './stacked-series-chart-connected-legend-example/stacked-series-chart-connected-legend-example';
import { CommonModule } from '@angular/common';
import { DtTableModule } from '@dynatrace/barista-components/table';
import { DtButtonGroupModule } from '@dynatrace/barista-components/button-group';
@NgModule({
    imports: [
        CommonModule,
        DtStackedSeriesChartModule,
        DtFormattersModule,
        DtButtonGroupModule,
        DtLegendModule,
        DtTableModule,
    ],
    declarations: [
        DtExampleStackedSeriesChartConnectedLegend,
    ],
    exports: [DtExampleStackedSeriesChartConnectedLegend]
})
export class DtExamplesStackedSeriesChartModule {
}
