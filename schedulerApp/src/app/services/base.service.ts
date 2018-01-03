import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable, Optional} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export interface IBaseService {
    get(url : string) : Observable < any >;
    post(entity : any, url : string) : Observable < void >;
    put(entity : any, url : string) : Observable < void >;
    del(url : string) : Observable < void >;
}

@Injectable()
export class BaseService implements IBaseService {

    options : RequestOptions;

    constructor(@Optional()public http : Http) {
        this.setHeader();
    }

    // this method used to get all records with respect to a userId
    get(url : string) : Observable < any > {
        return this
            .http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(entity : any, url : string) : Observable < void > {
        let body = JSON.stringify(entity);

        return this
            .http
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    put(entity : any, url : string) : Observable < void > {
        const body = JSON.stringify(entity);

        return this
            .http
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    del(url : string) : Observable < void > {
        return this
            .http
            .delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    extractData(res : Response) {
        const body = res.json();
        return body
            ? body.data || body
            : null;
    }

    handleError(error : any) {
        // In a real world app, we might use a remote logging infrastructure We'd also
        // dig deeper into the error to get a better message

        const errMsg = (error.message)
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';

        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private setHeader() {
        const headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({headers: headers});
    }
}
