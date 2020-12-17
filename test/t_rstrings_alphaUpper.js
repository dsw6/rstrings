/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const expect = require("chai").expect;
const rstrings = require("../lib/rstrings");



describe("rstrings.alphaUpper function", function () 
{

      //----------------------------------------------------------------------------
   it(`should return string`, function () 
   {
      var data = rstrings.alphaUpper(30);
      expect(data, "data not a string").to.be.a("string");
   });

      //----------------------------------------------------------------------------
   it(`should return correct length of string`, function () 
   {
      var data = rstrings.alphaUpper(30);
      expect(data.length, "data.length - invalid").to.equal(30);
   });

      //----------------------------------------------------------------------------
   it(`should only use correct charset`, function () 
   {
      var data = rstrings.alphaUpper(30);
      expect(data, "data contents invalid").to.match(/^[ABCDEFGHIJKLMNOPQRSTUVWXYZ]*$/);
   });

      //----------------------------------------------------------------------------
   it(`should support 0 length strings`, function () 
   {
      var data = rstrings.alphaUpper(0);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for length is less than 1`, function () 
   {
      var data = rstrings.alphaUpper(0.5);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for negative len value`, function () 
   {
      var data = rstrings.alphaUpper(-1);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should ignore decimals in len input`, function () 
   {
      var data = rstrings.alphaUpper(10.54);
      expect(data.length, "data.length - invalid").to.equal(10);
   });


      //----------------------------------------------------------------------------
   it(`should throw error if len is not a number`, function () 
   {
      try {
         rstrings.alphaUpper("a");
         expect.fail("error not thrown");
      }
      catch(err){}
   });


});
