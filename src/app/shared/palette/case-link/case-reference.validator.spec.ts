import { FormControl, ValidatorFn } from '@angular/forms';
import { FormValueService } from '../../../core/form/form-value.service'
import { CaseReferenceValidator } from './case-reference.validator'
describe('CaseReferenceValidator', () => {

  const formValueService: FormValueService = new FormValueService();
  const validator: ValidatorFn = CaseReferenceValidator(formValueService);

  let component: TestComponent;

  beforeEach(() => {
    component = new TestComponent();
    component.caseReferenceControl.setValidators(validator);
  });

  it('should invalidate case reference which does not pass check sum', () => {
    component.caseReferenceControl.setValue('1234567812345678');
    expect(component.caseReferenceControl.valid).toBeFalsy();
  });

  it('should invalidate case reference which is too short', () => {
    component.caseReferenceControl.setValue('1234');
    expect(component.caseReferenceControl.valid).toBeFalsy();
  });

  it('should validate case reference', () => {
    component.caseReferenceControl.setValue('1234567812345670');
    expect(component.caseReferenceControl.valid).toBeTruthy();
  });
});

class TestComponent {
  caseReferenceControl: FormControl = new FormControl();
}
