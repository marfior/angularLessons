/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have title set to "Hello world!', () =>{
    let p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.innerText).toBe("Hello world!");
  });

  it ('should update databinding on title change', async(() =>{
    component.title = "123";
    fixture.detectChanges();
    let p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.innerText).toBe("123");
  }));

});
