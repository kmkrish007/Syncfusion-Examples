import 'syncfusion-javascript/Scripts/ej/datavisualization/ej.sunburstchart.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class SunburstChartComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    background_input: any;
    valueMemberPath_input: any;
    border_input: any;
    segmentBorder_input: any;
    dataSource_input: any;
    palette_input: any;
    parentNode_input: any;
    xName_input: any;
    yName_input: any;
    isResponsive_input: any;
    size_input: any;
    visible_input: any;
    tooltip_input: any;
    points_input: any;
    startAngle_input: any;
    endAngle_input: any;
    radius_input: any;
    innerRadius_input: any;
    dataLabelSettings_input: any;
    title_input: any;
    highlightSettings_input: any;
    selectionSettings_input: any;
    legend_input: any;
    theme_input: any;
    margin_input: any;
    enableAnimation_input: any;
    opacity_input: any;
    zoomSettings_input: any;
    animationType_input: any;
    border_color_input: any;
    border_width_input: any;
    segmentBorder_color_input: any;
    segmentBorder_width_input: any;
    size_height_input: any;
    size_width_input: any;
    tooltip_visible_input: any;
    tooltip_border_input: any;
    tooltip_border_color_input: any;
    tooltip_border_width_input: any;
    tooltip_fill_input: any;
    tooltip_font_input: any;
    tooltip_font_color_input: any;
    tooltip_font_fontFamily_input: any;
    tooltip_font_fontStyle_input: any;
    tooltip_font_fontWeight_input: any;
    tooltip_font_opacity_input: any;
    tooltip_font_size_input: any;
    tooltip_template_input: any;
    tooltip_format_input: any;
    tooltip_opacity_input: any;
    points_x_input: any;
    points_y_input: any;
    points_text_input: any;
    points_fill_input: any;
    dataLabelSettings_visible_input: any;
    dataLabelSettings_labelRotationMode_input: any;
    dataLabelSettings_font_input: any;
    dataLabelSettings_font_fontFamily_input: any;
    dataLabelSettings_font_fontStyle_input: any;
    dataLabelSettings_font_fontWeight_input: any;
    dataLabelSettings_font_opacity_input: any;
    dataLabelSettings_font_color_input: any;
    dataLabelSettings_font_size_input: any;
    dataLabelSettings_template_input: any;
    dataLabelSettings_fill_input: any;
    dataLabelSettings_labelOverflowMode_input: any;
    title_text_input: any;
    title_visible_input: any;
    title_textAlignment_input: any;
    title_font_input: any;
    title_font_fontFamily_input: any;
    title_font_fontStyle_input: any;
    title_font_fontWeight_input: any;
    title_font_opacity_input: any;
    title_font_size_input: any;
    title_subtitle_input: any;
    title_subtitle_text_input: any;
    title_subtitle_visible_input: any;
    title_subtitle_textAlignment_input: any;
    title_subtitle_font_input: any;
    highlightSettings_enable_input: any;
    highlightSettings_mode_input: any;
    highlightSettings_color_input: any;
    highlightSettings_opacity_input: any;
    highlightSettings_type_input: any;
    selectionSettings_enable_input: any;
    selectionSettings_mode_input: any;
    selectionSettings_color_input: any;
    selectionSettings_opacity_input: any;
    selectionSettings_type_input: any;
    legend_visible_input: any;
    legend_clickAction_input: any;
    legend_alignment_input: any;
    legend_border_input: any;
    legend_border_color_input: any;
    legend_border_width_input: any;
    legend_columnCount_input: any;
    legend_rowCount_input: any;
    legend_font_input: any;
    legend_font_fontFamily_input: any;
    legend_font_fontStyle_input: any;
    legend_font_fontWeight_input: any;
    legend_font_size_input: any;
    legend_itemPadding_input: any;
    legend_itemStyle_input: any;
    legend_itemStyle_height_input: any;
    legend_itemStyle_width_input: any;
    legend_location_input: any;
    legend_location_x_input: any;
    legend_location_y_input: any;
    legend_position_input: any;
    legend_shape_input: any;
    legend_size_input: any;
    legend_size_height_input: any;
    legend_size_width_input: any;
    legend_title_input: any;
    legend_title_font_input: any;
    legend_title_visible_input: any;
    legend_title_text_input: any;
    legend_title_textAlignment_input: any;
    margin_left_input: any;
    margin_right_input: any;
    margin_top_input: any;
    margin_bottom_input: any;
    zoomSettings_enable_input: any;
    zoomSettings_toolbarHorizontalAlignment_input: any;
    zoomSettings_toolbarVerticalAlignment_input: any;
    levels_input: any;
    options: any;
    load_output: EventEmitter<{}>;
    preRender_output: EventEmitter<{}>;
    loaded_output: EventEmitter<{}>;
    dataLabelRendering_output: EventEmitter<{}>;
    segmentRendering_output: EventEmitter<{}>;
    titleRendering_output: EventEmitter<{}>;
    tooltipInitialize_output: EventEmitter<{}>;
    pointRegionClick_output: EventEmitter<{}>;
    pointRegionMouseMove_output: EventEmitter<{}>;
    drillDownClick_output: EventEmitter<{}>;
    drillDownBack_output: EventEmitter<{}>;
    drillDownReset_output: EventEmitter<{}>;
    Click_output: EventEmitter<{}>;
    doubleClick_output: EventEmitter<{}>;
    rightClick_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_SUNBURSTCHART_COMPONENTS: Type<any>[];
