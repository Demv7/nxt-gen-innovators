# Deploying the Google Apps Script Web App (step-by-step)

These steps show how to connect your Google Sheet to a Web App that accepts POST requests from the static `apply.html` form.

1. Create/Open the Google Sheet
   - Open Google Sheets and create a new spreadsheet (or open your existing registrations sheet).
   - Note the sheet tab name (default is `Sheet1`). If different, update `SHEET_NAME` in `scripts/google-apps-script.gs`.

2. Open Apps Script (bound to the sheet)
   - From the spreadsheet menu: `Extensions` → `Apps Script`.
   - This creates a new Apps Script project already bound to your sheet.

3. Paste the server code
   - Replace the contents of `Code.gs` with the contents of `scripts/google-apps-script.gs` in this repo.
   - Save the project.

4. Set up manifest (optional)
   - Usually not needed. The script above will append rows to your spreadsheet.

5. Deploy as a Web App
   - Click `Deploy` → `New deployment` in the Apps Script editor.
   - Select `Web app` as the deployment type.
   - Description: e.g. "NxtGenInnovators Registration API".
   - Execute as: `Me` (runs as your account, recommended so the script can write to the bound Sheet).
   - Who has access: Choose `Anyone` or `Anyone with Google account`.
     - For a public static site, choose `Anyone` so the form can POST without requiring sign-in.
   - Click `Deploy` and follow prompts to authorize the script (it will request permission to access your Google Sheet and related services).

6. Get the Web App URL
   - After deployment, click the deployment details and copy the `Web app URL` (looks like `https://script.google.com/macros/s/AKfyc.../exec`).

7. Paste the Web App URL into the frontend
   - Open `public/apply.html` in this repo.
   - Replace the placeholder `REPLACE_WITH_YOUR_WEB_APP_URL` with the Web App URL string.
     - Example: `const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';`

8. Test the form
   - Host the static site (GitHub Pages or Hostinger). Open `/apply.html`.
   - Fill the form and submit. You should see a success message if everything worked.

9. View registrations
   - Open the Google Sheet you used.
   - The script will create header row (if missing) and append new rows with Timestamp, Full Name, Email, Phone, Age, City, Program, Motivation.

10. Troubleshooting & Security
   - If you get a CORS error, make sure you deployed as a Web App and used the `exec` URL.
   - For production, consider restricting allowed origins or adding a simple secret token in the request and validating it server-side.
   - To change who the script runs as, redeploy and adjust `Execute as`/`Who has access` settings in the deployment.

11. Updating the script
   - When you edit code, `Deploy` → `Manage deployments` → select the deployment → `Edit` → `Deploy` a new version. Update the frontend if the URL changes.

That's it — once the Web App URL is set in `apply.html` the form will submit into your Google Sheet.
