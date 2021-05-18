import { TestClass } from ".";

it ('begin test', async () => {
    const testClass = new TestClass();
    expect(await testClass.say()).toBe('hello world');
});
