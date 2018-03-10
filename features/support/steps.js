const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";
   
  Given('I go to Figure1Signup', function(callback) {
    this.browser
      .init()
      .url('https://app.figure1.com/account/register').then(function() {
        callback();
      })
  })
  
  When('I enter SignupDetails', function(callback) {
    this.browser
      .waitForVisible('.register-page__username-input')
      .setValue('.register-page__username-input','mansi_sqat_20')
      .setValue('.register-page__email-input','figure1.xyz20@gmail.com')
      .setValue('.register-page__password-input','Sqat06')
      .setValue('.register-page__confirm-password-input','Sqat06')
      .addValue('.register-page__specialties-list',' Student')
      .waitForVisible('.register-page__specialties-other-list')
      .addValue('.register-page__specialties-other-list','Nursing Student')
      .click('.box')
      .click('.register-page__submit-button')
      .then(function(){
      callback();
      }).catch(function(error){
        callback(error);
      })
     
     })
    
     Then('I should see the ConfirmAccountPage', function(callback) {
      this.browser.waitForVisible('.email-confirmation-intro',3000)    
      .$('#ember556').getText('div').getText('h2').then(function(result){
        result.should.equal("Confirm your account, mansi_sqat_20");
        callback();
      }).catch(function(error){
      callback(error);
    })
  
  }) 


 Given('I go to Figure1', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I enter username', function(callback) {
  this.browser
    .waitForVisible('.register-page__username-input')
    .setValue('.register-page__username-input','mansi_sqat')
    .setValue('.register-page__email-input','mansi.mini@gmail.com')
    .setValue('.register-page__password-input','Sqat06')
    .setValue('.register-page__confirm-password-input','Sqat06')
    .addValue('.register-page__specialties-list',' Student')
    .waitForVisible('.register-page__specialties-other-list')
    .addValue('.register-page__specialties-other-list','Nursing Student')
    .click('.box')
    .click('.register-page__submit-button')
    .then(function(){
    callback();
    }).catch(function(error){
      callback(error);
    })
   
   })
  
   Then('I should see the error', function(callback) {
    this.browser    
    .waitForVisible('.error-message-light',2000)
      .getText('.error-message-light').then(function(result){
          result.should.equal('An account with that username already exists.');
          callback();
    }).catch(function(error){
      callback(error);
    })
   
   })

   Given('I go to Figure1Passwords', function(callback) {
    this.browser
      .init()
      .url('https://app.figure1.com/account/register').then(function() {
        callback();
      })
  })
  
  When('I enter invalidcharacters', function(callback) {
    this.browser
      .waitForVisible('.register-page__username-input')
      .setValue('.register-page__username-input','mansi_sqat')
      .setValue('.register-page__email-input','mansi.mini@gmail.com')
      .setValue('.register-page__password-input','    ')
      .setValue('.register-page__confirm-password-input','Sqat06')
      .addValue('.register-page__specialties-list',' Student')
      .waitForVisible('.register-page__specialties-other-list')
      .addValue('.register-page__specialties-other-list','Nursing Student')
      .click('.box')
      .click('.register-page__submit-button')
      .then(function(){
      callback();
      }).catch(function(error){
        callback(error);
      })
     
     })
    
     Then('I should see the characters error', function(callback) {
      this.browser    
      .$('#ember334').getText('span').then(function(result){
          result.should.equal('Password must be at least 6 characters long');
        callback(); })
      .catch(function(error){
      callback(error);
    })
  
  })