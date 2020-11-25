import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Renderer2 } from "@angular/core";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const compilerConfig = {preserveWhitespaces: false} as any

  beforeEach(async(() => {
    TestBed.configureCompiler(compilerConfig).configureTestingModule({
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  test("render with snapshot", () => {
      expect(fixture).toMatchSnapshot();
  });

  test("should have a default name", () => {
    expect(component.name).toBe("Matt");
  });
});
