import 'syncfusion-javascript/Scripts/ej/web/ej.timepicker.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const TimePickerValueAccessor: any;
export declare class TimePickerComponent extends EJComponents<any, any> implements ControlValueAccessor {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    cssClass_input: any;
    disableTimeRanges_input: any;
    enableAnimation_input: any;
    enabled_input: any;
    enablePersistence_input: any;
    enableRTL_input: any;
    enableStrictMode_input: any;
    height_input: any;
    hourInterval_input: any;
    htmlAttributes_input: any;
    interval_input: any;
    locale_input: any;
    maxTime_input: any;
    minTime_input: any;
    minutesInterval_input: any;
    popupHeight_input: any;
    popupWidth_input: any;
    readOnly_input: any;
    secondsInterval_input: any;
    showPopupButton_input: any;
    showRoundedCorner_input: any;
    timeFormat_input: any;
    value_input: any;
    watermarkText_input: any;
    width_input: any;
    options: any;
    beforeChange_output: EventEmitter<{}>;
    beforeOpen_output: EventEmitter<{}>;
    change_output: EventEmitter<{}>;
    ejchange_output: EventEmitter<{}>;
    close_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    destroy_output: EventEmitter<{}>;
    focusIn_output: EventEmitter<{}>;
    focusOut_output: EventEmitter<{}>;
    open_output: EventEmitter<{}>;
    select_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare var EJ_TIMEPICKER_COMPONENTS: Type<any>[];
