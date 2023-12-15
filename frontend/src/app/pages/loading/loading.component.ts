import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { LoadingService } from "src/app/services";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-spinner',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit, OnDestroy, AfterContentChecked {

  show = false;

  private subscription: Subscription;

  constructor(private loadingService: LoadingService, private changeDedectionRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.loadingService.loading$
      .subscribe((res: boolean) => {
        this.show = res;
      });
  }

  ngAfterContentChecked(): void {
      this.changeDedectionRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}