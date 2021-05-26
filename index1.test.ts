import { TestClass } from "./index";

it ('test', async () => {
    const testClass = new TestClass();
    expect(await testClass.say()).toBe('hello world');
});

it ('test2', () => {
    return new TestClass().sayAgain();
});