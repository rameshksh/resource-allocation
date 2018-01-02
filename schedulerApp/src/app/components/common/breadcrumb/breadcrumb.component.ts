import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET} from '@angular/router';

import 'rxjs/add/operator/filter';

interface IBreadcrumb {
  label : string;
  params : Params;
  url : string;
  active : boolean;  
}

@Component({selector: 'app-breadcrumb', styleUrls: ['./breadcrumb.component.scss'], templateUrl: './breadcrumb.component.html'})

export class BreadcrumbComponent implements OnInit {

  public breadcrumbs : IBreadcrumb[];

  /**
   * @class DetailComponent
   * @constructor
   */
  constructor(private activatedRoute : ActivatedRoute, private router : Router) {
    this.breadcrumbs = [];
  }

  /**
   * Let's go!
   *
   * @class DetailComponent
   * @method ngOnInit
   */
  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    // subscribe to the NavigationEnd event
    this
      .router
      .events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        // set breadcrumbs
        const root : ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      });
  }

  /**
   * Returns array of IBreadcrumb objects that represent the breadcrumb
   *
   * @class DetailComponent
   * @method getBreadcrumbs
   * @param {ActivateRoute} route
   * @param {string} url
   * @param {IBreadcrumb[]} breadcrumbs
   */
  private getBreadcrumbs(route : ActivatedRoute, url = '', breadcrumbs : IBreadcrumb[] = []) : IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB : string = "breadcrumb";

    // get the child routes
    let children : ActivatedRoute[] = route.children;

    // return if there are no more children
    if (children.length === 0) {
      breadcrumbs[breadcrumbs.length - 1].active = true;
      return breadcrumbs;
    }

    // iterate over each children
    for (let child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      // verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // get the route's URL segment
      let routeURL : string = child
        .snapshot
        .url
        .map(segment => segment.path)
        .join('/');

      if (routeURL !== '') {
        // append route URL to URL
        url += `/${routeURL}`;

        // add breadcrumb
        let breadcrumb : IBreadcrumb = {
          label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
          params: child.snapshot.params,
          url: url,
          active: false
        };

        breadcrumbs.push(breadcrumb);
      }

      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }

}