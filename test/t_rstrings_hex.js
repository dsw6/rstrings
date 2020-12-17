/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const expect = require("chai").expect;
const rstrings = require("rstrings");


describe("rstrings.hex function", function () 
{

      //----------------------------------------------------------------------------
   it(`should return string`, function () 
   {
      var data = rstrings.hex(30);
      expect(data, "data not a string").to.be.a("string");
   });

      //----------------------------------------------------------------------------
   it(`should return correct length of string`, function () 
   {
      var data = rstrings.hex(30);
      expect(data.length, "data.length - invalid").to.equal(30);
   });

      //----------------------------------------------------------------------------
   it(`should only use correct charset`, function () 
   {
      var data = rstrings.hex(30);
      expect(data, "data contents invalid").to.match(/^[0123456789ABCDEF]*$/);
   });

      //----------------------------------------------------------------------------
   it(`should support 0 length strings`, function () 
   {
      var data = rstrings.hex(0);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for length is less than 1`, function () 
   {
      var data = rstrings.hex(0.5);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for negative len value`, function () 
   {
      var data = rstrings.hex(-1);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should ignore decimals in len input`, function () 
   {
      var data = rstrings.hex(10.54);
      expect(data.length, "data.length - invalid").to.equal(10);
   });


      //----------------------------------------------------------------------------
   it(`should throw error if len is not a number`, function () 
   {
      try {
         rstrings.hex("a");
         expect.fail("error not thrown");
      }
      catch(err){}
   });


});
