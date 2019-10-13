import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/core/service/api.service';
import { User } from '../user';

@Injectable()
export class UserApiService {

  constructor(
    private apiService: ApiService,
  ) { }

  add(request: User): Observable<void> {
    return this.apiService.post('user', request);
  }
}
