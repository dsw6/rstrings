/*
 * Generate random strings
 *
 * Copyright(c) 2017-2020 David Ward
 * MIT Licensed
 */


"use strict";
const crypto = require("crypto");


/* =============================================================================
 * Public Interface
*/
module.exports = {
   generate: generate,
   alphaUpper: alphaUpper,
   alphaLower: alphaLower,
   alphaMixed: alphaMixed,
   alphaNumUpper: alphaNumUpper,
   alphaNumLower: alphaNumLower,
   alphaNumMixed: alphaNumMixed,
   numeric: numeric,
   hex: hex,
}

//--------- Character Sets -------------------------------------------------------
const ALPHAUPPER     = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHALOWER     = "abcdefghijklmnopqrstuvwxyz";
const ALPHAMIXED     = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHANUMUPPER  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const ALPHANUMLOWER  = "abcdefghijklmnopqrstuvwxyz0123456789";
const ALPHANUMMIXED  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const NUMERIC        = "0123456789";
const HEX            = "0123456789ABCDEF";


//-----------------------------------------------------------------------------------------
function generate(len, charset)
{
   var buff;
   var i;
   var result = "";
   
   if (typeof len !== "number") throw( new Error("invalid len input"));
   if (typeof charset !== "string" || charset.length === 0) throw( new Error("invalid charset input"));

   if (len <= 1 ) return(result);

   len = Math.trunc(len);
   buff = crypto.randomBytes(len);
   
   for (i=0; i<len; i++)
      result += charset[(buff[i] % charset.length)];
   
   return(result);
};

//-----------------------------------------------------------------------------------------
function alphaUpper(len)
{
   return generate(len, ALPHAUPPER);
};

//-----------------------------------------------------------------------------------------
function alphaLower(len)
{
   return generate(len, ALPHALOWER);
};

//-----------------------------------------------------------------------------------------
function alphaMixed(len)
{
   return generate(len, ALPHAMIXED);
};

//-----------------------------------------------------------------------------------------
function alphaNumUpper(len)
{
   return generate(len, ALPHANUMUPPER);
};

//-----------------------------------------------------------------------------------------
function alphaNumLower(len)
{
   return generate(len, ALPHANUMLOWER);
};

//-----------------------------------------------------------------------------------------
function alphaNumMixed(len)
{
   return generate(len, ALPHANUMMIXED);
};

//-----------------------------------------------------------------------------------------
function numeric(len)
{
   return generate(len, NUMERIC);
};

//-----------------------------------------------------------------------------------------
function hex(len)
{
   return generate(len, HEX);
};

 