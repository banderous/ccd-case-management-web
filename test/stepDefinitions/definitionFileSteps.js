let Data = require('../utils/TestData.js');

var { defineSupportCode } = require("cucumber");

defineSupportCode(function ({ Given, When, Then, Before, After }) {

  Given(/^I have a case with 3 pages$/, async function () {
    Data.caseType = 'Multiple Pages';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'TextFieldFName'}];
  });

  async function populateCaseFields(){
    Data.jurisdiction = 'Auto Test 1';
    Data.caseType = 'All Field Data Types';
    Data.event = 'Create a case';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'TextField'}];
  }

  Given(/^a case type containing every field type exists$/, async function() {
    await populateCaseFields();
  });

  Given(/^a case type with the print button configured exist$/, async function() {
    await populateCaseFields();
  });


  Given(/^a case type exists with (?:case fields|a label)? configured in the case list results$/, async function() {
    Data.jurisdiction = 'Auto Test 1';
    Data.caseType = 'All Field Data Types';
    Data.event = 'Create a case';
    Data.optionalFields = [
                            { fieldType: 'text', value: 'qwerty'},
                            { fieldType: 'textarea', value: 'area text'},
                            { fieldType: 'number', value: '123'},
                            { fieldType: 'money-gbp', value: '20'},
                            { fieldType: 'date', value: ''},
                            { fieldType: 'date', value: '10102010'},
                            { fieldType: 'email', value: '123@test.com'},
                            { fieldType: 'fixed-list', value: 'Widow'},
                            { fieldType: 'phone-uk', value: '07777777777'},
                            { fieldType: 'yes-no', value: 'No'},
                            { fieldType: 'multi-select', value: 'MANCHESTER'},
                          ];
  });

  Given(/^a case type containing a collection of complex types exists$/, function() {
    Data.jurisdiction = 'Auto Test 1';
    Data.caseType = 'Complex in Coll in Complex';
    Data.event = 'Create Collection of Complex';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine1'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine2'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine3'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_Country'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_SecondAddress_SecondLine1'}];
    });

  Given(/^a case type containing conditional data of collection of complex types exists$/, function() {
    Data.jurisdiction = 'Auto Test 1';
    Data.caseType = 'Complex in Coll in Complex';
    Data.event = 'Create Collection of Complex';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine1'},
      {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine2'},
      {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine3'},
      {fieldType: 'text', fieldId: 'CollectionComplexField_0_Country'},
      {fieldType: 'text', fieldId: 'CollectionComplexField_0_ZipCode'},
      {fieldType: 'text', fieldId: 'CollectionComplexField_0_SecondAddress_SecondLine1'},
      {fieldType: 'text', fieldId: 'CollectionComplexField_0_SecondAddress_SecondLine2'}];
  });

  Given(/^a case type containing a collection of complex types containing complex exists$/, function() {
    Data.jurisdiction = 'Auto Test 1';
    Data.caseType = 'Complex in Coll in Complex';
    Data.event = 'Create Company';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'MyCompany_0_Name'},
                            {fieldType: 'text', fieldId: 'MyCompany_0_BusinessAddress_AddressLine1'},
                            {fieldType: 'text', fieldId: 'MyCompany_0_BusinessAddress_AddressLine2'},
                            {fieldType: 'text', fieldId: 'MyCompany_0_BusinessAddress_AddressLine3'},
                            {fieldType: 'text', fieldId: 'MyCompany_0_BusinessAddress_Country'}];
    });

  Given(/^a case type containing a collection of nested complex types exists$/, function() {
    Data.jurisdiction = 'Auto Test 1';
    Data.caseType = 'Complex in Coll in Complex';
    Data.event = 'Create school';
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'MySchool_Name', value: 'Technical University'},
      {fieldType: 'yes-no', fieldId: 'MySchool_ProvidesAutisticChildrenSupport', value: 'Yes'},
      {fieldType: 'fixed-radio-list', fieldId: 'MySchool_SchoolRegionalCentre', value: 'MANCHESTER'},
      {fieldType: 'text', fieldId: 'MySchool_Class_0_ClassName', value: 'Analytical Maths'},
      {fieldType: 'multi-select', fieldId: 'MySchool_Class_0_ClassMandatoryFor', value: 'BSc'},
      {fieldType: 'text', fieldId: 'MySchool_Class_0_ClassDetails_ClassRanking', value: '10'},
      {fieldType: 'text', fieldId: 'MySchool_Class_0_ClassDetails_ClassTeacher', value: 'Smith'},
      {fieldType: 'text', fieldId: 'MySchool_Class_0_ClassDetails_ClassLocation_Building_Name', value: 'Maths Institute'},
      {fieldType: 'fixed-list', fieldId: 'MySchool_Class_0_ClassDetails_ClassLocation_Building_Floor', value: 'THREE'},
      {fieldType: 'text', fieldId: 'MySchool_Class_1_ClassName', value: 'Discrete Maths'},
      {fieldType: 'multi-select', fieldId: 'MySchool_Class_1_ClassMandatoryFor', value: 'ScD'},
      {fieldType: 'text', fieldId: 'MySchool_Class_1_ClassDetails_ClassRanking', value: '8'},
      {fieldType: 'text', fieldId: 'MySchool_Class_1_ClassDetails_ClassTeacher', value: 'Brown'},
      {fieldType: 'text', fieldId: 'MySchool_Class_1_ClassDetails_ClassLocation_Building_Name', value: 'Maths Institute'},
      {fieldType: 'fixed-list', fieldId: 'MySchool_Class_1_ClassDetails_ClassLocation_Building_Floor', value: 'ONE'},
  ];
  });

  async function populateCaseProgressionType(){
    Data.caseType = 'Case Progression';
    Data.optionalFields = [];
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'TextField0'},
      {fieldType: 'text', fieldId: 'TextField1'},
      {fieldType: 'text', fieldId: 'TextField2'}];
  }

  Given(/^a case with Case Progression functionality exists$/, async function() {
    await populateCaseProgressionType();
  });

  Given(/^a case with the print button not configured exists$/, async function() {
    await populateCaseProgressionType();
  });

  Given(/^a case containing Tabs functionality exists$/, function() {
    Data.caseType = 'Tabs functionality';
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'TextField1'},
                            {fieldType: 'text', fieldId: 'TextField2'},
                            {fieldType: 'text', fieldId: 'TextField3'},
                            {fieldType: 'text', fieldId: 'TextField4'},
                            {fieldType: 'text', fieldId: 'TextField5'},
                            {fieldType: 'text', fieldId: 'TextField6'},
                            {fieldType: 'text', fieldId: 'TextField7'},
                            {fieldType: 'text', fieldId: 'ConditionalText', value: 'showmethemoney'},
                            {fieldType: 'fixed-list', fieldId: 'ConditionalFixedList', value: 'TRUE'},
                            {fieldType: 'yes-no', fieldId: 'ConditionalYesNo', value: 'Yes'}
                          ];
  });

  Given(/^a case with a Mandatory field exists$/, function() {
    Data.caseType = 'Case Progression';
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'TextField0'},
                            {fieldType: 'text', fieldId: 'TextField1'},
                            {fieldType: 'text', fieldId: 'TextField2'}];
  });

  Given(/^a case type containing a regex validated field exists$/, function() {
    Data.caseType = 'Regex';
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'TextField'}];
  });

  Given(/^a case type containing conditionals exists$/, function() {
    Data.caseType = 'Conditionals';
    Data.event = 'Create a case';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'TextFieldOptional'}];
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'TextField'}];
  });

  Given(/^a case type containing show and hide functionality exists$/, function() {
    Data.caseType = 'Conditionals';
    Data.event = 'Create a case';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'TextFieldOptional'}];
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'TextField'}];
  });

  Given(/^a case type containing conditional mandatory complex type exists$/, function() {
    Data.caseType = 'Conditionals';
    Data.event = 'Create a case';
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'AddressComplex1_AddressLine1'},
                            {fieldType: 'text', fieldId: 'AddressComplex1_AddressLine2'},
                            {fieldType: 'text', fieldId: 'AddressComplex1_AddressLine3'},
                            {fieldType: 'text', fieldId: 'AddressComplex1_AddressLine4'},
                            {fieldType: 'text', fieldId: 'AddressComplex1_AddressLine5'},
                            {fieldType: 'text', fieldId: 'AddressComplex1_Country'}];
  });

  Given(/^a case type exists with case reference configured in the case list results$/, async function () {
    Data.caseType = 'All Field Data Types';
    Data.optionalFields = [{fieldType: 'text', fieldId: 'TextField'}];
  });

  Given(/^a case type containing Complex and Collection types exists$/, function() {
    Data.caseType = 'Complex in Coll in Complex';
    Data.event = 'Create school';
  });

  Given(/^a case type containing conditional mandatory collection of complex types exists$/, function() {
    Data.caseType = 'Conditionals';
    Data.event = 'Create a case';
    Data.mandatoryFields = [{fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine1'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine2'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine3'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine4'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_AddressLine5'},
                            {fieldType: 'text', fieldId: 'CollectionComplexField_0_Country'}];
  });

  Given(/^a case type containing conditionals exists for OR event$/, function() {
    Data.caseType = "Conditionals";
    Data.event = "Create a case OR";
  });

  Given(/^a case type containing conditionals exists for AND event$/, function() {
    Data.caseType = "Conditionals";
    Data.event = "Create a case AND";
  });

  Given(/^a case type containing conditionals exists for NOT event$/, function() {
    Data.caseType = "Conditionals";
    Data.event = "Create a case NOT";
  });

  Given(/^a case with an 'AND show page condition' across different pages exists$/, async function() {
    Data.caseType = 'Conditionals';
    Data.event = ' Create a case';
    Data.savedValue = 'conditional page value';
    Data.eventFields = [[{fieldType: 'text', fieldId: 'TextField',value: 'showmethemoney'}],
                          [{fieldType: 'text', fieldId: 'TextField3',value: 'showpage5'}],
                          [{fieldType: 'text', fieldId: 'TextField11',value: Data.savedValue}]];
  });

  Given(/^I have a case with a simple collection of complex$/, function() {
    Data.caseType = "Complex in Coll in Complex";
    Data.event = "Create Collection of Complex";
  });

  Given(/^a case type without any cases exists$/, function() {
    Data.caseType = "CaseType With No Cases";
  });

});

