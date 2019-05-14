import test from "ava";
import { two, four } from "index";

test("basic arithmetic works", t => {
    t.assert(two + two === four);
});
