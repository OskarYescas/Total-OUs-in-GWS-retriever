function ListAllOUs() {
  try {
    // 'my_customer' is an alias for the account's customerId
    // type: 'all' ensures we get the full hierarchy, not just immediate children
    const response = AdminDirectory.Orgunits.list('my_customer', {
      type: 'all'
    });

    const orgUnits = response.organizationUnits;

    if (orgUnits && orgUnits.length > 0) {
      Logger.log('Total OUs found: ' + orgUnits.length);
      
      // Iterate and log the Name and the Path (ID is also available)
      orgUnits.forEach(ou => {
        Logger.log(`Name: ${ou.name} | Path: ${ou.orgUnitPath} | ID: ${ou.orgUnitId}`);
      });
      
    } else {
      Logger.log('No Organizational Units found.');
    }

  } catch (e) {
    // Catching permission or API errors
    Logger.log('Error: ' + e.message);
  }
}