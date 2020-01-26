import ms from '../src';

describe('to string', () => {
	it('should not throw an error', () => {
		expect(() => ms(500)).not.toThrowError();
	});

	it('should support milliseconds', () => {
		expect(ms(500)).toBe('500ms');
		expect(ms(-500)).toBe('-500ms');
	});

	it('should support seconds', () => {
		expect(ms(1000)).toBe('1s');
		expect(ms(10000)).toBe('10s');
		expect(ms(-1000)).toBe('-1s');
		expect(ms(-10000)).toBe('-10s');
	});

	it('should support minutes', () => {
		expect(ms(60 * 1000)).toBe('1m');
		expect(ms(60 * 10000)).toBe('10m');
		expect(ms(-1 * 60 * 1000)).toBe('-1m');
		expect(ms(-1 * 60 * 10000)).toBe('-10m');
	});

	it('should support hours', () => {
		expect(ms(60 * 60 * 1000)).toBe('1h');
		expect(ms(60 * 60 * 10000)).toBe('10h');
		expect(ms(-1 * 60 * 60 * 1000)).toBe('-1h');
		expect(ms(-1 * 60 * 60 * 10000)).toBe('-10h');
	});

	it('should support days', () => {
		expect(ms(24 * 60 * 60 * 1000)).toBe('1d');
		expect(ms(24 * 60 * 60 * 10000)).toBe('10d');
		expect(ms(-1 * 24 * 60 * 60 * 1000)).toBe('-1d');
		expect(ms(-1 * 24 * 60 * 60 * 10000)).toBe('-10d');
	});

	it('should round', () => {
		expect(ms(234234234)).toBe('3d');
		expect(ms(-234234234)).toBe('-3d');
	});
});

describe('to string long', () => {
	it('should not throw an error', () => {
		expect(() => ms(500, true)).not.toThrowError();
	});

	it('should support milliseconds', () => {
		expect(ms(500, true)).toBe('500 ms');
		expect(ms(-500, true)).toBe('-500 ms');
	});

	it('should support seconds', () => {
		expect(ms(1000, true)).toBe('1 second');
		expect(ms(1200, true)).toBe('1 second');
		expect(ms(10000, true)).toBe('10 seconds');
		expect(ms(-1000, true)).toBe('-1 second');
		expect(ms(-1200, true)).toBe('-1 second');
		expect(ms(-10000, true)).toBe('-10 seconds');
	});

	it('should support minutes', () => {
		expect(ms(60 * 1000, true)).toBe('1 minute');
		expect(ms(60 * 1200, true)).toBe('1 minute');
		expect(ms(60 * 10000, true)).toBe('10 minutes');
		expect(ms(-1 * 60 * 1000, true)).toBe('-1 minute');
		expect(ms(-1 * 60 * 1200, true)).toBe('-1 minute');
		expect(ms(-1 * 60 * 10000, true)).toBe('-10 minutes');
	});

	it('should support hours', () => {
		expect(ms(60 * 60 * 1000, true)).toBe('1 hour');
		expect(ms(60 * 60 * 1200, true)).toBe('1 hour');
		expect(ms(60 * 60 * 10000, true)).toBe('10 hours');
		expect(ms(-1 * 60 * 60 * 1000, true)).toBe('-1 hour');
		expect(ms(-1 * 60 * 60 * 1200, true)).toBe('-1 hour');
		expect(ms(-1 * 60 * 60 * 10000, true)).toBe('-10 hours');
	});

	it('should support days', () => {
		expect(ms(24 * 60 * 60 * 1000, true)).toBe('1 day');
		expect(ms(24 * 60 * 60 * 1200, true)).toBe('1 day');
		expect(ms(24 * 60 * 60 * 10000, true)).toBe('10 days');
		expect(ms(-1 * 24 * 60 * 60 * 1000, true)).toBe('-1 day');
		expect(ms(-1 * 24 * 60 * 60 * 1200, true)).toBe('-1 day');
		expect(ms(-1 * 24 * 60 * 60 * 10000, true)).toBe('-10 days');
	});

	it('should round', () => {
		expect(ms(234234234, true)).toBe('3 days');
		expect(ms(-234234234, true)).toBe('-3 days');
	});
});
