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
import { DtOverlayModule } from '@dynatrace/barista-components/overlay';
import { DtKeyValueListModule } from '@dynatrace/barista-components/key-value-list';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtTileModule } from '@dynatrace/barista-components/tile';
import { DtExampleOverlayImplicitContext } from './overlay-implicit-context-example/overlay-implicit-context-example';
import { DtExampleSharedOverlayProgrammaticDummy } from './overlay-example-dummy-component';
@NgModule({
    imports: [
        DtOverlayModule,
        DtButtonModule,
        DtTileModule,
        DtKeyValueListModule,
        DtIconModule,
    ],
    declarations: [
        DtExampleOverlayImplicitContext,
        DtExampleSharedOverlayProgrammaticDummy,
    ],
    exports: [DtExampleOverlayImplicitContext]
})
export class DtOverlayExamplesModule {
}
