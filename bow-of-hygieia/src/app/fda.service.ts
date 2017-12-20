import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FdaService {

  private drugEventUrl = 'https://api.fda.gov/drug/event.json';
  private drugLabelUrl = 'https://api.fda.gov/drug/label.json';

  constructor(private http: HttpClient) { }


  getDrugList (): Observable<any> {
    return this.http.get<any>(this.drugEventUrl+'?count=patient.drug.medicinalproduct.exact&limit=1000');
  }

  getChart1 (drug: string): Observable<any> {
    var fdaUrl1=this.drugEventUrl+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:1&count=patient.reaction.reactionmeddrapt.exact';
    //var fdaUrl2=this.drugEventUrl+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:2&count=patient.reaction.reactionmeddrapt.exact';
    return this.http.get<any>(fdaUrl1);
  }

  getChart2 (drug: string): Observable<any> {
    //var fdaUrl1=this.drugEventUrl+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:1&count=patient.reaction.reactionmeddrapt.exact';
    var fdaUrl2=this.drugEventUrl+'?search=patient.drug.medicinalproduct:"'+drug+'"+AND+serious:2&count=patient.reaction.reactionmeddrapt.exact';
    return this.http.get<any>(fdaUrl2);
  }

  getLabel (drug: string): Observable<any> {
    var labelUrl=this.drugLabelUrl+'?search=substance_name:"'+drug+'"';
    return this.http.get<any>(labelUrl)
      .pipe(
        catchError(this.handleError([]) )
      );
  }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {return of(result as T);}
  }

}
