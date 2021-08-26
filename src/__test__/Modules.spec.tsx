import { simpleFunc } from '../Modules/Modules';
import { complexFunc } from '../Modules/Modules';

describe("A simple module", () => {

  it("it should say: hello world!", () => {
    expect(simpleFunc()).toEqual("hello world!");
  });

  test("it should say: hello testing world", () => {
    expect(complexFunc()).toEqual("hello testing world");
  });

});
