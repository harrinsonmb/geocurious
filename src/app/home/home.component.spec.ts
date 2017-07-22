import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contains two anchors', () => {
    const de: DebugElement [] = fixture.debugElement.queryAll(By.css('a'));
    expect(de.map(x => x.nativeElement).length).toBe(2);
  });

  it('should contains a valid anchor for going to gamemode view', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('a[href="/gamemode"]'));
    expect(de).not.toBeNull();
    const ne = de.nativeElement;
    expect(ne.innerText || ne.textContent).not.toBe('');
  });

  it('should contains a valid anchor for going to score view', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('a[href="/score"]'));
    expect(de).not.toBeNull();
    const ne = de.nativeElement;
    expect(ne.innerText || ne.textContent).not.toBe('');
  });
});
