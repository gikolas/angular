import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('shoult animation is On', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.pageNimation).toEqual('opacityOn')
  })

  it('shoult animation is Out', async(() => {
    const fixture = TestBed.createComponent(BlogComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.pageNimation).toBe('opacityOot')
    })
  }))
});
