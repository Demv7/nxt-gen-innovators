/*
 Robust Google Apps Script Web App

 - Uses an explicit Spreadsheet ID (safer than getActiveSpreadsheet for standalone deployments)
 - Accepts form-encoded POSTs (e.parameter) or JSON in postData.contents
 - Appends a row: Timestamp, Full Name, Email, Phone, Age, City, Program, Motivation
 - Returns JSON text (works with hidden-iframe or fetch)

 IMPORTANT: set SPREADSHEET_ID to your Google Sheet's id (the long string in the sheet URL).
*/

const SPREADSHEET_ID = '1fJZ21_F8dAYsgsSFsnkuW2MGVT6eBEbJvs-SVRUvnxI'; // set to the user's Google Sheet ID
const SHEET_NAME = 'Sheet1';
const HEADER_ROW = ['Timestamp','Full Name','Email','Phone','Age','City','Program','Motivation'];

function doPost(e){
  try {
    // Parse incoming data: prefer JSON body, fallback to form parameters
    let body = {};
    if (e.postData && e.postData.type && e.postData.type.indexOf('application/json') !== -1) {
      body = JSON.parse(e.postData.contents);
    } else if (e.parameter && Object.keys(e.parameter).length) {
      body = e.parameter;
    } else if (e.postData && e.postData.contents) {
      // try to parse anyway
      try { body = JSON.parse(e.postData.contents); } catch (ignored) { body = {}; }
    }

    // Validate required fields
    const required = ['name','email','phone','age','city','program','motivation'];
    for (let i=0;i<required.length;i++){
      const k = required[i];
      if (!body[k] || String(body[k]).trim() === ''){
        return _json(400, {status: 'error', message: 'Missing field: ' + k});
      }
    }

    // Open spreadsheet by ID
    let ss;
    if (SPREADSHEET_ID && !SPREADSHEET_ID.includes('REPLACE_WITH')) {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } else {
      // fallback to active spreadsheet if the script is bound
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }
    if (!ss) throw new Error('Could not open spreadsheet. Ensure SPREADSHEET_ID is set or the script is bound to a sheet.');

    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Ensure header row
    const firstRow = sheet.getRange(1,1,1,HEADER_ROW.length).getValues()[0];
    const needsHeader = HEADER_ROW.some((h, idx) => !firstRow[idx] || firstRow[idx] !== h);
    if (needsHeader) sheet.getRange(1,1,1,HEADER_ROW.length).setValues([HEADER_ROW]);

    const row = [new Date(), body.name, body.email, body.phone, body.age, body.city, body.program, body.motivation];
    sheet.appendRow(row);

    return _json(200, {status: 'success', message: 'Registration submitted successfully'});
  } catch (err) {
    return _json(500, {status: 'error', message: 'Server error: ' + err.message});
  }
}

// Simple JSON responder
function _json(code, obj){
  const t = ContentService.createTextOutput(JSON.stringify(obj));
  t.setMimeType(ContentService.MimeType.JSON);
  return t;
}

// Allow simple OPTIONS preflight (Apps Script may handle this automatically for Web Apps)
function doOptions(e){
  return _json(200, {status: 'ok'});
}
