import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingformPage } from './bookingform.page';

describe('BookingformPage', () => {
  let component: BookingformPage;
  let fixture: ComponentFixture<BookingformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookingformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
