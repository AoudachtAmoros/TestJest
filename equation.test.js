const controller = require('./functions')
// First equation
test('equation ax2 + bx + c = 0', () => {
   // equation 1
   console.log('a != 0 et b!=0');
   expect(controller.equation1(2, 2)).toBe(-1);
   // 
   console.log('a != 0 et b==0');
   expect(controller.equation1(2, 0)).toBe(0);
   // 
   console.log('a 0= 0 et b==0');
   expect(controller.equation1(0, 0)).toBeDefined();
});

// Second equation
test('equation ax2 + bx + c = 0', () => {
   console.log("Delta == 0");
   expect(controller.equation2(2, 4, 2)).toBe(-1)

   console.log("Delta < 0");
   expect(controller.equation2(4, 2, 2)).toBeNull()

   console.log("Delta > 0");
   expect(controller.equation2(2, 5, 2)).toEqual({ x1: -1 / 2, x2: -2 })
});


// To launch test run : npm test in prompt console