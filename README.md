# Total OUs in GWS Retriever

This Google Apps Script project is designed to automate the retrieval and listing of all Organizational Units (OUs) within a Google Workspace environment. It utilizes the Admin SDK Directory API to fetch the full hierarchy of the organization's structure.

## Prerequisites
To successfully execute this script, ensure the following requirements are met:
* **Google Workspace Super Admin Account**: Sufficient privileges are required to access directory data.
* **Google Apps Script (GAS)**: The solution is built to run within the GAS environment.
* **Admin Directory SDK**: This advanced service must be added to the Apps Script project dependencies.

## Description
The script functions as a directory auditing tool that interfaces with the Google Workspace Admin SDK. It executes a query to list organizational units with a scope set to retrieve the entire hierarchy (`type: 'all'`), ensuring that not just immediate children but all nested units are returned.

Upon a successful fetch, the script iterates through the results and logs key details for each unit to the execution transcript. If the retrieval fails due to permissions or API errors, the script includes error handling to log the exception message.

## Features
* **Full Hierarchy Retrieval**: Fetches all Organizational Units, regardless of nesting depth.
* **Detailed Logging**: Outputs the Name, Org Unit Path, and unique ID for every unit found.
* **Count Summary**: Providing a total count of OUs detected in the environment.
* **Error Handling**: Captures and logs API or permission errors to facilitate debugging.

## Deployment Guide
Follow these steps to configure and run the script in your environment:

1.  **Create the Project**:
    * Navigate to `script.google.com` and create a new Google Apps Script project.

2.  **Enable Admin Directory SDK**:
    * In the "Services" section of the editor, click the `+` button.
    * Search for **AdminDirectory API** (Service ID: `AdminDirectory`).
    * Select the latest version and click **Add**.

3.  **Implement Logic**:
    * Ensure the script logic is in place to fetch the OUs using the configured SDK and properties.

5.  **Execution**:
    * Select the `ListAllOUs` function from the toolbar.
    * Click **Run**.
    * Review the **Execution Log** to see the list of Organizational Units and their details.
