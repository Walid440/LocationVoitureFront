import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css'],
  animations: [
    trigger('zoomAnimation', [
      state('hovered', style({ transform: 'scale(1.2)' })),
      state('unhovered', style({ transform: 'scale(1)' })),
      transition('unhovered => hovered', animate('200ms ease-in')),
      transition('hovered => unhovered', animate('200ms ease-out'))
    ])
  ]
})
export class ImageZoomComponent {
  private defaultScale = 1;
  private maxScale = 2;
  private scaleStep = 0.1;

  scale = this.defaultScale;
  offsetX = 0;
  offsetY = 0;
  isDragging = false;
  dragStartX = 0;
  dragStartY = 0;

  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      const deltaX = event.clientX - this.dragStartX;
      const deltaY = event.clientY - this.dragStartY;

      this.offsetX += deltaX;
      this.offsetY += deltaY;

      this.dragStartX = event.clientX;
      this.dragStartY = event.clientY;
    }
  }

  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  onMouseWheel(event: WheelEvent): void {
    event.preventDefault();

    const delta = Math.sign(event.deltaY);
    const newScale = this.scale + delta * this.scaleStep;

    if (newScale >= this.defaultScale && newScale <= this.maxScale) {
      this.scale = newScale;
    }
  }

  resetZoom(): void {
    this.scale = this.defaultScale;
    this.offsetX = 0;
    this.offsetY = 0;
  }
}
