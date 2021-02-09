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
import { DtTileModule } from '@dynatrace/barista-components/tile';
import { DtExampleTileRecovered } from './tile-recovered-example/tile-recovered-example';
import { DtIconModule } from '@dynatrace/barista-components/icon';
@NgModule({
    imports: [DtTileModule, DtIconModule],
    declarations: [
        DtExampleTileRecovered,
    ],
    exports: [DtExampleTileRecovered]
})
export class DtExamplesTileModule {
}
