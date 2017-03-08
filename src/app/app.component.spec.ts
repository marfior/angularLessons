/* tslint:disable:no-unused-variable */
/*
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});


/*
class Dog{
  bark(){
    return "woof!";
  }
}


class DogMock(){

  public barkWasCalled: boolean = false;

  bark()
  {
    this.barkWasCalled = true;
  }

}


class DogWalkerService{

  constructor(private dog: Dog){
  }

  walkDog()
  {
    this.dog.bark();
    this.dog.bark();
    this.dog.bark();
  }

}


function fizzBuzz(num){
  let ret = '';
  if (num%3 ===0 ) ret += 'Fizz';
  if (num%5 ===0 ) ret += 'Buzz';
  return ret;
}


describe('FizzBuzz', function()  {

  it('should check that bark was called', function(){
    let dog = new Dog();
    spyOn(dog, 'bark');

    let service = new DogWalkerService(dog);
    service.walkDog();

    expect(dog.bark).toHaveBeenCalled();

  });

  it('should check that bark was called 3', function(){
    let dog = new Dog();
    spyOn(dog, 'bark');

    let service = new DogWalkerService(dog);
    service.walkDog();

    expect(dog.bark).toHaveBeenCalledTimes(3);

  });

  it('should return fizz when number is divisible by three,', function(){
      expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should return Buzz when number is divisible by five', function(){
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return FizzBuzz when number is not divisible by five', function(){
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
}
*/
