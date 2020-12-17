/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const expect = require("chai").expect;
const rstrings = require("../lib/rstrings");


describe("rstrings.alphaLower function", function () 
{

      //----------------------------------------------------------------------------
   it(`should return string`, function () 
   {
      var data = rstrings.alphaLower(30);
      expect(data, "data not a string").to.be.a("string");
   });

      //----------------------------------------------------------------------------
   it(`should return correct length of string`, function () 
   {
      var data = rstrings.alphaLower(30);
      expect(data.length, "data.length - invalid").to.equal(30);
   });

      //----------------------------------------------------------------------------
   it(`should only use correct charset`, function () 
   {
      var data = rstrings.alphaLower(30);
      expect(data, "data contents invalid").to.match(/^[abcdefghijklmnopqrstuvwxyz]*$/);
   });

      //----------------------------------------------------------------------------
   it(`should support 0 length strings`, function () 
   {
      var data = rstrings.alphaLower(0);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should support 1 length strings`, function () 
   {
      var data = rstrings.alphaLower(1);
      expect(data.length, "data contents invalid").to.equal(1);
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for length is less than 1`, function () 
   {
      var data = rstrings.alphaLower(0.5);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should return empty string for negative len value`, function () 
   {
      var data = rstrings.alphaLower(-1);
      expect(data, "data contents invalid").to.equal("");
   });

      //----------------------------------------------------------------------------
   it(`should ignore decimals in len input`, function () 
   {
      var data = rstrings.alphaLower(10.54);
      expect(data.length, "data.length - invalid").to.equal(10);
   });


      //----------------------------------------------------------------------------
   it(`should throw error if len is not a number`, function () 
   {
      try {
         rstrings.alphaLower("a");
         expect.fail("error not thrown");
      }
      catch(err){}
   });


});
