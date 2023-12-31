import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.url === 'https://localhost:5001/api/Subject/GetSubjects') {
      const insecureReq = req.clone({
        setHeaders: { 'X-Skip-SSL-Check': 'true' },
      });
      return next.handle(insecureReq);
    }
    return next.handle(req);
  }
}
