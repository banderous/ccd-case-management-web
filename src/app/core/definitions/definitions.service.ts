import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../app.config';
import { HttpService } from '@hmcts/ccd-case-ui-toolkit';
import { Jurisdiction } from '../../shared/domain/definition/jurisdiction.model';
import { CaseTypeLite } from '../../shared/domain/definition/case-type-lite.model';

@Injectable()
export class DefinitionsService {

  constructor(private http: HttpService, private appConfig: AppConfig) {}

  getCaseTypes(jurisdictionId: string, access: string): Observable<CaseTypeLite[]> {
    const url = this.appConfig.getApiUrl()
      + `/caseworkers/:uid`
      + `/jurisdictions/${jurisdictionId}`
      + `/case-types?access=${access}`;

    return this.http
      .get(url)
      .map(response => response.json());
  }

  getJurisdictions(access: string): Observable<Jurisdiction[]> {
    const url = this.appConfig.getApiUrl()
      + `/caseworkers/:uid`
      + `/jurisdictions?access=${access}`;

    return this.http
      .get(url)
      .map(response => response.json());
  }
}
