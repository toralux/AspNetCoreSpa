import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { RegisterModel } from '../../core/models/register-model';
import { AccountService } from '../../core/account/account.service';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';

@Component({
    selector: 'appc-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    public errors: string[] = [];
    public controls: Array<ControlBase<any>>;

    constructor(public accountService: AccountService, public router: Router, public route: ActivatedRoute) { }

    public register(model: RegisterModel): void {
        this.accountService.register(model)
            .subscribe((res: Response) => {
                this.router.navigate(['../registerconfirmation'], { relativeTo: this.route, queryParams: { emailConfirmed: true } });
            },
            (errors: string[]) => {
                this.errors = errors;
            });
    };

    public ngOnInit() {
        const controls: Array<ControlBase<any>> = [
            new ControlTextbox({
                key: 'username',
                label: 'Brukernavn',
                placeholder: 'Brukernavn',
                value: '',
                type: 'textbox',
                required: true,
                order: 1
            }),
            new ControlTextbox({
                key: 'firstname',
                label: 'Fornavn',
                placeholder: 'Fornavn',
                value: '',
                type: 'textbox',
                required: true,
                order: 2
            }),
            new ControlTextbox({
                key: 'lastname',
                label: 'Etternavn',
                placeholder: 'Etternavn',
                value: '',
                type: 'textbox',
                required: true,
                order: 3
            }),
            new ControlTextbox({
                key: 'email',
                label: 'E-post',
                placeholder: 'E-post',
                value: '',
                type: 'email',
                required: true,
                order: 4
            }),
            new ControlTextbox({
                key: 'password',
                label: 'Passord',
                placeholder: 'Passord',
                value: '',
                type: 'password',
                required: true,
                order: 5
            })
        ];

        this.controls = controls;
    }

}
