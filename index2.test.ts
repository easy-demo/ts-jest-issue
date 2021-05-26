import { TestClass } from "./index";

it ('begin test', async () => {
    expect(await new TestClass().say()).toBe('hello world');
});
