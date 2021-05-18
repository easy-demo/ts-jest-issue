export class TestClass {
    public async /* A comment here cause error with async/await when target>=2017 */ say() {
        await Promise.resolve();
        return 'hello world';
    }
}