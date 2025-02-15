import 'syncfusion-javascript/Scripts/ej/web/ej.pivotclient.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class PivotClientComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    analysisMode_input: any;
    chartType_input: any;
    clientExportMode_input: any;
    cssClass_input: any;
    customObject_input: any;
    dataSource_input: any;
    enableDrillThrough_input: any;
    displaySettings_input: any;
    toolbarIconSettings_input: any;
    showUniqueNameOnPivotButton_input: any;
    showReportCollection_input: any;
    enableSplitter_input: any;
    enableAdvancedFilter_input: any;
    enableDeferUpdate_input: any;
    enableLocalStorage_input: any;
    enablePaging_input: any;
    enablePivotTreeMap_input: any;
    enableRTL_input: any;
    enableMeasureGroups_input: any;
    enableCellClick_input: any;
    enableCellDoubleClick_input: any;
    enableVirtualScrolling_input: any;
    maxNodeLimitInMemberEditor_input: any;
    enableMemberEditorPaging_input: any;
    memberEditorPageSize_input: any;
    enableMemberEditorSorting_input: any;
    gridLayout_input: any;
    collapseCubeBrowserByDefault_input: any;
    enableKPI_input: any;
    isResponsive_input: any;
    size_input: any;
    locale_input: any;
    operationalMode_input: any;
    serviceMethodSettings_input: any;
    valueSortSettings_input: any;
    title_input: any;
    url_input: any;
    enableCompleteDataExport_input: any;
    enableXHRCredentials_input: any;
    dataSource_cube_input: any;
    dataSource_sourceInfo_input: any;
    dataSource_providerName_input: any;
    dataSource_data_input: any;
    dataSource_catalog_input: any;
    dataSource_enableAdvancedFilter_input: any;
    dataSource_reportName_input: any;
    dataSource_pagerOptions_input: any;
    dataSource_pagerOptions_categoricalPageSize_input: any;
    dataSource_pagerOptions_seriesPageSize_input: any;
    dataSource_pagerOptions_categoricalCurrentPage_input: any;
    dataSource_pagerOptions_seriesCurrentPage_input: any;
    displaySettings_controlPlacement_input: any;
    displaySettings_defaultView_input: any;
    displaySettings_enableFullScreen_input: any;
    displaySettings_enableTogglePanel_input: any;
    displaySettings_mode_input: any;
    toolbarIconSettings_enableAddReport_input: any;
    toolbarIconSettings_enableNewReport_input: any;
    toolbarIconSettings_enableRenameReport_input: any;
    toolbarIconSettings_enableDBManipulation_input: any;
    toolbarIconSettings_enableWordExport_input: any;
    toolbarIconSettings_enableExcelExport_input: any;
    toolbarIconSettings_enablePdfExport_input: any;
    toolbarIconSettings_enableMDXQuery_input: any;
    toolbarIconSettings_enableDeferUpdate_input: any;
    toolbarIconSettings_enableFullScreen_input: any;
    toolbarIconSettings_enableSortOrFilterColumn_input: any;
    toolbarIconSettings_enableSortOrFilterRow_input: any;
    toolbarIconSettings_enableToggleAxis_input: any;
    toolbarIconSettings_enableChartTypes_input: any;
    toolbarIconSettings_enableRemoveReport_input: any;
    toolbarIconSettings_enableCalculatedMember_input: any;
    serviceMethodSettings_cubeChanged_input: any;
    serviceMethodSettings_exportPivotClient_input: any;
    serviceMethodSettings_fetchMemberTreeNodes_input: any;
    serviceMethodSettings_fetchReportList_input: any;
    serviceMethodSettings_filterElement_input: any;
    serviceMethodSettings_initialize_input: any;
    serviceMethodSettings_loadReport_input: any;
    serviceMethodSettings_removeDBReport_input: any;
    serviceMethodSettings_renameDBReport_input: any;
    serviceMethodSettings_mdxQuery_input: any;
    serviceMethodSettings_measureGroupChanged_input: any;
    serviceMethodSettings_memberExpand_input: any;
    serviceMethodSettings_nodeDropped_input: any;
    serviceMethodSettings_removeSplitButton_input: any;
    serviceMethodSettings_saveReport_input: any;
    serviceMethodSettings_toggleAxis_input: any;
    serviceMethodSettings_toolbarServices_input: any;
    serviceMethodSettings_updateReport_input: any;
    serviceMethodSettings_paging_input: any;
    serviceMethodSettings_calculatedMember_input: any;
    serviceMethodSettings_valueSorting_input: any;
    serviceMethodSettings_drillThroughHierarchies_input: any;
    serviceMethodSettings_drillThroughDataTable_input: any;
    valueSortSettings_headerText_input: any;
    valueSortSettings_headerDelimiters_input: any;
    valueSortSettings_sortOrder_input: any;
    dataSource_columns_input: any;
    dataSource_rows_input: any;
    dataSource_values_input: any;
    dataSource_filters_input: any;
    options: any;
    afterServiceInvoke_output: EventEmitter<{}>;
    beforeServiceInvoke_output: EventEmitter<{}>;
    saveReport_output: EventEmitter<{}>;
    loadReport_output: EventEmitter<{}>;
    fetchReport_output: EventEmitter<{}>;
    beforeExport_output: EventEmitter<{}>;
    chartLoad_output: EventEmitter<{}>;
    schemaLoad_output: EventEmitter<{}>;
    treeMapLoad_output: EventEmitter<{}>;
    valueCellHyperlinkClick_output: EventEmitter<{}>;
    cellClick_output: EventEmitter<{}>;
    pointRegionClick_output: EventEmitter<{}>;
    axesLabelRendering_output: EventEmitter<{}>;
    drillThrough_output: EventEmitter<{}>;
    load_output: EventEmitter<{}>;
    renderComplete_output: EventEmitter<{}>;
    renderFailure_output: EventEmitter<{}>;
    renderSuccess_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_PIVOTCLIENT_COMPONENTS: Type<any>[];
