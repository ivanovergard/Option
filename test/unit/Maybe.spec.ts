import {Maybe} from "../../src/Maybe";

describe("Maybe", () => {
    test("When it has some it should do something", () => {
        Maybe
            .some(3)
            .do(value => {
                expect(true)
            })
    })
    test("When it has none it should do nothing", () => {
        Maybe
            .none()
            .do(value => {
                expect(false)
            })
    })
})