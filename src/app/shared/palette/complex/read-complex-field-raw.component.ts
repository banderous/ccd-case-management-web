import { Component } from '@angular/core';
import { AbstractFieldReadComponent } from '../base-field/abstract-field-read.component';

/**
 * Display a complex type fields as a list of values without labels.
 * This is intended for rendering of Check Your Answer page.
 */
@Component({
  selector: 'ccd-read-complex-type-raw-field',
  templateUrl: './read-complex-field-raw.html',
  styleUrls: [],
})
export class ReadComplexFieldRawComponent extends AbstractFieldReadComponent {}
