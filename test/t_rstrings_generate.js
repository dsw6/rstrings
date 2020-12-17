/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const expect = require("chai").expect;
const rstrings = require("../lib/rstrings");



describe("rstrings.generate function", function () 
{

      //----------------------------------------------------------------------------
   it(`should return string`, function () 
   {
      var data = rstrings.generate(30, "ABCD");
      expect(data, "data not a string").to.be.a("string");
   });

      //----------------------------------------------------------------------------
   it(`should return correct length of string`, function () 
   {
      var data = rstrings.generate(30, "ABCD");
      expect(data.length, "data.length - invalid").to.equal(30);
   });

      //----------------------------------------------------------------------------
   it(`should only use specified charset`, function () 
   {
      var data = rstrings.generate(30, "ABCD");
      expect(data, "data contents invalid").to.match(/^[ABCD]*$/);
   });

      //----------------------------------------------------------------------------
   it(`should support 0 length strings`, function () 
   {
      var data = rstrings.generate(0, "ABCD");
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should support 1 length strings`, function () 
   {
      var data = rstrings.generate(1, "ABCD");
      expect(data.length, "data contents invalid").to.equal(1);
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for length is less than 1`, function () 
   {
      var data = rstrings.generate(0.5, "ABCD");
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for negative len value`, function () 
   {
      var data = rstrings.generate(-1, "ABCD");
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should ignore decimals in len input`, function () 
   {
      var data = rstrings.generate(10.54, "ABCD");
      expect(data.length, "data.length - invalid").to.equal(10);
   });


      //----------------------------------------------------------------------------
   it(`should throw error if len is not a number`, function () 
   {
      try {
         rstrings.generate("a", "ABCD");
         expect.fail("error not thrown");
      }
      catch(err){}
   });

      //----------------------------------------------------------------------------
   it(`should throw error if charset is not a string`, function () 
   {
      try {
         rstrings.generate(5, 123);
         expect.fail("error not thrown");
      }
      catch(err){}
   });

      //----------------------------------------------------------------------------
   it(`should throw error if charset is an empty string`, function () 
   {
      try {
         rstrings.generate(5, "");
         expect.fail("error not thrown");
      }
      catch(err){}
   });

});
