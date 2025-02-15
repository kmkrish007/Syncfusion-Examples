import 'syncfusion-javascript/Scripts/ej/web/ej.editor.min';
import { EJComponents } from './core';
import { EventEmitter, IterableDiffers, KeyValueDiffers, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const NumericTextboxValueAccessor: any;
export declare class NumericTextboxComponent extends EJComponents<any, any> implements ControlValueAccessor {
    el: ElementRef;
    cdRef: ChangeDetectorRef;
    private _ejIterableDiffers;
    private _ejkeyvaluediffers;
    currencySymbol_input: any;
    cssClass_input: any;
    decimalPlaces_input: any;
    enabled_input: any;
    enablePersistence_input: any;
    enableRTL_input: any;
    enableStrictMode_input: any;
    groupSize_input: any;
    groupSeparator_input: any;
    height_input: any;
    htmlAttributes_input: any;
    incrementStep_input: any;
    locale_input: any;
    maxValue_input: any;
    minValue_input: any;
    name_input: any;
    negativePattern_input: any;
    positivePattern_input: any;
    readOnly_input: any;
    showRoundedCorner_input: any;
    showSpinButton_input: any;
    validateOnType_input: any;
    validationMessage_input: any;
    validationRules_input: any;
    value_input: any;
    watermarkText_input: any;
    width_input: any;
    options: any;
    change_output: EventEmitter<{}>;
    ejchange_output: EventEmitter<{}>;
    create_output: EventEmitter<{}>;
    destroy_output: EventEmitter<{}>;
    focusIn_output: EventEmitter<{}>;
    focusOut_output: EventEmitter<{}>;
    constructor(el: ElementRef, cdRef: ChangeDetectorRef, _ejIterableDiffers: IterableDiffers, _ejkeyvaluediffers: KeyValueDiffers);
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
export declare var EJ_NUMERICTEXTBOX_COMPONENTS: Type<any>[];
