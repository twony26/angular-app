import { Injectable } from "@angular/core";
import { ISession } from "../shared";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";


@Injectable()
export class VoterService{

  constructor(private http:HttpClient){}

  deleteVoter(eventId:number, session:ISession, voterName:string){
    session.voters = session.voters.filter(voter => voter !== voterName);
    let options = { headers : new HttpHeaders({'Content-Type':'application-json'})}
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url).
    pipe(catchError(this.handleError('deleteVoter'))).subscribe();
  }

  addVoter(eventId:number, session:ISession, voterName:string){
    session.voters.push(voterName);
    let options = { headers : new HttpHeaders({'Content-Type':'application-json'})}
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options).
    pipe(catchError(this.handleError('addVoter'))).subscribe();
  }

  private handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

  userHasVoted(session:ISession, voterName:string){
    return session.voters.some(voter => voter === voterName);
  }
}
