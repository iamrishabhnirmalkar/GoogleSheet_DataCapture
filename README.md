# Enquiry Capturing System

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
