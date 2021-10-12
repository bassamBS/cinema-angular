import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentShow } from 'src/app/models/commentShow.model';
import { Show } from 'src/app/models/show.model';
import ShowsMockData from 'shows.json'

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  shows: BehaviorSubject<Array<Show>>;

  constructor() { 
    
    const showsArray = ShowsMockData.shows.map((show: any) => Show.fromJson(show));
    
    this.shows = new BehaviorSubject<Array<Show>>(showsArray);
  }

  /**
   * 
   * @param showId 
   * @returns 
   */
  getShowById(showId: number): Promise<Show> {
    return new Promise<Show>(
      (res, rej) => {
        const showValues = this.shows.getValue();

        for (let show of showValues) {
          if (showId == show.id) {
            res(show);
            break
          }
        }
      }
    )
  }

  /**
   * 
   * @param show 
   */
  addShow(show: Show) {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const showsValue = this.shows.getValue();
          showsValue.push(show);
          this.shows.next(showsValue);
          res();
        }, 200);
      }
    )
  }

  addCommentShow(commentShowAdd: CommentShow, showCommented: number) {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const showsValue = this.shows.getValue();
          
          for(let [index, show] of showsValue.entries()) {
            if(show.id == showCommented) {
              showsValue[index].addComment(commentShowAdd);
              this.shows.next(showsValue);
              res();
              break;
            }
        }

        })
      }
    )
  }

  editShow(editedShow: Show) {
    return new Promise<void>(
      (res, rej) => {

        setTimeout(() => {
          const shows = this.shows.getValue();

          for(let [index, show] of shows.entries()) {
            if(show.id === editedShow.id) {
              shows[index] = editedShow;
              this.shows.next(shows);
              res();
              break;
            }
        }

        }, 500)
      }
    )
  }

  deleteShow(showIdToDelete: number) {
    const shows = this.shows.getValue();

    for (let [index, show] of shows.entries()) {
      if (show.id === showIdToDelete) {
        shows.splice(index, 1)
        this.shows.next(shows);
        break;
      }
    }
  }

  

}
