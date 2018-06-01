import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../app.config';
import { HttpService } from '../http/http.service';
import { CaseType } from '../../shared/domain/definition/case-type.model';

@Injectable()
export class DefinitionsService {

  constructor(private http: HttpService, private appConfig: AppConfig) {}

  getCaseTypes(apiUrl: string, jurisdictionId: string, access: string): Observable<CaseType[]> {

    // hacky, hack hack
    this.appConfig.setApiUrl(apiUrl);

    console.log('URL: ' + apiUrl);

    const url = this.appConfig.getApiUrl()
      + `/caseworkers/:uid`
      + `/jurisdictions/${jurisdictionId}`
      + `/case-types?access=${access}`;

    return this.http
      .get(url)
      .map(response => response.json());
  }
}
