import 'syncfusion-javascript/Scripts/ej/web/ej.rotator.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class RotatorComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    allowKeyboardNavigation_input: any;
    animationSpeed_input: any;
    animationType_input: any;
    circularMode_input: any;
    cssClass_input: any;
    dataSource_input: any;
    delay_input: any;
    displayItemsCount_input: any;
    enableAutoPlay_input: any;
    enabled_input: any;
    enableRTL_input: any;
    fields_input: any;
    frameSpace_input: any;
    isResponsive_input: any;
    navigateSteps_input: any;
    orientation_input: any;
    pagerPosition_input: any;
    query_input: any;
    showCaption_input: any;
    showNavigateButton_input: any;
    showPager_input: any;
    showPlayButton_input: any;
    showThumbnail_input: any;
    slideHeight_input: any;
    slideWidth_input: any;
    startIndex_input: any;
    stopOnHover_input: any;
    template_input: any;
    templateId_input: any;
    thumbnailSourceID_input: any;
    fields_linkAttribute_input: any;
    fields_targetAttribute_input: any;
    fields_text_input: any;
    fields_thumbnailText_input: any;
    fields_thumbnailUrl_input: any;
    fields_url_input: any;
    options: any;
    change_output: EventEmitter<{}>;
    ejchange_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    destroy_output: EventEmitter<{}>;
    pagerClick_output: EventEmitter<{}>;
    start_output: EventEmitter<{}>;
    stop_output: EventEmitter<{}>;
    thumbItemClick_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_ROTATOR_COMPONENTS: Type<any>[];
