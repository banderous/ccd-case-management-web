import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CaseEventTrigger } from '../../shared/domain/case-view/case-event-trigger.model';
import { Observable } from 'rxjs/Observable';
import { CasesService } from '../../core/cases/cases.service';
import { AlertService } from '../../core/alert/alert.service';
import { HttpError } from '../../core/http/http-error.model';
import { CaseView } from '../../core/cases/case-view.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventTriggerResolver implements Resolve<CaseEventTrigger> {

  public static readonly PARAM_EVENT_ID = 'eid';
  public static readonly IGNORE_WARNING = 'ignoreWarning';

  private static readonly IGNORE_WARNING_VALUES = [ 'true', 'false' ];
  private cachedEventTrigger: CaseEventTrigger;

  constructor(
    private casesService: CasesService,
    private alertService: AlertService,
    ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CaseEventTrigger> {
    return this.isTriggerEventRoute(route) ? this.getAndCacheEventTrigger(route)
        : this.cachedEventTrigger ? Observable.of(this.cachedEventTrigger)
        : this.getAndCacheEventTrigger(route);
  }

  private isTriggerEventRoute(route: ActivatedRouteSnapshot) {
    // if route is 'trigger/:eid'
    // this strategy to detect if route is the trigger event route is a bit fragile
    console.log('isTrigger event route: ' + !route.firstChild || !route.firstChild.url.length)
    return !route.firstChild || !route.firstChild.url.length;
  }

  private getAndCacheEventTrigger(route: ActivatedRouteSnapshot): Observable<CaseEventTrigger> {
    let caseDetails: CaseView = route.parent.data.case;
    let eventTriggerId = route.paramMap.get(EventTriggerResolver.PARAM_EVENT_ID);
    let ignoreWarning = route.queryParamMap.get(EventTriggerResolver.IGNORE_WARNING);
    if (-1 === EventTriggerResolver.IGNORE_WARNING_VALUES.indexOf(ignoreWarning)) {
      ignoreWarning = 'false';
    }
    return this.casesService
      .getEventTrigger(caseDetails.case_type.jurisdiction.id, caseDetails.case_type.id, eventTriggerId, caseDetails.case_id, ignoreWarning)
      .do(eventTrigger => this.cachedEventTrigger = eventTrigger)
      .catch((error: HttpError) => {
        this.alertService.error(error.message);

        return Observable.throw(error);
      });
  }
}
