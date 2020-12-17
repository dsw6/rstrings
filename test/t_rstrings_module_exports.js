/*
 * Copyright(c) 2020 David Ward
 * MIT Licensed
 */


"use strict";

const expect = require("chai").expect;
const rstrings = require("../lib/rstrings");



describe("rstrings Module Exports", function () 
{

      //----------------------------------------------------------------------------
   it(`all methods should be exported`, function () 
   {
      expect(rstrings.generate).to.be.an("function");
      expect(rstrings.alphaUpper).to.be.an("function");
      expect(rstrings.alphaLower).to.be.an("function");
      expect(rstrings.alphaMixed).to.be.an("function");
      expect(rstrings.alphaNumUpper).to.be.an("function");
      expect(rstrings.alphaNumLower).to.be.an("function");
      expect(rstrings.alphaNumMixed).to.be.an("function");
      expect(rstrings.numeric).to.be.an("function");
      expect(rstrings.hex).to.be.an("function");
   });


});
