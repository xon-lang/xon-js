import { translateStatement } from '../../../translate';

test('has literal assignment', () => {
    const code = 'a = 5';
    expect(translateStatement(code)).toBe('a = 5;');
});
