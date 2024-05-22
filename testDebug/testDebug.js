// ERRORR
// 1. error 1 koma hilang antara index 1 dan index 2 pada data json rawData
// 2. error 2 kurang 1 kutip penutup pada data json rawData di data  attribute: "case.life[0].product[0].benefit[10].amount,
// 3, error 3 tidak ada value(value kosong) pada data valueAsString: dengan "attribute": "case.life[0].product[0].benefit[12].amount",
// 4. error 4 tidak ada index yg dituju yaitu index i hasil dari loop var cleanA dari function compareDeep2
// 5. error 5 kelebihan huruf s pada variabel tmpStrb di function compareDeep2
// 6. error 6 tambahkan array tutup pada regexj var cleanA function compareDeep2 untuk mendapatkan []
// 7. error 7 tambahkan array tutup pada regexj var cleanB function compareDeep2 untuk mendapatkan []

var rawData = {
  attributes: [
    {
      attribute: "case.UnderwritingRegion",
      valueAsString: "14cee142-116f-4b34-a4a2-fd94768fc222",
    },
    {
      attribute: "case.CountryOfContract",
      valueAsString: "1f087fa1-4b87-485e-88f5-de581e9440b7",
    }, //disini error 1 koma hilang antara index 1 dan index 2
    {
      attribute: "case.ClientPresent",
      valueAsString: "fc7610f9-7c80-4182-b815-a82bff28524c",
    },
    {
      attribute: "case.ApplicationType",
      valueAsString: "409f04e5-ff1f-4d64-8e79-e5ba1796243b",
    },
    {
      attribute: "case.SalesBusinessSource",
      valueAsString: "1b9dd477-cc36-4dfb-aa3f-cda0f98065a9",
    },
    {
      attribute: "case.SalesChannel",
      valueAsString: "1d08e6de-de44-4d48-83b4-b30a0d4c988f",
    },
    {
      attribute: "case.Agency",
      valueAsString: "00841117",
    },
    {
      attribute: "case.VIPAgent",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute: "case.CorporateAgency",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute: "case.PremiumPaymentMode",
      valueAsString: "faeddbd7-ef5d-4bbb-9952-b4f8a9d76c3d",
    },
    {
      attribute: "case.ProposerRegularPremium",
      valueAsString: 1,
    },
    {
      attribute: "case.ProposerSinglePremium",
      valueAsString: 1,
    },
    {
      attribute: "case.PayorAnnualIncome",
      valueAsString: 1,
    },
    {
      attribute: "case.ApplicationSignDate",
      valueAsString: "07/02/2018",
    },
    {
      attribute: "case.life[0].LifeID",
      valueAsString: "LA15305329133176700841117",
    },
    {
      attribute: "case.life[0].GivenName",
      valueAsString: "Indah",
    },
    {
      attribute: "case.life[0].Gender",
      valueAsString: "618c52a5-da03-40c4-9494-c339ee221a9c",
    },
    {
      attribute: "case.life[0].DateOfBirth",
      valueAsString: "07/02/1994",
    },
    {
      attribute: "case.life[0].InsuranceAge",
      valueAsString: 24,
    },
    {
      attribute: "case.life[0].MaritalStatus",
      valueAsString: "2836d692-1642-4b6d-978f-6f79287a4318",
    },
    {
      attribute: "case.life[0].SmokingStatus",
      valueAsString: "e2813798-35a9-4e2f-9715-f90ba5161413",
    },
    {
      attribute: "case.life[0].Financial.AnnualIncome",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].occupations[0].OccupationCode",
      valueAsString: "cbb42d43-a41a-4af6-950e-7dc66afe80ef",
    },
    {
      attribute: "case.life[0].Financial.TotalLIFESumAssuredThisCompany",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].Financial.TotalCISumAssuredThisCompany",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].Financial.TotalADBOrADDSumAssuredThisCompany",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].Financial.TotalTPDSumAssuredThisCompany",
      valueAsString: 1,
    },
    {
      attribute:
        "case.life[0].PreviousAdverseDecision.DeclinedOrPostponeRecordThisCompany",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute:
        "case.life[0].PreviousAdverseDecision.SubStandardRecordThisCompany",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute:
        "case.life[0].NonMedical.TotalLifeCoverAmountForRoutineMedicalEvaluation",
      valueAsString: 1,
    },
    {
      attribute:
        "case.life[0].NonMedical.TotalCICoverAmountForRoutineMedicalEvaluation",
      valueAsString: 1,
    },
    {
      attribute:
        "case.life[0].NonMedical.TotalPPHAmountCurrentApplicationForRoutineMedicalEvaluation",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].ExistingSystemRecords.ImpairmentCodePresent",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute: "case.life[0].ExistingSystemRecords.ClaimCodePresent",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute: "case.life[0].product[0].type",
      valueAsString: "e7b11941-bdb6-407b-b5f3-fabd24099283",
    },
    {
      attribute: "case.life[0].product[0].ID",
      valueAsString: 0,
    },
    {
      attribute: "case.life[0].product[0].LifeRole",
      valueAsString: "3f0a276f-b01a-4404-8a96-830643db8184",
    },
    {
      attribute: "case.life[0].product[0].CoverPurpose",
      valueAsString: "3eae62ed-46c5-4100-a975-fab75a642cab",
    },
    {
      attribute: "case.life[0].product[0].benefit[0].type",
      valueAsString: "c6eca5b2-117c-4196-ad73-32c827592cda",
    },
    {
      attribute: "case.life[0].product[0].benefit[0].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[0].amount",
      valueAsString: "916755840",
    },
    {
      attribute: "case.life[0].product[0].benefit[0].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[1].LifeID",
      valueAsString: "PH15305318816451300841117",
    },
    {
      attribute: "case.life[1].GivenName",
      valueAsString: "Test benefit sort",
    },
    {
      attribute: "case.life[1].Gender",
      valueAsString: "2c092228-bc36-4208-874f-9c3082f59bab",
    },
    {
      attribute: "case.life[1].DateOfBirth",
      valueAsString: "07/02/1988",
    },
    {
      attribute: "case.life[1].InsuranceAge",
      valueAsString: 30,
    },
    {
      attribute: "case.life[1].MaritalStatus",
      valueAsString: "a28bf2ee-202b-4ef2-8e15-c94260e2a349",
    },
    {
      attribute: "case.life[1].SmokingStatus",
      valueAsString: "e2813798-35a9-4e2f-9715-f90ba5161413",
    },
    {
      attribute: "case.life[1].Financial.AnnualIncome",
      valueAsString: 1,
    },
    {
      attribute: "case.life[1].occupations[0].OccupationCode",
      valueAsString: "cbb42d43-a41a-4af6-950e-7dc66afe80ef",
    },
    {
      attribute: "case.life[1].Financial.TotalLIFESumAssuredThisCompany",
      valueAsString: 2,
    },
    {
      attribute: "case.life[1].Financial.TotalCISumAssuredThisCompany",
      valueAsString: 22,
    },
    {
      attribute: "case.life[1].Financial.TotalADBOrADDSumAssuredThisCompany",
      valueAsString: 2,
    },
    {
      attribute: "case.life[1].Financial.TotalTPDSumAssuredThisCompany",
      valueAsString: 2,
    },
    {
      attribute:
        "case.life[1].PreviousAdverseDecision.DeclinedOrPostponeRecordThisCompany",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute:
        "case.life[1].PreviousAdverseDecision.SubStandardRecordThisCompany",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute:
        "case.life[1].NonMedical.TotalLifeCoverAmountForRoutineMedicalEvaluation",
      valueAsString: 2,
    },
    {
      attribute:
        "case.life[1].NonMedical.TotalCICoverAmountForRoutineMedicalEvaluation",
      valueAsString: 2,
    },
    {
      attribute:
        "case.life[1].NonMedical.TotalPPHAmountCurrentApplicationForRoutineMedicalEvaluation",
      valueAsString: 2,
    },
    {
      attribute: "case.life[1].ExistingSystemRecords.ImpairmentCodePresent",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute: "case.life[1].ExistingSystemRecords.ClaimCodePresent",
      valueAsString: "16fee183-8a2c-4a0c-87f4-dc6ff69f9d6a",
    },
    {
      attribute: "case.life[1].product[0].type",
      valueAsString: "e7b11941-bdb6-407b-b5f3-fabd24099283",
    },
    {
      attribute: "case.life[1].product[0].ID",
      valueAsString: 1,
    },
    {
      attribute: "case.life[1].product[0].LifeRole",
      valueAsString: "38343975-af27-4bc2-a52a-35dbac1b715e",
    },
    {
      attribute: "case.life[1].product[0].CoverPurpose",
      valueAsString: "3eae62ed-46c5-4100-a975-fab75a642cab",
    },
    {
      attribute: "case.life[1].product[0].benefit[0].type",
      valueAsString: "c6eca5b2-117c-4196-ad73-32c827592cda",
    },
    {
      attribute: "case.life[1].product[0].benefit[0].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[1].product[0].benefit[0].amount",
      valueAsString: 2,
    },
    {
      attribute: "case.life[1].product[0].benefit[0].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[1].type",
      valueAsString: "c6eca5b2-117c-4196-ad73-32c827592cda",
    },
    {
      attribute: "case.life[0].product[0].benefit[2].type",
      valueAsString: "0ca13a68-9c02-4e74-8f9b-f217c164a093",
    },
    {
      attribute: "case.life[0].product[0].benefit[3].type",
      valueAsString: "f9725a67-6f83-4a4a-bb4a-14f5917a8fe5",
    },
    {
      attribute: "case.life[0].product[0].benefit[4].type",
      valueAsString: "0ca13a68-9c02-4e74-8f9b-f217c164a093",
    },
    {
      attribute: "case.life[0].product[0].benefit[5].type",
      valueAsString: "b133994c-f4b9-4033-9ba5-e5c0e199e10e",
    },
    {
      attribute: "case.life[0].product[0].benefit[6].type",
      valueAsString: "c6eca5b2-117c-4196-ad73-32c827592cda",
    },
    {
      attribute: "case.life[0].product[0].benefit[7].type",
      valueAsString: "b9cf5e5f-816c-4510-8337-9d8e9f4c1350",
    },
    {
      attribute: "case.life[0].product[0].benefit[8].type",
      valueAsString: "0ca13a68-9c02-4e74-8f9b-f217c164a093",
    },
    {
      attribute: "case.life[0].product[0].benefit[9].type",
      valueAsString: "b133994c-f4b9-4033-9ba5-e5c0e199e10e",
    },
    {
      attribute: "case.life[0].product[0].benefit[10].type",
      valueAsString: "b9cf5e5f-816c-4510-8337-9d8e9f4c1350",
    },
    {
      attribute: "case.life[0].product[0].benefit[11].type",
      valueAsString: "2c8b3883-ab5f-429a-ab17-7b98a5ca3480",
    },
    {
      attribute: "case.life[0].product[0].benefit[12].type",
      valueAsString: "c6eca5b2-117c-4196-ad73-32c827592cda",
    },
    {
      attribute: "case.life[0].product[0].benefit[1].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[2].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[3].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[4].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[5].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[6].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[7].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[8].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[9].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[10].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[11].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[12].WOPCategory",
      valueAsString: "af59ce86-0f57-4962-8d8e-ab2340a028e0",
    },
    {
      attribute: "case.life[0].product[0].benefit[1].amount",
      valueAsString: "916755840",
    },
    {
      attribute: "case.life[0].product[0].benefit[2].amount",
      valueAsString: 55000000,
    },
    {
      attribute: "case.life[0].product[0].benefit[3].amount",
      valueAsString: 65000000,
    },
    {
      attribute: "case.life[0].product[0].benefit[4].amount",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].product[0].benefit[5].amount",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].product[0].benefit[6].amount",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].product[0].benefit[7].amount",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].product[0].benefit[8].amount",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].product[0].benefit[9].amount",
      valueAsString: 1,
    },
    {
      attribute: "case.life[0].product[0].benefit[10].amount", // disini 2 tidak ada kutip
      valueAsString: 65000000,
    },
    {
      attribute: "case.life[0].product[0].benefit[11].amount",
      valueAsString: 65000000,
    },
    {
      attribute: "case.life[0].product[0].benefit[12].amount",
      valueAsString: "", // disini 3 tidak ada valuenya
    },
    {
      attribute: "case.life[0].product[0].benefit[1].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[2].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[3].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[4].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[5].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[6].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[7].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[8].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[9].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[10].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[11].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
    {
      attribute: "case.life[0].product[0].benefit[12].termBasis",
      valueAsString: "de701835-42fc-40ae-b31e-b2388167a1d8",
    },
  ],
};

