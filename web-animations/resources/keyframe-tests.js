"use strict";

// ==============================
//
// Common keyframe test data
//
// ==============================


// ------------------------------
//  Composite values
// ------------------------------

const gGoodKeyframeCompositeValueTests = [
  "replace", "add", "accumulate", undefined
];

const gGoodOptionsCompositeValueTests = [
  "replace", "add", "accumulate"
];

const gBadCompositeValueTests = [
  "unrecognised", "replace ", "Replace", null
];

// ------------------------------
//  Keyframes
// ------------------------------

const gEmptyKeyframeListTests = [
  [],
  null,
  undefined,
];

const gPropertyIndexedKeyframesTests = [
  { desc:   "a one property two value property-indexed keyframes specification",
    input:  { left: ["10px", "20px"] },
    output: [{ offset: null, computedOffset: 0, easing: "linear",
               left: "10px" },
             { offset: null, computedOffset: 1, easing: "linear",
               left: "20px" }] },
  { desc:   "a one shorthand property two value property-indexed keyframes"
            + " specification",
    input:  { margin: ["10px", "10px 20px 30px 40px"] },
    output: [{ offset: null, computedOffset: 0, easing: "linear",
               margin: "10px" },
             { offset: null, computedOffset: 1, easing: "linear",
               margin: "10px 20px 30px 40px" }] },
  { desc:   "a two property (one shorthand and one of its longhand components)"
            + " two value property-indexed keyframes specification",
    input:  { marginTop: ["50px", "60px"],
              margin: ["10px", "10px 20px 30px 40px"] },
    output: [{ offset: null, computedOffset: 0, easing: "linear",
               marginTop: "50px", margin: "10px" },
             { offset: null, computedOffset: 1, easing: "linear",
               marginTop: "60px", margin: "10px 20px 30px 40px" }] },
  { desc:   "a two property two value property-indexed keyframes specification",
    input:  { left: ["10px", "20px"],
              top: ["30px", "40px"] },
    output: [{ offset: null, computedOffset: 0, easing: "linear",
               left: "10px", top: "30px" },
             { offset: null, computedOffset: 1, easing: "linear",
               left: "20px", top: "40px" }] },
  { desc:   "a two property property-indexed keyframes specification with"
            + " different numbers of values",
    input:  { left: ["10px", "20px", "30px"],
              top: ["40px", "50px"] },
    output: [{ offset: null, computedOffset: 0.0, easing: "linear",
               left: "10px", top: "40px" },
             { offset: null, computedOffset: 0.5, easing: "linear",
               left: "20px" },
             { offset: null, computedOffset: 1.0, easing: "linear",
               left: "30px", top: "50px" }] },
  { desc:   "a property-indexed keyframes specification with an invalid value",
    input:  { left: ["10px", "20px", "30px", "40px", "50px"],
              top:  ["15px", "25px", "invalid", "45px", "55px"] },
    output: [{ offset: null, computedOffset: 0.00, easing: "linear",
               left: "10px", top: "15px" },
             { offset: null, computedOffset: 0.25, easing: "linear",
               left: "20px", top: "25px" },
             { offset: null, computedOffset: 0.50, easing: "linear",
               left: "30px" },
             { offset: null, computedOffset: 0.75, easing: "linear",
               left: "40px", top: "45px" },
             { offset: null, computedOffset: 1.00, easing: "linear",
               left: "50px", top: "55px" }] },
  { desc:   "a one property two value property-indexed keyframes specification"
            + " that needs to stringify its values",
    input:  { opacity: [0, 1] },
    output: [{ offset: null, computedOffset: 0, easing: "linear",
               opacity: "0" },
             { offset: null, computedOffset: 1, easing: "linear",
               opacity: "1" }] },
  { desc:   "a property-indexed keyframes specification with a CSS variable"
            + " reference",
    input:  { left: [ "var(--dist)", "calc(var(--dist) + 100px)" ] },
    output: [{ offset: null, computedOffset: 0.0, easing: "linear",
               left: "var(--dist)" },
             { offset: null, computedOffset: 1.0, easing: "linear",
               left: "calc(var(--dist) + 100px)" }] },
  { desc:   "a property-indexed keyframes specification with a CSS variable"
            + " reference in a shorthand property",
    input:  { margin: [ "var(--dist)", "calc(var(--dist) + 100px)" ] },
    output: [{ offset: null, computedOffset: 0.0, easing: "linear",
               margin: "var(--dist)" },
             { offset: null, computedOffset: 1.0, easing: "linear",
               margin: "calc(var(--dist) + 100px)" }] },
  { desc:   "a one property one value property-indexed keyframes specification",
    input:  { left: ["10px"] },
    output: [{ offset: null, computedOffset: 1, easing: "linear",
               left: "10px" }] },
  { desc:   "a one property one non-array value property-indexed keyframes"
            + " specification",
    input:  { left: "10px" },
    output: [{ offset: null, computedOffset: 1, easing: "linear",
               left: "10px" }] },
  { desc:   "a one property two value property-indexed keyframes specification"
            + " where the first value is invalid",
    input:  { left: ["invalid", "10px"] },
    output: [{ offset: null, computedOffset: 0, easing: "linear" },
             { offset: null, computedOffset: 1, easing: "linear",
               left: "10px" }] },
  { desc:   "a one property two value property-indexed keyframes specification"
            + " where the second value is invalid",
    input:  { left: ["10px", "invalid"] },
    output: [{ offset: null, computedOffset: 0, easing: "linear",
               left: "10px" },
             { offset: null, computedOffset: 1, easing: "linear" }] },
];

