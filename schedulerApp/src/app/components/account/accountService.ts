import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {IBaseService, BaseService} from '../../services/base.service';

interface IAccountService extends IBaseService {}

@Injectable()
export class AccountService extends BaseService implements IAccountService {

    constructor(public http : Http) {
        super(http);
    }
}
