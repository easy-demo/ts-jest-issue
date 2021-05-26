export class TestClass {
    async say() {
        await import('./other')

        return 'hello world';
    }

    sayAgain() {
        return import('./other');
    }
}