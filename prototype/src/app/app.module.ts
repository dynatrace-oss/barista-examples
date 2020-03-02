import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DtAlertModule } from '@dynatrace/barista-components/alert';
import { DtAutocompleteModule } from '@dynatrace/barista-components/autocomplete';
import { DtBarIndicatorModule } from '@dynatrace/barista-components/bar-indicator';
import { DtBreadcrumbsModule } from '@dynatrace/barista-components/breadcrumbs';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtButtonGroupModule } from '@dynatrace/barista-components/button-group';
import { DtCardModule } from '@dynatrace/barista-components/card';
import { DtChartModule } from '@dynatrace/barista-components/chart';
import { DtCheckboxModule } from '@dynatrace/barista-components/checkbox';
import { DtConfirmationDialogModule } from '@dynatrace/barista-components/confirmation-dialog';
import { DtConsumptionModule } from '@dynatrace/barista-components/consumption';
import { DtContainerBreakpointObserverModule } from '@dynatrace/barista-components/container-breakpoint-observer';
import { DtContextDialogModule } from '@dynatrace/barista-components/context-dialog';
import { DtCopyToClipboardModule } from '@dynatrace/barista-components/copy-to-clipboard';
import { DtDrawerModule } from '@dynatrace/barista-components/drawer';
import { DtEmptyStateModule } from '@dynatrace/barista-components/empty-state';
import { DtEventChartModule } from '@dynatrace/barista-components/event-chart';
import { DtExpandablePanelModule } from '@dynatrace/barista-components/expandable-panel';
import { DtExpandableSectionModule } from '@dynatrace/barista-components/expandable-section';
import { DtExpandableTextModule } from '@dynatrace/barista-components/expandable-text';
import { DtFilterFieldModule } from '@dynatrace/barista-components/filter-field';
import { DtFormattersModule } from '@dynatrace/barista-components/formatters';
import { DtFormFieldModule } from '@dynatrace/barista-components/form-field';
import { DtHighlightModule } from '@dynatrace/barista-components/highlight';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtIndicatorModule } from '@dynatrace/barista-components/core';
import { DtInfoGroupModule } from '@dynatrace/barista-components/info-group';
import { DtInlineEditorModule } from '@dynatrace/barista-components/inline-editor';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtKeyValueListModule } from '@dynatrace/barista-components/key-value-list';
import { DtLegendModule } from '@dynatrace/barista-components/legend';
import { DtLoadingDistractorModule } from '@dynatrace/barista-components/loading-distractor';
import { DtMenuModule } from '@dynatrace/barista-components/menu';
import { DtMicroChartModule } from '@dynatrace/barista-components/micro-chart';
import { DtOverlayModule } from '@dynatrace/barista-components/overlay';
import { DtPaginationModule } from '@dynatrace/barista-components/pagination'
import { DtProgressBarModule } from '@dynatrace/barista-components/progress-bar';
import { DtProgressCircleModule } from '@dynatrace/barista-components/progress-circle';
import { DtRadialChartModule } from '@dynatrace/barista-components/radial-chart';
import { DtRadioModule } from '@dynatrace/barista-components/radio';
import { DtSecondaryNavModule } from '@dynatrace/barista-components/secondary-nav';
import { DtTableModule } from '@dynatrace/barista-components/table';
import { DtThemingModule } from '@dynatrace/barista-components/theming';
import { DtTileModule } from '@dynatrace/barista-components/tile';
import { DtSelectModule } from '@dynatrace/barista-components/select';
import { DtShowMoreModule } from '@dynatrace/barista-components/show-more';
import { DtStepperModule } from '@dynatrace/barista-components/stepper';
import { DtSwitchModule } from '@dynatrace/barista-components/switch';
import { DtTabsModule } from '@dynatrace/barista-components/tabs';
import { DtTagModule } from '@dynatrace/barista-components/tag';
import { DtTimelineChartModule } from '@dynatrace/barista-components/timeline-chart';
import { DtToastModule } from '@dynatrace/barista-components/toast';
import { DtToggleButtonGroupModule } from '@dynatrace/barista-components/toggle-button-group';
import { DtTopBarNavigationModule } from '@dynatrace/barista-components/top-bar-navigation';
import { DtTreeTableModule } from '@dynatrace/barista-components/tree-table';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Dynatrace barista modules
    DtAlertModule,
    DtAutocompleteModule,
    DtBarIndicatorModule,
    DtBreadcrumbsModule,
    DtButtonModule,
    DtButtonGroupModule,
    DtCardModule,
    DtChartModule,
    DtCheckboxModule,
    DtConfirmationDialogModule,
    DtConsumptionModule,
    DtContainerBreakpointObserverModule,
    DtContextDialogModule,
    DtCopyToClipboardModule,
    DtDrawerModule,
    DtEmptyStateModule,
    DtEventChartModule,
    DtExpandablePanelModule,
    DtExpandableSectionModule,
    DtExpandableTextModule,
    DtFilterFieldModule,
    DtFormattersModule,
    DtFormFieldModule,
    DtHighlightModule,
    DtIconModule.forRoot({
      svgIconLocation: `https://unpkg.com/@dynatrace/barista-icons/{{name}}.svg`,
    }),
    DtIndicatorModule,
    DtInfoGroupModule,
    DtInlineEditorModule,
    DtInputModule,
    DtKeyValueListModule,
    DtLegendModule,
    DtLoadingDistractorModule,
    DtMenuModule,
    DtMicroChartModule,
    DtOverlayModule,
    DtPaginationModule,
    DtProgressBarModule,
    DtProgressCircleModule,
    DtRadialChartModule,
    DtRadioModule,
    DtSecondaryNavModule,
    DtTableModule,
    DtThemingModule,
    DtTileModule,
    DtSelectModule,
    DtShowMoreModule,
    DtStepperModule,
    DtSwitchModule,
    DtTabsModule,
    DtTagModule,
    DtTimelineChartModule,
    DtToastModule,
    DtToggleButtonGroupModule,
    DtTopBarNavigationModule,
    DtTreeTableModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
