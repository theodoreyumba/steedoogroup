function showConsoleWarning() {
    if (true) {
    const warningMessage = `%cWarning!

    This browser feature is intended for developers only! If someone instructed you to copy-paste something here to enable a Steedoo feature or "hack" an account, it is a scam!

    For more information, contact the group at support@steedoogroup.com for assistance.`;
  
      const warningStyle = 'color: red; font-size: 18px; font-weight: bold; line-height: 1.5;';
  
      // Show the warning message
      console.log(warningMessage, warningStyle);
    }
  }
  
  export default showConsoleWarning;