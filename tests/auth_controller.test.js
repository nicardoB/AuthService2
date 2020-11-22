`use strict`

const auth_controller = require(`../auth_controller`);

test (`returns false for invalid user credentials`, () => {
    expect(auth_controller.login(`pat`, `1235`)).toBe(false);
});