import 'syncfusion-javascript/Scripts/ej/web/ej.groupbutton.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
export declare class GroupButtonComponent extends EJComponents<any, any> {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    cssClass_input: any;
    dataSource_input: any;
    enableRTL_input: any;
    enabled_input: any;
    fields_input: any;
    groupButtonMode_input: any;
    height_input: any;
    htmlAttributes_input: any;
    orientation_input: any;
    query_input: any;
    selectedItemIndex_input: any;
    showRoundedCorner_input: any;
    size_input: any;
    width_input: any;
    options: any;
    beforeSelect_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    destroy_output: EventEmitter<{}>;
    keyPress_output: EventEmitter<{}>;
    select_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
}
export declare var EJ_GROUPBUTTON_COMPONENTS: Type<any>[];
