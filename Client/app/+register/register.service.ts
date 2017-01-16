import { Injectable } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { User } from '../shared/models/user.model';
import { RegisterModel } from './register.model';

@Injectable()
export class RegisterService {

    public accountRegisterApi: string = 'api/account/register/';

    constructor(public accountService: DataService) { }

    public register(newUser: RegisterModel) {
        return this.accountService.post(this.accountRegisterApi, newUser);
    }

}
