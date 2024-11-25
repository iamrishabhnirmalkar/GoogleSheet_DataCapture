# GoogleSheet Data Capture

This system captures enquiries and stores them in a Google Sheet via a client-server implementation.

---

## Client

(TBD: Add instructions or details about the client if needed.)

---

## Server

### Google Sheet Enquiry System Setup

Follow the steps below to set up the Google Sheet integration for capturing enquiries:

---

### 1. **Create a Google Sheet**

1. Open [Google Sheets](https://sheets.new) to create a new sheet.
2. Rename the sheet to `Enquiry`.
3. In the first row of the sheet, create the following columns:
   - **A**: `name`
   - **B**: `category`
   - **C**: `emailAddress`
   - **D**: `message`

---

### 2. **Get the Google Sheet ID**

1. Open the newly created sheet in your browser.
2. Look at the URL in your browser, which should look like this:
3. Copy the string between `/d/` and `/edit`. This is your **Google Sheet ID**.
4. Set this value in your project as:
```env
GOOGLE_SHEET_ID="<Your_Google_Sheet_ID>"
```
---

### 3. **Enable Google Sheets API**

1. Go to the Google Cloud Console.(https://console.cloud.google.com/)
2. Create a new project (or select an existing one).
3. Navigate to API & Services > Library.
4. Search for Google Sheets API and enable it.

---

### 4. **Create Service Account Credentials**

1.  Go to API & Services > Credentials.
2.  Go to API & Services > Credentials.
3.  Click Create Credentials and select Service Account.
4.  Provide a name for the service account (e.g., EnquiryServiceAccount).
5.  Once the service account is created, go to the Keys tab.
6.  Create a new key by selecting the JSON format.  client_email → This is your GOOGLE_SHEET_CLIENT_EMAIL.
private_key → This is your GOOGLE_SHEET_PRIVATE_KEY.

---

### 5. **Set Up Permissions for the Service Account**

1.  Open your Google Sheet.
2.  Click on Share (top-right corner).
3.  Add the GOOGLE_SHEET_CLIENT_EMAIL from the JSON file as an editor to the sheet.

---

### 6. **Environment Variables**

1.  Set the following environment variables in your project:
2.  GOOGLE_SHEET_ID="<Your_Google_Sheet_ID>"
3.  GOOGLE_SHEET_CLIENT_EMAIL="<Your_Client_Email_From_JSON>"
4.  GOOGLE_SHEET_PRIVATE_KEY="<Your_Private_Key_From_JSON>"

---
