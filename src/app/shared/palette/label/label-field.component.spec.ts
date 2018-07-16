import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelFieldComponent } from './label-field.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CaseField } from '../../domain/definition/case-field.model';
import { FieldType } from '../../domain/definition/field-type.model';
import { MockComponent } from 'ng2-mock-component';

const $CONTENT = By.css('dl>dt ccd-markdown');

const FIELD_TYPE: FieldType = {
  id: 'Label',
  type: 'Label'
};

const MarkdownComponent: any = MockComponent({ selector: 'ccd-markdown', inputs: [
  'content'
]});
let fixture: ComponentFixture<LabelFieldComponent>;
let component: LabelFieldComponent;
let de: DebugElement;

describe('Value Undefined in LabelFieldComponent', () => {

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [],
        declarations: [
          LabelFieldComponent,
          MarkdownComponent
        ],
        providers: []
      })
      .compileComponents();

    fixture = TestBed.createComponent(LabelFieldComponent);
    component = fixture.componentInstance;
    component.caseField = {
      id: 'label',
      label: 'Label Field Label',
      display_context: 'OPTIONAL',
      field_type: FIELD_TYPE,
      value: undefined
    };

    de = fixture.debugElement;
    fixture.detectChanges();

  }));

  it('Should render a table with the field label in the markdown tag in the header', () => {
    expect(de.query($CONTENT).nativeElement.getAttribute('ng-reflect-content')).toBe(component.caseField.label);
  });
});

describe('Value defined in LabelFieldComponent', () => {

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [],
        declarations: [
          LabelFieldComponent,
          MarkdownComponent
        ],
        providers: []
      })
      .compileComponents();

    fixture = TestBed.createComponent(LabelFieldComponent);
    component = fixture.componentInstance;
    component.caseField = {
      id: 'label',
      label: 'Label Field Label',
      display_context: 'OPTIONAL',
      field_type: FIELD_TYPE,
      value: 'Value defined'
    };

    de = fixture.debugElement;
    fixture.detectChanges();

  }));

  it('Should render a table with the field value in the markdown tag in the header', () => {
    expect(de.query($CONTENT).nativeElement.getAttribute('ng-reflect-content')).toBe(component.caseField.value);
  });

});
