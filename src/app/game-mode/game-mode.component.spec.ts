import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModeComponent } from './game-mode.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GameModeComponent', () => {
  let component: GameModeComponent;
  let fixture: ComponentFixture<GameModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    const de: DebugElement[] = fixture.debugElement.queryAll(By.css('h1'));
    const ne: HTMLElement[] = de.map( x => x.nativeElement);
    expect(ne.length).toEqual(1);
    expect(ne[0].innerText || ne[0].textContent).not.toBe('');
  });

  describe('Difficulty selector', () => {
    it('should exists', () => {
      const de: DebugElement[] = fixture.debugElement.queryAll(By.css('select'));
      const ne: HTMLElement[] = de.map( x => x.nativeElement);
      expect(ne.length).toEqual(1);
      expect(ne[0].innerText || ne[0].textContent).not.toBe('');
    });

    it('should contain label or tittle', () => {
      /* TODO improve for accepting a label attribute */
      const de: DebugElement[] = fixture.debugElement.queryAll(By.css('select'));
      const ne: HTMLElement[] = de.map( x => x.nativeElement);
      expect(ne.length).toEqual(1);
      const labelAttr = ne[0].getAttribute('title');
      expect( labelAttr !== null && labelAttr !== '').toBeTruthy();
    });

    it('should contain a disabled first option', () => {
      const de: DebugElement[] = fixture.debugElement.queryAll(By.css('select option'));
      const ne: HTMLElement[] = de.map( x => x.nativeElement);
      expect(ne.length).toEqual(1);
      expect(ne[0].innerText || ne[0].textContent).not.toBe('');
      expect(ne[0].getAttribute('disabled')).not.toBeNull();
    });
  });
});
