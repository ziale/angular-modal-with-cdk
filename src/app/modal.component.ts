import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { CdkPortal } from "@angular/cdk/portal";
import { Subscription } from "rxjs";

@Component({
  selector: "app-modal",
  template: `
    <div *cdkPortal cdkScrollable>
      <ng-content></ng-content>
    </div>
  `,
  animations: []
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() backdropClass = "dark-backdrop";
  @Input() panelClass = "default";
  @Output() backdropClick = new EventEmitter();

  @ViewChild(CdkPortal, { static: false }) portal: CdkPortal;
  overlayRef: OverlayRef;
  backdropClickSubscription: Subscription;

  constructor(private overlay: Overlay) {}

  ngOnInit(): void {
    const overlayConfig: OverlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: this.backdropClass,
      panelClass: [this.panelClass, "ge-scroll"],
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
    this.overlayRef = this.overlay.create(overlayConfig);
  }

  ngAfterViewInit(): void {
    this.overlayRef.attach(this.portal);
    this.backdropClickSubscription = this.overlayRef
      .backdropClick()
      .subscribe(() => {
        this.backdropClick.emit();
      });
  }

  ngOnDestroy(): void {
    this.overlayRef.detach();
    this.backdropClickSubscription.unsubscribe();
  }
}
