import { NgZone } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CountdownTimer {
    private ngZone;
    private fns;
    private commands;
    private nextTime;
    private ing;
    constructor(ngZone: NgZone);
    start(): void;
    private process;
    add(fn: () => void, frequency: number): this;
    remove(fn: () => void): this;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountdownTimer, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountdownTimer>;
}
