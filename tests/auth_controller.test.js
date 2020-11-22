`use strict`

const auth_controller = require(`../auth_controller`);

test (`returns false for invalid user credentials`, () => {
    expect(auth_controller.login(`username`, `1235`)).toBe(false);
});

test (`returns false for missing user credentials`, () => {
    expect(auth_controller.login()).toBe(false);
});

test (`returns false for invalid user credentials`, () => {
    expect(auth_controller.login(`username`, `1234`)).toBe(true);
});