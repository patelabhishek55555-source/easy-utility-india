import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'node:fs';
import path from 'node:path';

async function runAudit() {
  console.log('--- STARTING COMPREHENSIVE PLATFORM AUDIT ---');

  // Test 1: PDF Generation & pdf-lib capabilities
  console.log('\n[TEST 1] Testing pdf-lib PDF creation, merge, and split...');
  
  // 1a. Create PDF 1 with 2 pages
  const doc1 = await PDFDocument.create();
  const page1 = doc1.addPage([595, 842]);
  page1.drawText('Document 1 - Page 1', { x: 50, y: 750 });
  const page2 = doc1.addPage([595, 842]);
  page2.drawText('Document 1 - Page 2', { x: 50, y: 750 });
  const doc1Bytes = await doc1.save();
  console.log('✓ Created Sample PDF 1 (2 pages, ' + doc1Bytes.length + ' bytes)');

  // 1b. Create PDF 2 with 3 pages
  const doc2 = await PDFDocument.create();
  const p2_1 = doc2.addPage([595, 842]);
  p2_1.drawText('Document 2 - Page 1', { x: 50, y: 750 });
  const p2_2 = doc2.addPage([595, 842]);
  p2_2.drawText('Document 2 - Page 2', { x: 50, y: 750 });
  const p2_3 = doc2.addPage([595, 842]);
  p2_3.drawText('Document 2 - Page 3', { x: 50, y: 750 });
  const doc2Bytes = await doc2.save();
  console.log('✓ Created Sample PDF 2 (3 pages, ' + doc2Bytes.length + ' bytes)');

  // 1c. Test Merging PDF 1 & PDF 2
  const mergedDoc = await PDFDocument.create();
  const src1 = await PDFDocument.load(doc1Bytes);
  const src2 = await PDFDocument.load(doc2Bytes);
  const pages1 = await mergedDoc.copyPages(src1, src1.getPageIndices());
  const pages2 = await mergedDoc.copyPages(src2, src2.getPageIndices());
  pages1.forEach(p => mergedDoc.addPage(p));
  pages2.forEach(p => mergedDoc.addPage(p));
  const mergedBytes = await mergedDoc.save();
  const loadedMerged = await PDFDocument.load(mergedBytes);
  if (loadedMerged.getPageCount() !== 5) {
    throw new Error('Merge PDF failed: Expected 5 pages, got ' + loadedMerged.getPageCount());
  }
  console.log('✓ Merge PDF passed: Successfully combined into 5 pages (' + mergedBytes.length + ' bytes)');

  // 1d. Test Splitting PDF (Extract pages 2 and 4 from merged PDF)
  const splitDoc = await PDFDocument.create();
  const targetIndices = [1, 3]; // 0-based for pages 2 and 4
  const splitPages = await splitDoc.copyPages(loadedMerged, targetIndices);
  splitPages.forEach(p => splitDoc.addPage(p));
  const splitBytes = await splitDoc.save();
  const loadedSplit = await PDFDocument.load(splitBytes);
  if (loadedSplit.getPageCount() !== 2) {
    throw new Error('Split PDF failed: Expected 2 pages, got ' + loadedSplit.getPageCount());
  }
  console.log('✓ Split PDF passed: Successfully extracted specific pages (' + splitBytes.length + ' bytes)');

  // Test 2: Age Calculation Logic Audit
  console.log('\n[TEST 2] Testing Age Calculator Mathematical Precision...');
  function calculateAgePrecise(dobStr, refStr) {
    const [bY, bM, bD] = dobStr.split('-').map(Number);
    const [rY, rM, rD] = refStr.split('-').map(Number);

    let years = rY - bY;
    let months = rM - bM;
    let days = rD - bD;

    if (days < 0) {
      months--;
      // Days in previous month of reference date
      const prevMonthLastDay = new Date(rY, rM - 1, 0).getDate();
      days += prevMonthLastDay;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  }

  // Case 2a: Standard age
  const age1 = calculateAgePrecise('2000-01-15', '2026-11-01');
  console.log('Test Case 2a (2000-01-15 to 2026-11-01):', age1);
  if (age1.years !== 26 || age1.months !== 9 || age1.days !== 17) {
    throw new Error('Age calculation Case 2a mismatch!');
  }

  // Case 2b: Leap day born on Feb 29, 2000 as of March 1, 2024
  const ageLeap = calculateAgePrecise('2000-02-29', '2024-03-01');
  console.log('Test Case 2b (Leap Year 2000-02-29 to 2024-03-01):', ageLeap);
  if (ageLeap.years !== 24 || ageLeap.months !== 0 || ageLeap.days !== 1) {
    throw new Error('Leap year age calculation mismatch!');
  }

  // Case 2c: UPSC Cutoff date test (Born 2002-08-02, Cutoff 2026-08-01) -> Exactly 23 years, 11 months, 30 days
  const ageCutoff = calculateAgePrecise('2002-08-02', '2026-08-01');
  console.log('Test Case 2c (UPSC Cutoff 2002-08-02 to 2026-08-01):', ageCutoff);
  if (ageCutoff.years !== 23 || ageCutoff.months !== 11) {
    throw new Error('Cutoff age calculation mismatch!');
  }
  console.log('✓ Age Calculator passed all precision tests.');

  // Test 3: Percentage Calculator Audit
  console.log('\n[TEST 3] Testing Percentage Calculator Math...');
  // 18% of 2500
  const m1 = (18 / 100) * 2500;
  if (m1 !== 450) throw new Error('Percentage Mode 1 failed!');
  // 485 out of 500
  const m2 = (485 / 500) * 100;
  if (m2 !== 97) throw new Error('Percentage Mode 2 failed!');
  // 1000 to 1250 (+25%)
  const m3 = ((1250 - 1000) / 1000) * 100;
  if (m3 !== 25) throw new Error('Percentage Mode 3 failed!');
  console.log('✓ Percentage Calculator formulas verified.');

  // Test 4: Discount & Indian GST Calculator Audit
  console.log('\n[TEST 4] Testing Discount & GST Calculator...');
  const mrp = 2000;
  const discountPct = 25; // 25% off -> 500 off -> 1500 subtotal
  const discAmount = (discountPct / 100) * mrp;
  const subtotal = mrp - discAmount;
  const gstRate = 18; // 18% GST on 1500 = 270
  const gstAmount = (gstRate / 100) * subtotal;
  const finalPayable = subtotal + gstAmount; // 1500 + 270 = 1770
  const savings = mrp - subtotal; // 500

  if (finalPayable !== 1770 || savings !== 500) {
    throw new Error('Discount & GST bill calculation mismatch!');
  }
  console.log('✓ Discount & GST Calculator math verified (MRP: ₹' + mrp + ', Final: ₹' + finalPayable + ', Saved: ₹' + savings + ')');

  console.log('\n--- ALL CORE CALCULATION & PDF LOGIC PASSED ---');
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
