var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function minEatingSpeed(piles, h) {
    var e_1, _a;
    var l = 1;
    var r = Math.max.apply(Math, __spreadArray([], __read(piles), false));
    var res = r;
    while (l <= r) {
        var k = Math.trunc((l + r) / 2);
        var hours = 0;
        try {
            for (var piles_1 = (e_1 = void 0, __values(piles)), piles_1_1 = piles_1.next(); !piles_1_1.done; piles_1_1 = piles_1.next()) {
                var p = piles_1_1.value;
                hours += Math.ceil(p / k);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (piles_1_1 && !piles_1_1.done && (_a = piles_1.return)) _a.call(piles_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (hours <= h) {
            res = Math.min(res, k);
            r = k - 1;
        }
        else {
            l = k + 1;
        }
    }
    return res;
}
console.log(minEatingSpeed([3, 6, 7, 11], 8));
