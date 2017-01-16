import { Injectable } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { User } from '../shared/models/user.model';

@Injectable()
export class LoginService {

    public accountLoginApi: string = 'api/account/login/';

    constructor(public accountService: DataService) { }

    public login(creds: any) {
        return this.accountService.post(this.accountLoginApi, creds);
    }

}
