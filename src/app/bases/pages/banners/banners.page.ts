import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-banners',
  templateUrl: './banners.page.html',
  styleUrls: ['./banners.page.scss'],
})
export class BannersPage implements OnInit, OnDestroy {

  countDown: any;
  counter = 300;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe((count) => {
      if (this.counter == 0 && count) {
        console.log('timer completed', count, this.counter);
        if (this.countDown) {
          this.countDown.unsubscribe();
        }
      }
      --this.counter;
    });
  }
  ngOnDestroy() {
    this.countDown = null;
  }
}

  @Pipe({
    name: 'formatTime',
  })
  export class FormatTimePipe implements PipeTransform {
    transform(value: number): string {
      const minutes: number = Math.floor(value / 60);
      return (
        ('00' + minutes).slice(-2) +
        ':' +
        ('00' + Math.floor(value - minutes * 60)).slice(-2)
      );
    }
  }

