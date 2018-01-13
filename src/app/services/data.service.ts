import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  data: Observable<Object>;

  language = 'hebrew';

  constructor(public http: HttpClient) {
  }

  setLanguage(lang) {
    this.language = lang;
  }

  getZalmanName() {
    return this.language === 'hebrew' ? 'זלמן אקרמן' : 'Zalman Ackerman';
  }

  getContent(content) {
    this.data = new Observable(observer => {
      if(content == undefined) content = 'loading';

      this.http.get(`assets/content/${this.language}/${content}.json`)
        .subscribe(res => {
          observer.next(res);
          observer.complete();
        });
    });
    return this.data;
  }

}