const gKeyframeSequenceTests = [
  { desc:   "a one property one keyframe sequence",
    input:  [{ offset: 1, left: "10px" }],
    output: [{ offset: 1, computedOffset: 1, easing: "linear",
               left: "10px" }] },
  { desc:   "a one property two keyframe sequence",
    input:  [{ offset: 0, left: "10px" },
             { offset: 1, left: "20px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear", left: "10px" },
             { offset: 1, computedOffset: 1, easing: "linear", left: "20px" }]
  },
  { desc:   "a two property two keyframe sequence",
    input:  [{ offset: 0, left: "10px", top: "30px" },
             { offset: 1, left: "20px", top: "40px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               left: "10px", top: "30px" },
             { offset: 1, computedOffset: 1, easing: "linear",
               left: "20px", top: "40px" }] },
  { desc:   "a one shorthand property two keyframe sequence",
    input:  [{ offset: 0, margin: "10px" },
             { offset: 1, margin: "20px 30px 40px 50px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               margin: "10px" },
             { offset: 1, computedOffset: 1, easing: "linear",
               margin: "20px 30px 40px 50px" }] },
  { desc:   "a two property (a shorthand and one of its component longhands)"
            + " two keyframe sequence",
    input:  [{ offset: 0, margin: "10px", marginTop: "20px" },
             { offset: 1, marginTop: "70px", margin: "30px 40px 50px 60px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               margin: "10px", marginTop: "20px" },
             { offset: 1, computedOffset: 1, easing: "linear",
               marginTop: "70px", margin: "30px 40px 50px 60px" }] },
  { desc:   "a keyframe sequence with duplicate values for a given interior"
            + " offset",
    input:  [{ offset: 0.0, left: "10px" },
             { offset: 0.5, left: "20px" },
             { offset: 0.5, left: "30px" },
             { offset: 0.5, left: "40px" },
             { offset: 1.0, left: "50px" }],
    output: [{ offset: 0.0, computedOffset: 0.0, easing: "linear",
               left: "10px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               left: "20px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               left: "30px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               left: "40px" },
             { offset: 1.0, computedOffset: 1.0, easing: "linear",
               left: "50px" }] },
  { desc:   "a keyframe sequence with duplicate values for offsets 0 and 1",
    input:  [{ offset: 0, left: "10px" },
             { offset: 0, left: "20px" },
             { offset: 0, left: "30px" },
             { offset: 1, left: "40px" },
             { offset: 1, left: "50px" },
             { offset: 1, left: "60px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear", left: "10px" },
             { offset: 0, computedOffset: 0, easing: "linear", left: "20px" },
             { offset: 0, computedOffset: 0, easing: "linear", left: "30px" },
             { offset: 1, computedOffset: 1, easing: "linear", left: "40px" },
             { offset: 1, computedOffset: 1, easing: "linear", left: "50px" },
             { offset: 1, computedOffset: 1, easing: "linear", left: "60px" }]
  },
  { desc:   "a two property four keyframe sequence",
    input:  [{ offset: 0, left: "10px" },
             { offset: 0, top: "20px" },
             { offset: 1, top: "30px" },
             { offset: 1, left: "40px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear", left: "10px" },
             { offset: 0, computedOffset: 0, easing: "linear", top: "20px" },
             { offset: 1, computedOffset: 1, easing: "linear", top: "30px" },
             { offset: 1, computedOffset: 1, easing: "linear", left: "40px" }]
  },
  { desc:   "a single keyframe sequence with omitted offset",
    input:  [{ left: "10px" }],
    output: [{ offset: null, computedOffset: 1, easing: "linear",
               left: "10px" }] },
  { desc:   "a single keyframe sequence with null offset",
    input:  [{ offset: null, left: "10px" }],
    output: [{ offset: null, computedOffset: 1, easing: "linear",
               left: "10px" }] },
  { desc:   "a single keyframe sequence with string offset",
    input:  [{ offset: '0.5', left: "10px" }],
    output: [{ offset: 0.5, computedOffset: 0.5, easing: "linear",
               left: "10px" }] },
  { desc:   "a one property keyframe sequence with some omitted offsets",
    input:  [{ offset: 0.00, left: "10px" },
             { offset: 0.25, left: "20px" },
             { left: "30px" },
             { left: "40px" },
             { offset: 1.00, left: "50px" }],
    output: [{ offset: 0.00, computedOffset: 0.00, easing: "linear",
               left: "10px" },
             { offset: 0.25, computedOffset: 0.25, easing: "linear",
               left: "20px" },
             { offset: null, computedOffset: 0.50, easing: "linear",
               left: "30px" },
             { offset: null, computedOffset: 0.75, easing: "linear",
               left: "40px" },
             { offset: 1.00, computedOffset: 1.00, easing: "linear",
               left: "50px" }] },
  { desc:   "a one property keyframe sequence with some null offsets",
    input:  [{ offset: 0.00, left: "10px" },
             { offset: 0.25, left: "20px" },
             { offset: null, left: "30px" },
             { offset: null, left: "40px" },
             { offset: 1.00, left: "50px" }],
    output: [{ offset: 0.00, computedOffset: 0.00, easing: "linear",
               left: "10px" },
             { offset: 0.25, computedOffset: 0.25, easing: "linear",
               left: "20px" },
             { offset: null, computedOffset: 0.50, easing: "linear",
               left: "30px" },
             { offset: null, computedOffset: 0.75, easing: "linear",
               left: "40px" },
             { offset: 1.00, computedOffset: 1.00, easing: "linear",
               left: "50px" }] },
  { desc:   "a two property keyframe sequence with some omitted offsets",
    input:  [{ offset: 0.00, left: "10px", top: "20px" },
             { offset: 0.25, left: "30px" },
             { left: "40px" },
             { left: "50px", top: "60px" },
             { offset: 1.00, left: "70px", top: "80px" }],
    output: [{ offset: 0.00, computedOffset: 0.00, easing: "linear",
               left: "10px", top: "20px" },
             { offset: 0.25, computedOffset: 0.25, easing: "linear",
               left: "30px" },
             { offset: null, computedOffset: 0.50, easing: "linear",
               left: "40px" },
             { offset: null, computedOffset: 0.75, easing: "linear",
               left: "50px", top: "60px" },
             { offset: 1.00, computedOffset: 1.00, easing: "linear",
               left: "70px", top: "80px" }] },
  { desc:   "a one property keyframe sequence with all omitted offsets",
    input:  [{ left: "10px" },
             { left: "20px" },
             { left: "30px" },
             { left: "40px" },
             { left: "50px" }],
    output: [{ offset: null, computedOffset: 0.00, easing: "linear",
               left: "10px" },
             { offset: null, computedOffset: 0.25, easing: "linear",
               left: "20px" },
             { offset: null, computedOffset: 0.50, easing: "linear",
               left: "30px" },
             { offset: null, computedOffset: 0.75, easing: "linear",
               left: "40px" },
             { offset: null, computedOffset: 1.00, easing: "linear",
               left: "50px" }] },
  { desc:   "a keyframe sequence with different easing values, but the same"
            + " easing value for a given offset",
    input:  [{ offset: 0.0, easing: "ease",     left: "10px"},
             { offset: 0.0, easing: "ease",     top: "20px"},
             { offset: 0.5, easing: "linear",   left: "30px" },
             { offset: 0.5, easing: "linear",   top: "40px" },
             { offset: 1.0, easing: "step-end", left: "50px" },
             { offset: 1.0, easing: "step-end", top: "60px" }],
    output: [{ offset: 0.0, computedOffset: 0.0, easing: "ease",
               left: "10px" },
             { offset: 0.0, computedOffset: 0.0, easing: "ease",
               top: "20px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               left: "30px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               top: "40px" },
             { offset: 1.0, computedOffset: 1.0, easing: "steps(1)",
               left: "50px" },
             { offset: 1.0, computedOffset: 1.0, easing: "steps(1)",
               top: "60px" }] },
  { desc:   "a keyframe sequence with different composite values, but the"
            + " same composite value for a given offset",
    input:  [{ offset: 0.0, composite: "replace", left: "10px" },
             { offset: 0.0, composite: "replace", top: "20px" },
             { offset: 0.5, composite: "add",     left: "30px" },
             { offset: 0.5, composite: "add",     top: "40px" },
             { offset: 1.0, composite: "replace", left: "50px" },
             { offset: 1.0, composite: "replace", top: "60px" }],
    output: [{ offset: 0.0, computedOffset: 0.0, easing: "linear",
               composite: "replace", left: "10px" },
             { offset: 0.0, computedOffset: 0.0, easing: "linear",
               composite: "replace", top: "20px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               composite: "add", left: "30px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               composite: "add", top: "40px" },
             { offset: 1.0, computedOffset: 1.0, easing: "linear",
               composite: "replace", left: "50px" },
             { offset: 1.0, computedOffset: 1.0, easing: "linear",
               composite: "replace", top: "60px" }] },
  { desc:   "a one property two keyframe sequence that needs to stringify"
            + " its values",
    input:  [{ offset: 0, opacity: 0 },
             { offset: 1, opacity: 1 }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear", opacity: "0" },
             { offset: 1, computedOffset: 1, easing: "linear", opacity: "1" }]
  },
  { desc:   "a keyframe sequence with a CSS variable reference",
    input:  [{ left: "var(--dist)" },
             { left: "calc(var(--dist) + 100px)" }],
    output: [{ offset: null, computedOffset: 0.0, easing: "linear",
               left: "var(--dist)" },
             { offset: null, computedOffset: 1.0, easing: "linear",
               left: "calc(var(--dist) + 100px)" }] },
  { desc:   "a keyframe sequence with a CSS variable reference in a shorthand"
            + " property",
    input:  [{ margin: "var(--dist)" },
             { margin: "calc(var(--dist) + 100px)" }],
    output: [{ offset: null, computedOffset: 0.0, easing: "linear",
               margin: "var(--dist)" },
             { offset: null, computedOffset: 1.0, easing: "linear",
               margin: "calc(var(--dist) + 100px)" }] },
  { desc:   "a keyframe sequence where shorthand precedes longhand",
    input:  [{ offset: 0, margin: "10px", marginRight: "20px" },
             { offset: 1, margin: "30px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               margin: "10px", marginRight: "20px" },
             { offset: 1, computedOffset: 1, easing: "linear",
               margin: "30px" }] },
  { desc:   "a keyframe sequence where longhand precedes shorthand",
    input:  [{ offset: 0, marginRight: "20px", margin: "10px" },
             { offset: 1, margin: "30px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               marginRight: "20px", margin: "10px" },
             { offset: 1, computedOffset: 1, easing: "linear",
               margin: "30px" }] },
  { desc:   "a keyframe sequence where lesser shorthand precedes greater"
            + " shorthand",
    input:  [{ offset: 0,
               borderLeft: "1px solid rgb(1, 2, 3)",
               border: "2px dotted rgb(4, 5, 6)" },
             { offset: 1, border: "3px dashed rgb(7, 8, 9)" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               borderLeft: "1px solid rgb(1, 2, 3)",
               border: "2px dotted rgb(4, 5, 6)" },
             { offset: 1, computedOffset: 1, easing: "linear",
               border: "3px dashed rgb(7, 8, 9)" }] },
  { desc:   "a keyframe sequence where greater shorthand precedes lesser"
            + " shorthand",
    input:  [{ offset: 0, border: "2px dotted rgb(4, 5, 6)",
               borderLeft: "1px solid rgb(1, 2, 3)" },
             { offset: 1, border: "3px dashed rgb(7, 8, 9)" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               border: "2px dotted rgb(4, 5, 6)",
               borderLeft: "1px solid rgb(1, 2, 3)" },
             { offset: 1, computedOffset: 1, easing: "linear",
               border: "3px dashed rgb(7, 8, 9)" }] },
  { desc:   "a two property keyframe sequence where one property is missing"
            + " from the first keyframe",
    input:  [{ offset: 0, left: "10px" },
             { offset: 1, left: "20px", top: "30px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear", left: "10px" },
             { offset: 1, computedOffset: 1, easing: "linear",
               left: "20px", top: "30px" }] },
  { desc:   "a two property keyframe sequence where one property is missing"
            + " from the last keyframe",
    input:  [{ offset: 0, left: "10px", top: "20px" },
             { offset: 1, left: "30px" }],
    output: [{ offset: 0, computedOffset: 0, easing: "linear",
               left: "10px" , top: "20px" },
             { offset: 1, computedOffset: 1, easing: "linear",
               left: "30px" }] },
  { desc:   "a keyframe sequence with repeated values at offset 1 with"
            + " different easings",
    input:  [{ offset: 0.0, left: "100px", easing: "ease" },
             { offset: 0.0, left: "200px", easing: "ease" },
             { offset: 0.5, left: "300px", easing: "linear" },
             { offset: 1.0, left: "400px", easing: "ease-out" },
             { offset: 1.0, left: "500px", easing: "step-end" }],
    output: [{ offset: 0.0, computedOffset: 0.0, easing: "ease",
               left: "100px" },
             { offset: 0.0, computedOffset: 0.0, easing: "ease",
               left: "200px" },
             { offset: 0.5, computedOffset: 0.5, easing: "linear",
               left: "300px" },
             { offset: 1.0, computedOffset: 1.0, easing: "ease-out",
               left: "400px" },
             { offset: 1.0, computedOffset: 1.0, easing: "steps(1)",
               left: "500px" }] },
];

const gInvalidKeyframesTests = [
  { desc:     "keyframes with an out-of-bounded positive offset",
    input:    [ { opacity: 0 },
                { opacity: 0.5, offset: 2 },
                { opacity: 1 } ],
    expected: { name: "TypeError" } },
  { desc:     "keyframes with an out-of-bounded negative offset",
    input:    [ { opacity: 0 },
                { opacity: 0.5, offset: -1 },
                { opacity: 1 } ],
    expected: { name: "TypeError" } },
  { desc:     "keyframes not loosely sorted by offset",
    input:    [ { opacity: 0, offset: 1 },
                { opacity: 1, offset: 0 } ],
    expected: { name: "TypeError" } },
  { desc:     "property-indexed keyframes with an invalid easing value",
    input:    { opacity: [ 0, 0.5, 1 ],
                easing: "inherit" },
    expected: { name: "TypeError" } },
  { desc:     "a keyframe sequence with an invalid easing value",
    input:    [ { opacity: 0, easing: "jumpy" },
                { opacity: 1 } ],
    expected: { name: "TypeError" } },
  { desc:     "keyframes with an invalid composite value",
    input:    [ { opacity: 0, composite: "alternate" },
                { opacity: 1 } ],
    expected: { name: "TypeError" } }
];

// ------------------------------
//  KeyframeEffectOptions
// ------------------------------

const gKeyframeEffectOptionTests = [
  { desc:     "an empty KeyframeEffectOptions object",
    input:    { },
    expected: { } },
  { desc:     "a normal KeyframeEffectOptions object",
    input:    { delay: 1000,
                fill: "auto",
                iterations: 5.5,
                duration: "auto",
                direction: "alternate" },
    expected: { delay: 1000,
                fill: "auto",
                iterations: 5.5,
                duration: "auto",
                direction: "alternate" } },
  { desc:     "a double value",
    input:    3000,
    expected: { duration: 3000 } },
  { desc:     "+Infinity",
    input:    Infinity,
    expected: { duration: Infinity } },
  { desc:     "an Infinity duration",
    input:    { duration: Infinity },
    expected: { duration: Infinity } },
  { desc:     "an auto duration",
    input:    { duration: "auto" },
    expected: { duration: "auto" } },
  { desc:     "an Infinity iterations",
    input:    { iterations: Infinity },
    expected: { iterations: Infinity } },
  { desc:     "an auto fill",
    input:    { fill: "auto" },
    expected: { fill: "auto" } },
  { desc:     "a forwards fill",
    input:    { fill: "forwards" },
    expected: { fill: "forwards" } }
];

const gInvalidKeyframeEffectOptionTests = [
  { desc:     "-Infinity",
    input:    -Infinity,
    expected: { name: "TypeError" } },
  { desc:     "NaN",
    input:    NaN,
    expected: { name: "TypeError" } },
  { desc:     "a negative value",
    input:    -1,
    expected: { name: "TypeError" } },
  { desc:     "a negative Infinity duration",
    input:    { duration: -Infinity },
    expected: { name: "TypeError" } },
  { desc:     "a NaN duration",
    input:    { duration: NaN },
    expected: { name: "TypeError" } },
  { desc:     "a negative duration",
    input:    { duration: -1 },
    expected: { name: "TypeError" } },
  { desc:     "a string duration",
    input:    { duration: "merrychristmas" },
    expected: { name: "TypeError" } },
  { desc:     "a negative Infinity iterations",
    input:    { iterations: -Infinity},
    expected: { name: "TypeError" } },
  { desc:     "a NaN iterations",
    input:    { iterations: NaN },
    expected: { name: "TypeError" } },
  { desc:     "a negative iterations",
    input:    { iterations: -1 },
    expected: { name: "TypeError" } },
  { desc:     "a blank easing",
    input:    { easing: "" },
    expected: { name: "TypeError" } },
  { desc:     "an unrecognized easing",
    input:    { easing: "unrecognised" },
    expected: { name: "TypeError" } },
  { desc:     "an 'initial' easing",
    input:    { easing: "initial" },
    expected: { name: "TypeError" } },
  { desc:     "an 'inherit' easing",
    input:    { easing: "inherit" },
    expected: { name: "TypeError" } },
  { desc:     "a variable easing",
    input:    { easing: "var(--x)" },
    expected: { name: "TypeError" } },
  { desc:     "a multi-value easing",
    input:    { easing: "ease-in-out, ease-out" },
    expected: { name: "TypeError" } }
];