// function compare(a,b) {
//   if (a.attribute < b.attribute)
//     return -1;
//   if (a.attribute > b.attribute)
//     return 1;
//   return 0;
// }

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// function compareDeep(a, b) {
//   var tmpStra = a.attribute.split(".");
//   var tmpStrb = b.attribute.split(".");

//   console.log("tmpstra", tmpStra);
//   console.log("tmpstrb", tmpStrb);

//   if (tmpStra >= 5 && tmpStrb.length >= 5) {
//     var cleanA = tmpStra[3].match(/\d/g).join("");
//     console.log("cleanA", cleanA);

//     var cleanB = tmpStrb[3].match(/\d/g).join("");
//     console.log("cleanB", cleanB);

//     if (parseInt(cleanA) < parseInt(cleanB)) {
//       return -1;
//     }
//     if (parseInt(cleanA) > parseInt(cleanB)) {
//       return 1;
//     }

//     return 0;
//   } else {
//     return 0;
//   }
// }

function compareDeep2(a, b) {
  var tmpStra = a.attribute;
  var tmpStrb = b.attribute; // error 5 kelebihan huruf s pada variabel tmpStrb di function compareDeep2

  // console.log("COMPARE DEEP2 tmpstra", tmpStra);
  // console.log("COMPARE DEEP2 tmpstrb -->", tmpStrb);

  var cleanA = tmpStra.match(/\[\d\]+/g); // error 6 tambahkan array tutup pada regexj var cleanA function compareDeep2 untuk mendapatkan []
  // console.log("COMPARE DEEP 2 cleanA", cleanA);

  var cleanB = tmpStrb.match(/\[\d\]+/g); // error 7 tambahkan array tutup pada regexj var cleanB function compareDeep2 untuk mendapatkan []
  // console.log("COMPARE DEEP 2 cleanB", cleanB);

  if (cleanA == null) return -1;
  if (cleanB == null) return 1;

  for (var i = 0; i < cleanA.length && i < cleanB.length; i++) {
    // console.log("ini I", i);
    // console.log("typeof", typeof i);
    // console.log("cleanA[i]", cleanA[i]);
    // console.log("cleanA[i].length", cleanA[i].length);
    // console.log("cleanB[i] -->", cleanB[i]);
    // console.log("cleanA[i].length", cleanB[i].length);
    var a = parseInt(cleanA[i].slice(1, cleanA[i].length)); // error 4 tidak ada index yg dituju yaitu index i hasil dari loop var cleanA
    // var a = jadikan int([0].slice(index 1, value ke 3))
    var b = parseInt(cleanB[i].slice(1, cleanB[i].length));
    // var b = jadikan int([0].slice(index 1, value ke 3))

    if (a < b) return -1;
    if (a > b) return 1;
  }

  if (cleanA.length != cleanB.length) {
    let cc = compare(cleanA.length, cleanB.length);
    console.log("cc", cc);
    // return compare(cleanA.length, cleanB.length);
  }

  //replace(/\[+(\d+)+\]/g,'');

  // var tmpIgA = tmpStra.replace(/\[+(\d+)+\]/g, "");
  // var tmpIgB = tmpStrb.replace(/\[+(\d+)+\]/g, "");

  return compare(tmpStra);
}

function myFunction() {
  var tt = rawData.attributes.sort(compareDeep2);
  console.log("myFunction", tt);
}

const result = myFunction();
console.log("result", result);
